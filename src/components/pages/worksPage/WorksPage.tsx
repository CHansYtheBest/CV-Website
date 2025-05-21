import { Link, Typography } from "@mui/material";
import React, { useContext, useState, useEffect } from "react";
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
import Elan0 from "../../../images/Elan0.png";
import Elan1 from "../../../images/Elan1.png";
import Elan2 from "../../../images/Elan2.png";
import DB0 from "../../../images/DB0.png";
import DB1 from "../../../images/DB1.png";
import DB2 from "../../../images/DB2.png";
import DB3 from "../../../images/DB3.png";
import MBT0 from "../../../images/MBT0.png";
import MBT1 from "../../../images/MBT1.png";
import MBT2 from "../../../images/MBT2.png";
import FAYD0 from "../../../images/FAYD0.png";
import FAYD1 from "../../../images/FAYD1.png";
import StoneI0 from "../../../images/StoneI0.png";
import StoneI1 from "../../../images/StoneI1.png";
import StoneI2 from "../../../images/StoneI2.png";
import StoneI3 from "../../../images/StoneI3.png";
import Ens0 from "../../../images/Ens0.png";
import Ens1 from "../../../images/Ens1.png";
import s from "./WorksPage.module.css";
import { motion } from "framer-motion";
import { ScrollContext } from "../../layout/ContentContainer";
import { WorksCard } from "./WorksCard";

const projectsData = [
  {
    id: 10,
    title: "Enspire Creative",
    cardImage: Ens0,
    cardDescription:
      "WordPress corporate website for a digital agency specializing in branding, web design, development, and marketing solutions. Features include animated SVGs with Lottie, customizable content blocks with Swiper, and complex animations using GSAP.",
    modalChildren: (
      <>
        <Typography component="h4" variant="h5" className={s.modalTitle}>
          Enspire Creative
        </Typography>
        <div className={s.modalContent}>
          <Typography component="p" variant="body1" className={s.modalText}>
            <b>Enspire Creative</b> is the corporate website for a digital
            agency specializing in branding, web design and development, and
            marketing solutions. The website was developed using modern tools
            and technologies to create an engaging and interactive user
            experience. Key features include:
            <ul>
              <li>
                Animated SVGs powered by <b>Lottie</b> for visually appealing
                interactions
              </li>
              <li>
                Customizable content blocks implemented with <b>Swiper</b>,
                allowing dynamic and responsive carousels
              </li>
              <li>
                Advanced form handling using <b>Gravity Forms</b> for lead
                generation and client inquiries
              </li>
              <li>
                Lightbox functionality for media galleries using <b>Fancybox</b>
              </li>
              <li>
                Complex animations in custom blocks created with <b>GSAP</b> for
                smooth transitions and effects
              </li>
            </ul>
            The website reflects the agency's expertise in delivering creative
            solutions and provides a seamless browsing experience for potential
            clients. Built with a custom WordPress theme and plugin, the site is
            fully responsive and optimized for performance.
            <br />
            Explore the live website{" "}
            <Link
              color="#389197"
              href="https://enspirecreative.com"
              target="_blank"
              rel="noopener"
            >
              here
            </Link>
            .
          </Typography>
          <div className={s.modalImg}>
            <img src={Ens0} alt="Enspire Creative homepage screenshot" />
            <Typography component="p" variant="caption">
              1. Enspire Creative – Homepage with animated SVGs
            </Typography>
          </div>
          <div className={s.modalImg}>
            <img src={Ens1} alt="Custom Swiper block example" />
            <Typography component="p" variant="caption">
              2. Custom Swiper block showcasing dynamic content
            </Typography>
          </div>
        </div>
      </>
    ),
  },
  {
    id: 9,
    title: "Stone Impressions",
    cardImage: StoneI0,
    cardDescription:
      "Custom WordPress website for a tile manufacturer that needed WooCommerce integration, custom variation selectors, widget-based custom sections, and fully customized styles for all WooCommerce pages.",
    modalChildren: (
      <>
        <Typography component="h4" variant="h5" className={s.modalTitle}>
          Stone Impressions
        </Typography>
        <div className={s.modalContent}>
          <Typography component="p" variant="body1" className={s.modalText}>
            <b>Stone Impressions</b> is a custom WordPress website designed for
            a tile manufacturer, featuring a fully integrated WooCommerce store
            with advanced customization. The platform includes:
            <ul>
              <li>
                Custom variation selectors for product options like size and
                pattern
              </li>
              <li>
                Widget-based custom sections for showcasing collections, design
                inspiration, and featured products
              </li>
              <li>
                Fully customized WooCommerce pages, including product, cart, and
                checkout pages made using custom templates, actions and filters
              </li>
              <li>
                Responsive design optimized for both desktop and mobile users
              </li>
            </ul>
            The website allows users to explore a wide range of tile designs
            with detailed product pages, including descriptions, and
            customization options. Built with a custom built WordPress child
            theme and plugin, the site ensures a seamless shopping experience
            for customers.
            <br />
            Explore the live website{" "}
            <Link
              color="#389197"
              href="https://stoneimpressions.com/artisan-stone-tile-from-stoneimpressions/artisan-stone-tile-pattern-tiles/"
              target="_blank"
              rel="noopener"
            >
              here
            </Link>
            .
          </Typography>
          <div className={s.modalImg}>
            <img src={StoneI1} alt="Stone Impressions website screenshot" />
            <Typography component="p" variant="caption">
              1. Stone Impressions – Product page with custom variation
              selectors
            </Typography>
          </div>
          <div className={s.modalImg}>
            <img src={StoneI2} alt="Custom WooCommerce cart page" />
            <Typography component="p" variant="caption">
              2. Fully customized WooCommerce cart page
            </Typography>
          </div>
          <div className={s.modalImg}>
            <img src={StoneI3} alt="Widget-based custom section" />
            <Typography component="p" variant="caption">
              3. Widget-based custom section with additional information
            </Typography>
          </div>
        </div>
      </>
    ),
  },
  {
    id: 8,
    title: "Fitness At Your Door",
    cardImage: FAYD0,
    cardDescription:
      "WordPress fitness marketplace for connecting clients with certified trainers. Made with a custom theme and custom plugin.",
    modalChildren: (
      <>
        <Typography component="h4" variant="h5" className={s.modalTitle}>
          Fitness At Your Door
        </Typography>
        <div className={s.modalContent}>
          <Typography component="p" variant="body1" className={s.modalText}>
            <b>Fitness At Your Door</b> is a custom WordPress marketplace that
            connects clients with certified fitness trainers. The platform
            features:
            <ul>
              <li>Trainer search and booking system</li>
              <li>Bookly and LearnDash implementation</li>
              <li>Integrated online payments using WooCommerce</li>
              <li>Custom user dashboards for trainers and clients</li>
              <li>Fully responsive design</li>
            </ul>
            Built with a bespoke WordPress theme and plugin, the site enables
            seamless management of trainers, schedules, and client interactions.
            <br />
            Explore the live website{" "}
            <Link
              color="#389197"
              href="https://fitnessatyourdoor.com"
              target="_blank"
              rel="noopener"
            >
              here
            </Link>
            .
          </Typography>
          <div className={s.modalImg}>
            <img src={FAYD0} alt="Fitness At Your Door website screenshot" />
            <Typography component="p" variant="caption">
              1. Fitness At Your Door – Homepage
            </Typography>
          </div>
          <div className={s.modalImg}>
            <img src={FAYD1} alt="Fitness At Your Door website screenshot" />
            <Typography component="p" variant="caption">
              1. Fitness At Your Door – Search and Booking page made with
              FacetWP
            </Typography>
          </div>
        </div>
      </>
    ),
  },
  {
    id: 7,
    title: "My Treatment website family",
    cardImage: MBT0,
    cardDescription:
      "Custom WordPress theme powering multiple medical websites, featuring dynamic color schemes via Redux Framework and custom ACF blocks.",
    modalChildren: (
      <>
        <Typography component="h4" variant="h5" className={s.modalTitle}>
          My Treatment website family
        </Typography>
        <div className={s.modalContent}>
          <Typography component="p" variant="body1" className={s.modalText}>
            This is a theme with custom blocks made with ACF and the ability to
            customize settings like color for a specific site via admin page
            with Redux Framework, which changes css variables. You can look
            through the three sites available now{" "}
            <Link color={"#389197"} href="https://mybodytreatment.com/">
              here
            </Link>{" "}
            ,{" "}
            <Link color={"#389197"} href="https://myfillertreatment.com/">
              here
            </Link>{" "}
            and{" "}
            <Link color={"#389197"} href="https://myskintreatment.com/">
              here
            </Link>
            .
          </Typography>
          <div className={s.modalImg}>
            <img src={MBT1} alt="My Filler Treatment website screenshot" />
            <Typography component="p" variant="caption">
              1. My Filler Treatment
            </Typography>
          </div>
          <div className={s.modalImg}>
            <img src={MBT0} alt="My Body Treatment website screenshot" />
            <Typography component="p" variant="caption">
              2. My Body Treatment
            </Typography>
          </div>
          <div className={s.modalImg}>
            <img src={MBT2} alt="My Skin Treatment website screenshot" />
            <Typography component="p" variant="caption">
              3. My Skin Treatment
            </Typography>
          </div>
        </div>
      </>
    ),
  },
  {
    id: 6,
    title: "District Bridges",
    cardImage: DB0,
    cardDescription:
      "Large-scale WordPress site built from scratch, integrating WooCommerce, custom Gutenberg blocks, advanced filtering, and event management.",
    modalChildren: (
      <>
        <Typography component="h4" variant="h5" className={s.modalTitle}>
          District Bridges
        </Typography>
        <div className={s.modalContent}>
          <Typography component="p" variant="body1" className={s.modalText}>
            This is a very large project made with a custom theme, a custom
            plugin with a collection of custom gutenberg block using ACF. You
            can look at the website{" "}
            <Link color={"#389197"} href="https://districtbridges.org/">
              here
            </Link>
            .
          </Typography>
          <div className={s.modalImg}>
            <img
              src={DB1}
              alt="Example of a custom block that uses ACF and WP_Query"
            />
            <Typography component="p" variant="caption">
              1. Example of a custom block that uses ACF and WP_Query
            </Typography>
          </div>
          <Typography component="p" variant="body1" className={s.modalText}>
            This project required fully rewriting all the standard wordpress
            templates and many of the template provided by plugins.
          </Typography>
          <div className={s.modalImg}>
            <img src={DB2} alt="A rewritten single page" />
            <Typography component="p" variant="caption">
              2. A rewritten single page
            </Typography>
          </div>
          <div className={s.modalImg}>
            <img
              src={DB3}
              alt="A rewritten WooCommerce shop that includes FacetWP filters for products."
            />
            <Typography component="p" variant="caption">
              3. A rewritten WooCommerce shop that includes FacetWP filters for
              products.
            </Typography>
          </div>
        </div>
      </>
    ),
  },
  {
    id: 5,
    title: "Elan, a wordpress corporate website",
    cardImage: Elan0,
    cardDescription:
      "Corporate WordPress site with custom theme, interactive animations, and advanced layout blocks using Konva-JS.",
    modalChildren: (
      <>
        <Typography component="h4" variant="h5" className={s.modalTitle}>
          Elan
        </Typography>
        <div className={s.modalContent}>
          <Typography component="p" variant="body1" className={s.modalText}>
            A website developed through a custom theme with all the website-wide
            styles and a custom plugin containing a collection of custom
            gutenberg blocks. You can look at the website{" "}
            <Link color={"#389197"} href="https://elanaesthetic.com">
              here
            </Link>
            .<br></br>
            <br></br>
            Some of the custom blocks include editable text blocks with complex
            positioning that is fully reactive.
          </Typography>
          <div className={s.modalImg}>
            <img
              src={Elan1}
              alt="Block with complex positioning. All the text which is beyond the image is editable and reactive."
            />
            <Typography component="p" variant="caption">
              1. Block with complex positioning. All the text which is beyond
              the image is editable and reactive.
            </Typography>
          </div>
          <div className={s.modalImg}>
            <img
              src={Elan2}
              alt="Example of a block with complex positioning"
            />
            <Typography component="p" variant="caption">
              2. Example of a block with complex positioning
            </Typography>
          </div>
        </div>
      </>
    ),
  },
  {
    id: 4,
    title: "ReactJS + TypeScript portfolio website",
    cardImage: Portfolio0,
    cardDescription:
      "This portfolio SPA, built with React and TypeScript, features smooth animations using framer-motion and Material UI styling.",
    modalChildren: (
      <>
        <Typography component="h4" variant="h5" className={s.modalTitle}>
          Portfolio Website
        </Typography>
        <div className={s.modalContent}>
          <Typography component="p" variant="body1" className={s.modalText}>
            My current portfolio website. It's realized with TypeScript and
            ReactJS with the help of React-Router-DOMv6 for routing. Styled with
            MaterialUI, framer-motion and CSS. You can{" "}
            <Link
              color={"#389197"}
              href="https://github.com/CHansYtheBest/CV-Website"
            >
              look though the source code here
            </Link>
            .
          </Typography>
          <div className={s.modalImg}>
            <img src={Portfolio1} alt="About page" />
            <Typography component="p" variant="caption">
              1. About page
            </Typography>
          </div>
        </div>
      </>
    ),
  },
  {
    id: 3,
    title: "Social Network ReactSocial",
    cardImage: ReactSocial0,
    cardDescription:
      "Social network SPA using React, Redux Toolkit, and Formik, interacting with SamuraiJS API for real-time features. ",
    modalChildren: (
      <>
        <Typography component="h4" variant="h5" className={s.modalTitle}>
          ReactSocial
        </Typography>
        <div className={s.modalContent}>
          <Typography component="p" variant="body1" className={s.modalText}>
            My first complex ReactJS project. It's built fully with Flux concept
            and best architectural practices in mind and without class
            components. You can try it yourself{" "}
            <Link
              color={"#389197"}
              href="https://chansythebest.github.io/ReactSocial/"
            >
              here
            </Link>{" "}
            or{" "}
            <Link
              color={"#389197"}
              href="https://github.com/CHansYtheBest/ReactSocial"
            >
              look though the source code
            </Link>
            . You can{" "}
            <Link
              color={"#389197"}
              href="https://social-network.samuraijs.com/signUp"
            >
              register a new account
            </Link>{" "}
            or use a test account. <br /> Email: free@samuraijs.com
            <br /> Password: free
          </Typography>
          <div className={s.modalImg}>
            <img src={ReactSocial0} alt="Profile page" />
            <Typography component="p" variant="caption">
              1. Profile page
            </Typography>
          </div>
          <Typography component="p" variant="body1" className={s.modalText}>
            State management of the application was first made with pure Redux,
            but on later stages was refactored to use redux-toolkit.
          </Typography>
          <div className={s.modalImg}>
            <img src={ReactSocial1} alt="Login page" />
            <Typography component="p" variant="caption">
              2. Login page
            </Typography>
          </div>
          <Typography component="p" variant="body1" className={s.modalText}>
            Forms are managed using formik, validation through Yup and styling
            with MaterialsUI. AJAX request are managed with the help of axios.
          </Typography>
          <div className={s.modalImg}>
            <img src={ReactSocial2} alt="Friends page" />
            <Typography component="p" variant="caption">
              3. Friends page
            </Typography>
          </div>
        </div>
      </>
    ),
  },
  {
    id: 1,
    title: 'Website for "Moskovskiy Zavod «Fizpribor»"',
    cardImage: FizPribor0,
    cardDescription:
      "Corporate WordPress site with custom theme, Figma-based design, and fully adaptive, easily managed content.",
    modalChildren: (
      <>
        <Typography component="h4" variant="h5" className={s.modalTitle}>
          Fizpribor's Website
        </Typography>
        <div className={s.modalContent}>
          <Typography component="p" variant="body1" className={s.modalText}>
            This is a corporate website running on the CMS WordPress with
            minimal plugins. The design was made using Figma, then a html
            version was made, which has been transformed in a custom theme for
            WordPress. The only plugins used are for SEO optimization and
            monitoring. You can check out this project{" "}
            <Link color={"#389197"} href="https://fizpribor.ru/">
              here
            </Link>
            .
          </Typography>
          <div className={s.modalImg}>
            <img src={FizPribor0} alt="Landing page" />
            <Typography component="p" variant="caption">
              1. Landing page
            </Typography>
          </div>
          <Typography component="p" variant="body1" className={s.modalText}>
            Every page of the website is fully adaptive with every screen width
            in mind.
          </Typography>
          <div className={s.modalImg}>
            <img src={FizPribor1} alt="Mobile version of the landing page" />
            <Typography component="p" variant="caption">
              2. Mobile version of the landing page
            </Typography>
          </div>
          <Typography component="p" variant="body1" className={s.modalText}>
            Any content on the website is fully editable though the admin panel
            in WordPress to keep the information up to date without the need of
            a coder.
          </Typography>
          <div className={s.modalImg}>
            <img src={FizPribor2} alt="Photos section of the landing page." />
            <Typography component="p" variant="caption">
              3. Photos section of the landing page.
            </Typography>
          </div>
        </div>
      </>
    ),
  },
  {
    id: 2,
    title: "Recipe quiz FoodQuizAPI",
    cardImage: FoodQuiz0,
    cardDescription:
      "Educational quiz web app using vanilla JS to interact with the Spoonacular API, featuring dynamic results and local storage.",
    modalChildren: (
      <>
        <Typography component="h4" variant="h5" className={s.modalTitle}>
          FoodQuizAPI
        </Typography>
        <div className={s.modalContent}>
          <Typography component="p" variant="body1" className={s.modalText}>
            This is a project I presented for my graduation theses. It is a quiz
            website built with HTML, CSS and a fully library free JS. At the end
            of the quiz a result page is generated. You can try it yourself{" "}
            <Link
              color={"#389197"}
              href="https://chansythebest.github.io/FoodQuizAPI/search.html"
            >
              here
            </Link>{" "}
            or look though the source code{" "}
            <Link
              color={"#389197"}
              href="https://github.com/CHansYtheBest/FoodQuizAPI"
            >
              here
            </Link>
            .
          </Typography>
          <div className={s.modalImg}>
            <img src={FoodQuiz1} alt="First step of the quiz" />
            <Typography component="p" variant="caption">
              1. First step of the quiz
            </Typography>
          </div>
          <Typography component="p" variant="body1" className={s.modalText}>
            When making this project I fully utilized JS tools for DOM
            manipulation, to place fetched data in DOM elements.
          </Typography>
          <div className={s.modalImg}>
            <img src={FoodQuiz2} alt="Fifth step of the quiz" />
            <Typography component="p" variant="caption">
              2. Fifth step of the quiz
            </Typography>
          </div>
          <Typography component="p" variant="body1" className={s.modalText}>
            To send fetched data to the results page JS local storage was used.
          </Typography>
          <div className={s.modalImg}>
            <img
              src={FoodQuiz3}
              alt="Results page, generated using only options from previous images"
            />
            <Typography component="p" variant="caption">
              3. Results page, generated using only options from previous images
            </Typography>
          </div>
        </div>
      </>
    ),
  },
];

function WorksPage() {
  const [modelOpen, setModelOpen] = useState<false | number>(false);
  let { scrollElement } = useContext(ScrollContext);

  useEffect(() => {
    if (scrollElement) {
      if (modelOpen !== false) {
        scrollElement.classList.add("noScroll");
      } else {
        scrollElement.classList.remove("noScroll");
      }
    }
    return () => {
      if (scrollElement) {
        scrollElement.classList.remove("noScroll");
      }
    };
  }, [modelOpen, scrollElement]);

  return (
    <PageContainer className={s.worksPageGrid}>
      <PageHeading>Works page</PageHeading>
      <SectionContainer gridArea="worksPage">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <SectionHeading className={s.header}>My Projects</SectionHeading>
          {projectsData.map((project) => (
            <WorksCard
              key={project.id}
              title={project.title}
              img={project.cardImage}
              description={project.cardDescription}
              index={project.id}
              open={modelOpen}
              setOpen={setModelOpen}
            >
              {project.modalChildren}
            </WorksCard>
          ))}
        </motion.div>
      </SectionContainer>
    </PageContainer>
  );
}

export default WorksPage;
