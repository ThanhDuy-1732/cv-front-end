'use client';

// Utilities
import { useState ,useEffect } from "react";
import { getFileURL, getRefFile } from "./_utils/index";

// Components
import Awards from "./_components/_Awards/Awards";
import Skills from "./_components/_Skills/Skills";
import Overview from "./_components/_Overview/Overview";
import Projects from "./_components/_Projects/Projects";
import Education from "./_components/_Education/Education";
import Information from "./_components/_Information/Information";
import WorkExperience from "./_components/_WorkExperience/WorkExperience";

// Contexts
import {
  AwardsContext,
  SkillsContext,
  ProjectsContext,
  OverviewsContext,
  EducationsContext,
  InformationContext,
  WorkExperiencesContext,
} from '@/app/_utils/_context';

// Styles
import styles from "./page.module.scss";
import { Wrapper, Container } from "./_styles/common.styled";

// Types
import { AwardData, EducationData, InformationData, OverviewData, ProjectsData, SkillData, WorkExperienceData } from '@/app/_api/query-graphql';

// APIs
import { 
  getAllAwardByQuery,
  getAllSkillByQuery,
  getAllProjectByQuery,
  getAllOverviewByQuery,
  getAllEducationByQuery,
  getAllInformationByQuery,
  getAllWorkExperienceByQuery,
} from '@/app/_api/index';

export default function Home() {

  const [awards, setAwards] = useState<AwardData>([]);
  const [skills, setSkills] = useState<SkillData>([]);
  const [overview, setOverview] = useState<OverviewData>([]);
  const [projects, setProjects] = useState<ProjectsData>([]);
  const [education, setEducation] = useState<EducationData>([]);
  const [information, setInformation] = useState<InformationData>([]);
  const [workExperience, setWorkExperience] = useState<WorkExperienceData>([]);
  const [avatarURL, setAvatarURL] = useState<string>('https://st3.depositphotos.com/9998432/13335/v/450/depositphotos_133352156-stock-illustration-default-placeholder-profile-icon.jpg');

  useEffect(() => {
    const getAvatar = async () => {
      const url = await getFileURL(getRefFile('images/avatar.jpg'));

      const [awardData, skillData, projectsData, overviewData, educationData, informationData, workExperienceData] = await Promise.all([
        getAllAwardByQuery(),
        getAllSkillByQuery(),
        getAllProjectByQuery(),
        getAllOverviewByQuery(),
        getAllEducationByQuery(),
        getAllInformationByQuery(),
        getAllWorkExperienceByQuery(),
      ]);

      setAwards(awardData.data.data.getAllAward);
      setSkills(skillData.data.data.getAllSkill);
      setProjects(projectsData.data.data.getAllProject);
      setOverview(overviewData.data.data.getAllOverview);
      setEducation(educationData.data.data.getAllEduction);
      setInformation(informationData.data.data.getAllInformation);
      setWorkExperience(workExperienceData.data.data.getAllWorkExperience);

      setAvatarURL(url || '');
    };

    getAvatar();
  }, [setAvatarURL]);

  return (
    <main className={styles.main}>
      <Wrapper className={styles.wrapper}>
        <Container>
          <InformationContext.Provider value={information}>
            <Information avatarURL={avatarURL}/>
          </InformationContext.Provider>
        </Container>

        <Container>
          <OverviewsContext.Provider value={overview}>
            <Overview/>
          </OverviewsContext.Provider>
        </Container>
        
        <Container>
          <EducationsContext.Provider value={education}>
            <Education/>
          </EducationsContext.Provider>
        </Container>

        <Container>
          <WorkExperiencesContext.Provider value={workExperience}>
            <WorkExperience/>
          </WorkExperiencesContext.Provider>
        </Container>
        
        <Container>
          <AwardsContext.Provider value={awards}>
            <Awards/>
          </AwardsContext.Provider>
        </Container>
        
        <Container>
          <SkillsContext.Provider value={skills}>
            <Skills/>
          </SkillsContext.Provider>
        </Container>
        
        <Container>
          <ProjectsContext.Provider value={projects}>
            <Projects/>
          </ProjectsContext.Provider>
        </Container>
      </Wrapper>
    </main>
  );
}
