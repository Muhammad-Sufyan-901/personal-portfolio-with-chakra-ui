import * as React from "react";
import { Badge, Box, ButtonGroup, Card, CardBody, CardFooter, Flex, Heading, Text, useColorMode, useDisclosure } from "@chakra-ui/react";
import { BsArrowRightCircleFill, BsFillEyeFill } from "react-icons/bs";
import { Image } from "@chakra-ui/next-js";
import { truncateText, truncateList } from "@/utils";
import PrimaryButton from "./PrimaryButton";
import PortfolioModal from "./PortfolioModal";
import type { Portfolio, TechStack } from "@/types";

type PortfolioCardProps = Portfolio;

export default function PortfolioCard({ title, imageThumbnail, description, livePreviewURL, repositoryURL, techStack }: PortfolioCardProps): React.JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode } = useColorMode();

  const truncatedDescription: string = truncateText(description, 75);
  const truncatedTechStackList: TechStack[] = truncateList(techStack, 0, 3);

  return (
    <React.Fragment>
      <Card
        backgroundColor="card"
        transition="all 300ms"
        role="group"
        shadow="md"
        _hover={{
          shadow: "xl",
        }}
      >
        <CardBody
          display="flex"
          flexDirection="column"
          rowGap={4}
        >
          <Box
            borderRadius="md"
            overflow="hidden"
            borderWidth="1.5px"
            borderColor="secondary"
          >
            <Image
              src={imageThumbnail}
              alt="Project Preview Thumbail"
              height={220}
              width={400}
              priority
              transition="all 300ms"
              style={{
                objectFit: "cover",
                height: "auto",
                width: "auto",
              }}
              _groupHover={{
                transform: "scale(1.05)",
              }}
            />
          </Box>

          <Heading
            size="md"
            fontSize="1.5rem"
            transition="all 300ms"
            cursor="pointer"
            _hover={{
              color: "primary",
            }}
          >
            {title}
          </Heading>

          <Flex
            wrap="wrap"
            alignItems="center"
            gap={3}
          >
            {truncatedTechStackList.map(
              ({ tech, logo }, index): React.ReactNode => (
                <Badge
                  key={`${tech} - ${index}`}
                  display="flex"
                  alignItems="center"
                  columnGap={2}
                  paddingY={1}
                >
                  <Image
                    src={logo}
                    alt="Tech Stack Logo"
                    height={4}
                    width={4}
                  />

                  <Text>{tech}</Text>
                </Badge>
              )
            )}
          </Flex>

          <Text>{truncatedDescription}</Text>
        </CardBody>

        <CardFooter>
          <ButtonGroup>
            <PrimaryButton
              onClick={onOpen}
              variant="solid"
              rightIcon={<BsArrowRightCircleFill />}
            >
              More Details
            </PrimaryButton>
            <PrimaryButton
              href={livePreviewURL}
              variant="ghost"
              target="_blank"
              _hover={{
                borderColor: "text",
                backgroundColor: "text",
                color: colorMode === "dark" ? "primary" : "white",
              }}
              rightIcon={<BsFillEyeFill />}
            >
              Live Preview
            </PrimaryButton>
          </ButtonGroup>
        </CardFooter>
      </Card>

      <PortfolioModal
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        title={title}
        imageThumbnail={imageThumbnail}
        description={description}
        livePreviewURL={livePreviewURL}
        repositoryURL={repositoryURL}
        techStack={techStack}
      />
    </React.Fragment>
  );
}
