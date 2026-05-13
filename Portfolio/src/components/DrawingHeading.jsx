import React, { useEffect, useRef } from "react";
import { animate, svg, stagger } from "animejs";

const DrawingHeading = ({ title, subtitle }) => {
  const scopeRef = useRef(null);

  useEffect(() => {
    // 1. Convert the target elements into Anime.js Drawables
    const drawables = svg.createDrawable(".drawing-path");

    // 2. Animate the drawing effect
    animate(drawables, {
      draw: ["0 0", "0 1", "1 1"], // Start empty, draw full, then "erase" from start
      ease: "inOutQuad",
      duration: 2500,
      delay: stagger(200),
      loop: true,
    });
  }, []);

  return (
    <div ref={scopeRef} className="text-center mb-16">
      <h2 className="section-title" style={{ marginBottom: "0.5rem" }}>
        {title} <span className="text-accent">{subtitle}</span>
      </h2>

      {/* This SVG "writes" a stylized underline below the title */}
      <svg width="200" height="20" viewBox="0 0 200 20" className="drawing-svg">
        <polyline
          className="drawing-path"
          points="0,10 40,10 50,2 60,18 70,10 200,10"
        />
      </svg>
    </div>
  );
};

export default DrawingHeading;
