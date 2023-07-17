import * as React from "react";
import { Box, Center, Container, Flex, Heading, Text } from "@chakra-ui/react";
import { PrimaryButton } from "@/fragments";
import { FaPaperPlane } from "react-icons/fa";

export default function GetInTouchComponent(): React.JSX.Element {
  return (
    <Container
      maxWidth="75rem"
      width="full"
      marginX="auto"
      position="relative"
      paddingTop={24}
      paddingX={8}
      paddingBottom={8}
    >
      {/* Get In Touch Box Container */}
      <Box
        backgroundColor="background"
        shadow="lg"
        borderRadius="0.5rem"
        width="full"
        borderBottom="4px"
        borderColor="primary"
        paddingY="3rem"
        paddingX="5rem"
        transition="all 300ms"
        _hover={{
          shadow: "2xl",
        }}
      >
        {/* Get In Touch Content Container */}
        <Flex
          direction={{ base: "column", md: "row" }}
          justifyContent={{ base: "center", md: "space-between" }}
          alignItems="center"
        >
          {/* Get In Touch Text Contant Container */}

          <Box
            textTransform="uppercase"
            lineHeight="3.75rem"
            textAlign={{ base: "center", md: "start" }}
            marginBottom={{ base: 8, md: 0 }}
          >
            <Text
              as="h4"
              fontWeight="light"
              lineHeight={5}
              fontSize={{ base: "1em", lg: "1.2em" }}
            >
              Let&apos;s Talk
            </Text>
            <Text
              as="h3"
              fontSize={{ base: "2em", lg: "2.3em" }}
            >
              About Your
            </Text>
            <Text
              as="h2"
              fontWeight="bold"
              bgClip="text"
              opacity="0.9"
              bgGradient="linear(to-t, transparent, text)"
              fontSize={{ base: "3em", lg: "4.2em" }}
            >
              Next Project
            </Text>
          </Box>

          {/* Get In Touch Button */}
          <PrimaryButton
            href="/#contact"
            variant="solid"
            paddingX="2.5rem"
            paddingY="1.5rem"
            borderWidth="2px"
            borderColor="transparent"
            rightIcon={<FaPaperPlane />}
            _hover={{
              backgroundColor: "transparent",
              borderColor: "primary",
              color: "primary",
            }}
          >
            Get In Touch
          </PrimaryButton>
        </Flex>
      </Box>
    </Container>
  );
}
