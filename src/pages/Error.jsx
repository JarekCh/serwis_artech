import React, { useEffect } from 'react';
import errorPage from '../assets/error_page.webp';
import { motion, useAnimation } from 'framer-motion';
import { motionControlsValue } from '../utils/utils.js';
import { Link } from 'react-router-dom';

const Error = ({ isEnglish }) => {
  // CHANGE LANGUAGE ANIMATION
  const controls = useAnimation();

  useEffect(() => {
    const changeLangAnimation = () => {
      controls.start(motionControlsValue);
    };
    changeLangAnimation();
  }, [isEnglish, controls]);

  return (
    <div
      className='w-full h-[85vh] lg:h-[85vh] xl:h-[80vh] bg-cover bg-center '
      style={{ backgroundImage: `url(${errorPage})` }}
    >
      <article className='text-white bg-black/60 w-full h-full flex flex-col justify-center items-center gap-6'>
        <motion.div
          className='text-5xl xl:text-8xl text-b font-bold'
          animate={controls}
        >
          404 Error
        </motion.div>
        <motion.div className='text-xl xl:text-3xl' animate={controls}>
          {isEnglish ? "This page doesn't exist." : 'Nie ma takiej strony.'}
        </motion.div>
        <div className='h-14 flex items-center'>
          <Link to='/'>
            <button className='flex justify-center items-center rounded-md xl:hover:border-none xl:hover:bg-indigo-900 xl:hover:border-transparent xl:hover:bg-opacity-70 transition-all duration-500 border-indigo-900 border-2 text-lg xl:text-3xl xl:hover:scale-105 h-10 p-6'>
              <motion.span animate={controls}>
                {isEnglish ? 'Home page' : 'Strona domowa'}
              </motion.span>
            </button>
          </Link>
        </div>
      </article>
    </div>
  );
};

export default Error;
