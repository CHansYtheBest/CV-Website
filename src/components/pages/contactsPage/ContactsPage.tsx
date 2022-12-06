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
          <motion.div className={s.infoContainer} initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }}>
            <SectionHeading>Stay In Touch</SectionHeading>
            <div className={s.stayInTouchContainer}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
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
