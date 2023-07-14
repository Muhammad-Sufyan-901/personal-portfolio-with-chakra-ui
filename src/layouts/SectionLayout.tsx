import * as React from "react";
import { Box, Flex, Show, Tooltip } from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import { navigationLinkList, socialMediaList } from "@/constants";

export default function SectionLayout(MainSection: React.FunctionComponent, activeSectionIndicator: string = ""): (props: any) => React.JSX.Element {
  return function WrappedSection(props: any): React.JSX.Element {
    return (
      <Box
        width="100vw"
        position="relative"
      >
        {/* Section Social Media Links */}
        <Show above="xl">
          <Flex
            direction="column"
            position="absolute"
            left={6}
            bottom={6}
            zIndex={10}
            rowGap={3}
          >
            {socialMediaList.map(
              ({ SocialMediaIcon, link }, index): React.ReactNode => (
                <Link
                  key={`#${link} - ${index}`}
                  href={link}
                  target="_blank"
                >
                  <Box
                    shadow="lg"
                    color="primary"
                    backgroundColor="background"
                    padding="3"
                    borderRadius="full"
                    borderColor="transparent"
                    transition="all 300ms"
                    _hover={{
                      color: "primary",
                      backgroundColor: "white",
                      transform: "translateY(-0.25rem)",
                    }}
                  >
                    <SocialMediaIcon />
                  </Box>
                </Link>
              )
            )}
          </Flex>
        </Show>

        {/* Main Section */}
        <MainSection {...props} />

        {/* Active Section Dots Navigations */}
        <Show above="xl">
          <Flex
            direction="column"
            position="absolute"
            bottom="44%"
            right={6}
            zIndex={10}
            rowGap={2}
          >
            {navigationLinkList.map(
              ({ title, href }, index): React.ReactNode => (
                <Tooltip
                  label={title}
                  key={`#${title} - ${index}`}
                  placement="left"
                >
                  <Link
                    href={`/#${href}`}
                    scroll={false}
                  >
                    <Box
                      width={2}
                      height={2}
                      borderRadius="full"
                      backgroundColor={activeSectionIndicator === href ? "primary" : "secondary"}
                      transition="all 300ms"
                    />
                  </Link>
                </Tooltip>
              )
            )}
          </Flex>
        </Show>
      </Box>
    );
  };
}
