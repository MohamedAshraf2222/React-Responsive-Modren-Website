import "./App.css";
import { Article, Brand, CTA, Navbar } from "./components";
import {
  Blog,
  Features,
  Footer,
  Header,
  Possibility,
  WhatGPT3,
} from "./containers";

function App() {
  return (
    <>
      <div className="relative overflow-hidden z-0">
        <div className="blur-ball"></div>
        <div className="blur-ball-1"></div>
        <Navbar />
        <Header />
        <Brand />
        <WhatGPT3 />
        <Features />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />
      </div>
      {/* <Article /> */}
    </>
  );
}

export default App;
