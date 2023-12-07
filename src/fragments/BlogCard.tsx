import * as React from "react";
import Link from "next/link";
import { Box, Card, CardBody, CardFooter, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { BiTime } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";
import PrimaryButton from "./PrimaryButton";
import type { Blog } from "@/types";

type BlogCardProps = Blog;

export default function BlogCard({ slug, title, description, thumbnailImage, categories, uploadedAt, author: { profileImage, name } }: BlogCardProps): React.JSX.Element {
  const formattedUploadedAt: string = uploadedAt.toLocaleString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <Card
      backgroundColor="card"
      shadow="lg"
      role="group"
      transition="all 300ms"
      _hover={{
        shadow: "2xl",
      }}
    >
      <CardBody
        display="flex"
        flexDirection="column"
        rowGap={5}
      >
        <Box
          overflow="hidden"
          borderRadius="md"
        >
          <Image
            src={thumbnailImage}
            alt="Blog Thumbnail Image"
            transition="all 300ms"
            style={{
              objectFit: "cover",
              height: "14rem",
              width: "100%",
            }}
            _groupHover={{
              transform: "scale(1.05)",
            }}
          />
        </Box>

        <Flex
          justifyContent="space-between"
          alignItems="center"
        >
          <Flex
            wrap="wrap"
            alignItems="center"
            gap={1}
          >
            {categories.map(
              ({ name, color }, index): React.ReactNode => (
                <Text
                  key={`${categories} - ${index}`}
                  color={color}
                  fontSize="0.75rem"
                  fontWeight="semibold"
                >
                  #{name}
                </Text>
              )
            )}
          </Flex>

          <Text
            color="secondary"
            fontSize="0.75rem"
            display="inline-flex"
            alignItems="center"
            columnGap={1}
          >
            <BiTime /> {formattedUploadedAt}
          </Text>
        </Flex>

        <Link href={`/blog/${slug}`}>
          <Heading
            size="md"
            fontSize="1.25rem"
            transition="all 300ms"
            _hover={{
              color: "primary",
            }}
          >
            {title}
          </Heading>
        </Link>

        <Text
          color="secondary"
          noOfLines={2}
        >
          {description[0]}
        </Text>
      </CardBody>

      <CardFooter
        alignItems="center"
        justifyContent="space-between"
      >
        <Flex
          alignItems="center"
          columnGap={2}
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
            <Text fontWeight="semibold">{name}</Text>
            <Text
              fontSize="0.75rem"
              color="secondary"
            >
              Author
            </Text>
          </Box>
        </Flex>

        <PrimaryButton
          href={`/blog/${slug}`}
          variant="solid"
          fontSize="0.75rem"
          rightIcon={<BsArrowRight fontSize="1rem" />}
        >
          Read Blog
        </PrimaryButton>
      </CardFooter>
    </Card>
  );
}
