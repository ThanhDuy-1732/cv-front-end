// Utilities
import { useContext } from 'react';
import { OverviewsContext } from '@/app/_utils/_context';

// Components
import { Skeleton } from 'antd';
import { GoGoal } from "react-icons/go";
import { PiShootingStarThin } from "react-icons/pi";

// Styles
import styles from './Overview.module.scss';
import { Content, ContentTitle } from '@/app/_styles/common.styled';

// Types
import { OverviewData } from '@/app/_api/query-graphql';

export default function Overview() {
  const overview: OverviewData = useContext(OverviewsContext);

  return (
    <>
      <Content className={styles.overview}>
        <ContentTitle>
          <GoGoal />
          <div>Overview</div>
        </ContentTitle>

        {
          overview.length ?
          (
            <ul>
              {
                overview.map((data, index) => {
                  return (
                    <li key={`overview_${index}`}>
                      <PiShootingStarThin className={styles['li__icon']} />
                      <div>{ data.value }</div>
                    </li>
                  )
                })
              }
            </ul>
          ) : (
            <Skeleton />
          )
        }
      </Content>
    </>
  )
}