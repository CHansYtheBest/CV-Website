import { AnimatePresence } from "framer-motion";
import React, { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ScrollContext } from "../layout/ContentContainer";
import PageChangeAnimation from "./PageChangeAnimation";

export default function AnimatePage(props: any) {
  let location = useLocation();
  console.log(location);

  let { top, scrollElement } = useContext(ScrollContext);

  let scrollToTop = () => {
    if (scrollElement !== null) {
      scrollElement.scrollTo(0, 0);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      scrollToTop();
    }, 500);
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait" initial={false}>
      <div key={location.pathname} style={{ width: "100%", height: "100%" }}>
        <PageChangeAnimation top={top} />
        {props.children}
      </div>
    </AnimatePresence>
  );
}
