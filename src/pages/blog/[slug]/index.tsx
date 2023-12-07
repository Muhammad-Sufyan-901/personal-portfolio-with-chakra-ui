import * as React from "react";
import { Box } from "@chakra-ui/react";
import { getOneBlog, getOtherBlog } from "@/utils";
import { DetailBlogPageSectionComponent } from "@/components";
import type { GetServerSideProps } from "next";
import type { ParsedUrlQuery } from "querystring";
import type { Blog } from "@/types";

export interface BlogDetailPageProps {
  blog: Blog;
  otherBlog: Blog[];
}

export default function BlogDetailPage({ blog, otherBlog }: BlogDetailPageProps): React.JSX.Element {
  return (
    <Box
      as="main"
      backgroundColor="background"
    >
      <DetailBlogPageSectionComponent
        blog={blog}
        otherBlog={otherBlog}
      />
    </Box>
  );
}

export const getServerSideProps: GetServerSideProps<BlogDetailPageProps> = async ({ params }) => {
  const { slug } = params as ParsedUrlQuery;
  const { uploadedAt, ...restBlogProps } = getOneBlog(slug as string) as Blog;

  const blog: Blog = {
    ...restBlogProps,
    uploadedAt: uploadedAt.toLocaleString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }),
  };

  const blogs: Blog[] = getOtherBlog(slug as string);

  const otherBlog: Blog[] = blogs
    .filter(({ slug: blogSlug }): boolean => blogSlug !== slug)
    .map(
      ({ uploadedAt, ...blog }): Blog => ({
        ...blog,
        uploadedAt: uploadedAt.toLocaleString("en-US", {
          day: "numeric",
          month: "long",
          year: "numeric",
        }),
      })
    );

  return {
    props: {
      blog,
      otherBlog,
    },
  };
};
