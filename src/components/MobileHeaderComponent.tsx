import * as React from "react";
import { Link } from "@chakra-ui/next-js";
import { Show, Flex, useColorMode, Drawer, DrawerContent, DrawerCloseButton, DrawerBody, DrawerFooter, DrawerHeader } from "@chakra-ui/react";
import { navigationLinkList } from "@/constants";

type MobileHeaderComponentProps = {
  isOpen: boolean;
  onClose(): void;
  onOpen(): void;
  activeHref: string;
  setActiveHref(href: string): void;
};

export default function MobileHeaderComponent({ isOpen, onClose, activeHref, setActiveHref }: MobileHeaderComponentProps): React.JSX.Element {
  const handleSetActiveNavigationAndCloseNavigation = (href: string): void => {
    setActiveHref(href);

    onClose();
  };

  return (
    <Show below="xl">
      {/* Mobile Header Navigation Overlay */}
      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        placement="top"
        size="full"
      >
        <DrawerContent
          backgroundColor="background"
          paddingY={4}
        >
          <DrawerCloseButton
            size="lg"
            color="red"
          />
          <DrawerHeader />
          <DrawerBody>
            <Flex
              direction="column"
              justifyContent="center"
              alignItems="center"
              height="full"
            >
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
                      color={href === activeHref ? "primary" : "text"}
                      fontWeight="medium"
                      fontSize={{ base: "1rem", md: "1.25rem" }}
                      _hover={{
                        color: "primary",
                        textDecoration: "none",
                      }}
                      onClick={() => handleSetActiveNavigationAndCloseNavigation(href)}
                    >
                      {title}
                    </Link>
                  )
                )}
              </Flex>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Show>
  );
}
