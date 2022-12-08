import { AnimatePresence, motion, useAnimation } from "framer-motion";
import React from "react";
import s from "./ResumePage.module.css";

interface ButtonProps {
  children: React.ReactNode;
  title: string;
  svg: string;
  index: number;
  opened: number | false;
  variant?: "top-to-bottom" | "left-to-right";
  setOpened: (opened: number | false) => void;
}

const CollapsebleButton: React.FC<ButtonProps> = (props) => {
  const controls = useAnimation();
  const variant = props.variant ? props.variant : "top-to-bottom";

  let opened = props.opened === props.index;

  const changeOpened = () => {
    props.setOpened(opened ? false : props.index);
    opened ? controls.start("collapsed") : controls.start("open");
  };

  const buttonVariants = {
    open: { paddingLeft: "10px", paddingRight: "10px", width: "fit-content", transition: { delay: 0 } },
    collapsed: { paddingLeft: "20px", paddingRight: "20px", width: "30px", transition: { delay: 0.2 } },
  };

  const contentsVariants =
    variant === "top-to-bottom"
      ? {
          open: { y: 0, opacity: 1, transition: { delay: 0.2 } },
          collapsed: { y: -55, opacity: 0, transition: { delay: 0 } },
        }
      : {
          open: { x: 0, opacity: 1, transition: { delay: 0.2 } },
          collapsed: { x: -300, opacity: 0, transition: { delay: 0 } },
        };

  return (
    <div className={s.buttonContainer}>
      <motion.div
        whileHover={{ boxShadow: "rgba(0, 0, 0, 0.3) 0px 4px 4px 0px" }}
        whileTap={{ boxShadow: "inset rgb(0, 0, 0, 0.3) 0px 2px 4px 2px" }}
        variants={buttonVariants}
        initial={opened ? "open" : "collapsed"}
        animate={opened ? "open" : "collapsed"}
        className={s.animatedButton}
        onClick={changeOpened}
      >
        <img src={props.svg} alt="svg" />
        <h3>{props.title}</h3>
      </motion.div>
      <AnimatePresence initial={false}>
        {opened && (
          <motion.div className={s.buttonContents} variants={contentsVariants} initial="collapsed" animate="open" exit="collapsed">
            {props.children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CollapsebleButton;
