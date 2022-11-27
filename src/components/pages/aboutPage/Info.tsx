import React from "react";
import SectionContainer from "../../pageComponents/SectionContainer";
import SectionHeading from "../../pageComponents/SectionHeading";
import s from "./AboutPage.module.css";

export default function Info() {
  return (
    <SectionContainer className={s.infoContainer} gridArea="aboutInfo">
      <SectionHeading>About Info</SectionHeading>
      <ul className={s.infoTextContainer}>
        <li className={s.infoText}>
          <span className={s.infoTextColored}>Full Name</span>
          <span className={s.infoTextColored}>:</span>
          <span>Maxim Chibotaru Sergeevich</span>
        </li>
        <li className={s.infoText}>
          <span className={s.infoTextColored}>Date Of Birth</span>
          <span className={s.infoTextColored}>:</span>
          <span>07 September 2002</span>
        </li>
        <li className={s.infoText}>
          <span className={s.infoTextColored}>Langages</span>
          <span className={s.infoTextColored}>:</span>
          <span>russian, english, romanian</span>
        </li>
        <li className={s.infoText}>
          <span className={s.infoTextColored}>citizenships</span>
          <span className={s.infoTextColored}>:</span>
          <span>RUSSIAN, MOLDOVIAN, ROMANIAN</span>
        </li>
      </ul>
    </SectionContainer>
  );
}
