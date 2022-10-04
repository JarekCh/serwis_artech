import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Logo from '../assets/logo1.png';
import { motion } from 'framer-motion';

import { languagePL, languageEN } from '../features/language/languageSlice';

const Navbar = () => {
  const initialWidth = window.innerWidth;
  const [windowWidth, setWindowWidth] = useState(initialWidth);
  const [showNav, setShowNav] = useState(false);
  const { isEnglish } = useSelector((store) => store.language);
  const dispatch = useDispatch();
  const itemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 300, damping: 24 },
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
  };

  const handleClick = () => setShowNav((prevValue) => !prevValue);

  const handleLanguage = () => {
    if (!isEnglish) {
      return dispatch(languagePL());
    }
    if (isEnglish) {
      return dispatch(languageEN());
    }
  };

  useEffect(() => {
    const updateWindowDimensions = () => {
      const newWidth = window.innerWidth;
      setWindowWidth(newWidth);
    };

    window.addEventListener('resize', updateWindowDimensions);

    return () => window.removeEventListener('resize', updateWindowDimensions);
  }, []);

  // TODO  router links, scroll library
  // fix close navbar animation
  // add animation on language swap

  return (
    <motion.nav
      className='bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900'
      initial={false}
      animate={windowWidth < 1280 ? (showNav ? 'open' : 'closed') : 'visible'}
    >
      <div className='relative container flex flex-wrap justify-between items-center mx-auto'>
        <div className='cursor-pointer'>
          <img src={Logo} alt='' className='w-20 md:w-32' />
        </div>
        <div className='flex items-center xl:order-2'>
          <label htmlFor='toggle' className='flex items-center cursor-pointer'>
            <div className='relative'>
              <input
                type='checkbox'
                defaultChecked={isEnglish ? 'checked' : ''}
                id='toggle'
                className='sr-only'
                onChange={handleLanguage}
              />
              <div className='block bg-gray-500 w-14 h-8 rounded-full'></div>
              <div className='flex justify-center items-center dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition delay-150 text-sm'>
                {isEnglish ? 'EN' : 'PL'}
              </div>
            </div>
          </label>
        </div>
        <motion.button
          onClick={handleClick}
          type='button'
          className='inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg xl:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
          whileTap={{ scale: 0.9 }}
        >
          <motion.svg
            className='w-6 h-6'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
              clipRule='evenodd'
            ></path>
          </motion.svg>
        </motion.button>
        <div
          className={`${
            showNav ? '' : 'hidden'
          } justify-between items-center xl:flex xl:w-auto xl:order-1 xl:static absolute top-14 md:top-24 -right-1`}
        >
          <motion.ul
            className='flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 xl:flex-row xl:space-x-8 xl:mt-0 xl:text-sm xl:font-medium xl:border-0 xl:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'
            variants={{
              open: {
                clipPath: 'inset(0% 0% 0% 0% round 10px)',
                transition: {
                  type: 'spring',
                  bounce: 0,
                  duration: 0.7,
                  delayChildren: 0.3,
                  staggerChildren: 0.05,
                },
              },
              closed: {
                clipPath: 'inset(10% 50% 90% 50% round 10px)',
                transition: {
                  type: 'spring',
                  bounce: 0,
                  duration: 0.3,
                },
              },
            }}
          >
            <motion.li variants={itemVariants}>
              <a
                onClick={handleClick}
                href='#'
                className='block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 xl:hover:bg-transparent xl:hover:text-blue-700 xl:p-0 dark:text-gray-400 xl:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white xl:dark:hover:bg-transparent dark:border-gray-700'
              >
                {isEnglish ? 'Home' : 'Strona domowa'}
              </a>
            </motion.li>
            <motion.li variants={itemVariants}>
              <a
                onClick={handleClick}
                href='#'
                className='block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 xl:hover:bg-transparent xl:hover:text-blue-700 xl:p-0 dark:text-gray-400 xl:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white xl:dark:hover:bg-transparent dark:border-gray-700'
              >
                {isEnglish ? 'Typewriters' : 'Maszyny'}
              </a>
            </motion.li>
            <motion.li variants={itemVariants}>
              <a
                onClick={handleClick}
                href='#'
                className='block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 xl:hover:bg-transparent xl:hover:text-blue-700 xl:p-0 dark:text-gray-400 xl:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white xl:dark:hover:bg-transparent dark:border-gray-700'
              >
                {isEnglish ? 'Service' : 'Naprawy'}
              </a>
            </motion.li>
            <motion.li variants={itemVariants}>
              <a
                onClick={handleClick}
                href='#'
                className='block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 xl:hover:bg-transparent xl:hover:text-blue-700 xl:p-0 dark:text-gray-400 xl:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white mxld:dark:hover:bg-transparent dark:border-gray-700'
              >
                {isEnglish ? 'Latest Renovations' : 'Ostatnie renowacje'}
              </a>
            </motion.li>
            <motion.li variants={itemVariants}>
              <a
                onClick={handleClick}
                href='#'
                className='block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 xl:hover:bg-transparent xl:hover:text-blue-700 xl:p-0 dark:text-gray-400 xl:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white xl:dark:hover:bg-transparent dark:border-gray-700'
              >
                {isEnglish ? 'Assortment' : 'Asortyment'}
              </a>
            </motion.li>
            <motion.li variants={itemVariants}>
              <a
                onClick={handleClick}
                href='#'
                className='block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 xl:hover:bg-transparent xl:hover:text-blue-700 xl:p-0 dark:text-gray-400 xl:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white xl:dark:hover:bg-transparent dark:border-gray-700'
              >
                {isEnglish ? 'Contact' : 'Kontakt'}
              </a>
            </motion.li>
          </motion.ul>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
