// Utilities
import { Dispatch, useContext, useCallback } from 'react';
import { ProjectContext, ProjectedDispatchContext, LoadingDispatchContext, LoadingReducerActionType } from '@/app/_utils/index';

// Components
import { Tooltip } from 'antd';

// Styles
import styles from './ProjectItem.module.scss';

// Types
import { ProjectReducerActionType } from '@/app/_utils/index';

// APIs
import { getProjectByQuery, Project as ProjectType } from '@/app/_api/index';

type ProjectItemProps = {
  onOpenModal: () => void,
}

type ProjectTypeData = Pick<ProjectType, '_id' | 'name' | 'company' | 'mainTechs'>

export default function ProjectItem({ onOpenModal } : ProjectItemProps) {
  const project: ProjectTypeData = useContext(ProjectContext) as ProjectTypeData;
  const loadingDispatch: Dispatch<LoadingReducerActionType> = useContext(LoadingDispatchContext);
  const projectedDispatch: Dispatch<ProjectReducerActionType> = useContext(ProjectedDispatchContext);

  const handleProjectClick = useCallback(async (id: string) => {
    try {
      loadingDispatch({
        type: 'set',
        value: {
          value: true,
          stack: 1,
        }
      })
      const response = await getProjectByQuery(id);
  
      projectedDispatch({
        project: response.data.data.getProject,
        type: 'show',
      });
  
      onOpenModal();
    } catch (error: any) {
      console.error('Project Item error', error);
    } finally {
      loadingDispatch({
        type: 'set',
        value: {
          value: false,
          stack: 1,
        }
      })
    }
  }, [projectedDispatch, onOpenModal, loadingDispatch]);

  return (
    <>
      <div className={styles['project-item']} onClick={() => handleProjectClick(project._id)}>
        <Tooltip title={`Click to view detail project ${project.name}`} overlayStyle={{ maxWidth: '100vw' }}>
          <div className={styles['project-item__info']}>
            <div>Project: { project.name }</div>
            -
            <div>{ project.company ? `Company: ${project.company}` : 'Personal Project' }</div>
            -
            <div>Main Technologies: { project.mainTechs.join(', ') }</div>
          </div>
        </Tooltip>
      </div>
    </>
  )
}