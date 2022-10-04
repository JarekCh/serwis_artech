import React from 'react';
import { useSelector } from 'react-redux';
import heroImg from '../assets/hero1920.jpg';

const Hero = () => {
  const { siteResult, isLoading } = useSelector((store) => store.site);
  return (
    <section
      className=' w-full bg-cover bg-center md:h-[40rem] xl:h-[54rem] 2xl:h-[65rem]'
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className='bg-black/40 h-full flex flex-col justify-top items-center text-slate-200'>
        <div className='mt-6'>asdsad</div>
        <article>zxcxzc</article>
      </div>
    </section>
  );
};

export default Hero;
