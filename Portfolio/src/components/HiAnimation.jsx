import React, { useEffect, useRef } from "react";
import { animate, svg, stagger } from "animejs";

const HiAnimation = () => {
  const scopeRef = useRef(null);

  useEffect(() => {
    // 1. Target the .hi-line paths
    const drawables = svg.createDrawable(".hi-line");

    // 2. Run the drawing animation
    animate(drawables, {
      draw: ["0 0", "0 1", "1 1"],
      ease: "inOutQuad",
      duration: 2000,
      delay: stagger(150),
      loop: true,
    });
  }, []);

  return (
    <div ref={scopeRef} className="flex justify-center items-center py-10">
      <svg
        width="200"
        height="120"
        viewBox="0 0 200 120"
        className="drawing-svg"
      >
        <g
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="4"
        >
          {/* Letter H */}
          <path className="hi-line drawing-path" d="M40 20 V100" />{" "}
          {/* Left pillar */}
          <path className="hi-line drawing-path" d="M40 60 H80" />{" "}
          {/* Crossbar */}
          <path className="hi-line drawing-path" d="M80 20 V100" />{" "}
          {/* Right pillar */}
          {/* Letter I */}
          <path className="hi-line drawing-path" d="M130 20 H150" />{" "}
          {/* Top cap */}
          <path className="hi-line drawing-path" d="M140 20 V100" />{" "}
          {/* Main pillar */}
          <path className="hi-line drawing-path" d="M130 100 H150" />{" "}
          {/* Bottom cap */}
        </g>
      </svg>
    </div>
  );
};

export default HiAnimation;
