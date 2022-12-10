import { Button, Card, CardContent } from "@mui/material";
import React from "react";
import s from "./WorksPage.module.css";
import { AnimatePresence } from "framer-motion";
import { Modal } from "./Modal";

interface WorksCardProps {
  title: string;
  img: string;
  description: string;
  children?: React.ReactNode;
  open: false | number;
  index: number;
  setOpen: (opened: number | false) => void;
}
export function WorksCard(props: WorksCardProps) {
  return (
    <>
      <Card className={s.card}>
        <AnimatePresence initial={false}>
          {props.index === props.open && (
            <Modal open={props.open} setOpen={props.setOpen}>
              {props.children}
            </Modal>
          )}
        </AnimatePresence>
        <CardContent className={s.worksCard}>
          <img src={props.img} alt="work" />
          <div className={s.worksCardContainer}>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <Button
              onClick={() => {
                props.setOpen(props.index);
              }}
              className={s.worksCardButton}
              variant="contained"
            >
              Read more
            </Button>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
