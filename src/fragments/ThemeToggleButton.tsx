import * as React from "react";
import { Box, type ColorMode } from "@chakra-ui/react";
import { BsMoonFill, BsSunFill } from "react-icons/bs";

type ThemeToggleButtonProps = {
  colorMode: ColorMode;
  toggleColorMode: () => void;
};

export default function ThemeToggleButton({ colorMode, toggleColorMode }: ThemeToggleButtonProps): React.JSX.Element {
  return (
    <Box
      as="button"
      role="button"
      aria-label="Theme Toggle Button"
      shadow="lg"
      padding="1.25rem"
      backgroundColor={colorMode === "dark" ? "rgba(255, 255, 255, 0.1)" : "white"}
      borderRadius="50%"
      onClick={toggleColorMode}
    >
      {colorMode === "light" ? <BsMoonFill /> : <BsSunFill />}
    </Box>
  );
}
