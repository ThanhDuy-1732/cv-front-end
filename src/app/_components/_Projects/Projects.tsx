// Utilities
import { useState, useCallback, useReducer } from 'react';
import { ProjectContext, projectReducer, ProjectedDispatchContext } from '@/app/_utils/index';

// Components
import { FaLaptopCode } from "react-icons/fa6";
import { Carousel, ConfigProvider } from 'antd';
import ProjectItem from "./components/ProjectItem/ProjectItem";
import ProjectDetailModal from "./components/ProjectDetailModal/ProjectDetailModal";

// Styles
import styles from "./Projects.module.scss";
import { Content, ContentTitle } from '@/app/_styles/common.styled';

// Data & Types
import { PROJECTS_DATA, ProjectDataType } from '@/app/_data/index';

export default function Projects() {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const [selectedProject, dispatch] = useReducer(projectReducer, {} as ProjectDataType);
  
  const handleOpenModal = useCallback(() => {
    setIsOpenModal(true);
  }, [setIsOpenModal]);

  const handleCloseModal = useCallback(() => {
    setIsOpenModal(false);
    dispatch({
      type: 'close',
      project: {} as ProjectDataType,
    })
  }, [dispatch, setIsOpenModal]);

  return (
    <>
      <Content className={styles.projects}>
        <ContentTitle>
          <FaLaptopCode />
          Projects
        </ContentTitle>

        <ProjectedDispatchContext.Provider value={dispatch}>
          <ConfigProvider carousel={{ className: styles['project__carousel'] }}>
            <Carousel arrows>
              {
                PROJECTS_DATA.map((project, index) => {
                  return (
                    <ProjectContext.Provider key={`project_context_${project.name}_${index}`} value={project}>
                      <ProjectItem key={`project_item_${project.name}_${index}`} onOpenModal={handleOpenModal} />
                    </ProjectContext.Provider>
                  )
                })
              }
            </Carousel>
          </ConfigProvider>

          <ProjectDetailModal project={selectedProject} isOpenModal={isOpenModal} onConfirm={handleCloseModal} onCancel={handleCloseModal} />
        </ProjectedDispatchContext.Provider>
      </Content>
    </>
  );
}