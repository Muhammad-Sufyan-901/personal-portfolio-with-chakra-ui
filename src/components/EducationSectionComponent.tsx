import * as React from "react";
import { motion } from "framer-motion";
import { Badge, Box, Container, Flex, Grid, GridItem } from "@chakra-ui/react";
import { AiFillTrophy } from "react-icons/ai";
import { MdOutlineSchool } from "react-icons/md";
import { AwardListItem, EducationListItem, SectionDescription, SectionSubtitle, SectionTitle } from "@/fragments";
import { awardList, educationList } from "@/constants";
import { fadeInTransition, staggeredContainer } from "@/utils";
import SectionLayout from "@/layouts/SectionLayout";

function EducationSectionComponent(): React.JSX.Element {
  return (
    <Box
      as="section"
      id="educations"
      width="100vw"
      paddingTop="7.5rem"
      paddingBottom="1rem"
    >
      {/* Education Section Title */}
      <SectionTitle title="Educations" />

      {/* Education Section Content */}
      <Container
        as={motion.div}
        variants={staggeredContainer(0.1, 0.1)}
        viewport={{ once: true, amount: 0.25 }}
        initial="hidden"
        whileInView="show"
        marginTop={{ base: "1rem", lg: "2.5rem" }}
        maxWidth={{ base: "container.lg", lg: "75rem" }}
      >
        <Grid
          templateColumns={{ base: "1fr", lg: "25% 70%" }}
          gap={{ base: 10, lg: "5%" }}
        >
          {/* Education Section Subtitle & Description */}
          <GridItem
            as={motion.div}
            variants={fadeInTransition("right", "tween", 0.2, 0.5)}
          >
            <Flex
              height="100%"
              width="100%"
              direction="column"
              justifyContent="center"
              alignItems="center"
              rowGap={{ base: 3, lg: 5 }}
            >
              <SectionSubtitle>Educations🎓 & Awards🏆</SectionSubtitle>

              <SectionDescription>There are some formal education & awards that i&apos;ve reached below</SectionDescription>
            </Flex>
          </GridItem>

          {/* Education Section Educations & Awards Content */}
          <GridItem
            backgroundColor="card"
            shadow="lg"
            borderRadius="lg"
            padding={10}
            width={{ base: "90%", lg: "100%" }}
            marginX={{ base: "auto", lg: 0 }}
            order={{ base: 2, lg: 1 }}
            transition="all 300ms"
            _hover={{
              shadow: "2xl",
            }}
          >
            <Grid
              width="100%"
              height="100%"
              templateColumns={{ base: "1fr", lg: "repeat(2, 1fr)" }}
              gap={{ base: "4rem", lg: 8 }}
            >
              {/* Education Section Educations Content */}
              <GridItem
                as={motion.div}
                variants={fadeInTransition("left", "tween", 0.2, 1.1)}
              >
                <Badge
                  color="white"
                  backgroundColor="primary"
                  padding={2}
                  display="inline-flex"
                  flexDirection="row"
                  alignItems="center"
                  columnGap={3}
                  borderRadius="md"
                >
                  <MdOutlineSchool fontSize={18} />
                  Educations
                </Badge>

                <Box marginTop={8}>
                  {educationList.map(
                    ({ school, competence, years }, index): React.ReactNode => (
                      <EducationListItem
                        key={`${school} - ${index}`}
                        school={school}
                        competence={competence}
                        years={years}
                      />
                    )
                  )}
                </Box>
              </GridItem>

              {/* Education Section Awards Content */}
              <GridItem
                as={motion.div}
                variants={fadeInTransition("left", "tween", 0.2, 1.1)}
              >
                <Badge
                  color="white"
                  backgroundColor="primary"
                  paddingY={2}
                  paddingX={4}
                  display="inline-flex"
                  flexDirection="row"
                  alignItems="center"
                  columnGap={3}
                  borderRadius="md"
                >
                  <AiFillTrophy fontSize={18} />
                  Awards
                </Badge>

                <Box marginTop={8}>
                  {awardList.map(
                    ({ award, place, years }, index): React.ReactNode => (
                      <AwardListItem
                        key={`${place} - ${index}`}
                        award={award}
                        place={place}
                        years={years}
                      />
                    )
                  )}
                </Box>
              </GridItem>
            </Grid>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
}

export default SectionLayout(EducationSectionComponent, "educations");
