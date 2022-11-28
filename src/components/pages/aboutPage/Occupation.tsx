import { Avatar, Card, CardContent, Typography } from "@mui/material";
import React from "react";
import SectionContainer from "../../pageComponents/SectionContainer";
import SectionHeading from "../../pageComponents/SectionHeading";
import s from "./AboutPage.module.css";
import ReactSVG from "../../../images/React.svg";
import WordPressSVG from "../../../images/WordPress.svg";
import DesignSVG from "../../../images/Design.svg";
import { motion } from "framer-motion";

export default function Occupation() {
  return (
    <SectionContainer className={s.whatIdoContainer} gridArea="whatIDo">
      <motion.div initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }}>
        <SectionHeading className={s.whatIdoHeding}>My occupation</SectionHeading>
        <div style={{ display: "flex" }}>
          <Card className={s.whatIdoCard}>
            <CardContent style={{ zIndex: 5, position: "relative" }}>
              <Avatar className={s.whatIdoSVG} src={ReactSVG} variant="square" style={{ width: "55px", height: "50px" }} />
              <Typography variant="h6" component="h3" style={{ margin: "5px auto" }}>
                FrontEnd Development
              </Typography>
              <Typography variant="body2" component="p">
                Qualified graduate and emerging professional eager to build industry career. Quick learner with great people skills and focus on
                problemsolving.
              </Typography>
            </CardContent>
          </Card>
          <Card className={s.whatIdoCard}>
            <CardContent style={{ zIndex: 5, position: "relative" }}>
              <Avatar className={s.whatIdoSVG} src={WordPressSVG} variant="square" style={{ width: "55px", height: "50px" }} />
              <Typography variant="h6" component="h3" style={{ margin: "5px auto" }}>
                WordPress Development
              </Typography>
              <Typography variant="body2" component="p">
                Qualified graduate and emerging professional eager to build industry career. Quick learner with great people skills and focus on
                problemsolving.
              </Typography>
            </CardContent>
          </Card>
          <Card className={s.whatIdoCard}>
            <CardContent style={{ zIndex: 5, position: "relative" }}>
              <Avatar className={s.whatIdoSVG} src={DesignSVG} variant="square" style={{ width: "55px", height: "50px" }} />
              <Typography variant="h6" component="h3" style={{ margin: "5px auto" }}>
                UI/UX Design
              </Typography>
              <Typography variant="body2" component="p">
                Qualified graduate and emerging professional eager to build industry career. Quick learner with great people skills and focus on
                problemsolving.
              </Typography>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </SectionContainer>
  );
}
