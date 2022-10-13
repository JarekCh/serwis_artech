import React, { useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useSelector } from 'react-redux';
import emailjs from '@emailjs/browser';

import { motionControlsValue } from '../utils/utils.js';

const Contact = () => {
  const { isEnglish } = useSelector((store) => store.language);

  const controls = useAnimation();
  return (
    <section className=''>
      <div></div>
      <div>
        <div></div>
        <article></article>
        <div></div>
      </div>
    </section>
  );
};

export default Contact;
