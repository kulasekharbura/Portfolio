import React, { useEffect, useRef } from "react";
import { animate, stagger } from "animejs";
import { resumeData } from "../data/resumeData";
import DrawingHeading from "./DrawingHeading";

const Experience = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Animate the timeline items sliding in
    animate(".timeline-item", {
      translateX: [-50, 0],
      opacity: [0, 1],
      duration: 800,
      easing: "outExpo",
      delay: stagger(200),
    });
  }, []);

  return (
    <section id="experience" className="section-container experience-section">
      <div className="max-width-wrapper">
        <DrawingHeading title="My" subtitle="Journey" />

        <div ref={containerRef} className="experience-grid">
          {/* Education Column */}
          <div className="timeline-column">
            <h2>Education</h2>
            <div className="timeline-list">
              {resumeData.education.map((edu, index) => (
                <div
                  key={index}
                  style={{ opacity: 0 }}
                  className="timeline-item"
                >
                  <div className="timeline-dot"></div>
                  <h3 className="timeline-title">{edu.degree}</h3>
                  <h4 className="timeline-subtitle">{edu.institution}</h4>
                  <div className="timeline-meta">
                    <span>{edu.date}</span>
                    <span className="timeline-score">{edu.score}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Column */}
          <div className="timeline-column">
            <h2>Experience</h2>
            <div className="timeline-list">
              {resumeData.experience.map((exp, index) => (
                <div
                  key={index}
                  style={{ opacity: 0 }}
                  className="timeline-item"
                >
                  <div className="timeline-dot"></div>
                  <h3 className="timeline-title">{exp.role}</h3>
                  <h4 className="timeline-subtitle">{exp.company}</h4>
                  <p className="timeline-meta">{exp.date}</p>
                  <p className="timeline-desc">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
