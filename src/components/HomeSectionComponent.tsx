import * as React from "react";
import Typewriter from "typewriter-effect";
import { Box, Button, Container, Flex, Grid, GridItem, Show, Text, useColorMode } from "@chakra-ui/react";
import { BsArrowDown, BsFillChatFill } from "react-icons/bs";
import { profileData } from "@/constants";
import { HomeImageBlob, PrimaryButton } from "@/fragments";
import { colors } from "@/themes";
import { bouncingAnimation } from "@/utils";
import SectionLayout from "@/layouts/SectionLayout";

function HomeSectionComponent(): React.JSX.Element {
  const { colorMode } = useColorMode();

  const { name, divisions, descriptions, pictures } = profileData;

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
        maxWidth={{ base: "container.lg", xl: "75rem" }}
        paddingX={{ base: "4", xl: 0 }}
        paddingTop="4rem"
      >
        <Grid templateColumns={{ base: "1fr", lg: "repeat(2, 1fr)" }}>
          {/* Home Section Text Info Content */}
          <GridItem
            display="flex"
            flexDirection="column"
            paddingY="4rem"
            alignItems={{ base: "center", lg: "start" }}
            textAlign={{ base: "center", lg: "start" }}
          >
            <Text
              as="span"
              color="secondary"
              fontWeight="semibold"
              fontSize="1rem"
            >
              Hello I&apos;am
            </Text>

            <Text
              as="h1"
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
              as="h3"
              color="text"
              fontWeight="semibold"
              fontSize="1.5rem"
              marginBottom="6"
            >
              <Typewriter options={{ strings: divisions, autoStart: true, loop: true }} />
            </Text>

            <Text
              color="secondary"
              fontWeight="medium"
              fontSize="1rem"
              maxWidth="22.5rem"
              marginBottom="8"
            >
              {descriptions[0]}
            </Text>

            <PrimaryButton
              as="a"
              href="#contact"
              variant="solid"
              size="xl"
              paddingY="4"
              paddingX={{ base: "8", lg: "12" }}
              borderRadius="0.5rem"
              width="fit-content"
              columnGap="1"
              rightIcon={<BsFillChatFill fontSize="1.25rem" />}
            >
              Let&apos;s Talk
            </PrimaryButton>
          </GridItem>

          {/* Home Section Profile Image */}
          <GridItem
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

        <Show above="lg">
          <Flex
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
