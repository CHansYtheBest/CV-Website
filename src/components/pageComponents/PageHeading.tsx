import { Divider, Typography } from "@mui/material";
import React from "react";
import s from "./PageComponents.module.css";

interface HeadingProps {
  children: React.ReactNode;
}

const PageHeading: React.FC<HeadingProps> = (props) => {
  return (
    <Divider className={s.pageHeading}>
      <Typography variant="h6" component="h1">
        {props.children}
      </Typography>
    </Divider>
  );
};

export default PageHeading;
