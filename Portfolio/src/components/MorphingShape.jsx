import React, { useEffect, useRef } from "react";
import { animate, svg, utils } from "animejs";

const MorphingShape = () => {
  // 1. Create references to the polygons instead of querying the DOM
  const path1Ref = useRef(null);
  const path2Ref = useRef(null);

  useEffect(() => {
    const $path1 = path1Ref.current;
    const $path2 = path2Ref.current;
    let isMounted = true; // Prevents animation memory leaks when navigating

    function animateRandomPoints() {
      if (!isMounted) return; // Stop loop if component unmounts

      // Update the points attribute on the hidden target polygon
      utils.set($path2, { points: generatePoints() });

      // Morph the visible polygon into the target polygon
      animate($path1, {
        points: svg.morphTo($path2),
        ease: "inOutCirc",
        duration: 800, // Slightly slowed down to 800ms for a breathing feel (optional)
        onComplete: animateRandomPoints,
      });
    }

    // Start the animation
    animateRandomPoints();

    function generatePoints() {
      const total = utils.random(4, 64);
      const r1 = utils.random(4, 56);
      const r2 = 56;
      const isOdd = (n) => n % 2;
      let points = "";

      for (let i = 0, l = isOdd(total) ? total + 1 : total; i < l; i++) {
        const r = isOdd(i) ? r1 : r2;
        const a = (2 * Math.PI * i) / l - Math.PI / 2;
        // Adjusted center coordinates to (64, 64) so it fits perfectly in a 128x128 SVG box
        const x = 64 + utils.round(r * Math.cos(a), 0);
        const y = 64 + utils.round(r * Math.sin(a), 0);
        points += `${x},${y} `;
      }
      return points;
    }

    // Cleanup function
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    /* Absolute positioning places it exactly in the top-left corner */
    <div className="absolute top-6 left-6 z-0 opacity-60 pointer-events-none hover:opacity-100 transition-opacity duration-500">
      <svg
        width="128"
        height="128"
        viewBox="0 0 128 128"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* The visible shape */}
        <polygon
          ref={path1Ref}
          points="64,8 120,64 64,120 8,64"
          fill="rgba(0, 229, 255, 0.1)"
          stroke="#00e5ff"
          strokeWidth="1.5"
          style={{ filter: "drop-shadow(0px 0px 8px rgba(0, 229, 255, 0.5))" }}
        />
        {/* The hidden target shape used only for math calculations */}
        <polygon ref={path2Ref} style={{ display: "none" }} />
      </svg>
    </div>
  );
};

export default MorphingShape;
