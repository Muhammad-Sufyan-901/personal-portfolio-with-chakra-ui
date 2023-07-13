import * as React from "react";
import { Link } from "@chakra-ui/next-js";
import { Box, Container, Flex, Hide, Show, useColorMode, useDisclosure } from "@chakra-ui/react";
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { navigationLinkList, profileData } from "@/constants";
import { ThemeToggleButton } from "@/fragments";
import MobileHeaderComponent from "./MobileHeaderComponent";

export default function HeaderComponent(): React.JSX.Element {
  const [isScrolled, setIsScrolled] = React.useState<boolean>(false);
  const [activeNavigationLink, setActiveNavigationLink] = React.useState<string>("home");
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onClose, onOpen, onToggle } = useDisclosure();

  const { name } = profileData;

  const onClickHandleActiveNavigation = (link: string): void => {
    setActiveNavigationLink(link);
  };

  React.useEffect((): void => {
    window.addEventListener("scroll", (): void => {
      window.scrollY > 50 ? setIsScrolled(true) : setIsScrolled(false);
    });
  }, []);

  return (
    <React.Fragment>
      <Box
        as="header"
        width="100vw"
        shadow={isScrolled ? "lg" : "none"}
        top={0}
        left={0}
        right={0}
        zIndex={100}
        position="fixed"
        backdropFilter={{ base: "none", lg: isScrolled ? "blur(1.25rem)" : "none" }}
        backgroundColor={{ base: isScrolled ? "background" : "transparent", lg: isScrolled ? "rgba(255, 255, 255, 0.1)" : "transparent" }}
        transition="background-color 300ms"
      >
        {/* Header Container */}
        <Container
          width="100%"
          paddingX="1rem"
          maxWidth={{ sm: "40rem", md: "48rem", lg: "75rem", xl: "82rem", "2xl": "98rem" }}
          height={{ base: isScrolled ? "calc(3rem + 1rem)" : "calc(4rem + 1rem)", md: isScrolled ? "calc(4rem + 1rem)" : "calc(5rem + 1rem)" }}
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
              fontSize={{ base: "lg", lg: "1.5rem" }}
              _hover={{
                textDecoration: "none",
              }}
            >
              {name}
            </Link>

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
                      href={`#${href}`}
                      color={activeNavigationLink === href ? "primary" : "text"}
                      fontWeight="medium"
                      fontSize="1rem"
                      borderBottom="2px"
                      borderBottomColor={activeNavigationLink === href ? "primary" : "transparent"}
                      scroll={false}
                      _hover={{
                        color: "primary",
                        textDecoration: "none",
                      }}
                      onClick={() => onClickHandleActiveNavigation(href)}
                    >
                      {title}
                    </Link>
                  )
                )}
              </Flex>
            </Show>

            {/* Theme Toggle Button */}
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
        setActiveHref={setActiveNavigationLink}
      />
    </React.Fragment>
  );
}
