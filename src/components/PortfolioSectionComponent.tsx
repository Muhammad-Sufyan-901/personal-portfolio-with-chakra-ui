import * as React from "react";
import { Box, Center, Container, Flex, Grid, GridItem } from "@chakra-ui/react";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { PortfolioCard, PrimaryButton, SectionDescription, SectionSubtitle, SectionTitle } from "@/fragments";
import { portfolioList } from "@/constants";
import { truncateList } from "@/utils";
import SectionLayout from "@/layouts/SectionLayout";
import type { Portfolio } from "@/types";

function PortfolioSectionComponent(): React.JSX.Element {
  const truncatedPortfolioList: Portfolio[] = truncateList(portfolioList, 0, 6);

  return (
    <Box
      as="section"
      id="portfolio"
      width="100vw"
      paddingTop="7.5rem"
      paddingBottom="1rem"
    >
      {/* Portfolio Section Title */}
      <SectionTitle title="Portfolio" />

      {/* Portfolio Section Content */}
      <Container maxWidth={{ base: "container.lg", lg: "75rem" }}>
        {/* Portfolio Section Subtitle & Description */}
        <Flex
          direction="column"
          rowGap={{ base: 3, lg: 5 }}
        >
          <SectionSubtitle>Project I&apos;ve Created</SectionSubtitle>
          <SectionDescription>I&apos;ve created a few project while i was learing about frontend website development. and all of project i&apos;ll explain below</SectionDescription>
        </Flex>

        {/* Portfolio Section Content Container */}
        <Grid
          templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
          gap={8}
          width={{ base: "90%", lg: "100%" }}
          marginX={{ base: "auto", lg: 0 }}
          marginTop={12}
        >
          {truncatedPortfolioList.map(
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

        <Center marginTop={10}>
          <PrimaryButton
            href="/portfolio"
            variant="solid"
            paddingX={8}
            paddingY={6}
            rightIcon={<BsArrowRightCircleFill fontSize={20} />}
          >
            View All Projects
          </PrimaryButton>
        </Center>
      </Container>
    </Box>
  );
}

export default SectionLayout(PortfolioSectionComponent, "portfolio");
