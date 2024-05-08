// Components
import { CgAwards } from "react-icons/cg";

// Styles
import styles from "./AwardItem.module.scss";
import { ContentItem, ContentItemContainer } from "@/app/_styles/common.styled";


// Types
import { AwardDataType } from '@/app/_data/index';

export default function AwardItem({ award }: { award: AwardDataType }) {
  return (
    <>
      <ContentItem className={styles['award-item']}>
        <CgAwards />

        <ContentItemContainer className={styles['award-item__content']}>
          <div className={styles['content__title']}>{ award.title }</div>
          <div>{ award.location }</div>
          <div>{ award.time }</div>
          <div>{ award.position }</div>
        </ContentItemContainer>
      </ContentItem>
    </>
  )
}