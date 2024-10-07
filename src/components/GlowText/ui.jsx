import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

export const TextHoverEffect = ({
  text,
  duration = 2, // Default duration
  glowColors = {
    stop1: "var(--yellow-500)",
    stop2: "var(--red-500)",
    stop3: "var(--blue-500)",
    stop4: "var(--cyan-500)",
    stop5: "var(--violet-500)",
  },
  id, // New prop for unique ID
}) => {
  const svgRef = useRef(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [maskPosition, setMaskPosition] = useState({ cx: "50%", cy: "50%" });

  // Debounced cursor position update
  const handleMouseMove = (e) => {
    const svgRect = svgRef.current.getBoundingClientRect();
    setCursor({
      x: e.clientX - svgRect.left,
      y: e.clientY - svgRect.top,
    });
  };

  useEffect(() => {
    if (svgRef.current) {
      const svgRect = svgRef.current.getBoundingClientRect();
      const cxPercentage = ((cursor.x) / svgRect.width) * 100;
      const cyPercentage = ((cursor.y) / svgRect.height) * 100;
      setMaskPosition({
        cx: `${cxPercentage}%`,
        cy: `${cyPercentage}%`,
      });
    }
  }, [cursor]);

  return (
    <svg
      ref={svgRef}
      width="100%"
      height="100%"
      viewBox="0 0 300 100"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handleMouseMove}
      className="select-none"
      role="img"
      aria-label={text}
    >
      <defs>
        <linearGradient
          id={`textGradient-${id}`} // Unique ID for gradient
          gradientUnits="userSpaceOnUse"
          cx="50%"
          cy="50%"
          r="25%"
        >
          {hovered && (
            <>
              <stop offset="0%" stopColor={glowColors.stop1} />
              <stop offset="25%" stopColor={glowColors.stop2} />
              <stop offset="50%" stopColor={glowColors.stop3} />
              <stop offset="75%" stopColor={glowColors.stop4} />
              <stop offset="100%" stopColor={glowColors.stop5} />
            </>
          )}
        </linearGradient>

        <motion.radialGradient
          id={`revealMask-${id}`} // Unique ID for mask
          gradientUnits="userSpaceOnUse"
          r="20%"
          animate={maskPosition}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 40,
          }}
        >
          <stop offset="0%" stopColor="white" />
          <stop offset="100%" stopColor="black" />
        </motion.radialGradient>
        <mask id={`textMask-${id}`}> {/* Unique ID for mask */}
          <rect x="0" y="0" width="100%" height="100%" fill={`url(#revealMask-${id})`} />
        </mask>
      </defs>
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="0.3"
        className="font-[helvetica] font-bold stroke-neutral-200 dark:stroke-neutral-800 fill-transparent text-5xl"
        style={{ opacity: hovered ? 0.7 : 0 }}
      >
        {text}
      </text>
      <motion.text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="0.3"
        className="font-[helvetica] font-bold fill-transparent text-5xl stroke-neutral-200 dark:stroke-neutral-800"
        initial={{ strokeDashoffset: 1000, strokeDasharray: 1000 }}
        animate={{
          strokeDashoffset: 0,
          strokeDasharray: 1000,
        }}
        transition={{
          duration: duration, // Use duration prop
          ease: "easeInOut",
        }}
      >
        {text}
      </motion.text>
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        stroke={`url(#textGradient-${id})`} // Use unique ID for gradient
        strokeWidth="0.3"
        mask={`url(#textMask-${id})`} // Use unique ID for mask
        className="font-[helvetica] font-bold fill-transparent text-5xl"
      >
        {text}
      </text>
    </svg>
  );
};
