import { useEffect } from 'react';
import moment from 'moment';
import 'moment/locale/pl';
import { motion, useAnimation } from 'framer-motion';
import { motionControlsValue } from '../../utils/utils.js';
import { Link } from 'react-router-dom';

const ShopItem = ({
  body_en,
  body_pl,
  date,
  image,
  title_en,
  title_pl,
  isEnglish,
}) => {
  const controls = useAnimation();

  // CHANGE LANGUAGE ANIMATION
  useEffect(() => {
    const changeLangAnimation = () => {
      controls.start(motionControlsValue);
    };

    changeLangAnimation();
  }, [isEnglish]);

  return (
    // TYPEWRITER
    <article className='flex flex-col gap-4 my-6 rounded-xl shadow-xl bg-slate-300 p-6 transition-all duration-500 xl:hover:scale-95 m-4 min-h-[40rem]'>
      {/* TYPEWRITER TITLE */}
      <motion.h2
        animate={controls}
        className='text-center text-2xl font-bold text-indigo-900'
      >
        {isEnglish ? title_en : title_pl}
      </motion.h2>
      {/* TYPEWRITER IMG */}
      <img
        src={`${image.url}?h=360&w=560`}
        alt={isEnglish ? 'typewriter' : 'maszyna do pisania'}
        className='rounded-xl'
      />
      {/* TYPEWRITER TEXT */}
      <motion.p animate={controls}>{isEnglish ? body_en : body_pl}</motion.p>
      {/* TYPEWRITER BUTTON */}
      <Link className='w-28 mx-auto' to={`/typewriters/`}>
        <motion.button
          animate={controls}
          className='flex justify-center items-center rounded-md border-indigo-900 xl:hover:border-none xl:hover:bg-indigo-900 xl:hover:border-transparent xl:hover:bg-opacity-50  transition-all duration-500 border-2 text-lg w-full h-10 xl:hover:scale-105'
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

export default ShopItem;
