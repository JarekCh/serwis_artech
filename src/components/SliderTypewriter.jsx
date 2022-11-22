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

const SliderTypewriter = ({ isEnglish }) => {
  const { writersResult } = useSelector((store) => store.typewriters);

  const controls = useAnimation();
  const [writers, setWriters] = useState([]);
  const [slideIndex, setSlideIndex] = useState(0);
  const [sliderText, setSliderText] = useState('');

  const transition = {
    x: { type: 'spring', stiffness: 100, damping: 50 },
    opacity: { duration: 0.5 },
  };

  const incrementIndex = () => {
    setSlideIndex((prevValue) => prevValue + 1);
  };

  const decrementIndex = () => {
    setSlideIndex((prevValue) => prevValue - 1);
  };

  // SLIDER slideIndex SAFTY
  useEffect(() => {
    const lastIndex = writers.length - 1;
    if (slideIndex < 0) {
      setSlideIndex(lastIndex);
    }
    if (slideIndex > lastIndex) {
      setSlideIndex(0);
    }
  }, [slideIndex, writers]);

  // SLIDER INDEX INCREMENT
  useEffect(() => {
    let slider = setInterval(() => {
      setSlideIndex((prevValue) => prevValue + 1);
    }, 6000);

    return () => clearInterval(slider);
  }, [slideIndex]);

  // SET SORTED ARRAY OF WRITERS
  useEffect(() => {
    const writersForSort = [...writersResult];

    setWriters(
      writersForSort
        .sort(
          (a, b) =>
            Date?.parse(new Date(b.date)) - Date?.parse(new Date(a.date))
        )
        .slice(0, 6)
    );
  }, [writersResult]);

  // LANGUAGE CHANGE ANIMATION
  useEffect(() => {
    const changeLangAnimation = () => {
      controls.start(motionControlsValue);
    };

    changeLangAnimation();
  }, [isEnglish]);

  useEffect(() => {
    setSliderText(() => {
      if (isEnglish) {
        return writers[slideIndex]?.body_en;
      } else {
        return writers[slideIndex]?.body_pl;
      }
    });
  }, [[], isEnglish, slideIndex]);

  return (
    <section
      id='renovations'
      className='w-full min-h-[37rem] p-6 my-10 lg:my-24 z-5'
    >
      <div className='max-w-[100rem] mx-auto flex flex-col'>
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
            <div className='hidden xl:block absolute border-2 border-indigo-900 w-[25rem] lg:h-[25rem] lg:w-[28.125rem] xl:w-[33.75rem] 2xl:w-[40.625rem] rounded-xl -top-4 left-6 xl:left-5'></div>
            <div className='hidden xl:block absolute lg:h-[25rem]  lg:w-[25.625rem] xl:w-[33.125rem] 2xl:w-[40.625rem] rounded-xl top-4 -left-4 bg-gradient-to-r from-indigo-900 via-indigo-400 to-indigo-200'></div>
            <div className='flex justify-center lg:justify-start order-2 lg:order-1 min-h-[13.4rem]'>
              <motion.img
                src={`${writers[slideIndex]?.images[0]?.url}?h=400&w=650`}
                alt={isEnglish ? 'Typewriter' : 'Drukarka'}
                className='service_img w-[28rem] lg:w-[31.25rem] xl:w-[34.375rem] 2xl:w-[40.625rem] lg:h-[25rem]'
                key={slideIndex}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={transition}
              />
            </div>
            {/* SERVICE TEXT */}
            <div className='flex-1 order-1 lg:order-2 ml-4'>
              <motion.article>
                <motion.div
                  key={slideIndex}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
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
                    {sliderText?.length > 250
                      ? `${sliderText.substring(0, 250)}...`
                      : sliderText}
                  </motion.span>
                </motion.div>

                {/* BTNS MOBILE */}
                <div className='flex justify-around my-6'>
                  <button
                    className='flex lg:hidden sliderTypewriter__btns border-2 text-2xl w-10 h-10'
                    onClick={decrementIndex}
                  >
                    <BsChevronLeft />
                  </button>
                  <Link
                    to={`/typewriters/${writers[slideIndex]?.slug.current}`}
                  >
                    <button className='flex sliderTypewriter__btns border-2 text-xl w-28 h-10 xl:hover:scale-105'>
                      <motion.span animate={controls}>
                        {isEnglish ? 'More..' : 'Więcej..'}
                      </motion.span>
                    </button>
                  </Link>
                  <button
                    className='flex lg:hidden sliderTypewriter__btns border-2  text-2xl w-10 h-10'
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
      </div>
    </section>
  );
};

export default SliderTypewriter;
