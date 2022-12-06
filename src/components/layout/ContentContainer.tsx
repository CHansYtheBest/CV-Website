import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import s from "./Layout.module.css";
import Navigation from "./navigation/Navigation";
import UserCard from "./userCard/UserCard";

let element = document.getElementById("bg");

interface ScrollContextType {
  top: number | undefined;
  scrollElement: HTMLElement | null;
}
export const ScrollContext = React.createContext<ScrollContextType>({ top: 0, scrollElement: element });

function Container() {
  const [scrollPosition, setScrollPosition] = useState<number | undefined>(0);

  useEffect(() => {
    element = document.getElementById("bg");
    element?.addEventListener("scroll", () => {
      handleScroll(element);
    });
  }, [setScrollPosition]);

  const handleScroll = (element: HTMLElement | null) => {
    let position = element?.scrollTop;
    setScrollPosition(position);
  };

  return (
    <section id="bg" className={s.contentBackground}>
      <div className={s.contentContainer}>
        <ScrollContext.Provider value={{ top: scrollPosition, scrollElement: element }}>
          <Outlet />
        </ScrollContext.Provider>
      </div>
    </section>
  );
}

export default function ContentContainer() {
  return (
    <div className={s.container}>
      <UserCard />
      <Container />
      <Navigation />
    </div>
  );
}
