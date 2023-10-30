import * as React from "react";
import { Badge, Box, ButtonGroup, Card, CardBody, CardFooter, Center, Flex, Heading, Image, Link, Skeleton, Text, useColorMode, useDisclosure } from "@chakra-ui/react";
import { BsArrowRightCircleFill, BsFillEyeFill } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { truncateList } from "@/utils";
import PrimaryButton from "./PrimaryButton";
import PortfolioModal from "./PortfolioModal";
import type { Portfolio, TechStack } from "@/types";

type PortfolioCardProps = Portfolio;

export default function PortfolioCard({ title, imageThumbnail, description, livePreviewURL, repositoryURL, techStack }: PortfolioCardProps): React.JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode } = useColorMode();

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
            position="relative"
          >
            <Box
              height="full"
              width="full"
              position="absolute"
              top="-100%"
              left={0}
              backgroundColor="rgba(255, 255, 255, 0.1)"
              backdropFilter="blur(1.25rem)"
              transition="all 300ms"
              _groupHover={{
                top: 0,
              }}
            >
              <Center
                height="full"
                width="full"
              >
                <Link
                  href={repositoryURL}
                  target="_blank"
                  padding={3}
                  backgroundColor="card"
                  borderRadius="50%"
                  aria-label="Github Button"
                >
                  <FaGithub fontSize="1.5rem" />
                </Link>
              </Center>
            </Box>
            <Image
              src={imageThumbnail}
              alt="Project Preview Thumbail"
              transition="all 300ms"
              fallback={<Skeleton height="13rem" />}
              style={{
                objectFit: "cover",
                height: "100%",
                width: "100%",
              }}
            />
          </Box>

          <Heading
            as={Link}
            href={livePreviewURL}
            target="_blank"
            size="md"
            fontSize="1.5rem"
            transition="all 300ms"
            _hover={{
              color: "primary",
              textDecoration: "none",
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

          <Text noOfLines={2}>{description}</Text>
        </CardBody>

        <CardFooter>
          <ButtonGroup>
            <PrimaryButton
              onClick={onOpen}
              variant="solid"
              paddingX={{ base: 2 }}
              rightIcon={<BsArrowRightCircleFill />}
            >
              Details
            </PrimaryButton>
            <PrimaryButton
              href={livePreviewURL}
              variant="ghost"
              target="_blank"
              paddingX={{ base: 2 }}
              _hover={{
                borderColor: "text",
                backgroundColor: "text",
                color: colorMode === "dark" ? "primary" : "white",
              }}
              rightIcon={<BsFillEyeFill />}
            >
              Preview
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
