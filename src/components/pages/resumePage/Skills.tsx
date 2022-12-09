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
                <div className={s.codingProgressText}>
                  <p>HTML</p>
                  <p>96%</p>
                </div>
                <LinearProgress variant="determinate" value={96} color="inherit" />
              </div>
              <div className={s.codingProgressContainer}>
                <div className={s.codingProgressText}>
                  <p>CSS</p>
                  <p>86%</p>
                </div>
                <LinearProgress variant="determinate" value={86} color="inherit" />
              </div>
              <div className={s.codingProgressContainer}>
                <div className={s.codingProgressText}>
                  <p>JavaScript</p>
                  <p>81%</p>
                </div>
                <LinearProgress variant="determinate" value={81} color="inherit" />
              </div>
              <div className={s.codingProgressContainer}>
                <div className={s.codingProgressText}>
                  <p>ReactJS</p>
                  <p>73%</p>
                </div>
                <LinearProgress variant="determinate" value={73} color="inherit" />
              </div>
              <div className={s.codingProgressContainer}>
                <div className={s.codingProgressText}>
                  <p>WordPress</p>
                  <p>62%</p>
                </div>
                <LinearProgress variant="determinate" value={62} color="inherit" />
              </div>
            </Stack>
          </SkillsCard>
          <SkillsCard title="Knowledge" svg={SkillsSVG}>
            <div className={s.knowledgeListContainer}>
              <ul className={s.knowledgeList} style={{ listStyleImage: `url(${ListSVG})` }}>
                <li>RESTful API interaction (AJAX)</li>
                <li>Version Control Systems: Git, GitHub</li>
                <li>ReactJS Experience</li>
                <li>Linux Experience (DualBoot system)</li>
                <li>Responsive and Adaptive Web Design </li>
                <li>WordPress Experience </li>
                <li>Quick Learning</li>
                <li>Web Analytics Tools</li>
              </ul>
            </div>
          </SkillsCard>
          <SkillsCard title="Languages" svg={LanguageSVG}>
            <Stack spacing={3} sx={{ color: "var(--accent)" }}>
              <div className={s.codingProgressContainer}>
                <div className={s.codingProgressText}>
                  <p>Russian</p>
                  <p>C2</p>
                </div>
                <LinearProgress variant="determinate" value={100} color="inherit" />
              </div>
              <div className={s.codingProgressContainer}>
                <div className={s.codingProgressText}>
                  <p>English</p>
                  <p>C1</p>
                </div>
                <LinearProgress variant="determinate" value={84} color="inherit" />
              </div>
              <div className={s.codingProgressContainer}>
                <div className={s.codingProgressText}>
                  <p>Romanian</p>
                  <p>B2</p>
                </div>
                <LinearProgress variant="determinate" value={68} color="inherit" />
              </div>
              <div className={s.codingProgressContainer}>
                <div className={s.codingProgressText}>
                  <p>Ukrainian</p>
                  <p>A2</p>
                </div>
                <LinearProgress variant="determinate" value={36} color="inherit" />
              </div>
            </Stack>
          </SkillsCard>
        </div>
      </motion.div>
    </SectionContainer>
  );
}
