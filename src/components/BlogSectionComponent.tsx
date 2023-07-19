import * as React from "react";
import { Box, Center, Container, Flex, Grid, GridItem } from "@chakra-ui/react";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { BlogCard, PrimaryButton, SectionDescription, SectionSubtitle, SectionTitle } from "@/fragments";
import { blogList } from "@/constants";
import { truncateList } from "@/utils";
import SectionLayout from "@/layouts/SectionLayout";
import type { Blog } from "@/types";

function BlogSectionComponent(): React.JSX.Element {
  const truncatedBlogList: Blog[] = truncateList(blogList, 0, 6);

  return (
    <Box
      as="section"
      id="blog"
      paddingTop="7.5rem"
      paddingBottom="1rem"
      width="100vw"
    >
      {/* Blog Section Title */}
      <SectionTitle title="Blog" />

      {/* Blog Section Content */}
      <Container maxWidth={{ base: "container.lg", lg: "75rem" }}>
        {/* Blog Section Subtitle & Description */}
        <Flex
          direction="column"
          rowGap={{ base: 3, lg: 5 }}
        >
          <SectionSubtitle>Blog About Programming</SectionSubtitle>
          <SectionDescription>There are some blog about programming that i create to add more insight and also to share knowledge</SectionDescription>
        </Flex>

        {/* Blog Section Content Container */}
        <Grid
          templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
          gap={8}
          width={{ base: "90%", lg: "100%" }}
          marginX={{ base: "auto", lg: 0 }}
          marginTop={12}
        >
          {truncatedBlogList.map(
            ({ slug, title, description, thumbnailImage, categories, uploadedAt, author }, index): React.JSX.Element => (
              <GridItem key={`${slug} - ${index}`}>
                <BlogCard
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

        {/* Blog Section Redirect Button */}
        <Center marginTop={12}>
          <PrimaryButton
            href="/blog"
            variant="solid"
            paddingX={8}
            paddingY={6}
            rightIcon={<BsArrowRightCircleFill fontSize={20} />}
          >
            View All Blog
          </PrimaryButton>
        </Center>
      </Container>
    </Box>
  );
}

export default SectionLayout(BlogSectionComponent, "blog");
