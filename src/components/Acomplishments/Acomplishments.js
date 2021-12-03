import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: '3 *', text: 'at codechef'},
  {  text: 'Young Ramanujan Awardee', },
  {  text: 'Relations Head Entrepreneurship-Cell', },
  {  text: 'Vice-President Interact Club', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Achievements</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          {card.number &&
          <BoxNum>{`${card.number}`}</BoxNum>}
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider/>
  </Section>
);

export default Acomplishments;
