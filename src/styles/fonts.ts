import { Poppins } from "next/font/google";
import type { NextFont } from "next/dist/compiled/@next/font";
import type { Font } from "@/types";

export const poppins: NextFont = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const fonts: Font = {
  body: poppins.style.fontFamily,
};
