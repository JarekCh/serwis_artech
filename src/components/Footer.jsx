import React from 'react';

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <div className='flex flex-col w-full p-4 border-t-2 border-indigo-900 bg-slate-50'>
      <div className='text-center'>
        Copyright © {date}
        <span className='text-indigo-900'> Serwis Artech</span>
      </div>
    </div>
  );
};

export default Footer;
