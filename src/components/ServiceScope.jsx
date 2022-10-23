import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useSelector } from 'react-redux';
import Soldering from '../assets/soldering_640.jpg';
import Desk from '../assets/desk_640.jpg';
import Cartridge from '../assets/cartridges_640.png';
import Toner from '../assets/toner_640.png';
import { BsDot } from 'react-icons/bs';

import { motionControlsValue } from '../utils/utils.js';

// TODO add imgs toner and cardrige w/o bg

const ServiceScope = () => {
  const { isEnglish } = useSelector((store) => store.language);
  const { siteResult } = useSelector((store) => store.site);

  const { service_en, service_pl, text_en, text_pl, title_en, title_pl } =
    siteResult[0]?.service;

  const controls = useAnimation();

  useEffect(() => {
    const changeLangAnimation = () => {
      controls.start(motionControlsValue);
    };
    changeLangAnimation();
  }, [isEnglish]);

  return (
    <section className='w-full relative bg-slate-200 p-6'>
      <div className='hidden lg:block bg-slate-200 absolute -bottom-28 rotate-[4deg] -left-10 w-[120%] h-[30%]'></div>
      <div className='flex flex-col md:flex-row w-full pt-12 max-w-[1600px] mx-auto'>
        {/* TEXT SIDE */}
        <motion.div
          className='text-Black flex flex-1 flex-col mr-4'
          animate={controls}
        >
          <h2 className='section_title text-indigo-900'>
            {isEnglish ? title_en : title_pl}
          </h2>
          <span className='section_text'>{isEnglish ? text_en : text_pl}</span>
          <div className='mt-2 z-10'>
            <h3 className='font-bold section_text'>Czym się zajmujemy:</h3>
            <ul className='grid grid-cols-2 section_text -gap-4'>
              {isEnglish
                ? service_en.map((item, i) => (
                    <li key={i} className='flex items-center'>
                      <span className='text-indigo-900 text-3xl'>
                        <BsDot />
                      </span>
                      {item}
                    </li>
                  ))
                : service_pl.map((item, i) => (
                    <li key={i} className='flex items-center'>
                      <span className='text-indigo-900 text-3xl'>
                        <BsDot />
                      </span>
                      {item}
                    </li>
                  ))}
            </ul>
          </div>
          {/* IMAGES */}
        </motion.div>
        <div className='mt-6 flex flex-col flex-2 gap-4 lg:grid lg:grid-flow-dense lg:grid-row-2 lg:grid-cols-2'>
          <div className='flex content-center justify-center'>
            <img
              src={Desk}
              alt='desk with tools'
              className='service_img max-w-[22rem] lg:max-w-[16rem] xl:max-w-[22rem]'
            />
          </div>
          <div className='hidden lg:flex content-center justify-center'>
            <img
              src={Cartridge}
              alt='soldering'
              className='service_img max-w-[22rem] lg:max-w-[16rem] xl:max-w-[22rem]'
            />
          </div>
          <div className='flex content-center justify-center '>
            <img
              src={Toner}
              alt='desk with tools'
              className='service_img max-w-[22rem] lg:max-w-[16rem] xl:max-w-[22rem]'
            />
          </div>
          <div className='hidden lg:flex content-center justify-center'>
            <img
              src={Soldering}
              alt='soldering'
              className='service_img max-w-[22rem] lg:max-w-[16rem] xl:max-w-[22rem]'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceScope;
