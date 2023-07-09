import type { ColorMode } from "@chakra-ui/react";

export const globalSliderStyles = (colorMode: ColorMode): string => {
  return `
      .swiper-button-prev::after,
      .swiper-button-next::after {
        content: "";
      }
      
      .swiper-button-prev,
      .swiper-button-next {
        top: initial;
        bottom: 0;
        width: initial;
        height: initial;
        background-color: ${colorMode === "light" ? "#ffffff" : "#132347"};
        border: 2px solid ${colorMode === "light" ? "#0ea5e9" : "#38bdf8"};
        padding: 0.5rem;
        border-radius: 0.5rem;
        color: ${colorMode === "light" ? "#0ea5e9" : "#38bdf8"};
      }
      
      .swiper-button-next {
        right: calc(50% - 3rem);
      }
      
      .swiper-button-prev {
        left: calc(50% - 3rem);
      }
    `;
};
