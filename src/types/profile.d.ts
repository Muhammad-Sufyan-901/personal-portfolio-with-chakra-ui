import type { Experience } from "./experience";

export interface Profile {
  name: string;
  region: string;
  divisions: string[];
  CV: string;
  descriptions: string | string[];
  pictures: string | string[];
  experiences: Experience[];
}
