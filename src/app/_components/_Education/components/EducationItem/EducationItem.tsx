// Components
import { LiaSchoolSolid } from "react-icons/lia";

// Styles
import styles from './EducationItem.module.scss';
import { ContentItem, ContentItemContainer } from "@/app/_styles/common.styled";

// Types
import { EducationDataType } from "@/app/_data/index";

export default function EducationItem({ education }: { education: EducationDataType }) {
  return (
    <>
      <ContentItem className={styles['education-item']}>
        <LiaSchoolSolid />
        <ContentItemContainer className={styles['education-item__container']}>
          <div className={styles['content__title']}>{ education.title }</div>
          <div>{ education.time }</div>
          { education?.location && <div>{ education?.location }</div> }
          <div className={styles['content__score']}>Score: { education.score }</div>
          <div>{ education.subInfo }</div>
        </ContentItemContainer>
      </ContentItem>
    </>
  )
}