import React from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { RiCloseCircleLine } from 'react-icons/ri';

const GalleryModal = ({
  clickedImg,
  setShowModal,
  handelRotationRight,
  handelRotationLeft,
}) => {
  const handleClick = (e) => {
    if (e.target.classList.contains('dismiss')) {
      setShowModal(false);
    }
  };

  return (
    <div
      className='dismiss fixed top-0 left-0 right-0 w-full h-full flex items-center bg-black bg-opacity-50'
      onClick={handleClick}
    >
      <img
        className='block rounded-xl w-[30rem] h-[30rem] mx-auto my-16'
        src={clickedImg}
        alt='typewriter'
      ></img>
      <span className='cursor-pointer text-4xl z-40' onClick={handleClick}>
        <RiCloseCircleLine className='dismiss' />
      </span>
      <button
        className='sliderTypewriter__btns  w-20 text-6xl mr-1 z-40'
        onClick={handelRotationRight}
      >
        <BsChevronRight />
      </button>
      <button
        className='sliderTypewriter__btns  w-20 text-6xl mr-1 z-40'
        onClick={handelRotationLeft}
      >
        <BsChevronLeft />
      </button>
    </div>
  );
};

export default GalleryModal;
