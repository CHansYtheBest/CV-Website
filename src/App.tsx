import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Background from "./components/layout/Background";
import ContentContainer from "./components/layout/ContentContainer";
import AnimatePage from "./components/pageAnimations/AnimatePage";
import AboutPage from "./components/pages/aboutPage/AboutPage";
import ContactsPage from "./components/pages/contactsPage/ContactsPage";
import ResumePage from "./components/pages/resumePage/ResumePage";
import WorksPage from "./components/pages/worksPage/WorksPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ContentContainer />}>
          <Route
            index
            element={
              <AnimatePage>
                <AboutPage />
              </AnimatePage>
            }
          />
          <Route
            path="/resume"
            element={
              <AnimatePage>
                <ResumePage />
              </AnimatePage>
            }
          />
          <Route
            path="/works"
            element={
              <AnimatePage>
                <WorksPage />
              </AnimatePage>
            }
          />
          <Route
            path="/contact"
            element={
              <AnimatePage>
                <ContactsPage />
              </AnimatePage>
            }
          />
        </Route>
      </Routes>
      <Background />
    </>
  );
}

export default App;
