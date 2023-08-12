import * as React from "react";
import { motion } from "framer-motion";
import { Box, Flex, Show, Tooltip } from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import { navigationLinkList, socialMediaList } from "@/constants";
import { fadeInTransition, staggeredContainer } from "@/utils";

export default function SectionLayout(MainSection: React.FunctionComponent, activeSectionIndicator: string = ""): (props: any) => React.JSX.Element {
  return function WrappedSection(props: any): React.JSX.Element {
    return (
      <Box
        as={motion.div}
        variants={staggeredContainer(0.1, 0.1)}
        viewport={{ once: true }}
        whileInView="show"
        initial="hidden"
        width="100vw"
        position="relative"
      >
        {/* Section Social Media Links */}
        <Show breakpoint="(min-width: 88.75rem)">
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
                  aria-label="Social Media Button"
                >
                  <Box
                    as={motion.div}
                    variants={fadeInTransition("right", "tween", index * 0.1, 0.85)}
                    shadow="lg"
                    color="primary"
                    backgroundColor="background"
                    padding="3"
                    borderRadius="full"
                    borderColor="transparent"
                    transition="all 300ms"
                    _hover={{
                      color: "white",
                      backgroundColor: "primary",
                      transform: "translateY(-0.25rem)",
                    }}
                    _dark={{
                      _hover: {
                        color: "primary",
                        backgroundColor: "white",
                        transform: "translateY(-0.25rem)",
                      },
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
        <Show breakpoint="(min-width: 80rem)">
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
                  backgroundColor="background"
                  color="text"
                  hasArrow
                >
                  <Link
                    href={`/#${href}`}
                    scroll={false}
                    aria-label="Section Navigation Indicator Button"
                  >
                    <Box
                      as={motion.div}
                      variants={fadeInTransition("left", "tween", 0.2, 0.5)}
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
