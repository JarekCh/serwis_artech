import React, { useEffect, useState } from 'react';
import { animationControls, motion, useAnimation } from 'framer-motion';
import { useSelector } from 'react-redux';
import { motionControlsValue, motionSlider } from '../utils/utils.js';
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
  const image = useAnimation();
  const sliderText = useAnimation();
  const [writers, setWriters] = useState([]);

  const [index, setIndex] = useState(0);
  console.log(
    '🚀 ~ file: SliderTypewriter.jsx ~ line 23 ~ SliderTypewriter ~ index',
    index
  );

  const newWidth = window.innerWidth;
  console.log(
    '🚀 ~ file: SliderTypewriter.jsx ~ line 26 ~ SliderTypewriter ~ wisth',
    newWidth
  );

  // TODO router

  const incrementIndex = () => {
    setIndex((prevValue) => prevValue + 1);
    animateSlider();
  };

  const decrementIndex = () => {
    setIndex((prevValue) => prevValue - 1);
    animateSlider();
  };

  const animateSlider = () => {
    image.start(motionSlider);
    sliderText.start(motionControlsValue);
  };

  // Slider index seafty
  useEffect(() => {
    const lastIndex = writers.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, writers]);

  // Slider index decrement
  useEffect(() => {
    let slider = setInterval(() => {
      animateSlider();
      setIndex((prevValue) => prevValue - 1);
    }, 6000);

    return () => clearInterval(slider);
  }, [index]);

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
    <section className='flex flex-col w-full p-6 max-w-[1600px] mx-auto'>
      {/* TITLE */}
      <motion.div className='section_title text-indigo-900' animate={controls}>
        {isEnglish ? 'Latest Renovation' : 'Ostatnie Renowacje'}
      </motion.div>
      {/* RIGHT BTN DESKTOP */}
      <div className='flex mb-6'>
        <button
          className='hidden lg:flex sliderTypewriter__btns  w-20 text-6xl mr-1'
          onClick={decrementIndex}
        >
          <BsChevronCompactLeft />
        </button>
        {/* IMAGE */}
        <div className='relative flex flex-col gap-10 lg:flex-row mx-4'>
          <div className='hidden xl:block absolute border-2 border-indigo-900 w-[400px] lg:h-[400px] lg:w-[450px] xl:w-[540px] 2xl:w-[650px] rounded-xl -top-4 left-6'></div>
          <div className='hidden xl:block absolute lg:h-[400px]  lg:w-[410px] xl:w-[530px] 2xl:w-[650px] rounded-xl top-4 -left-4 bg-gradient-to-r from-indigo-900 via-indigo-400 to-indigo-200'></div>
          <motion.div
            className='flex flex-1 justify-center lg:justify-start order-2 lg:order-1'
            animate={image}
          >
            <img
              src={writers[index]?.images[0]?.url}
              alt='typewriter'
              className='service_img cursor-pointer w-[400px] lg:h-[400px] lg:w-[500px] xl:w-[550px] 2xl:w-[650px] hover:scale-100'
            />
          </motion.div>
          {/* ARTICLE */}
          <div className='flex-1 order-1 lg:order-2 '>
            <motion.article animate={controls}>
              <motion.h3
                className='font-bold section_text mb-2 text-indigo-900'
                animate={sliderText}
              >
                {isEnglish
                  ? writers[index]?.title_en
                  : writers[index]?.title_pl}
              </motion.h3>
              <motion.span className='mb-5 ' animate={sliderText}>
                {isEnglish ? writers[index]?.body_en : writers[index]?.body_pl}
              </motion.span>
              {/* BTNS MOBILE */}
              <div className='flex justify-around my-6'>
                <button
                  className='flex lg:hidden sliderTypewriter__btns border-2 text-2xl w-10 h-10 hover:scale-90'
                  onClick={decrementIndex}
                >
                  <BsChevronLeft />
                </button>
                <button className='flex sliderTypewriter__btns border-2 text-xl w-28 hover:scale-90 h-10'>
                  {isEnglish ? 'More..' : 'Więcej..'}
                </button>
                <button
                  className='flex lg:hidden sliderTypewriter__btns border-2 hover:scale-90 text-2xl w-10 h-10'
                  onClick={() => setIndex((prevValue) => prevValue + 1)}
                >
                  <BsChevronRight />
                </button>
              </div>
            </motion.article>
          </div>
        </div>
        {/* LEFT BTN DESKTOP */}
        <button
          className='hidden lg:flex sliderTypewriter__btns  w-20 text-6xl ml-1'
          onClick={incrementIndex}
        >
          <BsChevronCompactRight />
        </button>
      </div>
    </section>
  );
};

export default SliderTypewriter;
