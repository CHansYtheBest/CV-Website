import React from "react";
import { Outlet } from "react-router-dom";
import s from "./Layout.module.css";
import Navigation from "./navigation/Navigation";
import UserCard from "./userCard/UserCard";

export default function ContentContainer() {
  return (
    <div className={s.container}>
      <UserCard />
      <section className={s.contentBackground}>
        <div className={s.contentContainer}>
          <Outlet />
        </div>
      </section>
      <Navigation />
    </div>
  );
}
