import { Link, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import PageContainer from "../../pageComponents/PageContainer";
import PageHeading from "../../pageComponents/PageHeading";
import SectionContainer from "../../pageComponents/SectionContainer";
import SectionHeading from "../../pageComponents/SectionHeading";
import FizPribor0 from "../../../images/Fizpribor0.png";
import FizPribor1 from "../../../images/Fizpribor1.png";
import FizPribor2 from "../../../images/Fizpribor2.png";
import FoodQuiz0 from "../../../images/Foodquiz0.png";
import FoodQuiz1 from "../../../images/Foodquiz1.png";
import FoodQuiz2 from "../../../images/Foodquiz2.png";
import FoodQuiz3 from "../../../images/Foodquiz3.png";
import ReactSocial0 from "../../../images/Reactsocial0.png";
import ReactSocial1 from "../../../images/Reactsocial1.png";
import ReactSocial2 from "../../../images/Reactsocial2.png";
import Portfolio0 from "../../../images/Portfolio0.png";
import Portfolio1 from "../../../images/Portfolio1.png";
import s from "./WorksPage.module.css";
import { motion } from "framer-motion";
import { ScrollContext } from "../../layout/ContentContainer";
import { WorksCard } from "./WorksCard";

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
        <motion.div initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }}>
          <SectionHeading className={s.header}>My Projects</SectionHeading>
          <WorksCard
            title="ReactJS + TypeScript portfolio website"
            img={Portfolio0}
            description="This website! Basic but stylish SPA with complex animations made possible with framer-motion and MaterialUI."
            index={4}
            open={modelOpen}
            setOpen={setModelOpen}
          >
            <Typography component="h4" variant="h5" className={s.modalTitle}>
              Portfolio Website
            </Typography>
            <div className={s.modalContent}>
              <Typography component="p" variant="body1" className={s.modalText}>
                My current portfolio website. It's realized with TypeScript and ReactJS with the help of React-Router-DOMv6 for routing. Styled with
                MaterialUI, framer-motion and CSS. You can{" "}
                <Link color={"#389197"} href="https://github.com/CHansYtheBest/ReactSocial">
                  look though the source code here
                </Link>
                .
              </Typography>
              <div className={s.modalImg}>
                <img src={Portfolio1} alt="" />
                <Typography component="p" variant="caption">
                  1. About page
                </Typography>
              </div>
            </div>
          </WorksCard>
          <WorksCard
            title="Social Network ReactSocial"
            img={ReactSocial0}
            description="A social network Single Page Application built with ReactJS and the Redux state manager for interaction with SamuraiJS Social Network API. "
            index={3}
            open={modelOpen}
            setOpen={setModelOpen}
          >
            <Typography component="h4" variant="h5" className={s.modalTitle}>
              ReactSocial
            </Typography>
            <div className={s.modalContent}>
              <Typography component="p" variant="body1" className={s.modalText}>
                My first complex ReactJS project. It's built fully with Flux concept and best architectural practices in mind and without class
                components. You can try it yourself{" "}
                <Link color={"#389197"} href="https://chansythebest.github.io/ReactSocial/">
                  here
                </Link>{" "}
                or{" "}
                <Link color={"#389197"} href="https://github.com/CHansYtheBest/ReactSocial">
                  look though the source code
                </Link>
                . You can{" "}
                <Link color={"#389197"} href="https://social-network.samuraijs.com/signUp">
                  register a new account
                </Link>{" "}
                or use a test account. <br /> Email: free@samuraijs.com
                <br /> Password: free
              </Typography>
              <div className={s.modalImg}>
                <img src={ReactSocial0} alt="" />
                <Typography component="p" variant="caption">
                  1. Profile page
                </Typography>
              </div>
              <Typography component="p" variant="body1" className={s.modalText}>
                State management of the application was first made with pure Redux, but on later stages was refactored to use redux-toolkit.
              </Typography>
              <div className={s.modalImg}>
                <img src={ReactSocial1} alt="" />
                <Typography component="p" variant="caption">
                  2. Login page
                </Typography>
              </div>
              <Typography component="p" variant="body1" className={s.modalText}>
                Forms are managed using formik, validation through Yup and styling with MaterialsUI. AJAX request are managed with the help of axios.
              </Typography>
              <div className={s.modalImg}>
                <img src={ReactSocial2} alt="" />
                <Typography component="p" variant="caption">
                  3. Friends page
                </Typography>
              </div>
            </div>
          </WorksCard>
          <WorksCard
            title='Website for "Moskovskiy Zavod «Fizpribor»"'
            img={FizPribor0}
            description="Corporate website designed and developed by me using WordPress for administration and content-management of the website."
            index={1}
            open={modelOpen}
            setOpen={setModelOpen}
          >
            <Typography component="h4" variant="h5" className={s.modalTitle}>
              Fizpribor's Website
            </Typography>
            <div className={s.modalContent}>
              <Typography component="p" variant="body1" className={s.modalText}>
                This is a corporate website running on the CMS WordPress with minimal plugins. The design was made using Figma, then a html version
                was made, which has been transformed in a custom theme for WordPress. The only plugins used are for SEO optimization and monitoring.
                You can check out this project{" "}
                <Link color={"#389197"} href="https://fizpribor.ru/">
                  here
                </Link>
                .
              </Typography>
              <div className={s.modalImg}>
                <img src={FizPribor0} alt="" />
                <Typography component="p" variant="caption">
                  1. Landing page
                </Typography>
              </div>
              <Typography component="p" variant="body1" className={s.modalText}>
                Every page of the website is fully adaptive with every screen width in mind.
              </Typography>
              <div className={s.modalImg}>
                <img src={FizPribor1} alt="" />
                <Typography component="p" variant="caption">
                  2. Mobile version of the landing page
                </Typography>
              </div>
              <Typography component="p" variant="body1" className={s.modalText}>
                Any content on the website is fully editable though the admin panel in WordPress to keep the information up to date without the need
                of a coder.
              </Typography>
              <div className={s.modalImg}>
                <img src={FizPribor2} alt="" />
                <Typography component="p" variant="caption">
                  3. Photos section of the landing page.
                </Typography>
              </div>
            </div>
          </WorksCard>
          <WorksCard
            title="Recipe quiz FoodQuizAPI"
            img={FoodQuiz0}
            description="A learning project web-interface for interacting with SpoontacularAPI in a quiz format built with JS without any libraries."
            index={2}
            open={modelOpen}
            setOpen={setModelOpen}
          >
            <Typography component="h4" variant="h5" className={s.modalTitle}>
              FoodQuizAPI
            </Typography>
            <div className={s.modalContent}>
              <Typography component="p" variant="body1" className={s.modalText}>
                This is a project I presented for my graduation theses. It is a quiz website built with HTML, CSS and a fully library free JS. At the
                end of the quiz a result page is generated. You can try it yourself{" "}
                <Link color={"#389197"} href="https://chansythebest.github.io/FoodQuizAPI/search.html">
                  here
                </Link>{" "}
                or look though the source code{" "}
                <Link color={"#389197"} href="https://github.com/CHansYtheBest/FoodQuizAPI">
                  here
                </Link>
                .
              </Typography>
              <div className={s.modalImg}>
                <img src={FoodQuiz1} alt="" />
                <Typography component="p" variant="caption">
                  1. First step of the quiz
                </Typography>
              </div>
              <Typography component="p" variant="body1" className={s.modalText}>
                When making this project I fully utilized JS tools for DOM manipulation, to place fetched data in DOM elements.
              </Typography>
              <div className={s.modalImg}>
                <img src={FoodQuiz2} alt="" />
                <Typography component="p" variant="caption">
                  2. Fifth step of the quiz
                </Typography>
              </div>
              <Typography component="p" variant="body1" className={s.modalText}>
                To send fetched data to the results page JS local storage was used.
              </Typography>
              <div className={s.modalImg}>
                <img src={FoodQuiz3} alt="" />
                <Typography component="p" variant="caption">
                  3. Results page, generated using only options from previous images
                </Typography>
              </div>
            </div>
          </WorksCard>
        </motion.div>
      </SectionContainer>
    </PageContainer>
  );
}

export default WorksPage;
