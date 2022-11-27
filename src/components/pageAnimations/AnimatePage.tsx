import { AnimatePresence } from "framer-motion";
import React from "react";
import { useLocation } from "react-router-dom";
import PageChangeAnimation from "./PageChangeAnimation";

export default function AnimatePage(props: any) {
  let location = useLocation();
  return (
    <AnimatePresence mode="wait" initial={false}>
      <div key={location.pathname} style={{ width: "100%", height: "100%" }}>
        <PageChangeAnimation />
        {props.children}
      </div>
    </AnimatePresence>
  );
}
