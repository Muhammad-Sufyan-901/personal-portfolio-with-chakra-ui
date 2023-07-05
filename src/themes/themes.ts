import { extendTheme } from "@chakra-ui/react";
import { backgroundColor, primaryColor, secondaryColor, textColor, fonts, styles } from "@/styles";
import type { ThemeColor } from "@/types";

export const colors: ThemeColor = {
  primary: primaryColor,
  secondary: secondaryColor,
  background: backgroundColor,
  text: textColor,
};

export const chakraThemes = extendTheme({
  fonts,
  styles,
  semanticTokens: {
    colors,
  },
});
