import * as React from "react";
import { Box, useColorMode } from "@chakra-ui/react";
import { Global } from "@emotion/react";
import { HeaderComponent, FooterComponent } from "@/components";
import { globalSliderStyles } from "@/utils";
import HeaderMetadata from "./HeaderMetadata";

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps): React.JSX.Element {
  const { colorMode } = useColorMode();

  return (
    <React.Fragment>
      <HeaderMetadata />

      <Box overflowX="hidden">
        <HeaderComponent />

        <React.Fragment>{children}</React.Fragment>

        <FooterComponent />
      </Box>

      <Global styles={globalSliderStyles(colorMode)} />
    </React.Fragment>
  );
}
