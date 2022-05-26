import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          Elizabeth Sedrak's Portfolio
        </SectionTitle>
        <SectionText>Learning new skills, one day at a time</SectionText>
        <Button
          onClick={() =>
            (window.location =
              "https://www.linkedin.com/in/elizabeth-sedrak-36924a1b4/")
          }
        >
          Learn More
        </Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
