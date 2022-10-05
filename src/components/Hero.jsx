import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import heroImg from '../assets/hero1920.jpg';

const Hero = () => {
  const { isEnglish } = useSelector((store) => store.language);
  const { siteResult, isLoading } = useSelector((store) => store.site);
  console.log('🚀 ~ file: Hero.jsx ~ line 9 ~ Hero ~ siteResult', siteResult);

  const { isNotify, notification, text_en, text_pl, title_en, title_pl } =
    siteResult[0]?.hero;

  return (
    <section
      className=' w-full bg-cover bg-center h-[22rem] md:h-[40rem] xl:h-[54rem] 2xl:h-[65rem]'
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className='bg-black/50 w-full h-full flex flex-col justify-center items-center text-slate-200 relative'>
        {isNotify && (
          <div className='absolute p-2 pl-4 top-0 text-red-200 text-2xl'>
            {notification}
          </div>
        )}
        <article className='absolute left-3 md:left-20 md:top-20 xl:top-40 w-11/12 md:w-7/12 xl:w-5/12 p-2 pt-10 text-white'>
          <h1 className='text-2xl md:text-4xl xl:text-6xl mb-4'>
            {isEnglish ? title_en : title_pl}
          </h1>
          <p className='text-base md:text-lg xl:text-2xl'>
            {isEnglish ? text_en : text_pl}
          </p>
        </article>
      </div>
    </section>
  );
};

export default Hero;
