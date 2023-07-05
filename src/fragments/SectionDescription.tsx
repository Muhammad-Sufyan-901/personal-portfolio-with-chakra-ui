import * as React from "react";
import { Text, type TextProps } from "@chakra-ui/react";

type SectionDescriptionProps = TextProps;

export default function SectionDescription({ children, ...props }: SectionDescriptionProps): React.JSX.Element {
  return (
    <Text
      fontSize={{ base: "0.9em", md: "1em" }}
      textAlign={{ base: "center", lg: "start" }}
      maxWidth={{ md: "40rem", lg: "45rem" }}
      marginX={{ base: "auto", lg: 0 }}
      {...props}
    >
      {children}
    </Text>
  );
}
