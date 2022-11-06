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

// GALLERY ANIMATION SETTING
export const galleryVariants = {
  initial: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      // scale: 0.5,
    };
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      x: { type: 'spring', stiffness: 300, damping: 30 },
      opacity: { duration: 0.2 },
    },
  },
  exit: (direction) => {
    return {
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      },
    };
  },
};

export const sliderVariants = {
  initial: () => {
    return {
      opacity: 0,
      x: 30,
    };
  },
  animate: {
    opacity: 1,
    x: 0,
  },
  exit: () => {
    return {
      opacity: 0,
      x: -30,
    };
  },
  transition: {
    x: { type: 'spring', stiffness: 300, damping: 300 },
    opacity: { duration: 1 },
  },
};
