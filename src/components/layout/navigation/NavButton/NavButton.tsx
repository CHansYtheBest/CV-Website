import { motion } from "framer-motion";
import React from "react";
import { useNavigate } from "react-router-dom";
import s from "../Navigation.module.css";

interface NavButtonProps {
  to: string;
  svg: string;
  children: string;
}

let NavButton: React.FC<NavButtonProps> = (props: any) => {
  const navigate = useNavigate();
  const onButtonClick = () => {
    navigate(props.to);
  };

  return (
    <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} className={s.buttonContainer} onClick={onButtonClick}>
      <img src={props.svg} alt={props.children} />
      {props.children}
    </motion.div>
  );
};
export default NavButton;
