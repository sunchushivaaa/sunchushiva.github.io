import "./App.css";
import { Helmet } from "react-helmet";
import Introduction from "./Components/Introduction";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Github from "./Components/Github";
import Contact from "./Components/Contact";
import About from "./Components/About";
import TechStack from "./Components/TechStack";
import Love from "./Components/Love";

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Shiva Sunchu - Portfolio</title>
      </Helmet>
      <Navbar />
      <Introduction />
      <About />
      <TechStack />
      <Github />
      <Projects />
      <Contact />
      <Love/>
    </div>
  );
}

export default App;
