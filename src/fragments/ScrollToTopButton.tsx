import * as React from "react";
import { Box } from "@chakra-ui/react";
import { AiOutlineArrowUp } from "react-icons/ai";

export default function ScrollToTopButton(): React.JSX.Element {
  const [isScrollToTopButtonShowing, setIsScrollToTopButtonShowing] = React.useState<boolean>(false);

  const isBottomOfSection = (element: HTMLElement): boolean => {
    return element.getBoundingClientRect().bottom < window.innerHeight;
  };

  const scrollToTopOfSection = (): void => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  React.useEffect((): VoidFunction => {
    const trackSectionScrolling = (): void => {
      const mainContainer: HTMLElement = document.getElementById("mainContainer")!;
      const homeElement: HTMLElement = document.getElementById("home")!;

      if (isBottomOfSection(mainContainer) || !isBottomOfSection(homeElement)) {
        setIsScrollToTopButtonShowing(false);
      } else {
        setIsScrollToTopButtonShowing(true);
      }
    };

    document.addEventListener("scroll", trackSectionScrolling);

    return () => {
      document.removeEventListener("scroll", trackSectionScrolling);
    };
  }, [isScrollToTopButtonShowing]);

  return (
    <Box
      as="button"
      position="fixed"
      zIndex={100}
      bottom={{ base: isScrollToTopButtonShowing ? 4 : "-100%", md: isScrollToTopButtonShowing ? 8 : "-100%", lg: isScrollToTopButtonShowing ? 12 : "-100%" }}
      right={{ base: 4, md: 8, lg: 12, xl: 16 }}
      backgroundColor="primary"
      padding={3}
      borderRadius="md"
      cursor="pointer"
      transition="all 600ms"
      aria-label="Scroll To Top Of Section Button"
      onClick={scrollToTopOfSection}
    >
      <AiOutlineArrowUp
        fontSize="1.25rem"
        color="white"
      />
    </Box>
  );
}
