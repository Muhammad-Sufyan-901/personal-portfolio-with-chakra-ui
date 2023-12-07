import * as React from "react";
import Link from "next/link";
import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Container, Divider, Flex, Grid, GridItem, HStack, Heading, Image, Tag, Text, VStack, useColorModeValue } from "@chakra-ui/react";
import { FaCalendarAlt } from "react-icons/fa";
import { primaryColor } from "@/styles";
import { blogCategories, sharedSocialMediaList, socialMediaList } from "@/constants";
import { AuthorSocialMedia, CategoryTag, OtherBlogCard, ShareToSocialMedia } from "@/fragments";
import { truncateList } from "@/utils";
import type { BlogDetailPageProps as DetailBlogPageSectionComponentProps } from "@/pages/blog/[slug]";
import type { SocialMedia } from "@/types";

export default function DetailBlogPageSectionComponent({ blog, otherBlog }: DetailBlogPageSectionComponentProps): React.JSX.Element {
  const color: string = useColorModeValue(primaryColor.default, primaryColor._dark) as string;

  const { title, uploadedAt, thumbnailImage, description, categories, author, slug } = blog;
  const { name, profileImage } = author;

  const truncatedSocialMediaList: SocialMedia[] = truncateList(socialMediaList, 0, 3);
  const blogContainerTemplateAreas: string = `
    "content aside"
  `;

  return (
    <Container
      as="section"
      maxWidth="80rem"
      height="full"
      paddingY={{ base: "24" }}
      paddingX={{ base: "12" }}
      paddingTop="7.5rem"
    >
      {/* Detail Blog Page Section Container */}
      <Grid
        templateAreas={blogContainerTemplateAreas}
        gridTemplateColumns={{ base: "1fr", lg: "1fr 30%" }}
        gap={{ base: "0", lg: "12", xl: "16" }}
      >
        {/* Detail Blog Page Section Content */}
        <GridItem
          area="content"
          as="main"
        >
          <Breadcrumb
            marginY={{ base: "4" }}
            color="secondary"
            fontWeight="medium"
          >
            {/* Detail Blog Page Section Link Breadcrumb */}
            <BreadcrumbItem>
              <BreadcrumbLink
                as={Link}
                href="/"
              >
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink
                as={Link}
                href="/blog"
              >
                Articles
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink>Detail Articles</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>

          {/* Detail Blog Page Section Blog Title */}
          <Heading marginY={{ base: "4" }}>{title}</Heading>

          {/* Detail Blog Page Section Blog Upload Date */}
          <Flex
            alignItems="center"
            gap={2}
          >
            <FaCalendarAlt color={color} />
            <Text color="secondary">{uploadedAt as string}</Text>
          </Flex>

          {/* Detail Blog Page Section Blog Thumbnail Image */}
          <Box
            marginY={{ base: "8" }}
            borderRadius="lg"
            overflow="hidden"
          >
            <Image
              src={thumbnailImage}
              alt="Blog Thumbnail Image"
              width="full"
              height={{ base: "16rem", md: "20rem", lg: "24rem" }}
            />
          </Box>

          {/* Detail Blog Page Section Blog Description */}
          {description.map(
            (paragraph: string, index: number): React.ReactNode => (
              <Text
                key={index}
                textAlign="justify"
                marginY={6}
              >
                {paragraph}
              </Text>
            )
          )}

          {/* Detail Blog Page Section Categories & Share Blog */}
          <Flex
            justifyContent="space-between"
            direction={{ base: "column", md: "row" }}
            marginY={{ base: 4, lg: 8, xl: 12 }}
          >
            <Box>
              <Heading size="md">Tags</Heading>

              <Flex
                wrap="wrap"
                alignItems="center"
                gap={2}
                marginY={{ base: 5 }}
              >
                {categories.map(
                  ({ name }, index): React.ReactNode => (
                    <CategoryTag
                      key={`${categories} - ${index}`}
                      name={name}
                    />
                  )
                )}
              </Flex>
            </Box>

            <Box>
              <Heading
                size="md"
                textAlign={{ base: "start", lg: "end" }}
              >
                Share This Blog On
              </Heading>

              <HStack
                spacing={4}
                marginY={{ base: 3 }}
              >
                {sharedSocialMediaList.map(
                  ({ SocialMediaIcon, link }, index): React.ReactNode => (
                    <ShareToSocialMedia
                      key={index}
                      SocialMediaIcon={SocialMediaIcon}
                      link={`${link}/blog/${slug}`}
                    />
                  )
                )}
              </HStack>
            </Box>
          </Flex>
        </GridItem>

        {/* Detail Blog Page Section Sidebar */}
        <GridItem
          area="aside"
          shadow="lg"
          borderRadius="xl"
          paddingX="2rem"
          paddingY="3rem"
          display={{ base: "none", lg: "block" }}
          height="fit-content"
          as="aside"
        >
          {/* Detail Blog Page Section Other Blog */}
          <Heading size="md">Other Articles</Heading>

          <VStack
            spacing="2rem"
            marginY={{ lg: "2rem" }}
          >
            {otherBlog.map(
              ({ slug, title, thumbnailImage, uploadedAt }, index): React.ReactNode => (
                <OtherBlogCard
                  key={index}
                  slug={slug}
                  title={title}
                  thumbnailImage={thumbnailImage}
                  uploadedAt={uploadedAt}
                  color={color}
                />
              )
            )}
          </VStack>

          <Divider marginY={{ lg: "2rem" }} />

          {/* Detail Blog Page Section Catehories */}
          <Heading size="md">Categories</Heading>

          <Flex
            wrap="wrap"
            gap="1rem"
            marginY={{ lg: "2rem" }}
          >
            {blogCategories.map(
              ({ name, color }, index): React.ReactNode => (
                <CategoryTag
                  key={`${categories} - ${index}`}
                  name={name}
                  colorScheme={color}
                />
              )
            )}
          </Flex>

          <Divider marginY={{ lg: "2rem" }} />

          {/* Detail Blog Page Section Blog Author */}
          <Heading size="md">Author</Heading>

          <Flex
            columnGap={4}
            marginTop={4}
          >
            <Image
              src={profileImage}
              alt={name}
              height={12}
              width={12}
              borderRadius="full"
              style={{
                objectFit: "cover",
              }}
            />

            <Box>
              <Text
                fontWeight="semibold"
                marginBottom={2}
              >
                {name}
              </Text>
              <HStack spacing={4}>
                {truncatedSocialMediaList.map(
                  ({ SocialMediaIcon, link }, index): React.ReactNode => (
                    <AuthorSocialMedia
                      key={index}
                      SocialMediaIcon={SocialMediaIcon}
                      link={link}
                    />
                  )
                )}
              </HStack>
            </Box>
          </Flex>
        </GridItem>
      </Grid>
    </Container>
  );
}
