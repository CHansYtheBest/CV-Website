import { Avatar, Button, Card, CardContent, Typography } from "@mui/material";
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
      <motion.div
        style={{ display: "flex", flexDirection: "column" }}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <SectionHeading className={s.whatIdoHeding}>
          My occupation
        </SectionHeading>
        <div style={{ display: "flex" }}>
          <Card className={s.whatIdoCard}>
            <CardContent style={{ zIndex: 5, position: "relative" }}>
              <Avatar
                className={s.whatIdoSVG}
                src={ReactSVG}
                variant="square"
                style={{ width: "55px", height: "50px" }}
              />
              <Typography
                variant="h6"
                component="h3"
                style={{ margin: "5px auto" }}
              >
                FrontEnd Development
              </Typography>
              <Typography variant="body1" component="p">
                Development of web applications of any complexity using the
                ReactJS framework. Experience in state management through Redux.
              </Typography>
            </CardContent>
          </Card>
          <Card className={s.whatIdoCard}>
            <CardContent style={{ zIndex: 5, position: "relative" }}>
              <Avatar
                className={s.whatIdoSVG}
                src={WordPressSVG}
                variant="square"
                style={{ width: "55px", height: "50px" }}
              />
              <Typography
                variant="h6"
                component="h3"
                style={{ margin: "5px auto" }}
              >
                WordPress Development
              </Typography>
              <Typography variant="body1" component="p">
                Building websites and custom themes for WordPress with database
                connection and easy-to-use admin panel. Management of plugins
                and SEO.
              </Typography>
            </CardContent>
          </Card>
          <Card className={s.whatIdoCard}>
            <CardContent style={{ zIndex: 5, position: "relative" }}>
              <Avatar
                className={s.whatIdoSVG}
                src={DesignSVG}
                variant="square"
                style={{ width: "55px", height: "50px" }}
              />
              <Typography
                variant="h6"
                component="h3"
                style={{ margin: "5px auto" }}
              >
                UI/UX Design
              </Typography>
              <Typography variant="body1" component="p">
                Branding-compatible design of UI elements and full applications
                for any platform using tools like Figma.
              </Typography>
            </CardContent>
          </Card>
        </div>
        <Button
          href="https://drive.google.com/file/d/17KdV9l_k2YjRBrHCqNVxiCgxHAzBJvBf/view?usp=sharing"
          target="_blank"
          variant="contained"
          className={s.downloadButton}
        >
          Download CV
        </Button>
      </motion.div>
    </SectionContainer>
  );
}
