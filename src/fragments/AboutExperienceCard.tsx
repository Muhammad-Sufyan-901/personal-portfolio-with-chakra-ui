import * as React from "react";
import { Card, CardBody, Flex, Heading, Text } from "@chakra-ui/react";
import type { Experience } from "@/types";

type AboutExperienceCardProps = Experience;

export default function AboutExperienceCard({ number, title }: AboutExperienceCardProps): React.JSX.Element {
  return (
    <Card
      shadow="lg"
      borderWidth="3px"
      borderRadius="xl"
      borderColor="transparent"
      backgroundColor="background"
      borderBottomColor="primary"
      transition="all 300ms"
      width={{ base: "17.5rem", md: "22.5rem", lg: "100%" }}
      _hover={{
        shadow: "xl",
        borderColor: "primary",
      }}
    >
      <CardBody>
        <Flex
          direction="column"
          textAlign="center"
          rowGap={3}
        >
          <Heading
            color="primary"
            fontSize={{ base: "2.25rem", lg: "2rem" }}
          >
            {number}+
          </Heading>

          <Text>{title}</Text>
        </Flex>
      </CardBody>
    </Card>
  );
}
