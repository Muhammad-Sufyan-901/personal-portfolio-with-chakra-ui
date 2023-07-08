import * as React from "react";
import { Heading, type HeadingProps } from "@chakra-ui/react";

type SectionSubtitleProps = HeadingProps;

export default function SectionSubtitle({ children, ...props }: SectionSubtitleProps): React.JSX.Element {
  return (
    <Heading
      as="h3"
      color="primary"
      textAlign={{ base: "center", lg: "start" }}
      {...props}
    >
      {children}
    </Heading>
  );
}
