import { Typography } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";
import SectionContainer from "../../pageComponents/SectionContainer";
import SectionHeading from "../../pageComponents/SectionHeading";
import s from "./AboutPage.module.css";

export default function SummaryComponent() {
  return (
    <SectionContainer gridArea="summary">
      <motion.div className={s.summaryContainer} initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }}>
        <SectionHeading>Summary</SectionHeading>
        <div className={s.summaryTextContainer}>
          <Typography variant="body1" component="p">
            Qualified graduate and emerging professional with a bit of work experience from Moldova eager to build industry career. Quick learner with
            great people skills and focus on problemsolving. Handles complex assignments without complaint and works great under pressure. Happy to
            spend many hours coding and learning.
          </Typography>
        </div>
      </motion.div>
    </SectionContainer>
  );
}
