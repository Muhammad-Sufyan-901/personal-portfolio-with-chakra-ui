import * as React from "react";
import { Box, Center, Container, Flex, Grid, GridItem } from "@chakra-ui/react";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { PortfolioCard, PrimaryButton, SectionDescription, SectionSubtitle, SectionTitle } from "@/fragments";
import { portfolioList } from "@/constants";
import SectionLayout from "@/layouts/SectionLayout";

function PortfolioPageSectionComponent(): React.JSX.Element {
  return (
    <Box
      as="section"
      paddingTop="10rem"
      paddingBottom="6rem"
      width="100vw"
    >
      {/* Portfolio Page Section Title */}
      <SectionTitle title="Portfolio" />

      {/* Portfolio Page Section Content */}
      <Container maxWidth={{ base: "container.lg", lg: "75rem" }}>
        {/* Portfolio Page Section Subtitle & Description */}
        <Flex
          direction="column"
          rowGap={{ base: 3, lg: 5 }}
        >
          <SectionSubtitle>All Project I&apos;ve Created</SectionSubtitle>
          <SectionDescription>I&apos;ve created a few project while i was learing about frontend website development. and all of project i&apos;ll explain below</SectionDescription>
        </Flex>

        {/* Portfolio Page Section Content Container */}
        <Grid
          templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
          gap={8}
          width={{ base: "90%", lg: "100%" }}
          marginX={{ base: "auto", lg: 0 }}
          marginTop={12}
        >
          {portfolioList.map(
            ({ title, imageThumbnail, description, livePreviewURL, repositoryURL, techStack }, index): React.ReactNode => (
              <GridItem key={`${title} - ${index}`}>
                <PortfolioCard
                  title={title}
                  imageThumbnail={imageThumbnail}
                  description={description}
                  livePreviewURL={livePreviewURL}
                  repositoryURL={repositoryURL}
                  techStack={techStack}
                />
              </GridItem>
            )
          )}
        </Grid>

        {/* Portfolio Page Section Redirect Button */}
        <Center marginTop={20}>
          <PrimaryButton
            href="/#portfolio"
            variant="solid"
            paddingX={8}
            paddingY={6}
            rightIcon={<BsArrowRightCircleFill fontSize={20} />}
          >
            Back To Section
          </PrimaryButton>
        </Center>
      </Container>
    </Box>
  );
}

export default SectionLayout(PortfolioPageSectionComponent, "portfolio");
