import React from "react";

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map(
        ({ id, image, title, description, tags, source, visit }) => {
          return (
            <BlogCard key={id}>
              <Img src={image} />
              <TitleContent>
                <HeaderThree title>{title}</HeaderThree>
                <Hr />
              </TitleContent>
              <CardInfo className="card-info">{description}</CardInfo>
              <div>
                <br />
                <TitleContent>Stack</TitleContent>
                <TagList>
                  {tags.map((t, i) => {
                    return <Tag key={i}>{t}</Tag>;
                  })}
                </TagList>
              </div>
              <UtilityList>
                <ExternalLinks href={source}>Code</ExternalLinks>
                <ExternalLinks href={visit}>View</ExternalLinks>
              </UtilityList>
            </BlogCard>
          );
        }
      )}
    </GridContainer>
  </Section>
);

export default Projects;
