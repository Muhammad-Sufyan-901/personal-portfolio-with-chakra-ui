import * as React from "react";
import { motion } from "framer-motion";
import { Box, Flex, Text } from "@chakra-ui/react";
import { navigationLinkList, profileData, socialMediaList } from "@/constants";
import { Link } from "@chakra-ui/next-js";
import { fadeInTransition, staggeredContainer, textVariantTransition } from "@/utils";

export default function FooterComponent(): React.JSX.Element {
  const { name, divisions } = profileData;

  const footerCopyrightText: string = `© 2023 Created by ${name}. All right reserved`;

  return (
    <Flex
      as={motion.footer}
      variants={staggeredContainer(0.1, 0.1)}
      viewport={{ once: true, amount: 0.25 }}
      initial="hidden"
      whileInView="show"
      width="100vw"
      paddingY="16"
      textAlign="center"
      backgroundColor="primary"
      transition="all 300ms"
      direction="column"
      alignItems="center"
      rowGap="16"
    >
      {/* Footer Heading Container */}
      <Flex
        direction="column"
        rowGap="4"
      >
        {/* Footer Heading Name */}
        <Text
          as={motion.h3}
          variants={textVariantTransition(1)}
          color="white"
          fontWeight="semibold"
          fontSize="2rem"
          letterSpacing="0.025em"
        >
          {name}
        </Text>

        {/* Footer Heading Division */}
        <Text
          as={motion.h4}
          variants={textVariantTransition(1.1)}
          color="white"
          fontWeight="medium"
          fontSize="1.4rem"
        >
          {divisions[0]}🧑‍💻
        </Text>
      </Flex>

      {/* Footer Link List */}
      <Flex
        wrap="wrap"
        direction={{ base: "column", lg: "row" }}
        rowGap={{ base: "8", lg: 0 }}
        columnGap={{ base: 0, lg: "8" }}
      >
        {navigationLinkList.map(
          ({ title, href }, index): React.ReactNode => (
            <Link
              key={`#${title} - ${index}`}
              href={`#${href}`}
              color="white"
              fontWeight="normal"
              fontSize="1rem"
              scroll={false}
              _hover={{
                color: "secondary",
                textDecoration: "none",
              }}
            >
              <Text
                as={motion.div}
                variants={fadeInTransition("up", "tween", index * 0.1, 1.2)}
              >
                {title}
              </Text>
            </Link>
          )
        )}
      </Flex>

      {/* Footer Social Media Link List */}
      <Flex
        alignItems="center"
        columnGap="6"
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
                variants={fadeInTransition("up", "tween", index * 0.1, 1.2)}
                shadow="sm"
                color="primary"
                backgroundColor="white"
                padding="3"
                borderRadius="xl"
                border="2px"
                borderColor="transparent"
                transition="all 300ms"
                _hover={{
                  color: "white",
                  borderColor: "white",
                  backgroundColor: "transparent",
                }}
              >
                <SocialMediaIcon />
              </Box>
            </Link>
          )
        )}
      </Flex>

      {/* Footer Copyright Text */}
      <Text
        as={motion.span}
        variants={textVariantTransition(1.3)}
        color="white"
        fontSize="12px"
        fontWeight="normal"
      >
        {footerCopyrightText}
      </Text>
    </Flex>
  );
}
