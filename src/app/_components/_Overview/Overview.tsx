// Components
import { GoGoal } from "react-icons/go";
import { PiShootingStarThin } from "react-icons/pi";

// Styles
import styles from './Overview.module.scss';
import { Content, ContentTitle } from '@/app/_styles/common.styled';

// Data
import { OVERVIEW_DATA } from "@/app/_data/index";

export default function Overview() {
  return (
    <>
      <Content className={styles.overview}>
        <ContentTitle>
          <GoGoal />
          <div>Overview</div>
        </ContentTitle>

        <ul>
          {
            OVERVIEW_DATA.map((data, index) => {
              return (
                <li key={`overview_${index}`}>
                  <PiShootingStarThin className={styles['li__icon']} />
                  <div>{ data }</div>
                </li>
              )
            })
          }
        </ul>
      </Content>
    </>
  )
}