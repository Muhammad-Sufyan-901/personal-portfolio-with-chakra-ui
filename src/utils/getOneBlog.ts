import { blogList } from "@/constants";
import type { Blog } from "@/types";

export const getOneBlog = (slugName: string): Blog | undefined => {
  return blogList.find(({ slug }) => slug === slugName);
};
