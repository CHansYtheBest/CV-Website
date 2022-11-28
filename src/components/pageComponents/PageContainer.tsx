import React from "react";
import s from "./PageComponents.module.css";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const PageContainer: React.FC<ContainerProps> = (props) => {
  return <section className={`${s.pageContainer} ${props.className ? props.className : ""}`}>{props.children}</section>;
};

export default PageContainer;
