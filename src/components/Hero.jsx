import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useSelector } from 'react-redux';
import heroImg from '../assets/hero1920.webp';
import heroImgLowRes from '../assets/hero1280.webp';

import { motionControlsValue } from '../utils/utils.js';

const Hero = ({ isEnglish }) => {
  const { siteResult } = useSelector((store) => store.site);

  const { isNotify, notification, text_en, text_pl, title_en, title_pl } =
    siteResult[0]?.hero;

  // CHANGE LANGUAGE ANIMATION
  const controls = useAnimation();

  useEffect(() => {
    const changeLangAnimation = () => {
      controls.start(motionControlsValue);
    };
    changeLangAnimation();
  }, [isEnglish, controls]);

  return (
    <section
      className=' w-full bg-cover bg-center h-[42rem] xl:h-[54rem] 2xl:h-[65rem]'
      style={{
        backgroundImage: `url(${
          window.innerWidth <= 1280 ? heroImgLowRes : heroImg
        })`,
      }}
    >
      <div className='bg-black/50 w-full h-full flex flex-col justify-center items-center text-slate-200 relative'>
        {isNotify && (
          <motion.div
            className='absolute m-4 top-0 text-red-200 text-sm lg:text-2xl xl:text-3xl'
            animate={{ scale: [0.95, 1, 0.95] }}
            transition={{
              repeat: Infinity,
              duration: 4,
            }}
          >
            {notification}
          </motion.div>
        )}
        <motion.article
          className={`${
            isNotify ? 'top-2' : ''
          }top-2 absolute left-3 md:left-20 md:top-20 2xl:left-[20rem] 2xl:top-30 xl:top-40 w-11/12 md:w-7/12 xl:w-5/12 p-2 pt-10 text-white`}
          animate={controls}
        >
          <h1 className='section_title'>{isEnglish ? title_en : title_pl}</h1>
          <p className='section_text'>{isEnglish ? text_en : text_pl}</p>
        </motion.article>
      </div>
    </section>
  );
};

export default Hero;
