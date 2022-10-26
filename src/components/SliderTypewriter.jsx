import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useSelector } from 'react-redux';
import { motionControlsValue } from '../utils/utils.js';
import { Link } from 'react-router-dom';
import {
  BsChevronCompactLeft,
  BsChevronLeft,
  BsChevronCompactRight,
  BsChevronRight,
} from 'react-icons/bs';

const SliderTypewriter = () => {
  const { isEnglish } = useSelector((store) => store.language);
  const { writersResult } = useSelector((store) => store.typewriters);

  const controls = useAnimation();
  const [writers, setWriters] = useState([]);

  const [slideIndex, setSlideIndex] = useState(0);
  const transition = { type: 'spring', duration: 3 };

  const incrementIndex = () => {
    setSlideIndex((prevValue) => prevValue + 1);
  };

  const decrementIndex = () => {
    setSlideIndex((prevValue) => prevValue - 1);
  };

  // Slider slideIndex seafty
  useEffect(() => {
    const lastIndex = writers.length - 1;
    if (slideIndex < 0) {
      setSlideIndex(lastIndex);
    }
    if (slideIndex > lastIndex) {
      setSlideIndex(0);
    }
  }, [slideIndex, writers]);

  // Slider index decrement
  useEffect(() => {
    let slider = setInterval(() => {
      setSlideIndex((prevValue) => prevValue + 1);
    }, 6000);

    return () => clearInterval(slider);
  }, [slideIndex]);

  // SET sorted array of writers
  useEffect(() => {
    const writersForSort = [...writersResult];

    setWriters(
      writersForSort
        .sort(
          (a, b) => Date.parse(new Date(b.date)) - Date.parse(new Date(a.date))
        )
        .slice(0, 6)
    );
  }, [writersResult]);

  // Change Lang animations
  useEffect(() => {
    const changeLangAnimation = () => {
      controls.start(motionControlsValue);
    };

    changeLangAnimation();
  }, [isEnglish]);

  return (
    <section
      id='renovations'
      className='flex flex-col w-full p-6 max-w-[1600px] mx-auto my-10 lg:my-24 z-5'
    >
      {/* TITLE */}
      <motion.div
        className='section_title text-indigo-900 pb-4'
        animate={controls}
      >
        {isEnglish ? 'Latest Renovation' : 'Ostatnie Renowacje'}
      </motion.div>
      {/* RIGHT BTN DESKTOP */}
      <div className='flex mb-6'>
        <button
          className='hidden lg:flex sliderTypewriter__btns  w-20 text-6xl mr-1 z-10'
          onClick={decrementIndex}
        >
          <BsChevronCompactLeft />
        </button>
        {/* IMAGE */}
        <div className='relative flex flex-col gap-2 xl:gap-10 lg:flex-row mx-4'>
          <div className='hidden xl:block absolute border-2 border-indigo-900 w-[400px] lg:h-[400px] lg:w-[450px] xl:w-[540px] 2xl:w-[650px] rounded-xl -top-4 left-6 xl:left-5'></div>
          <div className='hidden xl:block absolute lg:h-[400px]  lg:w-[410px] xl:w-[530px] 2xl:w-[650px] rounded-xl top-4 -left-4 bg-gradient-to-r from-indigo-900 via-indigo-400 to-indigo-200'></div>
          <div className='flex flex-1 justify-center lg:justify-start order-2 lg:order-1'>
            <motion.img
              src={writers[slideIndex]?.images[0]?.url}
              alt='typewriter'
              className='service_img w-[400px] lg:h-[400px] lg:w-[500px] xl:w-[550px] 2xl:w-[650px] hover:scale-100'
              key={slideIndex}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={transition}
            />
          </div>
          {/* SERVICE TEXT */}
          <div className='flex-1 order-1 lg:order-2 ml-4'>
            <motion.article>
              <motion.div
                key={slideIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={transition}
              >
                <motion.h3
                  className='text-xl 2xl:text-2xl font-bold mb-2 text-indigo-900'
                  animate={controls}
                >
                  {isEnglish
                    ? writers[slideIndex]?.title_en
                    : writers[slideIndex]?.title_pl}
                </motion.h3>
                <motion.span className='mb-5 section_text' animate={controls}>
                  {isEnglish
                    ? writers[slideIndex]?.body_en
                    : writers[slideIndex]?.body_pl}
                </motion.span>
              </motion.div>
              {/* BTNS MOBILE */}
              <div className='flex justify-around my-6'>
                <button
                  className='flex lg:hidden sliderTypewriter__btns border-2 text-2xl w-10 h-10 hover:scale-90'
                  onClick={decrementIndex}
                >
                  <BsChevronLeft />
                </button>
                <Link to={`/typewriters/${writers[slideIndex]?.slug.current}`}>
                  <button className='flex sliderTypewriter__btns border-2 text-xl w-28 hover:scale-90 h-10'>
                    <motion.span animate={controls}>
                      {isEnglish ? 'More..' : 'Więcej..'}
                    </motion.span>
                  </button>
                </Link>
                <button
                  className='flex lg:hidden sliderTypewriter__btns border-2 hover:scale-90 text-2xl w-10 h-10'
                  onClick={incrementIndex}
                >
                  <BsChevronRight />
                </button>
              </div>
            </motion.article>
          </div>
        </div>
        {/* LEFT BTN DESKTOP */}
        <button
          className='hidden lg:flex sliderTypewriter__btns  w-20 text-6xl ml-1 z-10'
          onClick={incrementIndex}
        >
          <BsChevronCompactRight />
        </button>
      </div>
    </section>
  );
};

export default SliderTypewriter;
