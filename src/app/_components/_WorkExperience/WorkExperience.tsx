// Utilities
import { useContext } from 'react';
import { WorkExperiencesContext } from '@/app/_utils/_context';

// Components
import { MdOutlineMapsHomeWork } from "react-icons/md";
import WorkExperienceItem from "./components/WorkExperienceItem/WorkExperienceItem";

// Styles
import styles from './WorkExperience.module.scss';
import { Content, ContentTitle } from '@/app/_styles/common.styled';

// Types
import { WorkExperienceData } from '@/app/_api/query-graphql';

export default function WorkExperience() {
  const workExperiences: WorkExperienceData = useContext(WorkExperiencesContext);

  return (
    <>
      <Content className={styles['work-experience']}>
        <ContentTitle>
          <MdOutlineMapsHomeWork />
          Work Experience
        </ContentTitle>

        {
          workExperiences.map(workExperience => {
            return (
              <WorkExperienceItem key={workExperience.company} workExperience={workExperience} />
            )
          })
        }
      </Content>
    </>
  );
}