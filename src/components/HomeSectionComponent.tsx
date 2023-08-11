import * as React from "react";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import { Box, Button, Container, Flex, Grid, GridItem, Show, Text, useColorMode } from "@chakra-ui/react";
import { BsArrowDown } from "react-icons/bs";
import { FaDownload } from "react-icons/fa";
import { profileData } from "@/constants";
import { HomeImageBlob, PrimaryButton } from "@/fragments";
import { colors } from "@/themes";
import { bouncingAnimation, slideInTransition, staggeredContainer, textVariantTransition, zoomInTransition } from "@/utils";
import SectionLayout from "@/layouts/SectionLayout";

function HomeSectionComponent(): React.JSX.Element {
  const { colorMode } = useColorMode();

  const { name, divisions, descriptions, pictures, CV } = profileData;

  return (
    <Box
      as="section"
      id="home"
      width="100vw"
      height={{ base: "100%", xl: "100vh" }}
      paddingTop="7.5rem"
      paddingBottom="1rem"
    >
      {/* Home Section Container */}
      <Container
        as={motion.div}
        variants={staggeredContainer(0.1, 0.1)}
        viewport={{ once: true, amount: 0.25 }}
        whileInView="show"
        initial="hidden"
        maxWidth={{ base: "container.lg", xl: "75rem" }}
        paddingX={{ base: "4", xl: 0 }}
        paddingTop={{ base: "1rem", md: "2rem", lg: "4rem" }}
      >
        <Grid templateColumns={{ base: "1fr", lg: "repeat(2, 1fr)" }}>
          {/* Home Section Text Info Content */}
          <GridItem
            as={motion.div}
            variants={slideInTransition("left", "tween", 0.1, 1)}
            display="flex"
            flexDirection="column"
            paddingY={{ base: "1rem", md: "2rem", lg: "4rem" }}
            alignItems={{ base: "center", lg: "start" }}
            textAlign={{ base: "center", lg: "start" }}
          >
            <Text
              as={motion.span}
              variants={textVariantTransition(1.1)}
              color="secondary"
              fontWeight="semibold"
              fontSize="1rem"
            >
              Hi There👋
            </Text>

            <Text
              as={motion.h1}
              variants={textVariantTransition(1.2)}
              color="primary"
              fontWeight="semibold"
              lineHeight="120%"
              fontSize={{ base: "2.75rem", md: "3rem", lg: "4rem" }}
              marginTop="1"
              marginBottom="4"
              maxWidth="85%"
            >
              {name}
            </Text>

            <Text
              as={motion.h2}
              variants={textVariantTransition(1.3)}
              color="text"
              fontWeight="semibold"
              fontSize="1.5rem"
              marginBottom="6"
            >
              <Typewriter options={{ strings: divisions, autoStart: true, loop: true }} />
            </Text>

            <Text
              as={motion.p}
              variants={textVariantTransition(1.4)}
              color="secondary"
              fontWeight="medium"
              fontSize="1rem"
              maxWidth="22.5rem"
              marginBottom="8"
            >
              {descriptions[0]}
            </Text>

            <Box
              as={motion.div}
              variants={zoomInTransition(1.5, 0.75)}
            >
              <PrimaryButton
                href={CV}
                target="_blank"
                variant="solid"
                size="xl"
                borderRadius="0.5rem"
                paddingY="4"
                paddingX={{ base: "8", lg: "12" }}
                columnGap={2}
                rightIcon={<FaDownload />}
                download
              >
                Download CV
              </PrimaryButton>
            </Box>
          </GridItem>

          {/* Home Section Profile Image */}
          <GridItem
            as={motion.div}
            variants={slideInTransition("right", "tween", 0.1, 1)}
            display="flex"
            flex="1"
            justifyContent="center"
            alignItems="center"
          >
            <HomeImageBlob
              image={pictures[0]}
              fill={colorMode === "light" ? colors.primary.default! : colors.primary._dark!}
            />
          </GridItem>
        </Grid>

        {/* Home Section Scroll Down Button */}
        <Show above="lg">
          <Flex
            as={motion.div}
            variants={slideInTransition("up", "tween", 0.2, 1.1)}
            viewport={{ once: true }}
            whileInView="show"
            initial="hidden"
            justifyContent="center"
            alignItems="center"
            marginTop={{ lg: "10", xl: "16" }}
            animation={`${bouncingAnimation} 1s ease-in-out infinite`}
          >
            <Button
              as="a"
              href="/#about"
              variant="link"
              color="text"
              rightIcon={<BsArrowDown fontSize="1.25rem" />}
              _hover={{
                color: "primary",
              }}
            >
              Scroll Down For More
            </Button>
          </Flex>
        </Show>
      </Container>
    </Box>
  );
}

export default SectionLayout(HomeSectionComponent, "home");
