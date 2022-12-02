import { Card, LinearProgress, Stack } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";
import SectionContainer from "../../pageComponents/SectionContainer";
import SectionHeading from "../../pageComponents/SectionHeading";
import CodeSVG from "../../../images/Code.svg";
import SkillsSVG from "../../../images/Skills.svg";
import LanguageSVG from "../../../images/Language.svg";
import ListSVG from "../../../images/List.svg";
import s from "./ResumePage.module.css";

interface SkillsCardProps {
  children: React.ReactNode;
  title: string;
  svg?: string;
}

function SkillsCard(props: SkillsCardProps) {
  return (
    <div className={s.skillsCardOuter}>
      <div className={s.skillsCardTitle}>
        <div className={s.skillsCardTitleInner}>
          <img src={props.svg} alt="" />
          <h5>{props.title}</h5>
        </div>
      </div>
      <Card className={s.skillsCard}>
        <div className={s.skillsCardContainer}>{props.children}</div>
      </Card>
    </div>
  );
}

export function Skills() {
  return (
    <SectionContainer gridArea="skills">
      <motion.div initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }}>
        <SectionHeading>Skills</SectionHeading>
        <div className={s.skillsContainer}>
          <SkillsCard title="Coding" svg={CodeSVG}>
            <Stack spacing={3} sx={{ color: "var(--accent)" }}>
              <div className={s.codingProgressContainer}>
                <p>JavaScript</p>
                <LinearProgress variant="determinate" value={56} color="inherit" />
              </div>
              <div className={s.codingProgressContainer}>
                <p>JavaScript</p>
                <LinearProgress variant="determinate" value={56} color="inherit" />
              </div>
              <div className={s.codingProgressContainer}>
                <p>JavaScript</p>
                <LinearProgress variant="determinate" value={56} color="inherit" />
              </div>
              <div className={s.codingProgressContainer}>
                <p>JavaScript</p>
                <LinearProgress variant="determinate" value={56} color="inherit" />
              </div>
            </Stack>
          </SkillsCard>
          <SkillsCard title="Knowledge" svg={SkillsSVG}>
            <div className={s.knowledgeListContainer}>
              <ul className={s.knowledgeList} style={{ listStyleImage: `url(${ListSVG})` }}>
                <li>User Experience Design (UX)</li> <li>Design Software: Figma, Photoshop</li> <li>Web Analytics Tools</li>
                <li>Scripting Languages: PHP, Python, JavaScript</li>
                <li>Responsive Web Design </li> <li>Site Layout</li>
              </ul>
            </div>
          </SkillsCard>
          <SkillsCard title="Languages" svg={LanguageSVG}>
            <Stack spacing={3} sx={{ color: "var(--accent)" }}>
              <div className={s.codingProgressContainer}>
                <p>JavaScript</p>
                <LinearProgress variant="determinate" value={56} color="inherit" />
              </div>
              <div className={s.codingProgressContainer}>
                <p>JavaScript</p>
                <LinearProgress variant="determinate" value={56} color="inherit" />
              </div>
              <div className={s.codingProgressContainer}>
                <p>JavaScript</p>
                <LinearProgress variant="determinate" value={56} color="inherit" />
              </div>
              <div className={s.codingProgressContainer}>
                <p>JavaScript</p>
                <LinearProgress variant="determinate" value={56} color="inherit" />
              </div>
            </Stack>
          </SkillsCard>
        </div>
      </motion.div>
    </SectionContainer>
  );
}
