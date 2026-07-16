import { motion, useReducedMotion } from "framer-motion";

export default function ScrollReveal({
  children,
  className = "",
  direction = "bottom",
  delay = 0,
  duration = 0.7,
  distance = 36,
  repeat = true,
}) {
  const shouldReduceMotion = useReducedMotion();

  const directions = {
    bottom: { y: distance, x: 0 },
    top: { y: -distance, x: 0 },
    left: { x: -distance, y: 0 },
    right: { x: distance, y: 0 },
    none: { x: 0, y: 0 },
  };

  const hiddenPosition = directions[direction] || directions.bottom;

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        ...hiddenPosition,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{
        once: !repeat,
        amount: 0.18,
        margin: "0px 0px -80px 0px",
      }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}