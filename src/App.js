import Navbar from "./Components/Navbar/Navbar";
import Intro from "./Components/Intro/Intro";

import "./App.css";
import Skills from "./Components/Skills/Skills";
import Stats from "./Components/Stats/Stats";
import Certification from "./Components/Certifications/Certification";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import { useContext } from "react";
import { themeContext } from "./Context";

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="App"
      style={{
        //Based on darkmode state the props will be manipulated for the entire page.
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <Navbar />
      <Intro />
      <Skills />
      <Stats />
      <Certification />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
