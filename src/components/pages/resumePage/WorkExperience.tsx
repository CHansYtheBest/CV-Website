import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import SectionContainer from "../../pageComponents/SectionContainer";
import SectionHeading from "../../pageComponents/SectionHeading";
import CollapsebleButton from "./CollapsebleButton";
import WorkSVG from "../../../images/Work.svg";
import s from "./ResumePage.module.css";
import { Divider } from "@mui/material";

function InnerWorkCollapsebleButton(props: any) {
  const buttonRef = useRef<any>(null);

  useEffect(() => {
    if (buttonRef.current.clientHeight !== props.deviderHeights[props.index]) {
      let newHeights = [...props.deviderHeights];
      newHeights[props.index] = buttonRef.current.clientHeight;
      props.setDeviderHeights(newHeights);
    }
  }, [props]);

  return (
    <div className={s.workButtonOuterContainer}>
      <div className={s.workButtonInnerContainer} ref={buttonRef}>
        {props.children}
      </div>
    </div>
  );
}

function WorkCollapsebleButton(props: any) {
  return (
    <CollapsebleButton
      title={props.title}
      variant="left-to-right"
      svg={WorkSVG}
      index={props.index}
      opened={props.opened}
      setOpened={props.setOpened}
    >
      <InnerWorkCollapsebleButton index={props.index} deviderHeights={props.deviderHeights} setDeviderHeights={props.setDeviderHeights}>
        {props.children}
      </InnerWorkCollapsebleButton>
    </CollapsebleButton>
  );
}

export function WorkExperience() {
  const [opened, setOpened] = useState<false | number>(0);
  const [deviderHeights, setDeviderHeights] = useState<number[]>([0, 0]);

  return (
    <SectionContainer gridArea="workExperience">
      <motion.div initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }}>
        <SectionHeading className={s.workHeading}>Work Experience</SectionHeading>
        <WorkCollapsebleButton
          title="Moskovskiy Zavod «Fizpribor»"
          opened={opened}
          setOpened={setOpened}
          deviderHeights={deviderHeights}
          setDeviderHeights={setDeviderHeights}
          index={0}
        >
          <b>Website Developer</b>
          <ul>
            <li>Designed, implemented and monitored web pages, plugins and functionality for continuous improvement.</li>
            <li>Optimized company's website and main corporate blog to boost SEO traffic to sites.</li>
            <li>Planned website development, converting mockups into usable web presence with HTML, JavaScript, AJAX and JSON coding.</li>
            <li>Provided front-end website development using WordPress.</li>
          </ul>
          <p>MARCH 2022 - JUNE 2022</p>
          <p>PODOLSK, RUSSIA</p>
        </WorkCollapsebleButton>
        <motion.div
          className={s.workDevider}
          style={{ width: 0 }}
          animate={{ height: opened === 0 || opened === false ? `${deviderHeights[0]}px` : "0px" }}
          transition={{ ease: "easeOut" }}
        >
          <Divider orientation="vertical" />
        </motion.div>
        <WorkCollapsebleButton
          title="McDonalds"
          opened={opened}
          setOpened={setOpened}
          deviderHeights={deviderHeights}
          setDeviderHeights={setDeviderHeights}
          index={1}
        >
          <b>Fast Food Employee</b>
          <ul>
            <li>Accurately operated cash register to process customer payments..</li>
            <li>Greeted customers promptly and took orders to keep flow of traffic moving.</li>
          </ul>
          <p>MARCH 2022 - JUNE 2022</p>
          <p>PODOLSK, RUSSIA</p>
        </WorkCollapsebleButton>
        <motion.div
          className={s.workDevider}
          style={{ width: 0 }}
          animate={{ height: opened === 1 ? `${deviderHeights[1]}px` : "0px" }}
          transition={{ ease: "easeOut" }}
        >
          <Divider orientation="vertical" />
        </motion.div>
      </motion.div>
    </SectionContainer>
  );
}
