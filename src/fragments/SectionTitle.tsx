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
        fontSize="7xl"
        fontWeight="extrabold"
        marginBottom={8}
        opacity={0.3}
        zIndex={-1}
      >
        {title}
      </Heading>

      {/* Title Text Content */}
      <Heading
        as="h2"
        color="text"
        fontSize="2.5em"
        fontWeight="bold"
        transform={{ base: "translateY(-5.5rem)", lg: "translateY(-5rem)" }}
        zIndex={1}
      >
        {title}
      </Heading>
    </Box>
  );
}
