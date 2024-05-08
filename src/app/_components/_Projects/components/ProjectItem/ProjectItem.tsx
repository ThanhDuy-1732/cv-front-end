// Utilities
import { Dispatch, useContext, useCallback } from 'react';
import { ProjectContext, ProjectedDispatchContext } from '@/app/_utils/index';

// Components
import { Tooltip } from 'antd';

// Styles
import styles from './ProjectItem.module.scss';

// Types
import { ProjectDataType } from '@/app/_data/index';
import { ProjectReducerActionType } from '@/app/_utils/index';

type ProjectItemProps = {
  onOpenModal: () => void,
}

export default function ProjectItem({ onOpenModal } : ProjectItemProps) {
  const project: ProjectDataType = useContext(ProjectContext) as ProjectDataType;
  const projectedDispatch: Dispatch<ProjectReducerActionType> = useContext(ProjectedDispatchContext);

  const handleProjectClick = useCallback((project: ProjectDataType) => {
    projectedDispatch({
      project,
      type: 'show',
    });

    onOpenModal();
  }, [projectedDispatch, onOpenModal]);

  return (
    <>
      <div className={styles['project-item']} onClick={() => handleProjectClick(project)}>
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