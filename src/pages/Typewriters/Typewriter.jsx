import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';
import 'moment/locale/pl';
import { motion, useAnimation } from 'framer-motion';
import { motionControlsValue } from '../../utils/utils.js';
import { Link } from 'react-router-dom';

const Typewriter = ({
  body_en,
  body_pl,
  date,
  images,
  title_en,
  title_pl,
  slug,
}) => {
  const { isEnglish } = useSelector((store) => store.language);
  const controls = useAnimation();

  // Change Lang animations
  useEffect(() => {
    const changeLangAnimation = () => {
      controls.start(motionControlsValue);
    };

    changeLangAnimation();
  }, [isEnglish]);

  return (
    // TYPEWRITER
    <article className='flex flex-col gap-4 my-6 rounded-xl shadow-xl bg-slate-300 p-6 transition-all duration-500 hover:scale-95 m-4'>
      {/* TYPEWRITER TITLE */}
      <motion.h2
        animate={controls}
        className='text-center text-2xl font-bold text-indigo-900'
      >
        {isEnglish ? title_en : title_pl}
      </motion.h2>
      {/* TYPEWRITER IMG */}
      <img
        src={images[0]?.url}
        alt={isEnglish ? 'restored typewriter' : 'odrestaurowana maszyna'}
        className='rounded-xl'
      />
      {/* TYPEWRITER TEXT */}
      <motion.p animate={controls}>
        {isEnglish
          ? body_en.length > 120
            ? `${body_en.substring(0, 250)}...`
            : body_en
          : body_pl.length > 120
          ? `${body_pl.substring(0, 250)}...`
          : body_pl}
      </motion.p>
      {/* TYPEWRITER BUTTON */}
      <Link to={`/typewriters/${slug.current}`}>
        <motion.button
          animate={controls}
          className='flex justify-center items-center rounded-md border-indigo-900 hover:border-none hover:bg-indigo-900 hover:border-transparent hover:bg-opacity-50  transition-all duration-200 border-2 text-lg w-28 hover:scale-105 h-10 mx-auto'
        >
          {isEnglish ? 'More..' : 'Więcej..'}
        </motion.button>
      </Link>
      {/* TYPEWRITER DATE */}
      <motion.p className='text-right mt-6' animate={controls}>
        {moment(date)
          .locale(`${isEnglish ? 'en' : 'pl'}`)
          .format('MMMM Do YYYY, h:mma')}
      </motion.p>
    </article>
  );
};

export default Typewriter;
