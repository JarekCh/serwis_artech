import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import Loading from '../../components/Loading';

import { getSingleTypewriter } from '../../features/singleTypewriter/singleTypewriterSlice';

const SingleTypewriter = () => {
  const dispatch = useDispatch();
  const { isEnglish } = useSelector((store) => store.language);
  const { singleTypewriter } = useSelector((store) => store.singleTypewriter);
  const { isLoading } = useSelector((store) => store.singleTypewriter);

  const { slug } = useParams();

  useEffect(() => {
    dispatch(getSingleTypewriter(slug));
  }, []);

  if (isLoading) return <Loading />;

  return (
    <section>
      <div>asds</div>
      <div></div>
    </section>
  );
};

export default SingleTypewriter;
