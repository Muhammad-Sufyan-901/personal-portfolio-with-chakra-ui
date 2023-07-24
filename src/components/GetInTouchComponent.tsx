import * as React from "react";
import { Box, Container, Flex, Text } from "@chakra-ui/react";
import { PrimaryButton } from "@/fragments";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeInTransition, slideInTransition, staggeredContainer, textVariantTransition } from "@/utils";

export default function GetInTouchComponent(): React.JSX.Element {
  return (
    <Container
      as={motion.div}
      variants={staggeredContainer(0.1, 0.1)}
      viewport={{ once: true, amount: 0.25 }}
      whileInView="show"
      initial="hidden"
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
        as={motion.div}
        variants={slideInTransition("right", "tween", 0, 0.5)}
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
              as={motion.h4}
              variants={textVariantTransition(1)}
              fontWeight="light"
              lineHeight={5}
              fontSize={{ base: "1em", lg: "1.2em" }}
            >
              Let&apos;s Talk
            </Text>
            <Text
              as={motion.h3}
              variants={textVariantTransition(1.1)}
              fontSize={{ base: "2em", lg: "2.3em" }}
            >
              About Your
            </Text>
            <Text
              as={motion.h2}
              variants={textVariantTransition(1.2)}
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
          <Box
            as={motion.div}
            variants={fadeInTransition("up", "tween", 0, 1.3)}
          >
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
          </Box>
        </Flex>
      </Box>
    </Container>
  );
}
