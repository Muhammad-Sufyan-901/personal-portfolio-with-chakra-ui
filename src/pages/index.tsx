import * as React from "react";
import { Box } from "@chakra-ui/react";
import { HomeSectionComponent, AboutSectionComponent, SkillsSectionComponent, EducationSectionComponent, ExperienceSectionComponent, PortfolioSectionComponent } from "@/components";

export default function MainPage(): React.JSX.Element {
  return (
    <Box
      as="main"
      backgroundColor="background"
    >
      <HomeSectionComponent />
      <AboutSectionComponent />
      <SkillsSectionComponent />
      <EducationSectionComponent />
      <ExperienceSectionComponent />
      <PortfolioSectionComponent />
    </Box>
  );
}
