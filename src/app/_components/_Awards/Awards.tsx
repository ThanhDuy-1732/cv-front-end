// Utilities
import { useContext } from 'react';
import { AwardsContext } from '@/app/_utils/_context';

// Components
import { Skeleton } from 'antd';
import { LiaAwardSolid } from "react-icons/lia";
import AwardItem from './components/AwardItem/AwardItem';

// Styles
import { Content, ContentTitle } from '@/app/_styles/common.styled';

// Types
import { AwardData } from '@/app/_api/query-graphql';

export default function Awards() {
  const awards: AwardData = useContext(AwardsContext);

  return (
    <>
      <Content>
        <ContentTitle>
          <LiaAwardSolid />
          Award
        </ContentTitle>

        {
          awards.length ?
          (
            awards.map((award, index) => {
              return (
                <AwardItem key={`award_${award.title}_${index}`} award={award} />
              )
            })
          ) :
          (
            <Skeleton />
          )
        }
      </Content>
    </>
  )
}