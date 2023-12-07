import * as React from "react";
import { Tag, type TagProps } from "@chakra-ui/react";
import type { BlogCategory } from "@/types";

type CategoryTagProps = TagProps & Partial<BlogCategory>;

export default function CategoryTag({ name, size = "md", ...props }: CategoryTagProps): React.JSX.Element {
  return (
    <Tag
      size={size}
      {...props}
    >
      {name}
    </Tag>
  );
}
