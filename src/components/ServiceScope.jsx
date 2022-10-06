import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useSelector } from 'react-redux';

import { motionControlsValue } from '../utils/utils.js';

const ServiceScope = () => {
  const { isEnglish } = useSelector((store) => store.language);
  const { siteResult } = useSelector((store) => store.site);

  useEffect(() => {
    changeLangAnimation();
  }, [isEnglish]);

  const controls = useAnimation();
  const changeLangAnimation = () => {
    controls.start(motionControlsValue);
  };

  return (
    <section>
      <div></div>
      <div></div>
    </section>
  );
};

export default ServiceScope;
