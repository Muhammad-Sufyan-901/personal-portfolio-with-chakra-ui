import * as React from "react";
import { Heading, type HeadingProps } from "@chakra-ui/react";

type SectionSubtitleProps = HeadingProps & {
  subtitle: string;
};

export default function SectionSubtitle({ subtitle, ...props }: SectionSubtitleProps): React.JSX.Element {
  return (
    <Heading
      as="h3"
      color="primary"
      {...props}
    >
      {subtitle}
    </Heading>
  );
}
