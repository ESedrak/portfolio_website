import React from "react";
import { DiHtml5, DiReact, DiCss3, DiJavascript1 } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider divider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I started off learning how to code due to pure interest in web
      development.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiHtml5 size="3rem" />
          <DiCss3 size="3rem" />
          <DiJavascript1 size="3rem" />
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experiece with <br />
            HTML, CSS, JavaScript and React
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
