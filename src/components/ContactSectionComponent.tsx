import * as React from "react";
import { motion } from "framer-motion";
import { AbsoluteCenter, Box, Container, Divider, Flex, FormControl, FormErrorMessage, FormLabel, Grid, GridItem, Input, Text, Textarea } from "@chakra-ui/react";
import { Formik, Form, Field, type FieldAttributes } from "formik";
import { FaPaperPlane } from "react-icons/fa";
import { SectionDescription, SectionSubtitle, SectionTitle, ContactCard, PrimaryButton } from "@/fragments";
import { contactCardList } from "@/constants";
import { fadeInTransition, staggeredContainer, validateFormSchema } from "@/utils";
import { sendEmail } from "@/services";
import SectionLayout from "@/layouts/SectionLayout";
import type { FormInitialValues } from "@/types";

function ContactSectionComponent(): React.JSX.Element {
  const initialValues: FormInitialValues = {
    first_name: "",
    last_name: "",
    email: "",
    subject: "",
    message: "",
  };

  return (
    <Box
      as="section"
      id="contact"
      paddingTop="10rem"
      paddingBottom="6rem"
      width="100vw"
    >
      {/* Contact Section Title */}
      <SectionTitle title="Contact" />

      {/* Contact Section Content */}
      <Container
        as={motion.div}
        variants={staggeredContainer(0.1, 0.1)}
        viewport={{ once: true }}
        whileInView="show"
        initial="hidden"
        maxWidth={{ base: "container.lg", lg: "75rem" }}
      >
        {/* Contact Section Subtitle & Description */}
        <Flex
          as={motion.div}
          variants={fadeInTransition("up", "tween", 0.1, 1.1)}
          direction="column"
          rowGap={{ base: 3, lg: 5 }}
        >
          <SectionSubtitle>Feel Free To Contact Me📨</SectionSubtitle>
          <SectionDescription>I&apos;am always open to discussing product design, collaborating work or partnerships. Just contact me with this media below</SectionDescription>
        </Flex>

        {/* Contact Section Contact Card Content */}
        <Grid
          templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
          gap={6}
          width={{ base: "90%", lg: "100%" }}
          marginX={{ base: "auto", lg: 0 }}
          marginTop={12}
        >
          {contactCardList.map(
            ({ title, contactVia, contactLink, cardIcon }, index): React.ReactNode => (
              <GridItem
                as={motion.div}
                variants={fadeInTransition("up", "tween", index * 0.25, 1.1)}
                key={`${title} - ${index}`}
              >
                <ContactCard
                  title={title}
                  contactVia={contactVia}
                  contactLink={contactLink}
                  cardIcon={cardIcon}
                />
              </GridItem>
            )
          )}
        </Grid>

        {/* Contact Section Contact Line Divider */}
        <Box
          position="relative"
          marginY={10}
          width={{ base: "90%", lg: "100%" }}
          marginX={{ base: "auto", lg: 0 }}
        >
          <Divider />
          <AbsoluteCenter
            backgroundColor="background"
            paddingX={4}
          >
            <Text>Or</Text>
          </AbsoluteCenter>
        </Box>

        {/* Contact Section Contact Form */}
        <Formik
          initialValues={initialValues}
          onSubmit={sendEmail}
          validationSchema={validateFormSchema}
        >
          {({ isSubmitting, isValid }): React.ReactNode => (
            <Form>
              <Grid
                templateColumns={{ base: "1fr", lg: "repeat(2, 1fr)" }}
                gap={6}
                width={{ base: "90%", lg: "100%" }}
                marginX={{ base: "auto", lg: 0 }}
              >
                <Field name="first_name">
                  {({ field, form }: FieldAttributes<any>): React.ReactNode => (
                    <FormControl
                      as={motion.div}
                      variants={fadeInTransition("right", "tween", 0.1, 1)}
                      isInvalid={form.errors.first_name && form.touched.first_name}
                      isRequired
                    >
                      <FormLabel>Your First Name</FormLabel>
                      <Input
                        id="first_name"
                        placeholder="Your First Name. Example: John"
                        borderWidth="2px"
                        paddingY={8}
                        paddingX={4}
                        borderColor="primary"
                        borderRadius={4}
                        outline="none"
                        _placeholder={{
                          color: "secondary",
                        }}
                        _hover={{
                          borderColor: "primary",
                        }}
                        _invalid={{
                          borderColor: "red.300",
                          _hover: {
                            borderColor: "red.300",
                          },
                        }}
                        {...field}
                      />
                      <FormErrorMessage>{form.errors.first_name}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>

                <Field name="last_name">
                  {({ field, form }: FieldAttributes<any>): React.ReactNode => (
                    <FormControl
                      as={motion.div}
                      variants={fadeInTransition("left", "tween", 0.2, 1)}
                      isInvalid={form.errors.last_name && form.touched.last_name}
                      isRequired
                    >
                      <FormLabel>Your Last Name</FormLabel>
                      <Input
                        id="last_name"
                        placeholder="Your Last Name. Example: Doe"
                        borderWidth="2px"
                        paddingY={8}
                        paddingX={4}
                        borderColor="primary"
                        borderRadius={4}
                        _placeholder={{
                          color: "secondary",
                        }}
                        _hover={{
                          borderColor: "primary",
                        }}
                        _invalid={{
                          borderColor: "red.300",
                          _hover: {
                            borderColor: "red.300",
                          },
                        }}
                        {...field}
                      />
                      <FormErrorMessage>{form.errors.last_name}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>

                <Field name="email">
                  {({ field, form }: FieldAttributes<any>): React.ReactNode => (
                    <FormControl
                      as={motion.div}
                      variants={fadeInTransition("right", "tween", 0.1, 1)}
                      isInvalid={form.errors.email && form.touched.email}
                      isRequired
                    >
                      <FormLabel>Your Email.</FormLabel>
                      <Input
                        id="email"
                        placeholder="Your Email. Example: johndoe@gmail.com"
                        borderWidth="2px"
                        paddingY={8}
                        paddingX={4}
                        borderColor="primary"
                        borderRadius={4}
                        type="email"
                        _placeholder={{
                          color: "secondary",
                        }}
                        _hover={{
                          borderColor: "primary",
                        }}
                        _invalid={{
                          borderColor: "red.300",
                          _hover: {
                            borderColor: "red.300",
                          },
                        }}
                        {...field}
                      />
                      <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>

                <Field name="subject">
                  {({ field, form }: FieldAttributes<any>): React.ReactNode => (
                    <FormControl
                      as={motion.div}
                      variants={fadeInTransition("left", "tween", 0.2, 1)}
                      isInvalid={form.errors.subject && form.touched.subject}
                      isRequired
                    >
                      <FormLabel>Your Subject</FormLabel>
                      <Input
                        id="subject"
                        placeholder="Your Subject. Example: Hey, I Wanna Collaborate"
                        borderWidth="2px"
                        paddingY={8}
                        paddingX={4}
                        borderColor="primary"
                        borderRadius={4}
                        _placeholder={{
                          color: "secondary",
                        }}
                        _hover={{
                          borderColor: "primary",
                        }}
                        _invalid={{
                          borderColor: "red.300",
                          _hover: {
                            borderColor: "red.300",
                          },
                        }}
                        {...field}
                      />
                      <FormErrorMessage>{form.errors.subject}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
              </Grid>

              <Box
                as={motion.div}
                variants={fadeInTransition("down", "tween", 0.3, 1)}
                marginTop={6}
                width={{ base: "90%", lg: "100%" }}
                marginX={{ base: "auto", lg: 0 }}
              >
                <Field name="message">
                  {({ field, form }: FieldAttributes<any>): React.ReactNode => (
                    <FormControl
                      isInvalid={form.errors.message && form.touched.message}
                      isRequired
                    >
                      <FormLabel>Your Message</FormLabel>
                      <Textarea
                        id="message"
                        placeholder="Your Message. Example: Hey, I Wanna Collaborate Because I Have A Project"
                        resize="none"
                        size="md"
                        borderWidth="2px"
                        borderColor="primary"
                        minHeight="20rem"
                        paddingY={6}
                        _placeholder={{
                          color: "secondary",
                        }}
                        _hover={{
                          borderColor: "primary",
                        }}
                        _invalid={{
                          borderColor: "red.300",
                          _hover: {
                            borderColor: "red.300",
                          },
                        }}
                        {...field}
                      />
                      <FormErrorMessage>{form.errors.message}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>

                <PrimaryButton
                  variant="solid"
                  size="lg"
                  paddingX={{ base: "2rem", md: "3rem", lg: "4rem" }}
                  marginTop="2rem"
                  type="submit"
                  rightIcon={<FaPaperPlane />}
                  isLoading={isSubmitting}
                  isDisabled={!isValid}
                >
                  Submit
                </PrimaryButton>
              </Box>
            </Form>
          )}
        </Formik>
      </Container>
    </Box>
  );
}

export default SectionLayout(ContactSectionComponent, "contact");
