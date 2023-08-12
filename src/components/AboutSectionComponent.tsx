import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Box, Container, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import { BsFillChatFill } from "react-icons/bs";
import { AboutExperienceCard, PrimaryButton, SectionTitle } from "@/fragments";
import { profileData } from "@/constants";
import { fadeInTransition, staggeredContainer, textVariantTransition } from "@/utils";
import SectionLayout from "@/layouts/SectionLayout";

function AboutSectionComponent(): React.JSX.Element {
  const { name, pictures, region, divisions, descriptions, experiences } = profileData;

  return (
    <Box
      as="section"
      id="about"
      width="100vw"
      paddingTop="7.5rem"
      paddingBottom="1rem"
    >
      {/* About Section Title */}
      <SectionTitle title="About Me" />

      {/* About Section Content Container */}
      <Container
        as={motion.div}
        variants={staggeredContainer(0.1, 0.1)}
        viewport={{ once: true, amount: 0.25 }}
        initial="hidden"
        whileInView="show"
        maxWidth={{ base: "container.lg", xl: "75rem" }}
      >
        <Grid
          gap={{ base: "2.5rem", lg: "15%" }}
          templateColumns={{ base: "1fr", lg: "35% 50%" }}
        >
          {/* About Image Banner */}
          <GridItem
            as={motion.div}
            variants={fadeInTransition("right", "tween", 0.1, 1.1)}
            display="grid"
            placeItems="center"
            bgGradient="linear(45deg, transparent, primary, transparent)"
            borderRadius="1rem"
            aspectRatio={1}
            marginX={{ base: "auto", lg: 0 }}
            width={{ base: "280px", md: "320px", lg: "100%" }}
            height={{ base: "fit-content", lg: "fit-content", xl: "100%" }}
          >
            <Box
              overflow="hidden"
              borderRadius="1rem"
              transform={{ base: "rotate(0)", lg: "rotate(10deg)" }}
              height={{ base: "22.5rem", md: "27.5rem", lg: "35rem", xl: "40rem" }}
              transition="all 300ms"
              _hover={{
                transform: "rotate(0)",
              }}
            >
              <Image
                src={pictures[1]}
                width={500}
                height={700}
                alt="Profile Image On About Section"
                priority
                style={{
                  objectFit: "cover",
                  height: "100%",
                  borderRadius: "1rem",
                }}
              />
            </Box>
          </GridItem>

          {/* About Section Information Content */}
          <GridItem
            as={motion.div}
            variants={fadeInTransition("left", "tween", 0.1, 1.1)}
          >
            <Flex
              as={motion.div}
              variants={fadeInTransition("left", "tween", 0.2, 1.1)}
              direction="column"
              justifyContent="center"
              height="100%"
            >
              {/* About Section Information Title And Description */}
              <Box
                textAlign={{ base: "center", lg: "start" }}
                marginTop={{ base: 6, lg: 0 }}
              >
                <Text
                  as={motion.h2}
                  variants={textVariantTransition(1.1)}
                  marginBottom={3}
                  fontWeight="semibold"
                  fontSize={{ base: "1.75rem", lg: "2rem" }}
                >
                  Hello👋 i&apos;am{" "}
                  <Text
                    as="span"
                    color="primary"
                  >
                    {name}
                  </Text>
                </Text>

                <Text
                  as={motion.h3}
                  variants={textVariantTransition(1.2)}
                  marginBottom={8}
                  fontWeight="semibold"
                  fontSize={{ base: "xl", lg: "2xl" }}
                >
                  A{" "}
                  <Text
                    as="span"
                    color="primary"
                  >
                    {divisions[0]}🧑‍💻
                  </Text>{" "}
                  based in{" "}
                  <Text
                    as="span"
                    color="primary"
                  >
                    {region}🌏
                  </Text>
                </Text>

                <Box
                  as={motion.div}
                  variants={textVariantTransition(1.3)}
                  borderBottom="2px"
                  borderColor={{ base: "transparent", lg: "text" }}
                  paddingBottom={8}
                  marginX={{ base: "auto", lg: 0 }}
                  paddingX={{ base: 4, lg: 0 }}
                  textAlign={{ base: "center", lg: "start" }}
                >
                  <Text
                    color="text"
                    fontWeight="normal"
                    fontSize={{ base: "1rem", lg: "lg" }}
                  >
                    {descriptions[1]}
                  </Text>
                </Box>
              </Box>

              {/* About Section Information Experiences Card */}
              <Grid
                marginTop={6}
                columnGap={{ base: 0, lg: "1.5rem" }}
                rowGap={{ base: "1rem", lg: 0 }}
                templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
                placeItems={{ base: "center", lg: "start" }}
              >
                {experiences.map(
                  ({ number, title }, index): React.ReactNode => (
                    <GridItem
                      key={`experience - ${index}`}
                      as={motion.div}
                      variants={fadeInTransition("left", "spring", index * 0.5, 0.75)}
                    >
                      <AboutExperienceCard
                        number={number}
                        title={title}
                      />
                    </GridItem>
                  )
                )}
              </Grid>

              {/* About Section Information Contact Me Button */}
              <Box
                as={motion.div}
                variants={fadeInTransition("left", "tween", 0.1, 1)}
                marginTop={10}
                marginX={{ base: "auto", lg: "0" }}
              >
                <PrimaryButton
                  as="a"
                  href="#contact"
                  variant="outline"
                  size="xl"
                  paddingY="4"
                  paddingX={{ base: "8", lg: "12" }}
                  borderRadius="0.5rem"
                  columnGap="1"
                  rightIcon={<BsFillChatFill fontSize="1.25rem" />}
                >
                  Contact With Me
                </PrimaryButton>
              </Box>
            </Flex>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
}

export default SectionLayout(AboutSectionComponent, "about");
