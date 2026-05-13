import React, { useEffect, useRef } from "react";
import { animate, stagger } from "animejs";
import { resumeData } from "../data/resumeData";
import DrawingHeading from "./DrawingHeading";

// React Icons
import {
  SiCplusplus,
  SiJavascript,
  SiPython,
  SiHtml5,
  SiCss,
  SiReact,
  SiBootstrap,
  SiMui,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiPostman,
} from "react-icons/si";

const iconMap = {
  "C++": <SiCplusplus />,
  C: <SiCplusplus />,

  JavaScript: <SiJavascript />,
  Python: <SiPython />,

  HTML: <SiHtml5 />,
  CSS: <SiCss />,

  "React.js": <SiReact />,
  Bootstrap: <SiBootstrap />,
  "Material UI": <SiMui />,

  "Node.js": <SiNodedotjs />,
  "Express.js": <SiExpress />,

  MongoDB: <SiMongodb />,
  "Git/GitHub": <SiGit />,

  SQLPlus: <SiPostman />,
  Postman: <SiPostman />,

  "VS Code": <SiPostman />,
};

const Skills = () => {
  const skillsRef = useRef(null);

  useEffect(() => {
    animate(".skill-badge", {
      scale: [0.9, 1],
      opacity: [0, 1],
      duration: 600,
      easing: "outBack",
      delay: stagger(40, { start: 200 }),
    });
  }, []);

  return (
    <section id="skills" className="section-container skills-section">
      <div className="max-width-wrapper">
        <DrawingHeading title="Technical" subtitle="Expertise" />

        <div ref={skillsRef} className="skills-grid">
          {Object.entries(resumeData.skills).map(
            ([category, skillsList], index) => (
              <div key={index} className="skill-card">
                <h3 className="skill-category">{category}</h3>

                <div className="skill-tags">
                  {skillsList.map((skill, i) => (
                    <span
                      key={i}
                      style={{ opacity: 0 }}
                      className="skill-badge group"
                    >
                      <span className="skill-icon">
                        {iconMap[skill] || <SiJavascript />}
                      </span>

                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;
