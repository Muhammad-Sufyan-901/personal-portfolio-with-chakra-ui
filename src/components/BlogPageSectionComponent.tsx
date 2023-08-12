import * as React from "react";
import { motion } from "framer-motion";
import { Box, Center, Container, Flex, Grid, GridItem } from "@chakra-ui/react";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { BlogCard, PrimaryButton, SectionDescription, SectionSubtitle, SectionTitle } from "@/fragments";
import { blogList } from "@/constants";
import { fadeInTransition, staggeredContainer } from "@/utils";
import SectionLayout from "@/layouts/SectionLayout";

function BlogPageSectionComponent(): React.JSX.Element {
  return (
    <Box
      as="section"
      id="blog"
      paddingTop="10rem"
      paddingBottom="6rem"
      width="100vw"
    >
      {/* Blog Page Section Title */}
      <SectionTitle title="Blog" />

      {/* Blog Page Section Content */}
      <Container
        as={motion.div}
        variants={staggeredContainer(0.1, 0.1)}
        viewport={{ once: true }}
        whileInView="show"
        initial="hidden"
        maxWidth={{ base: "container.lg", lg: "75rem" }}
      >
        {/* Blog Page Section Subtitle & Description */}
        <Flex
          as={motion.div}
          variants={fadeInTransition("up", "tween", 0.1, 1.1)}
          direction="column"
          rowGap={{ base: 3, lg: 5 }}
        >
          <SectionSubtitle>All Blog About Coding📝</SectionSubtitle>
          <SectionDescription>There are some blog about coding that i create to add more insight and also to share knowledge</SectionDescription>
        </Flex>

        {/* Blog Page Section Content Container */}
        <Grid
          as={motion.div}
          variants={fadeInTransition("right", "tween", 0, 1)}
          templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
          gap={8}
          width={{ base: "90%", lg: "100%" }}
          marginX={{ base: "auto", lg: 0 }}
          marginTop={12}
        >
          {blogList.map(
            ({ slug, title, description, thumbnailImage, categories, uploadedAt, author }, index): React.ReactNode => (
              <GridItem
                as={motion.div}
                variants={fadeInTransition("up", "tween", index * 0.25, 1.1)}
                key={`${title} - ${index}`}
              >
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
        <Center
          as={motion.div}
          variants={fadeInTransition("up", "tween", 0.5, 1.1)}
          marginTop={20}
        >
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
