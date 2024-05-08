// Components
import { LiaAwardSolid } from "react-icons/lia";
import AwardItem from './components/AwardItem/AwardItem';

// Styles
import { Content, ContentTitle } from '@/app/_styles/common.styled';

// Data
import { AWARDS_DATA } from '@/app/_data/index';

export default function Awards() {
  return (
    <>
      <Content>
        <ContentTitle>
          <LiaAwardSolid />
          Award
        </ContentTitle>

        {
          AWARDS_DATA.map((award, index) => {
            return (
              <AwardItem key={`award_${award.title}_${index}`} award={award} />
            )
          })
        }
      </Content>
    </>
  )
}