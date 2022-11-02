import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';

const AnimationWrap = (Component) =>
  function HOC() {
    const { isEnglish } = useSelector((store) => store.language);
    const motionControlsValue = {
      opacity: [0, 1],
      transition: { duration: 1.2 },
    };

    const controls = useAnimation();

    useEffect(() => {
      const changeLangAnimation = () => {
        controls.start(motionControlsValue);
      };

      changeLangAnimation();
    }, [isEnglish]);

    return <Component />;
  };

export default AnimationWrap;
