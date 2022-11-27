import React from "react";
import PageContainer from "../../pageComponents/PageContainer";
import PageHeading from "../../pageComponents/PageHeading";
import s from "./AboutPage.module.css";
import Info from "./Info";
import Occupation from "./Occupation";
import SummaryComponent from "./Summary";

function AboutPage() {
  return (
    <>
      <PageContainer className={s.aboutPageGrid}>
        <PageHeading>About page</PageHeading>
        <SummaryComponent />
        <Info />
        <Occupation />
      </PageContainer>
    </>
  );
}

export default AboutPage;
