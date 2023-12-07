import type { Author } from "./author";
import type { BlogCategory } from "./blogCategory";

export interface Blog {
  title: string;
  slug: string;
  description: string[];
  thumbnailImage: string;
  categories: BlogCategory[];
  uploadedAt: Date | string;
  author: Author;
}
