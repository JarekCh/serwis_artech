import React, { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ToTopBtn from './ToTopBtn';

import { useDispatch, useSelector } from 'react-redux';
import { scrollState } from '../features/siteContent/siteContentSlice';

export default (Component) =>
  ({ ...props }) => {
    const { scrollPossition } = useSelector((store) => store.site);
    const dispatch = useDispatch();

    const goToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
      const updatePosition = () => {
        dispatch(scrollState(window.pageYOffset));
      };
      window.addEventListener('scroll', updatePosition);
      return () => window.removeEventListener('scroll', updatePosition);
    }, []);

    return (
      <>
        <Component {...props} />
        <ToTopBtn scrollPossition={scrollPossition} goToTop={goToTop} />
      </>
    );
  };
