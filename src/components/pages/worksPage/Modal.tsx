import React, { useContext } from "react";
import s from "./WorksPage.module.css";
import { motion } from "framer-motion";
import { ScrollContext } from "../../layout/ContentContainer";

interface BackdropProps {
  children: React.ReactNode;
  onClick: () => void;
  style?: any;
}
const Backdrop: React.FC<BackdropProps> = (props) => (
  <motion.div
    className={s.backdrop}
    style={props.style}
    onClick={props.onClick}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    {props.children}
  </motion.div>
);
interface ModalProps {
  children: React.ReactNode;
  open: false | number;
  setOpen: (opened: number | false) => void;
}
export const Modal: React.FC<ModalProps> = (props) => {
  function handleClose() {
    props.setOpen(false);
  }
  let { top } = useContext(ScrollContext);

  const dropIn = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
    exit: {
      y: "100vh",
      opacity: 0,
    },
  };

  return (
    <Backdrop onClick={handleClose} style={{ top: `${top}px`, bottom: `-${top}px` }}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={{ ease: "easeInOut" }}
        className={s.modal}
      >
        <button className={s.modalCloseButton} onClick={handleClose}>
          X
        </button>
        <div className={s.modalInnerContainer}>{props.children}</div>
      </motion.div>
    </Backdrop>
  );
};
