import { Card } from "@mui/material";
import React from "react";
import PageContainer from "../../pageComponents/PageContainer";
import PageHeading from "../../pageComponents/PageHeading";
import SectionContainer from "../../pageComponents/SectionContainer";
import SectionHeading from "../../pageComponents/SectionHeading";
import GitHubSVG from "../../../images/GitHub.svg";
import LinkedInSVG from "../../../images/LinkedIn.svg";
import TelegramSVG from "../../../images/Telegram.svg";
import s from "./ContactsPage.module.css";
import { ContactForm } from "./ContactForm";
import { motion } from "framer-motion";

function ContactsPage() {
  return (
    <>
      <PageContainer className={s.contactsPageGrid}>
        <PageHeading>Contacts page</PageHeading>
        <SectionContainer gridArea="stayInTouch">
          <motion.div initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }}>
            <SectionHeading>Stay In Touch</SectionHeading>
            <div className={s.stayInTouchContainer}>
              <p>
                Hello! If you want to contact me feel free to use the contact form below, or send me a message to any of my social media accounts. My
                timezone is EET.
              </p>
              <div className={s.stayInTouchCardContainer}>
                <Card component="a" href="https://github.com/CHansYtheBest" className={s.stayInTouchCard}>
                  <img src={GitHubSVG} alt="" /> GitHub : <span>@CHansYtheBest</span>
                </Card>
                <Card component="a" href="https://www.linkedin.com/in/chansy-the-best-691a37245/" className={s.stayInTouchCard}>
                  <img src={LinkedInSVG} alt="" /> LinkedIn : <span>CHansY The Best</span>
                </Card>
                <Card component="a" href="https://t.me/lulzhey" className={s.stayInTouchCard}>
                  <img src={TelegramSVG} alt="" /> Telegram : <span>@lulzhey</span>
                </Card>
              </div>
            </div>
          </motion.div>
        </SectionContainer>
        <ContactForm />
      </PageContainer>
    </>
  );
}

export default ContactsPage;
