import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useSelector } from 'react-redux';
import { motionControlsValue } from '../utils/utils.js';

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
    <section className='flex flex-col my-5 w-full p-6 max-w-[1600px] mx-auto'>
      <div className='section_title text-indigo-900'>
        {isEnglish ? 'Latest Renovation' : 'Ostatnie Renowacje'}
      </div>
      <div className='flex justify-center order-2'>
        <img
          src={writers[index]?.images[0]?.url}
          alt='typewriter'
          className='service_img'
        />
      </div>
      <div className='order-1'>
        <article>
          <h3 className='font-bold section_text'>
            {isEnglish ? writers[index]?.title_en : writers[index]?.title_pl}
          </h3>
          <span>
            {isEnglish ? writers[index]?.body_en : writers[index]?.body_pl}
          </span>
        </article>
      </div>
    </section>
  );
};

export default SliderTypewriter;
