import React from 'react'; 
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <h1 style={{color:'cyan','fontSize':'75px'}}>Vedavyas S Joshi</h1>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
          
        </SectionTitle>
        <br />
        <br />

        <SectionText>
        Scroll below to know more!
        </SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Hero;