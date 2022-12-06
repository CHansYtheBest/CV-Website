import React, { useState } from "react";
import SectionContainer from "../../pageComponents/SectionContainer";
import SectionHeading from "../../pageComponents/SectionHeading";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Alert, Button, TextField } from "@mui/material";
import s from "./ContactsPage.module.css";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";
import { motion } from "framer-motion";

export function ContactForm() {
  const [response, setResponse] = useState<EmailJSResponseStatus>({ status: 0, text: "" });
  const INITIAL_VALUES = { from_name: "", email: "", message: "" };

  const FORM_VALIDATION = Yup.object().shape({
    from_name: Yup.string().required("Name is required"),
    email: Yup.string()
      .matches(/^([A-Za-z1-9@.\s]*)$/g, "Email can only contain Latin letters.")
      .email("Invalid email")
      .required("Email is required"),
    message: Yup.string().required("Please, write something"),
  });
  return (
    <SectionContainer gridArea="contactForm">
      <motion.div className={s.infoContainer} initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }}>
        <SectionHeading>Contact form</SectionHeading>
        <Formik
          initialValues={INITIAL_VALUES}
          onSubmit={(values: any, { setSubmitting }) => {
            setSubmitting(true);
            setResponse({ status: 999, text: "Request sending" });

            emailjs.send("service_9yesjql", "template_1wkno49", values, "MFHyxmEMQ0Hvfrd48").then(
              (result) => {
                setResponse({ status: result.status, text: result.text });
                setSubmitting(false);
              },
              (error) => {
                setResponse({ status: error.status, text: error.text });
                setSubmitting(false);
              }
            );
          }}
          validationSchema={FORM_VALIDATION}
          enableReinitialize
        >
          {(formik: any) => (
            <>
              {response.status !== 0 ? (
                <Alert
                  className={s.contactAlert}
                  severity={response.status === 200 ? "success" : response.status === 999 ? "info" : "error"}
                  onClose={() => {
                    setResponse({ status: 0, text: "" });
                  }}
                >
                  {response.text}
                </Alert>
              ) : (
                ""
              )}

              <Form className={s.contactFormGrid}>
                <Field
                  as={TextField}
                  type="text"
                  name="from_name"
                  label="Name"
                  style={{
                    gridArea: "name",
                    marginBottom: formik.getFieldMeta("from_name").touched
                      ? formik.getFieldMeta("from_name").error !== undefined
                        ? "0px"
                        : "23px"
                      : "23px",
                  }}
                  helperText={formik.getFieldMeta("from_name").touched ? formik.getFieldMeta("from_name").error : false}
                  error={formik.getFieldMeta("from_name").touched ? (formik.getFieldMeta("from_name").error !== undefined ? true : false) : false}
                ></Field>
                <Field
                  as={TextField}
                  type="email"
                  name="email"
                  label="Email"
                  style={{
                    gridArea: "email",
                    marginBottom: formik.getFieldMeta("email").touched ? (formik.getFieldMeta("email").error !== undefined ? "0px" : "23px") : "23px",
                  }}
                  helperText={formik.getFieldMeta("email").touched ? formik.getFieldMeta("email").error : false}
                  error={formik.getFieldMeta("email").touched ? (formik.getFieldMeta("email").error !== undefined ? true : false) : false}
                ></Field>
                <Field
                  as={TextField}
                  type="text"
                  name="message"
                  label="Message"
                  multiline
                  rows={4}
                  style={{
                    gridArea: "message",
                    marginBottom: formik.getFieldMeta("message").touched
                      ? formik.getFieldMeta("message").error !== undefined
                        ? "0px"
                        : "23px"
                      : "23px",
                  }}
                  helperText={formik.getFieldMeta("message").touched ? formik.getFieldMeta("message").error : false}
                  error={formik.getFieldMeta("message").touched ? (formik.getFieldMeta("message").error !== undefined ? true : false) : false}
                ></Field>
                <div className={s.contactFormButtonContainer} style={{ gridArea: "button" }}>
                  <Button
                    className={s.contactFormButton}
                    type="submit"
                    disabled={!formik.isValid || formik.isSubmiting}
                    classes={{ disabled: s.disabled }}
                    variant="contained"
                  >
                    Send Message
                  </Button>
                </div>
              </Form>
            </>
          )}
        </Formik>
      </motion.div>
    </SectionContainer>
  );
}
