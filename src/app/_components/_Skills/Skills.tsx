// Utilities
import { useContext } from 'react';
import { SkillsContext } from '@/app/_utils/_context';

// Components
import { Tabs, ConfigProvider } from 'antd';
import { FaCode } from "react-icons/fa";
import SkillItem from "./components/SkillItem/SkillItem";

// Styles
import styles from "./Skills.module.scss";
import { Content, ContentTitle } from '@/app/_styles/common.styled';

// Types
import { SkillData } from '@/app/_api/query-graphql';

export default function Skills() {
  const skills: SkillData = useContext(SkillsContext);

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
            skills.map(skills => {
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