import * as React from "react";
import Link from "next/link";
import { Box } from "@chakra-ui/react";
import type { SocialMedia } from "@/types";

type ShareToSocialMediaProps = SocialMedia;

export default function ShareToSocialMedia({ SocialMediaIcon, link }: ShareToSocialMediaProps): React.JSX.Element {
  return (
    <Box
      as={Link}
      href={link}
      target="_blank"
      padding={4}
      borderRadius="full"
      shadow="md"
      transition="all 300ms"
      _hover={{
        color: "primary",
        shadow: "lg",
      }}
    >
      <SocialMediaIcon size="1.15rem" />
    </Box>
  );
}
