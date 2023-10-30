import * as React from "react";
import Image from "next/image";
import { Box, Flex, Text, Tooltip } from "@chakra-ui/react";
import type { Skill } from "@/types";

type SkillCardProps = Skill;

export default function SkillCard({ skillIcon, title, level, description }: SkillCardProps): React.JSX.Element {
  return (
    <Tooltip
      placement="top"
      label={description}
      backgroundColor="background"
      color="text"
      hasArrow
    >
      <Flex
        direction="column"
        rowGap={3}
        alignItems="center"
      >
        <Box
          padding={5}
          borderRadius="full"
          backgroundColor="card"
          shadow="md"
          transition="all 300ms"
          _hover={{
            transform: "translateY(-0.5rem)",
            shadow: "xl",
          }}
        >
          <Image
            src={skillIcon}
            alt="Skill Icon"
            width={32}
            height={32}
          />
        </Box>

        <Text
          as="h5"
          fontWeight="semibold"
          fontSize={{ base: "0.9em", lg: "1em" }}
        >
          {title}
        </Text>

        <Text color="secondary">{level}</Text>
      </Flex>
    </Tooltip>
  );
}
