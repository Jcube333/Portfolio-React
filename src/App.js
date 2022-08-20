import Navbar from "./Components/Navbar/Navbar";
import Intro from "./Components/Intro/Intro";

import "./App.css";
import Skills from "./Components/Skills/Skills";
import Stats from "./Components/Stats/Stats";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills />
      <Stats />
    </div>
  );
}

export default App;
