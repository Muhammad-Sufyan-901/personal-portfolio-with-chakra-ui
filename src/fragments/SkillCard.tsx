import * as React from "react";
import Image from "next/image";
import { Box, Flex, Text, useColorMode } from "@chakra-ui/react";
import type { Skill } from "@/types";

type SkillCardProps = Skill;

export default function SkillCard({ skillIcon, title, level }: SkillCardProps): React.JSX.Element {
  const { colorMode } = useColorMode();

  return (
    <Flex
      direction="column"
      rowGap={3}
      alignItems="center"
    >
      <Box
        padding={5}
        borderRadius="full"
        backgroundColor={colorMode === "dark" ? "#132347" : "white"}
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
        as="h4"
        fontWeight="semibold"
        fontSize={{ base: "0.9em", lg: "1em" }}
      >
        {title}
      </Text>

      <Text color="secondary">{level}</Text>
    </Flex>
  );
}
