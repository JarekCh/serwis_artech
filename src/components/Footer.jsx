import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Footer = () => {
  const date = new Date().getFullYear();
  const { isEnglish } = useSelector((store) => store.language);
  return (
    <section className='flex flex-col w-full p-4 border-t-2 border-indigo-900 bg-slate-50'>
      <div className='text-center'>
        Copyright © {date}
        <span className='text-indigo-900'> Serwis Artech</span>
        <div>
          <NavLink to={`/privacy-policy`} className='text-indigo-900'>
            {isEnglish ? 'Privacy policy' : 'Polityka prywatności'}
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default Footer;
