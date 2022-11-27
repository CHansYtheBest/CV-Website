import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Background from "./components/layout/Background";
import ContentContainer from "./components/layout/ContentContainer";
import AnimatePage from "./components/pageAnimations/AnimatePage";
import AboutPage from "./components/pages/aboutPage/AboutPage";

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
          <Route path="/resume" element={<AnimatePage>RESUME</AnimatePage>} />
          <Route path="/works" element={<AnimatePage>WORKS</AnimatePage>} />
          <Route path="/contact" element={<AnimatePage>CONTACT</AnimatePage>} />
        </Route>
      </Routes>
      <Background />
    </>
  );
}

export default App;
