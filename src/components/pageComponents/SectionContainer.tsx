import React from "react";
import s from "./PageComponents.module.css";

interface ContainerProps {
  children: React.ReactNode;
  gridArea?: string;
  className?: string;
}

const SectionContainer: React.FC<ContainerProps> = (props) => {
  return (
    <section className={`${s.sectionContainer} ${props.className ? props.className : ""}`} style={{ gridArea: props.gridArea }}>
      {props.children}
    </section>
  );
};

export default SectionContainer;
