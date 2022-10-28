// MOTION VARIABLE

// Nav Links animation
export const liVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

// Global change lang motion
export const motionControlsValue = {
  opacity: [0, 1],
  transition: { duration: 1.2 },
};
