import React, { useState } from "react";
import SectionContainer from "../../pageComponents/SectionContainer";
import SectionHeading from "../../pageComponents/SectionHeading";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Button, TextField } from "@mui/material";
import s from "./ContactsPage.module.css";
import emailjs from "@emailjs/browser";

export function ContactForm() {
  let [disabled, setDisabled] = useState(false);
  const INITIAL_VALUES = { from_name: "", email: "", message: "" };

  const FORM_VALIDATION = Yup.object().shape({});

  return (
    <SectionContainer gridArea="contactForm">
      <SectionHeading>Contact form</SectionHeading>
      <Formik
        initialValues={INITIAL_VALUES}
        onSubmit={(values: any) => {
          setDisabled(true);
          console.log(values);

          emailjs.send("service_9yesjql", "template_1wkno49", values, "MFHyxmEMQ0Hvfrd48").then(
            (result) => {
              setDisabled(false);
              console.log(result.text);
            },
            (error) => {
              setDisabled(false);
              console.log(error.text);
            }
          );
        }}
        validationSchema={FORM_VALIDATION}
      >
        <Form className={s.contactFormGrid}>
          <Field as={TextField} className={s.contactFormField} type="text" name="from_name" label="Name" style={{ gridArea: "name" }}></Field>
          <Field as={TextField} className={s.contactFormField} type="text" name="email" label="Email" style={{ gridArea: "email" }}></Field>
          <Field
            as={TextField}
            className={s.contactFormField}
            type="text"
            name="message"
            label="Message"
            multiline
            rows={6}
            style={{ gridArea: "message" }}
          ></Field>
          <div style={{ gridArea: "button" }}>
            <Button type="submit" disabled={disabled}>
              Send Message
            </Button>
          </div>
        </Form>
      </Formik>
    </SectionContainer>
  );
}
