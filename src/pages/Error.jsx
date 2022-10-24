import React, { useEffect } from 'react';
import errorPage from '../assets/error_page.jpg';
import { motion, useAnimation } from 'framer-motion';
import { useSelector } from 'react-redux';
import { motionControlsValue } from '../utils/utils.js';
import { Link } from 'react-router-dom';

const Error = () => {
  const { isEnglish } = useSelector((store) => store.language);

  const controls = useAnimation();

  useEffect(() => {
    const changeLangAnimation = () => {
      controls.start(motionControlsValue);
    };
    changeLangAnimation();
  }, [isEnglish]);

  return (
    <div
      className='w-full h-[80vh] lg:h-[85vh] xl:h-[80vh] bg-cover bg-center '
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
        <Link to='/'>
          <button className='flex justify-center items-center rounded-md hover:border-none hover:bg-indigo-900 hover:border-transparent hover:bg-opacity-70 transition-all duration-500 border-indigo-900 border-2 text-lg xl:text-3xl hover:scale-90 h-10 p-6'>
            <motion.span animate={controls}>
              {isEnglish ? 'Home page' : 'Strona domowa'}
            </motion.span>
          </button>
        </Link>
      </article>
    </div>
  );
};

export default Error;
