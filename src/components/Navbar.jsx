import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Logo from '../assets/logo1.png';

import { languagePL, languageEN } from '../features/language/languageSlice';

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const { isEnglish } = useSelector((store) => store.language);
  const dispatch = useDispatch();

  const handleClick = () => setShowNav((prevValue) => !prevValue);

  const handleLanguage = () => {
    if (!isEnglish) {
      return dispatch(languagePL());
    }
    if (isEnglish) {
      return dispatch(languageEN());
    }
  };

  // TODO navbar Animation, router links, scroll library
  // useEffect check window width and change show navBar to false when desktop
  // add framer motion on nav bar check conditional rendering

  return (
    <nav class='bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900 '>
      <div class='relative container flex flex-wrap justify-between items-center mx-auto'>
        <div class='cursor-pointer'>
          <img src={Logo} alt='' className='w-20 md:w-32' />
        </div>
        <div class='flex items-center md:order-2'>
          <label for='toggle' class='flex items-center cursor-pointer'>
            <div class='relative'>
              <input
                type='checkbox'
                defaultChecked={isEnglish ? 'checked' : ''}
                id='toggle'
                class='sr-only'
                onChange={handleLanguage}
              />
              <div class='block bg-gray-500 w-14 h-8 rounded-full'></div>
              <div class='flex justify-center items-center dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition delay-150 text-sm'>
                {isEnglish ? 'EN' : 'PL'}
              </div>
            </div>
          </label>
        </div>
        <button
          onClick={handleClick}
          type='button'
          class='inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
        >
          <svg
            class='w-6 h-6'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fill-rule='evenodd'
              d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
              clip-rule='evenodd'
            ></path>
          </svg>
        </button>
        <div
          class={`${
            showNav ? '' : 'hidden'
          } justify-between items-center  md:flex md:w-auto md:order-1 md:static absolute top-14 -right-1 transition delay-300`}
        >
          <ul class='flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
            <li>
              <a
                onClick={handleClick}
                href='#'
                class='block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
              >
                {isEnglish ? 'Home' : 'Strona domowa'}
              </a>
            </li>
            <li>
              <a
                onClick={handleClick}
                href='#'
                class='block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
              >
                {isEnglish ? 'Typewriters' : 'Maszyny'}
              </a>
            </li>
            <li>
              <a
                onClick={handleClick}
                href='#'
                class='block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
              >
                {isEnglish ? 'Service' : 'Naprawy'}
              </a>
            </li>
            <li>
              <a
                onClick={handleClick}
                href='#'
                class='block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
              >
                {isEnglish ? 'Latest Renovations' : 'Ostatnie renowacje'}
              </a>
            </li>
            <li>
              <a
                onClick={handleClick}
                href='#'
                class='block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
              >
                {isEnglish ? 'Assortment' : 'Asortyment'}
              </a>
            </li>
            <li>
              <a
                onClick={handleClick}
                href='#'
                class='block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
              >
                {isEnglish ? 'Contact' : 'Kontakt'}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
