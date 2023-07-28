import * as React from "react";
import dynamic, { type LoaderComponent } from "next/dynamic";
import { Box } from "@chakra-ui/react";
import { ScrollToTopButton } from "@/fragments";

const HomeSectionComponent: React.ComponentType = dynamic((): LoaderComponent => import("@/components/HomeSectionComponent"));
const AboutSectionComponent: React.ComponentType = dynamic((): LoaderComponent => import("@/components/AboutSectionComponent"));
const SkillsSectionComponent: React.ComponentType = dynamic((): LoaderComponent => import("@/components/SkillsSectionComponent"));
const EducationSectionComponent: React.ComponentType = dynamic((): LoaderComponent => import("@/components/EducationSectionComponent"));
const ExperienceSectionComponent: React.ComponentType = dynamic((): LoaderComponent => import("@/components/ExperienceSectionComponent"));
const PortfolioSectionComponent: React.ComponentType = dynamic((): LoaderComponent => import("@/components/PortfolioSectionComponent"));
const GetInTouchComponent: React.ComponentType = dynamic((): LoaderComponent => import("@/components/GetInTouchComponent"));
const BlogSectionComponent: React.ComponentType = dynamic((): LoaderComponent => import("@/components/BlogSectionComponent"));
const ContactSectionComponent: React.ComponentType = dynamic((): LoaderComponent => import("@/components/ContactSectionComponent"));

export default function MainPage(): React.JSX.Element {
  return (
    <Box
      as="main"
      backgroundColor="background"
      id="mainContainer"
    >
      <HomeSectionComponent />
      <AboutSectionComponent />
      <SkillsSectionComponent />
      <EducationSectionComponent />
      <ExperienceSectionComponent />
      <PortfolioSectionComponent />
      <GetInTouchComponent />
      <BlogSectionComponent />
      <ContactSectionComponent />
      <ScrollToTopButton />
    </Box>
  );
}
