import type { Variants } from "framer-motion";
import type { Direction, Type } from "@/types";

export const staggeredContainer = (staggerChildren: number, delayChildren: number): Variants => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const textContainer = (): Variants => ({
  hidden: {
    opacity: 0,
  },
  show: (index = 1) => ({
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: index * 0.1,
    },
  }),
});

export const fadeInTransition = (direction: Direction, type: Type, delay: number, duration: number): Variants => ({
  hidden: {
    x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
    y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type,
      delay,
      duration,
      ease: "easeOut",
    },
  },
});

export const fadeOutTransition = (direction: Direction, type: Type, delay: number, duration: number): Variants => ({
  hidden: {
    x: 0,
    y: 0,
    opacity: 1,
  },
  show: {
    x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
    y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
    opacity: 0,
    transition: {
      type,
      delay,
      duration,
      ease: "easeIn",
    },
  },
});

export const slideInTransition = (direction: Direction, type: Type, delay: number, duration: number): Variants => ({
  hidden: {
    x: direction === "right" ? "200%" : direction === "left" ? "-200%" : 0,
    y: direction === "up" ? "200%" : direction === "down" ? "-200%" : 0,
  },
  show: {
    x: 0,
    y: 0,
    transition: {
      type,
      delay,
      duration,
      ease: "easeOut",
    },
  },
});

export const slideOutTransition = (direction: Direction, type: Type, delay: number, duration: number): Variants => ({
  hidden: {
    x: 0,
    y: 0,
  },
  show: {
    x: direction === "right" ? "100%" : direction === "left" ? "-100%" : 0,
    y: direction === "up" ? "100%" : direction === "down" ? "-100%" : 0,
    transition: {
      type,
      delay,
      duration,
      ease: "easeIn",
    },
  },
});

export const zoomInTransition = (delay: number, duration: number): Variants => ({
  hidden: {
    scale: 0,
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "tween",
      ease: "easeOut",
      delay,
      duration,
    },
  },
});

export const zoomOutTransition = (delay: number, duration: number): Variants => ({
  hidden: {
    scale: 1,
    opacity: 1,
  },
  show: {
    scale: 0,
    opacity: 0,
    transition: {
      type: "tween",
      ease: "easeIn",
      delay,
      duration,
    },
  },
});

export const textVariantTransition = (delay: number): Variants => ({
  hidden: {
    y: 50,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1.25,
      delay,
    },
  },
});
