import * as React from "react";
import { Box, Heading } from "@chakra-ui/react";

type SectionTitleProps = {
  title: string;
};

export default function SectionTitle({ title }: SectionTitleProps): React.JSX.Element {
  return (
    <Box textAlign="center">
      {/* Title Text Overlay */}
      <Heading
        as="h1"
        bgGradient="linear(to-t, transparent, text)"
        backgroundClip="text"
        fontSize={{ base: "6xl", md: "7xl" }}
        fontWeight="extrabold"
        marginBottom={{ base: 4, md: 6, lg: 8 }}
        opacity={0.3}
        zIndex={-1}
      >
        {title}
      </Heading>

      {/* Title Text Content */}
      <Heading
        as="h2"
        fontSize={{ base: "2.5em", lg: "3em" }}
        fontWeight="bold"
        transform={{ base: "translateY(-4.5rem)", lg: "translateY(-5rem)" }}
        zIndex={1}
      >
        {title}
      </Heading>
    </Box>
  );
}
