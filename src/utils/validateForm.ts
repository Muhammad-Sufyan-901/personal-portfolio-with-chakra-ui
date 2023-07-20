import { object, string } from "yup";

export const validateFormSchema = object({
  first_name: string()
    .matches(/^[a-zA-Z ]+$/, "First name should not contain numbers")
    .required("First name is required"),
  last_name: string()
    .matches(/^[a-zA-Z ]+$/, "Last name should not contain numbers")
    .required("Last name is required"),
  email: string().email("Invalid email address").required("Email is required"),
  subject: string().required("Subject is required"),
  message: string().required("Message is required"),
});
