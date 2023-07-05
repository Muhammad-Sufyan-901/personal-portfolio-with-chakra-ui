import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { RootLayout } from "@/layouts";
import { chakraThemes } from "@/themes";
import type { AppProps } from "next/app";

export default function MainApp({ Component, pageProps }: AppProps): React.JSX.Element {
  return (
    <ChakraProvider theme={chakraThemes}>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </ChakraProvider>
  );
}
