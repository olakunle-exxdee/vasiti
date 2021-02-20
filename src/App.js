import "./App.scss";
import Navbar from "./components/navbar/Navbar";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Hero from "./components/hero/Hero";
import Story from "./components/story/Story";
import Group from "./components/sample/Group";
import Group2 from "./components/sample/Group2";
import Experience from "./components/experience/Experience";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Navbar />
        <Hero />
        <Story />
        <Group />
        <Experience />
        <Group2 />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
