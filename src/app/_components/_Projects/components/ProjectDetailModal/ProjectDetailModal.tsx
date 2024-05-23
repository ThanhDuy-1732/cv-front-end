// Utilities
import { useState, useEffect } from 'react';

// Components
import { Modal, Button } from 'antd';
import { TiInfoLargeOutline } from "react-icons/ti";

// Styles
import styles from './ProjectDetailModal.module.scss';
import { ContentItemContainer } from '@/app/_styles/common.styled';

// Types
import { ProjectDataType } from '@/app/_data/index';
type ProjectDetailType = {
  isOpenModal: boolean,
  onCancel: () => void,
  onConfirm: () => void,
  project: ProjectDataType,
};

export default function ProjectDetailModal({ project, isOpenModal, onConfirm, onCancel } : ProjectDetailType) {
  return (
    <>
      <Modal 
        width={1000}
        open={isOpenModal} 
        title={project.name} 
        classNames={{
          header: styles['modal-header-custom'],
          footer: styles['modal-footer-custom']
        }}

        onOk={onConfirm} 
        onCancel={onCancel}

        footer={[
          <Button key="back" onClick={onCancel}>
            Close
          </Button>
        ]}
      >
        <ContentItemContainer className={styles['project-detail']}>
          <div>{ project.company ? (<><b>Company:</b> {project.company}</>) : <b>Personal Project</b> }</div>
          <div>({project.time})</div>
          <div><b>Description:</b></div>
          <ul>
            <li>
              <TiInfoLargeOutline className={styles.icon} />
              <div>{ project.description }</div>
            </li>
            {
              project.url && (
                <ul>
                  { project.url.map((uri) => {
                    return (
                      <li key={`${project.name}_${uri}`}>
                        <TiInfoLargeOutline className={styles.icon} />
                        <a href={uri} target='_blank'>{ uri }</a>
                      </li>
                    )
                  }) }
                </ul>
              )
            }
          </ul>
          <div><b>Number of member:</b> { project.numberOfMember }</div>
          <div><b>Position:</b> { project.position }</div>
          <div><b>Responsibilities:</b></div>
          <ul>
            {
              project.responsibilitiesAndAchievement?.map?.((responsibility, index) => {
                return (
                  <li key={`${project.name}_responsibility_${index}`}>
                    <TiInfoLargeOutline className={styles.icon} />
                    <div>{ responsibility }</div>
                  </li>
                )
              }) 
            }
          </ul>
          <div><b>Technology in use:</b></div>
          <ul>
            {
              project.technologyInUse?.map?.((tech, index) => {
                return (
                  <li key={`${project.name}_tech_${index}`}>
                    <TiInfoLargeOutline className={styles.icon} />
                    <div>{ tech }</div>
                  </li>
                )
              })
            }
          </ul>
        </ContentItemContainer>
      </Modal>
    </>
  )
}