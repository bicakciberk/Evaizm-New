import React from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const userSchema = Yup.object().shape({
  user_name: Yup.string().required("Name is required"),
  user_email: Yup.string()
    .email("Invalid Email Format")
    .required("Email is required"),
  message: Yup.string()
    .required("Message is Required")
    .min(50, "Message must be at least 50 characters"),
});

function Left() {
  const form = useRef();

  const sendEmail = (values, { setSubmitting, resetForm }) => {
    emailjs
      .sendForm(
        "service_71jaobp",
        "template_217smhi",
        form.current,
        "rmClot46rx8gvTlCd"
      )
      .then(
        (result) => {
          console.log(result.text);
          resetForm();
          setSubmitting(false);
        },
        (error) => {
          console.log(error.text);
          setSubmitting(false);
        }
      );
  };

  return (
    <div className="left 900px:w-full 900px:px-[32px] 600px:px-[16px]">
      <h1 className="text-[3.6vh]">Contact</h1>

      <Formik
        initialValues={{ user_name: "", user_email: "", message: "" }}
        validationSchema={userSchema}
        onSubmit={sendEmail}
      >
        {({ isSubmitting }) => (
          <Form
            className="form flex flex-col items-start mt-[2.5vh]"
            ref={form}
          >
            <Field
              className="name w-[60vh] 900px:w-full p-[1vh] border-2 border-gray focus:border-[#d64256]"
              placeholder="Name"
              type="text"
              name="user_name"
            />
            <ErrorMessage
              name="user_name"
              component="div"
              className="text-[#d64256]"
            />
            <Field
              className="email w-[60vh] 900px:w-full p-[1vh] border-2 border-gray mt-[20px] focus:border-[#d64256]"
              placeholder="Email"
              type="text"
              name="user_email"
            />
            <ErrorMessage
              name="user_email"
              component="div"
              className="text-[#d64256]"
            />
            <Field
              className="message w-[60vh] 900px:w-full p-[1vh] border-2 border-gray mt-[20px] focus:border-[#d64256]"
              placeholder="Message"
              type="text"
              name="message"
              as="textarea"
              rows={10}
            />
            <ErrorMessage
              name="message"
              component="div"
              className="text-[#d64256]"
            />
            <button
              id="sendBtn"
              className="sendBtn mt-[20px] w-[60vh] 900px:w-full flex items-center justify-center bg-[#d64256] p-[1vh] text-white font-medium active:bg-gray"
              type="submit"
              disabled={isSubmitting}
            >
              Send
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Left;
