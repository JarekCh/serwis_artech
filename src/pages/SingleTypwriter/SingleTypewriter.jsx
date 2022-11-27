import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { motionControlsValue } from '../../utils/utils.js';
import GalleryModal from './GalleryModal';
import SingleImage from './SingleImage';
import { ToTopWrap } from '../../wrapper/index';

import Loading from '../../components/Loading';
import Error from '../Error.jsx';

import { getSingleTypewriter } from '../../features/singleTypewriter/singleTypewriterSlice';

const SingleTypewriter = ({ isEnglish }) => {
  const [clickedImg, setClickedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [direction, setDirection] = useState(0);

  const dispatch = useDispatch();

  const { singleTypewriter } = useSelector((store) => store.singleTypewriter);
  const { isLoading } = useSelector((store) => store.singleTypewriter);

  const { slug } = useParams();
  const controls = useAnimation();

  // GALLARY LOGIC

  // SET STATE FUNCTION
  const handleClick = (item, i) => {
    setCurrentIndex(i);
    setClickedImg(item.url);
    setShowModal(true);
  };

  // IMAGE CARUSEL RIGHT LOGIC WITH SAFETY
  const handelRotationRight = () => {
    setDirection(1);
    const totalLength = images.length;
    if (currentIndex + 1 >= totalLength) {
      setCurrentIndex(0);
      const newUrl = images[0].url;
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex + 1;
    const newUrl = images.filter((item) => {
      return images.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].url;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  // IMAGE CARUSEL LEFT LOGIC WITH SAFETY WITH SAFETY
  const handelRotationLeft = () => {
    setDirection(-1);
    const totalLength = images.length;
    if (currentIndex === 0) {
      setCurrentIndex(totalLength - 1);
      const newUrl = images[totalLength - 1].url;
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex - 1;
    const newUrl = images.filter((item) => {
      return images.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].url;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  // CHANGE LANG ANIMATION
  useEffect(() => {
    const changeLangAnimation = () => {
      controls.start(motionControlsValue);
    };

    changeLangAnimation();
  }, [isEnglish]);

  // GET TYPEWRITER BY ID FROM BACKEND
  useEffect(() => {
    dispatch(getSingleTypewriter(slug));
  }, [slug]);

  if (isLoading) return <Loading />;
  if (singleTypewriter === undefined) return <Error />;
  const { title_en, title_pl, body_en, body_pl, images } = singleTypewriter;

  return (
    <section className=' my-6 max-w-[100rem] m-auto'>
      {/* MODAL */}
      {showModal && (
        <GalleryModal
          clickedImg={clickedImg}
          handelRotationRight={handelRotationRight}
          handelRotationLeft={handelRotationLeft}
          setClickedImg={setClickedImg}
          setShowModal={setShowModal}
          direction={direction}
          isEnglish={isEnglish}
        />
      )}
      {/* SINGLE TYPEWRITER PAGE */}
      <motion.h2
        className='text-3xl 2xl:text-5xl text-center text-indigo-900 font-bold mb-4 p-2'
        animate={controls}
      >
        {isEnglish ? title_en : title_pl}
      </motion.h2>
      {/* LEFT SIDE, IMG */}
      <div className='flex flex-col justify-center lg:flex-row items-center gap-8 p-4 m-4'>
        <div className='flex flex-2'>
          <img
            src={`${images[0]?.url}?h=520&w=680`}
            alt={
              isEnglish
                ? 'Restored typewriter'
                : 'Odrestaurowana maszyna do pisania'
            }
            className='rounded-xl w-[40rem]'
          />
        </div>
        {/* RIGHT SIDE, TEXT */}
        <div className='flex flex-col flex-1 max-w-lg lg:self-start'>
          <motion.p className='my-6 lg:my-0' animate={controls}>
            {isEnglish ? body_en : body_pl}
          </motion.p>
          <Link className='w-28 mx-auto' to={`/typewriters`}>
            <motion.button
              className='flex justify-center items-center rounded-md border-indigo-900 xl:hover:border-none xl:hover:bg-indigo-900 xl:hover:border-transparent xl:hover:bg-opacity-50 transition-all duration-500 border-2 text-lg xl:hover:scale-105 h-10 w-full mt-6'
              animate={controls}
            >
              {isEnglish ? 'Back' : 'Cofnij'}
            </motion.button>
          </Link>
        </div>
      </div>
      <hr className='m-auto w-40 xl:w-[20rem] border-black'></hr>

      {/* GALLERY */}
      <div className='flex flex-col p-4 m-6 '>
        <motion.h3
          className='text-xl font-medium mb-4 text-indigo-900 text-center'
          animate={controls}
        >
          {isEnglish ? 'Gallery' : 'Galeria'}
        </motion.h3>
        <div className='flex flex-wrap gap-4 items-center justify-center'>
          {images.map((image, i) => (
            <SingleImage
              key={i}
              image={image}
              isEnglish={isEnglish}
              handleClick={() => handleClick(image, i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToTopWrap(SingleTypewriter);
