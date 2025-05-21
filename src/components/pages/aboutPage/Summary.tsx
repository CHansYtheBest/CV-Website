import { Typography } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";
import SectionContainer from "../../pageComponents/SectionContainer";
import SectionHeading from "../../pageComponents/SectionHeading";
import s from "./AboutPage.module.css";

export default function SummaryComponent() {
  return (
    <SectionContainer gridArea="summary">
      <motion.div
        className={s.summaryContainer}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <SectionHeading>Summary</SectionHeading>
        <div className={s.summaryTextContainer}>
          <Typography variant="body1" component="p">
            Skilled and driven web developer with nearly three years of diverse
            experience across two companies, specializing in front-end
            development. I possess a solid foundation in web technologies
            including HTML, CSS, JavaScript, WordPress, and React. Proven
            ability to deliver robust, scalable web solutions through
            collaboration with cross-functional teams.
          </Typography>
        </div>
      </motion.div>
    </SectionContainer>
  );
}
