import * as React from "react";
import { Image } from "@chakra-ui/react";
import { Badge, Box, Button, Flex, Heading, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useColorMode, Skeleton } from "@chakra-ui/react";
import { BsGithub } from "react-icons/bs";
import type { Portfolio } from "@/types";

type ModalProps = {
  isOpen: boolean;
  onClose(): void;
  onOpen(): void;
};

type PortfolioModalProps = Portfolio & ModalProps;

export default function PortfolioModal({ title, imageThumbnail, description, repositoryURL, techStack, isOpen, onClose }: PortfolioModalProps): React.JSX.Element {
  const { colorMode } = useColorMode();

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size={{ base: "sm", md: "md", lg: "lg", xl: "2xl" }}
      isCentered
    >
      <ModalOverlay
        bg="rgba(255, 255, 255, 0.1)"
        backdropFilter="blur(1.25rem)"
      />
      <ModalContent backgroundColor="background">
        <ModalHeader>
          <Heading
            size="md"
            fontSize="24px"
          >
            {title}
          </Heading>
        </ModalHeader>

        <ModalCloseButton color="red" />

        <ModalBody
          display="flex"
          flexDirection="column"
          rowGap={5}
        >
          <Box
            borderRadius="md"
            overflow="hidden"
            borderWidth="1.5px"
            borderColor="secondary"
            width="100%"
            height="100%"
          >
            <Image
              src={imageThumbnail}
              alt="Project Preview Thumbail"
              height={350}
              width={550}
              fallback={<Skeleton height="20rem" />}
              style={{ objectFit: "cover", width: "100%", height: "auto" }}
            />
          </Box>

          <Flex
            wrap="wrap"
            alignItems="center"
            gap={3}
          >
            {techStack.map(
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

          <Heading size="md">Description</Heading>
          <Text fontSize={{ base: "0.9em", md: "1rem" }}>{description}</Text>
        </ModalBody>

        <ModalFooter
          justifyContent="flex-start"
          columnGap={3}
        >
          <Button
            as="a"
            href={repositoryURL}
            colorScheme="white"
            variant="outline"
            borderWidth="2px"
            target="_blank"
            transition="all 300ms"
            leftIcon={<BsGithub />}
            borderColor={colorMode === "light" ? "black" : "white"}
            _hover={{
              backgroundColor: colorMode === "light" ? "black" : "white",
              color: colorMode === "light" ? "white" : "black",
            }}
          >
            Project Repository
          </Button>
          <Button
            onClick={onClose}
            variant="solid"
            backgroundColor="red.500"
            color="white"
          >
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
