import Navbar from "./Components/Navbar/Navbar";
import Intro from "./Components/Intro/Intro";

import "./App.css";
import Skills from "./Components/Skills/Skills";
import Stats from "./Components/Stats/Stats";
import Certification from "./Components/Certifications/Certification";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills />
      <Stats />
      <Certification />
    </div>
  );
}

export default App;
