import type { TechStack } from "./techStack";

export interface Portfolio {
  title: string;
  imageThumbnail: string;
  description: string;
  livePreviewURL: string;
  repositoryURL: string;
  techStack: TechStack[];
}
