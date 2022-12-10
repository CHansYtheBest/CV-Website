import React from "react";
import PageContainer from "../../pageComponents/PageContainer";
import PageHeading from "../../pageComponents/PageHeading";
import s from "./ResumePage.module.css";
import { Education } from "./Education";
import { WorkExperience } from "./WorkExperience";
import { Skills } from "./Skills";

function ResumePage() {
  return (
    <PageContainer className={s.resumePageGrid}>
      <PageHeading>Resume page</PageHeading>
      <Education />
      <WorkExperience />
      <Skills />
    </PageContainer>
  );
}

export default ResumePage;
