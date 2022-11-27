import React from "react";
import NavButton from "./NavButton/NavButton";
import s from "./Navigation.module.css";
import AboutSVG from "../../../images/AboutButton.svg";
import ResumeSVG from "../../../images/ResumeButton.svg";
import WorksSVG from "../../../images/WorksButton.svg";
import ContactSVG from "../../../images/ContactButton.svg";

export default function Navigation() {
  return (
    <section className={s.navigationContainer}>
      <NavButton to="/" svg={AboutSVG}>
        About
      </NavButton>
      <NavButton to="/resume" svg={ResumeSVG}>
        Resume
      </NavButton>
      <NavButton to="/works" svg={WorksSVG}>
        Works
      </NavButton>
      <NavButton to="/contact" svg={ContactSVG}>
        Contact
      </NavButton>
    </section>
  );
}
