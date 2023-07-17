import * as React from "react";
import Image from "next/image";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import type { WorkExperience } from "@/types";

type WorkExperienceCardProps = WorkExperience;

export default function WorkExperienceCard({ jobDesk, companyName, years, jobStatus, jobDescription, techStack }: WorkExperienceCardProps): React.JSX.Element {
  return (
    <Box
      height={{ base: "100%", sm: "25rem" }}
      backgroundColor="card"
      shadow="2xl"
      borderRadius="xl"
      padding={10}
      borderBottomWidth="2px"
      borderColor="primary"
    >
      <Flex
        direction="column"
        rowGap={4}
      >
        <Flex
          direction="column"
          rowGap={2}
        >
          <Heading>{jobDesk}</Heading>
          <Text
            fontWeight="semibold"
            color="primary"
            display="inline-flex"
            columnGap={1}
          >
            {companyName}{" "}
            <Text
              as="span"
              color="text"
              fontWeight="medium"
            >
              {" "}
              | {jobStatus}
            </Text>
          </Text>
        </Flex>

        <Flex
          alignItems="center"
          columnGap={4}
          marginTop={2}
        >
          {techStack.map(
            (imageUrl, index): React.ReactNode => (
              <Image
                key={`${imageUrl} - ${index}`}
                src={imageUrl}
                alt="Tech Stack Icon"
                width={28}
                height={28}
              />
            )
          )}
        </Flex>

        <Text color="secondary">Since {years}</Text>

        <Text textAlign="justify">{jobDescription}</Text>
      </Flex>
    </Box>
  );
}
