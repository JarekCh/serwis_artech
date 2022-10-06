import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useSelector } from 'react-redux';

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
    <section className='flex flex-col'>
      <div className='text-Black'>asdasd</div>
      <div className=''>
        <div>
          <img src='' alt='' />
          <div className='w-full'></div>
        </div>
        <div></div>
        <div></div>
      </div>
    </section>
  );
};

export default ServiceScope;
