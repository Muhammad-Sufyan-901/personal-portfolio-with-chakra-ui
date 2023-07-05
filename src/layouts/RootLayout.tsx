import * as React from "react";
import { Box } from "@chakra-ui/react";
import { HeaderComponent, FooterComponent } from "@/components";
import HeaderMetadata from "./HeaderMetadata";

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps): React.JSX.Element {
  return (
    <React.Fragment>
      <HeaderMetadata />

      <Box overflowX="hidden">
        <HeaderComponent />

        <React.Fragment>{children}</React.Fragment>

        <FooterComponent />
      </Box>
    </React.Fragment>
  );
}
