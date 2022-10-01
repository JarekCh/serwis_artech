import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { languagePL, languageEN } from '../features/language/languageSlice';

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const [showLanguage, setLanguage] = useState(false);
  const { isEnglish } = useSelector((store) => store.language);
  const dispatch = useDispatch();

  const handleLanguage = () => {
    if (!isEnglish) {
      return dispatch(languagePL());
    }
    if (isEnglish) {
      return dispatch(languageEN());
    }
  };

  return (
    <nav class='bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900 '>
      <div class='container flex flex-wrap justify-between items-center mx-auto'>
        <a class='flex items-center'></a>
        <div class='flex items-center md:order-2'>
          <div class='flex  justify-center w-full '>
            <label for='toggle' class='flex items-center cursor-pointer'>
              <div class='relative'>
                <input
                  type='checkbox'
                  defaultChecked={isEnglish ? 'checked' : ''}
                  id='toggle'
                  class='sr-only'
                  onChange={handleLanguage}
                />
                <div class='block bg-gray-600 w-14 h-8 rounded-full'></div>
                <div class='flex justify-center items-center dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition text-sm'>
                  {isEnglish ? 'EN' : 'PL'}
                </div>
              </div>
            </label>
          </div>
        </div>
        <div
          class='hidden justify-between items-center w-full md:flex md:w-auto md:order-1'
          id='mobile-menu-language-select'
        >
          <ul class='flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
            <li>
              <a
                href='#'
                class='block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white'
                aria-current='page'
              >
                Home
              </a>
            </li>
            <li>
              <a
                href='#'
                class='block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
              >
                About
              </a>
            </li>
            <li>
              <a
                href='#'
                class='block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
              >
                Services
              </a>
            </li>
            <li>
              <a
                href='#'
                class='block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href='#'
                class='block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
