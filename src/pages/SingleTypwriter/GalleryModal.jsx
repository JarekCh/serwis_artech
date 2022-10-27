import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const GalleryModal = ({
  clickedImg,
  setShowModal,
  handelRotationRight,
  handelRotationLeft,
  direction,
}) => {
  const handleClick = (e) => {
    if (e.target.classList.contains('dismiss')) {
      setShowModal(false);
    }
  };

  const variants = {
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

  return (
    // BACKGROUND
    <div
      className='dismiss fixed top-0 left-0 right-0 w-full h-full flex justify-center items-center bg-black bg-opacity-60 z-10'
      onClick={handleClick}
    >
      <div className='relative aspect-video w-[140vh] z-50 m-2'>
        {/* CLOSE ICON */}
        <span
          className='dismiss cursor-pointer text-3xl z-[999] absolute -top-14 right-0 text-white hover:scale-110 transition duration-500 border-4 border-white rounded-full w-10 h-10 flex items-center justify-center '
          onClick={handleClick}
        >
          &#x2715;
        </span>
        {/* IMG */}
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            className='absolute top-0 left-0 w-full h-full object-cover object-center rounded-xl z-30'
            src={clickedImg}
            alt='typewriter'
            variants={variants}
            animate='animate'
            initial='initial'
            exit='exit'
            key={clickedImg}
            custom={direction}
          />
        </AnimatePresence>
        {/* ARROWS */}
        <button
          className='transition-all duration-500 absolute left-4 top-1/2 flex items-center justify-center w-10 md:w-16 xl:w-20 text-4xl md:text-6xl xl:text-7xl z-40 hover:scale-110 text-white'
          onClick={handelRotationLeft}
        >
          &#10092;
        </button>
        <button
          className='transition-all duration-500 absolute top-1/2 right-4 flex items-center justify-center h-auto w-10 md:w-16 xl:w-20 text-4xl md:text-6xl xl:text-7xl z-40 hover:scale-110 text-white'
          onClick={handelRotationRight}
        >
          &#10093;
        </button>
      </div>
    </div>
  );
};

export default GalleryModal;
