import { motion } from "framer-motion";
import React, { useState } from "react";
import SectionContainer from "../../pageComponents/SectionContainer";
import SectionHeading from "../../pageComponents/SectionHeading";
import CollapsebleButton from "./CollapsebleButton";
import s from "./ResumePage.module.css";
import EducationSVG from "../../../images/Education.svg";
import { Divider } from "@mui/material";

export function Education() {
  const [opened, setOpened] = useState<false | number>(0);

  return (
    <SectionContainer gridArea="education">
      <motion.div className={s.infoContainer} initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }}>
        <SectionHeading>Education</SectionHeading>
        <div className={s.educationContent}>
          <CollapsebleButton title="Lyceum «V. Boyarnitsky»" svg={EducationSVG} index={0} opened={opened} setOpened={setOpened}>
            <div className={s.educationButtonOuterContainer}>
              <div className={s.educationButtonInnerContainer}>
                <b>GED</b>
                <p>DROCHIA, MOLDOVA</p>
                <p className={s.greyText}>2009-2017</p>
              </div>
            </div>
          </CollapsebleButton>
          <Divider className={s.educationDevider} />
          <CollapsebleButton title="School №31" svg={EducationSVG} index={1} opened={opened} setOpened={setOpened}>
            <div className={s.educationButtonOuterContainer}>
              <div className={s.educationButtonInnerContainer}>
                <b>GED</b>
                <p>PODOLSK, RUSSIA</p>
                <p className={s.greyText}>2017-2018</p>
              </div>
            </div>
          </CollapsebleButton>
          <Divider className={s.educationDevider} />
          <CollapsebleButton title="ANO PO MRKIT" svg={EducationSVG} index={2} opened={opened} setOpened={setOpened}>
            <div className={s.educationButtonOuterContainer}>
              <div className={s.educationButtonInnerContainer}>
                <b>IT AND PROGRAMMING DEGREE</b>
                <p>PODOLSK, RUSSIA</p>
                <p className={s.greyText}>2018-2022</p>
              </div>
            </div>
          </CollapsebleButton>
        </div>
      </motion.div>
    </SectionContainer>
  );
}
