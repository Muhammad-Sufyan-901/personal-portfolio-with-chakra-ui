import * as React from "react";
import { Box, Container, Flex } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { SectionDescription, SectionSubtitle, SectionTitle, WorkExperienceCard } from "@/fragments";
import { workExperienceList } from "@/constants";
import SectionLayout from "@/layouts/SectionLayout";
import "swiper/css/navigation";
import "swiper/css";

function ExperienceSectionComponent(): React.JSX.Element {
  return (
    <Box
      as="section"
      id="experiences"
      width="100vw"
      paddingTop="7.5rem"
      paddingBottom="1rem"
    >
      <SectionTitle title="Experiences" />

      <Container maxWidth={{ base: "container.lg", lg: "75rem" }}>
        <Flex
          direction="column"
          rowGap={{ base: 3, lg: 5 }}
        >
          <SectionSubtitle>Work Experiences</SectionSubtitle>
          <SectionDescription>I&apos;m also experienced at some website development and software testing that i learn for over 1 years will described below</SectionDescription>
        </Flex>

        <Box
          marginTop={12}
          paddingBottom={16}
        >
          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: ".swiper-button-prev",
              nextEl: ".swiper-button-next",
            }}
            breakpoints={{
              365: {
                slidesPerView: 1,
                spaceBetween: 24,
              },
              768: {
                slidesPerView: 1,
                spaceBetween: 32,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 32,
              },
            }}
            style={{ paddingBottom: 64 }}
            grabCursor
          >
            <Box>
              {workExperienceList.map(
                ({ jobDesk, companyName, years, jobStatus, jobDescription, techStack }, index): React.ReactNode => (
                  <SwiperSlide key={`${jobDesk} - ${index}`}>
                    <WorkExperienceCard
                      jobDesk={jobDesk}
                      companyName={companyName}
                      years={years}
                      jobStatus={jobStatus}
                      jobDescription={jobDescription}
                      techStack={techStack}
                    />
                  </SwiperSlide>
                )
              )}
            </Box>

            <Box>
              <BsChevronRight className="swiper-button-next" />
              <BsChevronLeft className="swiper-button-prev" />
            </Box>
          </Swiper>
        </Box>
      </Container>
    </Box>
  );
}

export default SectionLayout(ExperienceSectionComponent, "experiences");