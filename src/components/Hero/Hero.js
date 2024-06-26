import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
        My name is Praise Abu. A software developer specializing in full-stack development, I deliver interactive, user-centric software applications tailored to unique needs & problems.
        </SectionText>
        <Button onClick={() => window.open('https://docs.google.com/document/d/1lY--2_7uuNc0pINEwss2wiH2ngcrXYoORVW9OkTj2B4/edit?usp=sharing', '_blank')}>View Resume</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
