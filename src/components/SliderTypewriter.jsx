import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useSelector } from 'react-redux';
import { motionControlsValue } from '../utils/utils.js';
import {
  BsChevronCompactLeft,
  BsChevronLeft,
  BsChevronCompactRight,
  BsChevronRight,
} from 'react-icons/bs';

const SliderTypewriter = () => {
  const { isEnglish } = useSelector((store) => store.language);
  const { writersResult } = useSelector((store) => store.typewriters);

  const controls = useAnimation();
  const [writers, setWriters] = useState([]);
  console.log(
    '🚀 ~ file: SliderTypewriter.jsx ~ line 12 ~ SliderTypewriter ~ writers',
    writers
  );
  const [index, setIndex] = useState(0);

  // const { images, body_en, body_pl, title_en, title_pl } =
  //   writersResult;

  useEffect(() => {
    const lastIndex = writers.lenght - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, writers]);

  useEffect(() => {
    const writersForSort = [...writersResult];

    setWriters(
      writersForSort
        .sort(
          (a, b) => Date.parse(new Date(b.date)) - Date.parse(new Date(a.date))
        )
        .slice(0, 6)
    );
  }, [writersResult]);

  useEffect(() => {
    const changeLangAnimation = () => {
      controls.start(motionControlsValue);
    };
    changeLangAnimation();
  }, [isEnglish]);

  return (
    <section className='flex flex-col w-full p-6 max-w-[1600px] mx-auto'>
      <div className='section_title text-indigo-900'>
        {isEnglish ? 'Latest Renovation' : 'Ostatnie Renowacje'}
      </div>
      <div className='flex flex-col lg:flex-row justify-between'>
        <div className='flex flex-1 justify-center lg:justify-start order-2 lg:order-1 my-6'>
          <img
            src={writers[index]?.images[0]?.url}
            alt='typewriter'
            className='service_img cursor-pointer w-[400px] lg:w-[500px] xl:w-[550px] 2xl:w-[650px]'
          />
        </div>
        <div className='flex-1 order-1 lg:order-2 my-6'>
          <article>
            <h3 className='font-bold section_text mb-2'>
              {isEnglish ? writers[index]?.title_en : writers[index]?.title_pl}
            </h3>
            <span className='mb-5'>
              {isEnglish ? writers[index]?.body_en : writers[index]?.body_pl}
            </span>
            <div className='flex justify-around m-6'>
              <button className='sliderTypewriter__btns text-2xl w-10 h-10'>
                <BsChevronLeft />
              </button>
              <button className='sliderTypewriter__btns text-xl w-28 h-10'>
                {isEnglish ? 'More..' : 'Więcej..'}
              </button>
              <button className='sliderTypewriter__btns text-2xl w-10 h-10'>
                <BsChevronRight />
              </button>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default SliderTypewriter;
