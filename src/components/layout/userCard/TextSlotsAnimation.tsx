import { AnimatePresence, motion, useAnimation } from "framer-motion";
import React, { useEffect, useState } from "react";
import s from "./TextSlotsAnimation.module.css";

export default function TextSlotsAnimation() {
  const [stacksArr, setStacksArr] = useState([
    "React Developer",
    "WordPress Dev",
    "UI/UX Designer",
    "React Developer",
    "WordPress Dev",
    "UI/UX Designer",
  ]);
  const [spansArr, setSpansArr] = useState<any>([]);
  const controls = useAnimation();
  useEffect(() => {
    controls.start({ y: [0, 0, -150, -150] });
  });

  let whenAnimationEnded = () => {
    let newStacksArr = stacksArr;
    newStacksArr.unshift(stacksArr[5]);
    newStacksArr.pop();
    setStacksArr(newStacksArr);
    let newSpansArr: any[];
    newSpansArr = React.Children.toArray(newStacksArr.map((spanText) => <span className={s.stackSpan}>{spanText}</span>));
    setSpansArr(newSpansArr);
    controls.start({ y: [0, 0, -150, -150] });
  };

  useEffect(() => {
    let newSpansArr: any[];
    newSpansArr = React.Children.toArray(stacksArr.map((spanText) => <span className={s.stackSpan}>{spanText}</span>));
    setSpansArr(newSpansArr);
  }, [stacksArr]);

  return (
    <div className={s.container}>
      <AnimatePresence>
        <motion.div
          className={s.innerContainer}
          onAnimationComplete={whenAnimationEnded}
          initial={{ y: 0 }}
          animate={controls}
          transition={{ y: { duration: 4, type: "tween" } }}
        >
          {spansArr}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
