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

// Styles
import styles from "./page.module.scss";
import { Wrapper, Container } from "./_styles/common.styled";

export default function Home() {

  const [avatarURL, setAvatarURL] = useState<string>('https://st3.depositphotos.com/9998432/13335/v/450/depositphotos_133352156-stock-illustration-default-placeholder-profile-icon.jpg');

  useEffect(() => {
    const getAvatar = async () => {
      const url = await getFileURL(getRefFile('images/avatar.jpg'));

      setAvatarURL(url || '');
    };

    getAvatar();
  }, [setAvatarURL]);

  return (
    <main className={styles.main}>
      <Wrapper className={styles.wrapper}>
        <Container>
          <Information avatarURL={avatarURL}/>
        </Container>

        <Container>
          <Overview/>
        </Container>
        
        <Container>
          <Education/>
        </Container>

        <Container>
          <WorkExperience/>
        </Container>
        
        <Container>
          <Awards/>
        </Container>
        
        <Container>
          <Skills/>
        </Container>
        
        <Container>
          <Projects/>
        </Container>
      </Wrapper>
    </main>
  );
}
