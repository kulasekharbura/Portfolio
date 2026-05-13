import React, { useEffect, useRef } from "react";
import { animate, stagger } from "animejs";
import { resumeData } from "../data/resumeData";
import MorphingShape from "./MorphingShape";
import HiAnimation from "./HiAnimation";

const Hero = () => {
  const { name, role, email } = resumeData.personalInfo;
  const contentRef = useRef(null);

  useEffect(() => {
    animate(contentRef.current.children, {
      translateY: [40, 0],
      opacity: [0, 1],
      duration: 1200,
      easing: "outExpo",
      delay: stagger(150),
    });
  }, []);

  return (
    <section id="hero" className="hero-section relative">
      <MorphingShape />

      <div ref={contentRef} className="relative z-10">
        {/* Self Drawing Greeting */}
        <div style={{ opacity: 0 }} className="mb-2">
          <HiAnimation />
        </div>

        <p style={{ opacity: 0 }} className="hero-subtitle">
          Welcome to my portfolio
        </p>

        <h1 style={{ opacity: 0 }} className="hero-title">
          I'm <span className="hero-title-highlight">{name}</span>
        </h1>

        <h2 style={{ opacity: 0 }} className="hero-role">
          {role}
        </h2>

        <p style={{ opacity: 0 }} className="hero-desc">
          Passionate about Data Structures, Algorithms, and building scalable
          full-stack applications.
        </p>

        <div style={{ opacity: 0 }}>
          <a
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
