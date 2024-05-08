// Components
import { Tabs, ConfigProvider } from 'antd';
import { FaCode } from "react-icons/fa";
import SkillItem from "./components/SkillItem/SkillItem";

// Styles
import styles from "./Skills.module.scss";
import { Content, ContentTitle } from '@/app/_styles/common.styled';

// Data
import { SKILLS_DATA } from '@/app/_data/index';

export default function Skills() {
  return (
    <>
      <Content className={styles.skills}>
        <ContentTitle>
          <FaCode />
          Skills
        </ContentTitle>

        <ConfigProvider
          tabs={{ className: styles['skill-tabs'] }}
        >
        <Tabs
          defaultActiveKey='1'
          items={
            SKILLS_DATA.map(skills => {
              return {
                key: skills.type,
                label: skills.type,
                children: <SkillItem skills={skills.skills} />
              }
            })
          }
        />
        </ConfigProvider>
      </Content>
    </>
  )
}