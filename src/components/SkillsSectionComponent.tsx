import * as React from "react";
import { Box, Container, Flex, Grid, GridItem, Heading, Tab, TabIndicator, TabList, TabPanel, TabPanels, Tabs, Text, useColorMode } from "@chakra-ui/react";
import { SectionDescription, SectionSubtitle, SectionTitle, SkillCard } from "@/fragments";
import { skillList, toolsList } from "@/constants";
import SectionLayout from "@/layouts/SectionLayout";

function SkillsSectionComponent(): React.JSX.Element {
  const { colorMode } = useColorMode();

  return (
    <Box
      as="section"
      id="skills"
      width="100vw"
      paddingTop="7.5rem"
      paddingBottom="1rem"
    >
      {/* Skills Section Title */}
      <SectionTitle title="My Skills" />

      {/* Skills Section Content */}
      <Container
        marginX="auto"
        marginTop={{ base: "1rem", lg: "2.5rem" }}
        maxWidth={{ base: "container.lg", xl: "75rem" }}
      >
        <Grid
          templateColumns={{ base: "1fr", lg: "70% 25%" }}
          gap={{ base: 10, lg: "5%" }}
        >
          {/* Skills Section Tech Stack & Tools Content */}
          <GridItem
            backgroundColor={colorMode === "dark" ? "#132347" : "white"}
            shadow="lg"
            borderRadius="lg"
            padding={10}
            width={{ base: "80%", lg: "100%" }}
            marginX={{ base: "auto", lg: 0 }}
            order={{ base: 2, lg: 1 }}
            transition="all 300ms"
            _hover={{
              shadow: "2xl",
            }}
          >
            <Tabs
              align="center"
              variant="unstyled"
            >
              <TabList
                marginBottom={6}
                width="fit-content"
              >
                <Tab
                  fontWeight="semibold"
                  fontSize={{ base: "1em", lg: "1.1em" }}
                  _selected={{ color: "primary" }}
                >
                  Tech Stack
                </Tab>
                <Tab
                  fontWeight="semibold"
                  fontSize={{ base: "1em", lg: "1.1em" }}
                  _selected={{ color: "primary" }}
                >
                  Tools
                </Tab>
              </TabList>

              <TabIndicator
                height="2px"
                marginTop="-1.5rem"
                backgroundColor="primary"
              />

              <TabPanels>
                <TabPanel>
                  <Grid
                    templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(3, 1fr)", lg: "repeat(4, 1fr)", xl: "repeat(5, 1fr)" }}
                    placeItems="center"
                    gap={8}
                  >
                    {skillList.map(
                      ({ skillIcon, title, level }, index): React.ReactNode => (
                        <GridItem key={`Skills - ${index} : ${title}`}>
                          <SkillCard
                            skillIcon={skillIcon}
                            title={title}
                            level={level}
                          />
                        </GridItem>
                      )
                    )}
                  </Grid>
                </TabPanel>

                <TabPanel>
                  <Grid
                    templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(3, 1fr)", lg: "repeat(4, 1fr)", xl: "repeat(5, 1fr)" }}
                    placeItems="center"
                    gap={8}
                  >
                    {toolsList.map(
                      ({ skillIcon, title, level }, index): React.ReactNode => (
                        <GridItem key={`Skills - ${index} : ${title}`}>
                          <SkillCard
                            skillIcon={skillIcon}
                            title={title}
                            level={level}
                          />
                        </GridItem>
                      )
                    )}
                  </Grid>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </GridItem>

          {/* Skills Section Subtitle & Description */}
          <GridItem order={{ base: 1, lg: 2 }}>
            <Flex
              height="100%"
              width="100%"
              direction="column"
              justifyContent="center"
              alignItems="center"
              rowGap={{ base: 3, lg: 5 }}
              textAlign={{ base: "center", lg: "end" }}
            >
              <SectionSubtitle>Tech Stack & Tools</SectionSubtitle>

              <SectionDescription textAlign={{ lg: "end" }}>There are some tech stack and tools that i&apos;ve learned and experienced</SectionDescription>
            </Flex>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
}

export default SectionLayout(SkillsSectionComponent, "skills");