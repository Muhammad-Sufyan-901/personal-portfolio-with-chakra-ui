import * as React from "react";
import { Box } from "@chakra-ui/react";
import { PortfolioPageSectionComponent } from "@/components";

export default function PortfolioPage(): React.JSX.Element {
  return (
    <Box
      as="main"
      backgroundColor="background"
    >
      <PortfolioPageSectionComponent />
    </Box>
  );
}
