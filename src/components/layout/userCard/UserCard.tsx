import { Avatar, Typography } from "@mui/material";
import React from "react";
import s from "./UserCard.module.css";
import { Container } from "@mui/system";
import avatar from "../../../images/16415413461370.jpg";
import TextSlotsAnimation from "./TextSlotsAnimation";
import EmailOutline from "../../../images/EmailOutline.svg";
import PhoneOutline from "../../../images/PhoneOutline.svg";

export default function UserCard() {
  return (
    <section className={s.userCardContainer}>
      <Container sx={{ flexDirection: "column", display: "flex", alignItems: "center", mt: "30px" }}>
        <Avatar alt="Maxim Chibotaru" src={avatar} sx={{ width: "100px", height: "100px", border: "1px solid white" }} />
        <Typography variant="h5" component="h1" sx={{ fontWeight: 500, textAlign: "center", mt: "10px" }}>
          Maxim Chibotaru
        </Typography>
        <TextSlotsAnimation />
      </Container>
      <Container sx={{ flexDirection: "column", display: "flex", alignItems: "center", mt: "30px" }}>
        <div className={s.contactInfoContainer}>
          <span className={s.contactInfo}>
            <img src={PhoneOutline} alt="" />: +3737832981
          </span>
          <span className={s.contactInfo}>
            <img src={EmailOutline} alt="" />: maks.chibotaru <br /> @gmail.com
          </span>
        </div>
      </Container>
    </section>
  );
}
