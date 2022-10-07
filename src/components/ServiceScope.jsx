import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useSelector } from 'react-redux';
import Copier from '../assets/copier_640.jpg';
import Cartridge from '../assets/cartridge_640.jpg';
import Desk from '../assets/desk_640.jpg';

import { motionControlsValue } from '../utils/utils.js';

const ServiceScope = () => {
  const { isEnglish } = useSelector((store) => store.language);
  const { siteResult } = useSelector((store) => store.site);
  console.log(
    '🚀 ~ file: ServiceScope.jsx ~ line 10 ~ ServiceScope ~ siteResult',
    siteResult
  );

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
    <section className='flex flex-col my-5 w-full p-6'>
      <div className='text-Black flex flex-col content-start'>
        <h2 className='section_title'>{isEnglish ? title_en : title_pl}</h2>
        <span>{isEnglish ? text_en : text_pl}</span>
        <div className='mt-2'>
          Czym się zajmujemy:
          <ul className='grid grid-cols-2'>
            {isEnglish
              ? service_en.map((item, i) => <li key={i}>{item}</li>)
              : service_pl.map((item, i) => <li key={i}>- {item}</li>)}
          </ul>
        </div>
      </div>
      <div className='mt-6'>
        <div className='flex content-center justify-center'>
          <img src={Copier} alt='' className='brightness-50' />
        </div>
        <div className='flex content-center justify-center'>
          <img src={Desk} alt='' className='brightness-50' />
        </div>
        <div className='flex content-center justify-center'>
          <img src={Cartridge} alt='' className='brightness-50' />
        </div>
      </div>
    </section>
  );
};

export default ServiceScope;
