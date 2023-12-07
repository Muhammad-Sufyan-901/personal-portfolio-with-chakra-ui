import * as React from "react";
import Link from "next/link";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { FaCalendarAlt } from "react-icons/fa";
import type { Blog } from "@/types";

type OtherBlogCardProps = Partial<Blog> & {
  color?: string;
};

export default function OtherBlogCard({ title, thumbnailImage, uploadedAt, slug, color }: OtherBlogCardProps): React.JSX.Element {
  return (
    <Flex
      width="full"
      columnGap={4}
    >
      <Box
        borderRadius="md"
        overflow="hidden"
        width={20}
      >
        <Image
          src={thumbnailImage}
          alt="Blog Thumbnail Image"
          aspectRatio="1/1"
          objectFit="cover"
        />
      </Box>

      <Flex
        direction="column"
        flex={1}
        rowGap={1}
      >
        <Text
          as={Link}
          href={`/blog/${slug}`}
          fontWeight="bold"
          transition="all 300ms"
          _hover={{
            color: "primary",
          }}
        >
          {title}
        </Text>

        <Flex
          alignItems="center"
          gap={2}
          fontSize="0.75rem"
        >
          <FaCalendarAlt color={color} />
          <Text color="secondary">{uploadedAt as string}</Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
