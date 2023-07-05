import type { Styles } from "@/types";

export const styles: Styles = {
  global: {
    "*": {
      margin: 0,
      padding: 0,
      boxSizing: "border-box",
      scrollBehavior: "smooth",
    },
    "::-webkit-scrollbar": {
      display: "none",
    },
    body: {
      transition: "all 300ms",
    },
  },
};
