import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import type { FormikHelpers } from "formik";
import type { FormInitialValues } from "@/types";

type Values = Record<keyof FormInitialValues, string>;

export const sendEmail = async (values: FormInitialValues, actions: FormikHelpers<FormInitialValues>): Promise<void> => {
  try {
    const parsedValues: Values = { ...values };

    await emailjs.send(process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID!, process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID!, parsedValues, process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY!);

    Swal.fire({
      icon: "success",
      title: "Success",
      text: "Your Message Is Successfully Sended!",
      confirmButtonColor: "#38bdf8",
    });
  } catch (error) {
    console.error(error);

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
