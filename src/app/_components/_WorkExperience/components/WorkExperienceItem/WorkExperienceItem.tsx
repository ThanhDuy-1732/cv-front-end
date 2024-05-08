// Components
import { RiHomeOfficeLine } from "react-icons/ri";
import { MdOutlineStarRate } from "react-icons/md";

// Styles
import styles from "./WorkExperienceItem.module.scss"
import { ContentItem, ContentItemContainer } from "@/app/_styles/common.styled";

// Types
import { WorkExperienceDataType } from '@/app/_data/index';

export default function WorkExperienceItem({ workExperience }: { workExperience: WorkExperienceDataType }) {
  return (
    <>
      <ContentItem className={styles['work-experience-item']}>
        <RiHomeOfficeLine />
        <ContentItemContainer className={styles['work-experience-item__content']}>
          <div className={styles['content__company']}>{ workExperience.company }</div>
          <div>{ workExperience.time }</div>
          <div className={styles['content__position']}>{ workExperience.position }</div>
          <ul className={styles['content__description']}>
            { workExperience.description.map((task, index) => {
              return (
                <li key={`work-experience-task-${index}`}>
                  <MdOutlineStarRate />
                  <div>{ task }</div>
                </li>
              )
            }) }
          </ul>
        </ContentItemContainer>
      </ContentItem>
    </>
  )
}