import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Box, Button, Center, Flex, Heading, Text } from "@chakra-ui/react";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { getOneBlog } from "@/utils";
import { PrimaryButton } from "@/fragments";

export default function BlogDetailPage(): React.JSX.Element {
  const { query } = useRouter();
  const { slug } = query;
  const blog = getOneBlog(slug as string);

  return (
    <Box
      as="main"
      backgroundColor="background"
      height="100vh"
    >
      <Center height="full">
        <Flex
          direction="column"
          justifyContent="center"
          alignItems="center"
          rowGap={4}
          textAlign="center"
        >
          <Heading size={{ base: "lg", lg: "2xl" }}>Coming Soon</Heading>
          <Text maxWidth="90%">This pages is under development and will be ready for soon.</Text>
          <Button
            as={Link}
            href="/#blog"
            variant="solid"
            rightIcon={<BsArrowRightCircleFill fontSize={20} />}
            scroll
          >
            Back To Section
          </Button>
        </Flex>
      </Center>
    </Box>
  );
}
