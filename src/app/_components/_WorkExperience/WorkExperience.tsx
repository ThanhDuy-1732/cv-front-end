// Components
import { MdOutlineMapsHomeWork } from "react-icons/md";
import WorkExperienceItem from "./components/WorkExperienceItem/WorkExperienceItem";

// Styles
import styles from './WorkExperience.module.scss';
import { Content, ContentTitle } from '@/app/_styles/common.styled';

// Data
import { WORK_EXPERIENCE_DATA } from '@/app/_data/index';

export default function WorkExperience() {
  return (
    <>
      <Content className={styles['work-experience']}>
        <ContentTitle>
          <MdOutlineMapsHomeWork />
          Work Experience
        </ContentTitle>

        {
          WORK_EXPERIENCE_DATA.map(workExperience => {
            return (
              <WorkExperienceItem key={workExperience.company} workExperience={workExperience} />
            )
          })
        }
      </Content>
    </>
  );
}