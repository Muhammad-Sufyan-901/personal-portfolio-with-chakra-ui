import * as React from "react";
import { Box } from "@chakra-ui/react";
import { BlogPageSectionComponent } from "@/components";

export default function BlogPage(): React.JSX.Element {
  return (
    <Box
      as="main"
      backgroundColor="background"
    >
      <BlogPageSectionComponent />
    </Box>
  );
}
