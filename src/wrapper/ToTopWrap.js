import React, { useEffect } from 'react';
import ToTopBtn from './ToTopBtn';

import { useDispatch, useSelector } from 'react-redux';
import { scrollState } from '../features/siteContent/siteContentSlice';

export default (Component) =>
  ({ ...props }) => {
    const { scrollPosition } = useSelector((store) => store.site);
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
    }, [dispatch]);

    return (
      <>
        <Component {...props} />
        <ToTopBtn scrollPosition={scrollPosition} goToTop={goToTop} />
      </>
    );
  };
