import React, { useEffect } from 'react';
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

  // const { images, body_en, body_pl, title_en, title_pl } =
  //   writersResult;

  const controls = useAnimation();

  useEffect(() => {
    const changeLangAnimation = () => {
      controls.start(motionControlsValue);
    };
    changeLangAnimation();
  }, [isEnglish]);

  return <div>SliderTypewriter</div>;
};

export default SliderTypewriter;
