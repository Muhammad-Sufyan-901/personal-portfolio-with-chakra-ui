import { keyframes } from "@chakra-ui/react";
import type { Keyframes } from "@emotion/react";

export const bouncingAnimation: Keyframes = keyframes`
  0%, 100% {
    transform: translateY(-25%);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  
  50% {
    transform: translateY(0);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
`;
