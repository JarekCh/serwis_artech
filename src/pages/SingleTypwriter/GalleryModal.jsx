import React from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

const GalleryModal = ({
  clickedImg,
  setShowModal,
  handelRotationRight,
  handelRotationLeft,
}) => {
  const handleClick = (e) => {
    if (e.target.classList.contains('dismiss') || e.target.type('path')) {
      setShowModal(false);
    }
  };

  return (
    // BACKGROUND
    <div
      className='dismiss fixed top-0 left-0 right-0 w-full h-full flex justify-center items-center bg-black bg-opacity-60'
      onClick={handleClick}
    >
      <div className='relative'>
        {/* CLOSE ICON */}
        <span
          className='dismiss cursor-pointer text-5xl z-[999] absolute -top-20 -right-8 text-black hover:scale-110 transition duration-500 border-4 border-black rounded-full w-14 h-14 flex items-center justify-center '
          onClick={handleClick}
        >
          &#x2715;
        </span>
        {/* IMG */}
        <img
          className='block w-[24rem] sm:w-[34rem] lg:w-[44rem] xl:w-[60rem] 2xl:w-[80rem] h-auto mx-auto rounded-xl'
          src={clickedImg}
          alt='typewriter'
        />
        {/* ARROWS */}
        <button
          className='transition-all duration-500 absolute left-2 top-1/2 flex items-center justify-center w-10 md:w-16 xl:w-20 text-4xl md:text-6xl xl:text-7xl z-40 hover:scale-110 '
          onClick={handelRotationLeft}
        >
          &#10092;
        </button>
        <button
          className='transition-all duration-500 absolute top-1/2 right-2 flex items-center justify-center h-auto w-10 md:w-16 xl:w-20 text-4xl md:text-6xl xl:text-7xl z-40 hover:scale-110 '
          onClick={handelRotationRight}
        >
          &#10093;
        </button>
      </div>
    </div>
  );
};

export default GalleryModal;
