import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Typewriter from './Typewriter';

const Typewriters = ({ isEnglish }) => {
  const { writersResult } = useSelector((store) => store.typewriters);
  const dispatch = useDispatch();
  const [writers, setWriters] = useState([]);

  useEffect(() => {
    const writersForSort = [...writersResult];

    setWriters(
      writersForSort.sort(
        (a, b) => Date.parse(new Date(b.date)) - Date.parse(new Date(a.date))
      )
    );
  }, [writersResult]);

  return (
    <section className='my-6 mx-auto p-6 max-w-[100rem]'>
      {/* <button w-2 h-2 onClick={dispatch(increaseHighRange)}>
        incHig
      </button>
      <button w-2 h-2 onClick={dispatch(increaseLowRange)}>
        incLow
      </button> */}
      <div className='flex flex-col justify-center items-center lg:grid lg:grid-cols-2 2xl:grid-cols-3'>
        {writers.map((writer) => {
          const { slug } = writer;
          return (
            <Typewriter key={slug.current} {...writer} isEnglish={isEnglish} />
          );
        })}
      </div>
    </section>
  );
};

export default Typewriters;
