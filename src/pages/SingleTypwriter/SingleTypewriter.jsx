import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { motionControlsValue } from '../../utils/utils.js';

import Loading from '../../components/Loading';

import { getSingleTypewriter } from '../../features/singleTypewriter/singleTypewriterSlice';

const SingleTypewriter = () => {
  const dispatch = useDispatch();
  const { isEnglish } = useSelector((store) => store.language);
  const { singleTypewriter } = useSelector((store) => store.singleTypewriter);

  const { isLoading } = useSelector((store) => store.singleTypewriter);

  const { slug } = useParams();
  const controls = useAnimation();

  // Change Lang animations
  useEffect(() => {
    const changeLangAnimation = () => {
      controls.start(motionControlsValue);
    };

    changeLangAnimation();
  }, [isEnglish]);

  useEffect(() => {
    dispatch(getSingleTypewriter(slug));
  }, []);

  if (isLoading) return <Loading />;
  const { title_en, title_pl, body_en, body_pl, images } = singleTypewriter;
  console.log(
    '🚀 ~ file: SingleTypewriter.jsx ~ line 25 ~ SingleTypewriter ~ images',
    images
  );

  return (
    <section className=' my-6 max-w-[1600px] m-auto'>
      <motion.h2
        className='text-2xl text-center text-indigo-900 font-bold mb-4 p-4'
        animate={controls}
      >
        {isEnglish ? title_en : title_pl}
      </motion.h2>
      {/* LEFT SIDE, TEXT */}
      <div className='flex flex-col lg:flex-row justify-center gap-8 p-6 m-6'>
        <div className='flex flex-2'>
          <img
            src={images[0]?.url}
            alt='typewriter after renowation'
            className='rounded-xl w-[40rem]'
          />
        </div>
        <div className='flex flex-col flex-1 max-w-lg'>
          <motion.p className='my-6 lg:my-0' animate={controls}>
            {isEnglish ? body_en : body_pl}
          </motion.p>
          <Link to={`/typewriters`}>
            <motion.button
              className='flex justify-center items-center rounded-md border-indigo-900 hover:border-none hover:bg-indigo-900 hover:border-transparent hover:bg-opacity-50  transition-all duration-200 border-2 text-lg w-28 hover:scale-105 h-10 mx-auto mt-6'
              animate={controls}
            >
              {isEnglish ? 'Back' : 'Cofnij'}
            </motion.button>
          </Link>
        </div>
      </div>
      <hr className='m-auto w-40 xl:w-[20rem] border-black'></hr>

      {/* RIGHT SIDE, GALLERY */}
      <div className='flex flex-col p-4 m-6 '>
        <motion.h3
          className='text-xl font-medium mb-4 text-indigo-900 text-center'
          animate={controls}
        >
          {isEnglish ? 'Gallery' : 'Galeria'}
        </motion.h3>
        <div className='flex flex-wrap gap-4 items-center justify-center'>
          {images.map((item, i) => (
            <img
              key={i}
              src={item.url}
              alt='typewriter'
              className='rounded-xl w-80 shadow-xl transition-all duration-200 hover:scale-105'
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SingleTypewriter;
