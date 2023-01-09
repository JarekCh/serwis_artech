import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Footer = () => {
  const date = new Date().getFullYear();
  const { isEnglish } = useSelector((store) => store.language);
  return (
    <section className='flex gap-4 justify-end w-full p-4 border-t-2 border-indigo-900 bg-slate-50'>
      <div className='basis-3/5 text-center lg:text-right'>
        Copyright © {date}
        <span className='text-indigo-900'> Serwis Artech</span>
      </div>
      <span className='basis-2/5 text-center lg:text-right'>
        <NavLink to={`/privacy-policy`} className='text-indigo-900'>
          {isEnglish ? 'Privacy policy' : 'Polityka prywatności'}
        </NavLink>
      </span>
    </section>
  );
};

export default Footer;
