import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Logo from '../assets/logo1.png';
import { motion, useAnimation } from 'framer-motion';
import { FaFacebook } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import { languagePL, languageEN } from '../features/language/languageSlice';
import { liVariants, motionControlsValue } from '../utils/utils.js';

const Navbar = () => {
  const initialWidth = window.innerWidth;
  const [showNav, setShowNav] = useState(false);
  const { isEnglish } = useSelector((store) => store.language);
  const dispatch = useDispatch();

  // NAVIGATIONS LINKS WITH NAVLINKS
  const navLinks = [
    { to: '/', lang: isEnglish ? 'Home' : 'Strona domowa' },
    { to: '/typewriters', lang: isEnglish ? 'Typewriters' : 'Maszyny' },
  ];
  // NAVIGATIONS LINKS WITH HASHLINKS
  const hashLinks = [
    { to: '/#service', lang: isEnglish ? 'Service' : 'Naprawy' },
    {
      to: '/#renovations',
      lang: isEnglish ? 'Latest Renovations' : 'Ostatnie renowacje',
    },
    { to: '/#contact', lang: isEnglish ? 'Contact' : 'Kontakt' },
  ];

  // SHOW NAVBAR - STATE HANDLE FUNCTION
  const handleClick = () => {
    if (initialWidth < 1280) {
      setShowNav((prevValue) => !prevValue);
    }
  };

  // HANDLE GLOBAL LANGUAGE VARIABLE
  const handleLanguage = () => {
    if (!isEnglish) {
      changeLangAnimation();
      return dispatch(languagePL());
    }
    if (isEnglish) {
      changeLangAnimation();
      return dispatch(languageEN());
    }
  };

  // LANGUAGE CHANGE ANIMATION

  const controls = useAnimation();

  const changeLangAnimation = () => {
    controls.start(motionControlsValue);
  };

  // HIDE NAVBAR CONTAINER IN DOM
  useEffect(() => {
    const navbar = document.getElementById('nav');
    if (showNav) {
      navbar.classList.remove('hidden');
    }
    if (!showNav) {
      const interval = setInterval(() => {
        navbar.classList.add('hidden');
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [showNav]);

  return (
    <motion.nav
      className='bg-slate-50 px-2 sm:px-4 py-2.5 rounded'
      initial={false}
      animate={initialWidth < 1280 ? (showNav ? 'open' : 'closed') : ''}
    >
      {/* LOGO */}
      <div className='relative container flex flex-wrap justify-between items-center mx-auto'>
        <NavLink to={`/`} className='cursor-pointer'>
          <img src={Logo} alt='' className='w-20 md:w-32 xl:w-60' />
        </NavLink>
        {/* LANG SLIDER */}
        <div className='flex items-center xl:order-2'>
          {/* FACEBOOK ICON */}
          <a
            href='https://www.facebook.com/Naprawamaszyndopisania'
            className='text-4xl mx-4 text-[#4267B2] transition-all duration-500 xl:hover:scale-90'
            target='_blank'
          >
            <FaFacebook />
          </a>

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
              <motion.div
                className='flex justify-center items-center dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition delay-150 text-sm'
                animate={controls}
              >
                {isEnglish ? 'EN' : 'PL'}
              </motion.div>
            </div>
          </label>

          <motion.button
            onClick={handleClick}
            type='button'
            className='inline-flex items-center p-2 ml-5 text-sm text-gray-500 rounded-lg xl:hidden xl:hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 '
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
        </div>

        {/* NAV LINKS */}
        <div
          id='nav'
          className='xl:flex justify-between items-center xl:w-auto xl:order-1 xl:static absolute top-14 md:top-24 -right-1 z-10'
        >
          <motion.ul
            className='flex flex-col p-4 mt-4 bg-slate-50 rounded-lg border border-gray-100 xl:flex-row xl:space-x-8 xl:mt-0 xl:text-lg xl:font-medium xl:border-0'
            variants={{
              open: {
                clipPath: 'inset(0% 0% 0% 0% round 0.625rem)',
                transition: {
                  type: 'spring',
                  bounce: 0,
                  duration: 0.7,
                  delayChildren: 0.3,
                  staggerChildren: 0.05,
                },
              },
              closed: {
                clipPath: 'inset(10% 50% 90% 50% round 0.625rem)',
                transition: {
                  type: 'spring',
                  bounce: 0,
                  duration: 0.3,
                },
              },
            }}
          >
            {/* NAVLINKS */}
            {navLinks.map((item, i) => {
              return (
                <motion.li key={i} variants={liVariants}>
                  <NavLink to={item.to}>
                    <motion.span
                      onClick={handleClick}
                      className='navbar__li'
                      animate={controls}
                    >
                      {item.lang}
                    </motion.span>
                  </NavLink>
                </motion.li>
              );
            })}
            {/* HASHLINKS */}
            {hashLinks.map((item, i) => {
              return (
                <motion.li key={i} variants={liVariants}>
                  <HashLink to={item.to} smooth>
                    <motion.span
                      onClick={handleClick}
                      className='navbar__li'
                      animate={controls}
                    >
                      {item.lang}
                    </motion.span>
                  </HashLink>
                </motion.li>
              );
            })}
          </motion.ul>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
