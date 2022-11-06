import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { galleryVariants } from '../../utils/utils';

const GalleryModal = ({
  clickedImg,
  setShowModal,
  handelRotationRight,
  handelRotationLeft,
  direction,
}) => {
  // HIDE GALLERY
  const handleClick = (e) => {
    if (e.target.classList.contains('dismiss')) {
      setShowModal(false);
    }
  };

  return (
    // BACKGROUND
    <div
      className='dismiss fixed top-0 left-0 right-0 w-full h-full flex justify-center items-center bg-black bg-opacity-60 z-[999]'
      onClick={handleClick}
    >
      <motion.div
        className='relative aspect-video w-[140vh] z-50 m-2'
        initial={{ scale: [0] }}
        animate={{ scale: [0, 1], duration: 0.7 }}
      >
        {/* CLOSE ICON */}
        <span
          className='dismiss cursor-pointer text-3xl z-[999] absolute -top-14 right-0 text-white xl:hover:scale-110 transition duration-500 border-4 border-white rounded-full w-10 h-10 flex items-center justify-center '
          onClick={handleClick}
        >
          &#x2715;
        </span>
        {/* IMG */}
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            className='absolute top-0 left-0 w-full h-full object-cover object-center rounded-xl z-30'
            src={`${clickedImg}${
              window.innerWidth < 1024 ? '?w=800&h=600' : '?w=1920&h=1280'
            }`}
            alt='typewriter'
            variants={galleryVariants}
            animate='animate'
            initial='initial'
            exit='exit'
            key={clickedImg}
            custom={direction}
          />
        </AnimatePresence>
        {/* ARROWS */}
        <button
          className='transition-all duration-500 absolute left-4 top-1/2 flex items-center justify-center w-10 md:w-16 xl:w-20 text-4xl md:text-6xl xl:text-7xl z-[40] xl:hover:scale-110 text-white'
          onClick={handelRotationLeft}
        >
          &#10092;
        </button>
        <button
          className='transition-all duration-500 absolute top-1/2 right-4 flex items-center justify-center h-auto w-10 md:w-16 xl:w-20 text-4xl md:text-6xl xl:text-7xl z-40 xl:hover:scale-110 text-white'
          onClick={handelRotationRight}
        >
          &#10093;
        </button>
      </motion.div>
    </div>
  );
};

export default GalleryModal;
