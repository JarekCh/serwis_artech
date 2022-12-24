import { useEffect } from 'react';
import moment from 'moment';
import 'moment/locale/pl';
import { motion, useAnimation } from 'framer-motion';
import { motionControlsValue } from '../../utils/utils.js';
import { HashLink } from 'react-router-hash-link';

const ShopItem = ({
  body_en,
  body_pl,
  date,
  image,
  title_en,
  title_pl,
  isEnglish,
  auction_link,
}) => {
  const controls = useAnimation();

  // CHANGE LANGUAGE ANIMATION
  useEffect(() => {
    const changeLangAnimation = () => {
      controls.start(motionControlsValue);
    };

    changeLangAnimation();
  }, [isEnglish, controls]);

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
      {/* NAV BUTTONS */}
      <div className='flex gap-4 mx-auto justify-center'>
        <HashLink to='/#contact' smooth>
          <motion.button
            animate={controls}
            className='flex justify-center items-center rounded-md border-indigo-900 xl:hover:border-none xl:hover:bg-indigo-900 xl:hover:border-transparent xl:hover:bg-opacity-50  transition-all duration-500 border-2 text-lg h-10 xl:hover:scale-105 w-28'
          >
            {isEnglish ? 'Contact' : 'Kontakt'}
          </motion.button>
        </HashLink>
        <motion.a
          animate={controls}
          className='flex justify-center items-center rounded-md border-indigo-900 xl:hover:border-none xl:hover:bg-indigo-900 xl:hover:border-transparent xl:hover:bg-opacity-50  transition-all duration-500 border-2 text-lg h-10 xl:hover:scale-105 w-28 cursor-pointer'
          target='_blank'
          href={auction_link}
        >
          {isEnglish ? 'Auction' : 'Aukcja'}
        </motion.a>
      </div>
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
