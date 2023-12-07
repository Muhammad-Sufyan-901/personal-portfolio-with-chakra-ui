import * as React from "react";
import Link from "next/link";
import { Box } from "@chakra-ui/react";
import type { SocialMedia } from "@/types";

type AuthorSocialMediaProps = SocialMedia;

export default function AuthorSocialMedia({ SocialMediaIcon, link }: AuthorSocialMediaProps): React.JSX.Element {
  return (
    <Box
      as={Link}
      href={link}
      padding={2}
      border="1px solid"
      borderColor="secondary"
      color="secondary"
      borderRadius="full"
      transition="all 300ms"
      _hover={{
        backgroundColor: "primary",
        color: "white",
        borderColor: "primary",
      }}
    >
      <SocialMediaIcon size="1rem" />
    </Box>
  );
}
