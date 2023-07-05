import * as React from "react";
import { Link } from "@chakra-ui/next-js";
import { Show, Box, Flex, CloseButton, useColorMode, Slide } from "@chakra-ui/react";
import { navigationLinkList } from "@/constants";
import { ThemeToggleButton } from "@/fragments";

type MobileHeaderComponentProps = {
  isMobileNavigationOpened: boolean;
  toggleMobileNavigation: () => void;
};

export default function MobileHeaderComponent({ isMobileNavigationOpened, toggleMobileNavigation }: MobileHeaderComponentProps): React.JSX.Element {
  const { colorMode, toggleColorMode } = useColorMode();

  const handleToggleColorModeWithToggleNavigation = (): void => {
    // For Toggle The Color Mode
    toggleColorMode();

    // For Closing The Navigation After Clicked
    toggleMobileNavigation();
  };

  return (
    <Show below="xl">
      {/* Mobile Header Navigation Overlay */}
      <Box
        position="fixed"
        top={0}
        left={0}
        zIndex={200}
        width="100vw"
        height="100vh"
        backgroundColor="rgba(255, 255, 255, 0.1)"
        backdropFilter="blur(20px)"
      >
        {/* Mobile Header Navigation Container With Transition */}
        <Slide
          direction="top"
          in={isMobileNavigationOpened}
          style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%", width: "100%" }}
        >
          {/* Mobile Header Navigation Content Box */}
          <Box
            padding="3.75rem"
            shadow="xl"
            backgroundColor="background"
            borderRadius="lg"
            position="relative"
            rowGap="10"
            maxWidth="37.5rem"
            width="80%"
            height="36.25rem"
            display="flex"
            flexDirection="column"
          >
            {/* Mobile Header Navigation Close Button */}
            <Box
              position="absolute"
              top={4}
              right={4}
            >
              <CloseButton
                color="red.500"
                onClick={toggleMobileNavigation}
              />
            </Box>

            {/* Mobile Header Navigation Link List */}
            <Flex
              direction="column"
              justifyContent="center"
              alignItems="center"
              rowGap="6"
            >
              {navigationLinkList.map(
                ({ title, href }, index): React.ReactNode => (
                  <Link
                    key={`#${title} - ${index}`}
                    href={`#${href}`}
                    color="primary"
                    fontWeight="medium"
                    fontSize={{ base: "1rem", md: "1.25rem" }}
                    scroll={false}
                    _hover={{
                      color: "primary",
                      textDecoration: "none",
                    }}
                    onClick={toggleMobileNavigation}
                  >
                    {title}
                  </Link>
                )
              )}
            </Flex>

            {/* Theme Toggle Button */}
            <Flex
              justifyContent="center"
              alignItems="center"
            >
              <ThemeToggleButton
                colorMode={colorMode}
                toggleColorMode={handleToggleColorModeWithToggleNavigation}
              />
            </Flex>
          </Box>
        </Slide>
      </Box>
    </Show>
  );
}
