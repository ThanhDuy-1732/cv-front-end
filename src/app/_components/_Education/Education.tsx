// Components
import { MdOutlineSchool } from "react-icons/md";
import EducationItem from "./components/EducationItem/EducationItem";

// Styles
import styles from "./Education.module.scss";
import { Content, ContentTitle } from '@/app/_styles/common.styled';

// Data
import { EDUCATION_DATA } from '@/app/_data/index';

export default function Education() {
  return (
    <>
      <Content className={styles.education}>
        <ContentTitle>
          <MdOutlineSchool />
          <div>Education</div>
        </ContentTitle>

        {
          EDUCATION_DATA.map(education => {
            return (
              <EducationItem key={education.title} education={education} />
            )
          })
        }
      </Content>
    </>
  )
}