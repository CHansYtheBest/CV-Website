import { Typography } from "@mui/material";
import React from "react";
import SectionContainer from "../../pageComponents/SectionContainer";
import SectionHeading from "../../pageComponents/SectionHeading";
import s from "./AboutPage.module.css";

export default function SummaryComponent() {
  return (
    <SectionContainer className={s.summaryContainer} gridArea="summary">
      <SectionHeading>Summary</SectionHeading>
      <div className={s.summaryTextContainer}>
        <Typography variant="body1" component="p">
          Qualified graduate and emerging professional with a bit of work experience from Moldova eager to build industry career. Quick learner with
          great people skills and focus on problemsolving. Handles complex assignments without complaint and works great under pressure. Happy to
          spend many hours coding and learning.
        </Typography>
      </div>
    </SectionContainer>
  );
}
