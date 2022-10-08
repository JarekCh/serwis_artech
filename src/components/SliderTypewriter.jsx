import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useSelector } from 'react-redux';
import { motionControlsValue } from '../utils/utils.js';

const SliderTypewriter = () => {
  const { isEnglish } = useSelector((store) => store.language);
  const { writersResult } = useSelector((store) => store.typewriters);
  console.log(
    '🚀 ~ file: SliderTypewriter.jsx ~ line 9 ~ SliderTypewriter ~ writersResult',
    writersResult
  );
  const controls = useAnimation();
  const [writers, setWriters] = useState([]);
  console.log(
    '🚀 ~ file: SliderTypewriter.jsx ~ line 12 ~ SliderTypewriter ~ writers',
    writers
  );
  const [index, setIndex] = useState(0);
  console.log(
    '🚀 ~ file: SliderTypewriter.jsx ~ line 9 ~ SliderTypewriter ~ writersResult',
    writersResult
  );

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
    setWriters(writersResult.slice(0, 5));
  }, []);

  useEffect(() => {
    const changeLangAnimation = () => {
      controls.start(motionControlsValue);
    };
    changeLangAnimation();
  }, [isEnglish]);

  return (
    <section>
      <div></div>
    </section>
  );
};

export default SliderTypewriter;
