import * as React from "react";
import { Box, Center, Container, Flex, Grid, GridItem } from "@chakra-ui/react";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { BlogCard, PortfolioCard, PrimaryButton, SectionDescription, SectionSubtitle, SectionTitle } from "@/fragments";
import { blogList, portfolioList } from "@/constants";
import SectionLayout from "@/layouts/SectionLayout";

function BlogPageSectionComponent(): React.JSX.Element {
  return (
    <Box
      as="section"
      paddingTop="10rem"
      paddingBottom="6rem"
      width="100vw"
    >
      {/* Blog Page Section Title */}
      <SectionTitle title="Blog" />

      {/* Blog Page Section Content */}
      <Container maxWidth={{ base: "container.lg", lg: "75rem" }}>
        {/* Blog Page Section Subtitle & Description */}
        <Flex
          direction="column"
          rowGap={{ base: 3, lg: 5 }}
        >
          <SectionSubtitle>All Blog About Programming</SectionSubtitle>
          <SectionDescription>There are some blog about programming that i create to add more insight and also to share knowledge</SectionDescription>
        </Flex>

        {/* Blog Page Section Content Container */}
        <Grid
          templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
          gap={8}
          width={{ base: "90%", lg: "100%" }}
          marginX={{ base: "auto", lg: 0 }}
          marginTop={12}
        >
          {blogList.map(
            ({ slug, title, description, thumbnailImage, categories, uploadedAt, author }, index): React.ReactNode => (
              <GridItem key={`${title} - ${index}`}>
                <BlogCard
                  key={`${slug} - ${index}`}
                  slug={slug}
                  title={title}
                  description={description}
                  thumbnailImage={thumbnailImage}
                  categories={categories}
                  uploadedAt={uploadedAt}
                  author={author}
                />
              </GridItem>
            )
          )}
        </Grid>

        {/* Blog Page Section Redirect Button */}
        <Center marginTop={20}>
          <PrimaryButton
            href="/#blog"
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

export default SectionLayout(BlogPageSectionComponent, "blog");
