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
    <div className='dismiss' onClick={handleClick}>
      <img src={clickedImg} alt='typewriter' />
      <span className='cursor-pointer text-4xl' onClick={handleClick}>
        <RiCloseCircleLine className='dismiss' />
      </span>
      <button
        className='sliderTypewriter__btns  w-20 text-6xl mr-1 z-10'
        onClick={handelRotationRight}
      >
        <BsChevronRight />
      </button>
      <button
        className='sliderTypewriter__btns  w-20 text-6xl mr-1 z-10'
        onClick={handelRotationLeft}
      >
        <BsChevronLeft />
      </button>
    </div>
  );
};

export default GalleryModal;
