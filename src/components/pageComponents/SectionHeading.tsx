import { Divider, Typography } from "@mui/material";
import React from "react";
import s from "./PageComponents.module.css";

interface HeadingProps {
  children: any;
}

const SectionHeading: React.FC<HeadingProps> = (props) => {
  return (
    <div className={s.sectionHeading}>
      <Typography variant="h6" component="h2">
        {props.children}
      </Typography>
      <Divider />
    </div>
  );
};

export default SectionHeading;
