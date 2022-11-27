import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  increaseHighRange,
  increaseLowRange,
} from '../../features/typewriters/typewritersSlice';
import Typewriter from './Typewriter';
import { getTypewriters } from '../../features/typewriters/typewritersSlice';
import { ToTopWrap } from '../../wrapper/index';

const Typewriters = ({ isEnglish }) => {
  const { writersResult } = useSelector((store) => store.typewriters);
  const [writers, setWriters] = useState([]);
  const dispatch = useDispatch();

  // CALL FOR NEW RECORDS
  const nextPage = () => {
    dispatch(increaseLowRange());
    dispatch(increaseHighRange());
    dispatch(getTypewriters());
  };

  // SORT WRITERS BY DATE
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
      <div className='flex flex-col justify-center items-center lg:grid lg:grid-cols-2 2xl:grid-cols-3'>
        {writers.map((writer, i) => {
          const { slug } = writer;
          return (
            <Typewriter
              key={slug}
              {...writer}
              isEnglish={isEnglish}
              isLast={i === writers.length - 1}
              nextPage={nextPage}
            />
          );
        })}
      </div>
    </section>
  );
};

export default ToTopWrap(Typewriters);
