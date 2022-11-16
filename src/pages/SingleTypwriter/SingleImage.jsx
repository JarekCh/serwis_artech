import { useRef, useEffect, useState } from 'react';
import { useObserver } from '../../utils/useObserver';

export const SingleImage = ({ image, handleClick }) => {
  const imageRef = useRef();
  const [imageUrl, setImageUrl] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const entry = useObserver(imageRef, { rootMargin: '0px 0px 0px 200px' });
  const animatedEntry = useObserver(imageRef, { rootMargin: '0px' });

  useEffect(() => {
    if (!entry) return;
    if (entry.isIntersecting) {
      setImageUrl(entry.target.dataset.src);
    }
  }, [entry]);

  useEffect(() => {
    if (animatedEntry?.isIntersecting) {
      setIsVisible(true);
    }
  }, [animatedEntry]);

  return (
    <img
      className={`${
        isVisible ? 'blur-none duration-500' : 'blur-md clip-insert'
      } rounded-xl w-80 h-60 shadow-xl transition-all xl:hover:scale-105 cursor-pointer`}
      ref={imageRef}
      src={imageUrl}
      data-src={`${image.url}?h=320&w=480`}
      alt='renovated typewriter'
      onClick={() => handleClick()}
    />
  );
};

export default SingleImage;
