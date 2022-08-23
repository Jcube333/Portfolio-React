import Navbar from "./Components/Navbar/Navbar";
import Intro from "./Components/Intro/Intro";

import "./App.css";
import Skills from "./Components/Skills/Skills";
import Stats from "./Components/Stats/Stats";
import Certification from "./Components/Certifications/Certification";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
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
