import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default (Component) =>
  ({ ...props }) => {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
      goToTop();
    }, []);

    const goToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
      const updatePosition = () => {
        setScrollPosition(window.pageYOffset);
      };

      window.addEventListener('scroll', updatePosition);

      return () => window.removeEventListener('scroll', updatePosition);
    }, []);

    return (
      <>
        <Component {...props} />
        <AnimatePresence>
          {scrollPosition > 150 && (
            <motion.button
              onClick={goToTop}
              className='fixed z-90 bottom-8 right-8 border-0 w-12 h-12 rounded-full drop-shadow-md bg-indigo-500 text-white text-3xl font-bold z-40 hover:xl:scale-110 transition-all duration-300'
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1, transition: { duration: 0.6 } }}
              exit={{ y: 100, opacity: 0, transition: { duration: 0.6 } }}
              whileHover={{
                scale: 1.2,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 1 }}
            >
              &uarr;
            </motion.button>
          )}
        </AnimatePresence>
      </>
    );
  };
