import { Avatar, Card, CardContent, CardHeader, Typography } from "@mui/material";
import React from "react";
import SectionContainer from "../../pageComponents/SectionContainer";
import SectionHeading from "../../pageComponents/SectionHeading";
import s from "./AboutPage.module.css";
import ReactSVG from "../../../images/React.svg";

export default function Occupation() {
  return (
    <SectionContainer className={s.whatIdoContainer} gridArea="whatIDo">
      <SectionHeading>My occupation</SectionHeading>
      <div style={{ display: "flex" }}>
        <Card>
          <CardHeader avatar={<Avatar src={ReactSVG} />} />
          <CardContent>
            <Typography variant="h6" component="h3">
              Web Development
            </Typography>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <Typography variant="h6" component="h3">
              Web Development
            </Typography>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <Typography variant="h6" component="h3">
              Web Development
            </Typography>
          </CardContent>
        </Card>
      </div>
    </SectionContainer>
  );
}
