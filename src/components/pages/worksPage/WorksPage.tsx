import { Button, Card, CardContent } from "@mui/material";
import React, { useContext, useState } from "react";
import PageContainer from "../../pageComponents/PageContainer";
import PageHeading from "../../pageComponents/PageHeading";
import SectionContainer from "../../pageComponents/SectionContainer";
import SectionHeading from "../../pageComponents/SectionHeading";
import FizPribor0 from "../../../images/WorkFizPribor0.png";
import s from "./WorksPage.module.css";
import { AnimatePresence, motion } from "framer-motion";
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

const Modal: React.FC<ModalProps> = (props) => {
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
        style={{ top: `${top}px`, bottom: `-${top}px` }}
        transition={{ ease: "easeInOut" }}
        className={s.modal}
      >
        {props.children}
      </motion.div>
    </Backdrop>
  );
};

interface WorksCardProps {
  title: string;
  img: string;
  description: string;
  children?: React.ReactNode;
  open: false | number;
  index: number;
  setOpen: (opened: number | false) => void;
}

function WorksCard(props: WorksCardProps) {
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

function WorksPage() {
  const [modelOpen, setModelOpen] = useState<false | number>(false);
  let { scrollElement } = useContext(ScrollContext);
  if (modelOpen !== false) {
    if (scrollElement !== null) {
      scrollElement.classList.add("noScroll");
    }
  } else {
    if (scrollElement !== null) {
      scrollElement.classList.remove("noScroll");
    }
  }
  return (
    <PageContainer className={s.worksPageGrid}>
      <PageHeading>Works page</PageHeading>
      <SectionContainer gridArea="worksPage">
        <SectionHeading className={s.header}>My Projects</SectionHeading>
        <WorksCard
          title='Website for "Moskovskiy Zavod «Fizpribor»"'
          img={FizPribor0}
          description="Where does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical."
          index={1}
          open={modelOpen}
          setOpen={setModelOpen}
        >
          <img src={FizPribor0} alt="" />
          <img src={FizPribor0} alt="" />
        </WorksCard>
        <WorksCard
          title=""
          img={FizPribor0}
          description="Where does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical."
          index={2}
          open={modelOpen}
          setOpen={setModelOpen}
        >
          broooooo
        </WorksCard>
        <WorksCard
          title=""
          img={FizPribor0}
          description="Where does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical."
          index={3}
          open={modelOpen}
          setOpen={setModelOpen}
        >
          broooooo
        </WorksCard>
        <WorksCard
          title=""
          img={FizPribor0}
          description="Where does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical."
          index={4}
          open={modelOpen}
          setOpen={setModelOpen}
        >
          broooooo
        </WorksCard>
      </SectionContainer>
    </PageContainer>
  );
}

export default WorksPage;
