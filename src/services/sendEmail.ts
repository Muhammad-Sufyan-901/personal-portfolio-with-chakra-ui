import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import type { FormikHelpers } from "formik";
import type { FormInitialValues } from "@/types";

type FormValues = Record<keyof FormInitialValues, string>;

const EMAIL_JS_SERVICE_ID: string = process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID!;
const EMAIL_JS_TEMPLATE_ID: string = process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID!;
const EMAIL_JS_PUBLIC_KEY: string = process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY!;

export const sendEmail = async (values: FormInitialValues, actions: FormikHelpers<FormInitialValues>): Promise<void> => {
  try {
    const parsedValues: FormValues = { ...values };

    await emailjs.send(EMAIL_JS_SERVICE_ID, EMAIL_JS_TEMPLATE_ID, parsedValues, EMAIL_JS_PUBLIC_KEY);

    Swal.fire({
      icon: "success",
      title: "Success",
      text: "Your Message Is Successfully Sended!",
      confirmButtonColor: "#38bdf8",
    });
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Something Went Wrong!",
      confirmButtonColor: "#38bdf8",
    });
  } finally {
    actions.setSubmitting(false);
    actions.resetForm();
  }
};
