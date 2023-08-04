import * as React from "react";
import { motion } from "framer-motion";
import { Box, Container, Flex, Hide, Show, useColorMode, useDisclosure, useMediaQuery, Link } from "@chakra-ui/react";
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { navigationLinkList, profileData } from "@/constants";
import { ThemeToggleButton } from "@/fragments";
import { staggeredContainer, fadeInTransition } from "@/utils";
import { useIntersectionObserver, useWindowOnEvent } from "@/hooks";
import MobileHeaderComponent from "./MobileHeaderComponent";

export default function HeaderComponent(): React.JSX.Element {
  const [isScrolled, setIsScrolled] = React.useState<boolean>(false);
  const [activeNavigationLink, setActiveNavigationLink] = React.useState<string>("home");
  const [isLargerThanXL] = useMediaQuery("(min-width: 1280px)");
  const { isOpen, onClose, onOpen, onToggle } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  const { name } = profileData;

  useWindowOnEvent("scroll", (): void => {
    window.scrollY > 50 ? setIsScrolled(true) : setIsScrolled(false);
  });

  useIntersectionObserver((id: string) => {
    setActiveNavigationLink(id);
  });

  return (
    <React.Fragment>
      <Box
        as={motion.header}
        variants={staggeredContainer(0.1, 0.1)}
        whileInView="show"
        initial="hidden"
        width="100vw"
        shadow={isScrolled ? "lg" : "none"}
        top={0}
        left={0}
        right={0}
        zIndex={100}
        position="fixed"
        backdropFilter={{ base: "none", lg: isScrolled ? "blur(1.25rem)" : "none" }}
        backgroundColor={{ base: isScrolled ? "background" : "transparent", lg: isScrolled ? "rgba(255, 255, 255, 0.1)" : "transparent" }}
        transition="all 300ms"
      >
        {/* Header Container */}
        <Container
          as={motion.div}
          variants={fadeInTransition("down", "tween", 0.1, 0.5)}
          width="100%"
          paddingX="1rem"
          maxWidth={{ sm: "40rem", md: "48rem", lg: "75rem", xl: "82rem", "2xl": "98rem" }}
          height={{ base: isScrolled ? "calc(3.5rem + 1rem)" : "calc(4.5rem + 1rem)", md: isScrolled ? "calc(4rem + 1rem)" : "calc(5rem + 1rem)" }}
          transition="all 300ms"
        >
          <Flex
            as="nav"
            width="100%"
            height="100%"
            alignItems="center"
            justifyContent="space-between"
          >
            {/* Header Logo */}
            <Link
              href="/"
              color="primary"
              fontWeight="semibold"
              fontSize={{ base: "2.5rem", xl: "1.5rem" }}
              _hover={{
                textDecoration: "none",
              }}
            >
              {isLargerThanXL ? name : "MS"}
            </Link>

            {/* Theme Toggle Button (Small Devices) */}
            <Hide above="xl">
              <Flex
                justifyContent="center"
                alignItems="center"
              >
                <ThemeToggleButton
                  colorMode={colorMode}
                  toggleColorMode={toggleColorMode}
                />
              </Flex>
            </Hide>

            {/* Header Navigation Link List (Laptop Devices Only) */}
            <Show above="xl">
              <Flex
                alignItems="center"
                columnGap="12"
                className="navigation-list"
              >
                {navigationLinkList.map(
                  ({ title, href }, index): React.ReactNode => (
                    <Link
                      key={`#${title} - ${index}`}
                      href={`/#${href}`}
                      color={activeNavigationLink === href ? "primary" : "text"}
                      fontWeight="medium"
                      fontSize="1rem"
                      borderBottom="2px"
                      borderBottomColor={activeNavigationLink === href ? "primary" : "transparent"}
                      _hover={{
                        color: "primary",
                        textDecoration: "none",
                      }}
                    >
                      {title}
                    </Link>
                  )
                )}
              </Flex>
            </Show>

            {/* Theme Toggle Button (Large Devices) */}
            <Show above="xl">
              <Flex
                justifyContent="center"
                alignItems="center"
              >
                <ThemeToggleButton
                  colorMode={colorMode}
                  toggleColorMode={toggleColorMode}
                />
              </Flex>
            </Show>

            {/* Header Sidebar Links Open / Close Button */}
            <Hide above="xl">
              <Box
                as="button"
                aria-label="Mobile Navigation Bar Toggle Button"
                color="white"
                padding="4"
                borderRadius="md"
                backgroundColor="primary"
                display="flex"
                justifyContent="center"
                alignItems="center"
                transition="all 300ms"
                onClick={onToggle}
              >
                {isOpen ? <IoClose /> : <HiMenu />}
              </Box>
            </Hide>
          </Flex>
        </Container>
      </Box>

      {/* Mobile Header Navigation (Tablet & Phone Only) */}
      <MobileHeaderComponent
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        activeHref={activeNavigationLink}
      />
    </React.Fragment>
  );
}
