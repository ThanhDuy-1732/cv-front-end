// Utilities
import { useContext } from 'react';
import { EducationsContext } from '@/app/_utils/_context';

// Components
import { MdOutlineSchool } from "react-icons/md";
import EducationItem from "./components/EducationItem/EducationItem";

// Styles
import styles from "./Education.module.scss";
import { Content, ContentTitle } from '@/app/_styles/common.styled';

// Types
import { EducationData } from '@/app/_api/query-graphql';

export default function Education() {
  const educations: EducationData = useContext(EducationsContext);

  return (
    <>
      <Content className={styles.education}>
        <ContentTitle>
          <MdOutlineSchool />
          <div>Education</div>
        </ContentTitle>

        {
          educations.map(education => {
            return (
              <EducationItem key={education.title} education={education} />
            )
          })
        }
      </Content>
    </>
  )
}