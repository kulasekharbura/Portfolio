import React from "react";
import "./App.css"; // Make sure this import is here!
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";

function App() {
  return (
    <div>
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Kulasekhar Bura.</p>
      </footer>
    </div>
  );
}

export default App;
