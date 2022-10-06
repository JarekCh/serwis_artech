import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useSelector } from 'react-redux';
import heroImg from '../assets/hero1920.jpg';

import { motionControlsValue } from '../utils/utils.js';

const Hero = () => {
  const { isEnglish } = useSelector((store) => store.language);
  console.log('🚀 ~ file: Hero.jsx ~ line 10 ~ Hero ~ isEnglish', isEnglish);
  const { siteResult } = useSelector((store) => store.site);

  const { isNotify, notification, text_en, text_pl, title_en, title_pl } =
    siteResult[0]?.hero;

  const controls = useAnimation();

  useEffect(() => {
    const changeLangAnimation = () => {
      controls.start(motionControlsValue);
    };
    changeLangAnimation();
  }, [isEnglish]);

  return (
    <section
      className=' w-full bg-cover bg-center h-[22rem] md:h-[40rem] xl:h-[54rem] 2xl:h-[65rem]'
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className='bg-black/50 w-full h-full flex flex-col justify-center items-center text-slate-200 relative'>
        {isNotify && (
          <motion.div
            className='absolute p-2 pl-4 top-0 text-red-200 text-xl lg:text-2xl xl:text-3xl'
            animate={{ scale: [1.05, 1, 1.05] }}
            transition={{
              repeat: Infinity,
              duration: 4,
            }}
          >
            {notification}
          </motion.div>
        )}
        <motion.article
          className='absolute left-3 md:left-20 md:top-20 2xl:left-[20rem] 2xl:top-30 xl:top-40 w-11/12 md:w-7/12 xl:w-5/12 p-2 pt-10 text-white'
          animate={controls}
        >
          <h1 className='text-2xl md:text-4xl xl:text-5xl mb-4'>
            {isEnglish ? title_en : title_pl}
          </h1>
          <p className='text-base md:text-lg xl:text-xl'>
            {isEnglish ? text_en : text_pl}
          </p>
        </motion.article>
      </div>
    </section>
  );
};

export default Hero;
