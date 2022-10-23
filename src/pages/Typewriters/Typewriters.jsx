import React from 'react';
import { useSelector } from 'react-redux';
import Typewriter from './Typewriter';

// TODO
// lazy Loading, IntersectionObserver

const Typewriters = () => {
  const { writersResult } = useSelector((store) => store.typewriters);

  return (
    <section className='my-6 mx-auto p-6 max-w-[1600px]'>
      <div className='flex flex-col justify-center items-center lg:grid lg:grid-cols-2 2xl:grid-cols-3'>
        {writersResult.map((writer) => {
          const { slug } = writer;
          return <Typewriter key={slug.current} {...writer} />;
        })}
      </div>
    </section>
  );
};

export default Typewriters;
