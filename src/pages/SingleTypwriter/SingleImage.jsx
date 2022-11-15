import { useRef, useEffect, useState } from 'react';
import { useObserver } from '../../utils/useObserver';

export const SingleImage = ({ image, handleClick }) => {
  const imageRef = useRef();
  const [imageUrl, setImageUrl] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const entry = useObserver(imageRef, { rootMargin: '0px 0px 0px 200px' });

  useEffect(() => {
    if (!entry) return;
    if (entry.isIntersecting) {
      setImageUrl(entry.target.dataset.src);
    }
  }, [entry]);

  // const imageClass = `image ${isVisible ? 'show' : ''}`;
  return (
    <div className='min-h-[200px]'>
      <img
        className='rounded-xl w-80 h-60 shadow-xl transition-all duration-200 xl:hover:scale-105 cursor-pointer'
        ref={imageRef}
        src={imageUrl}
        data-src={`${image.url}?h=320&w=480`}
        alt='renovated typewriter'
        onClick={() => handleClick()}
      />
    </div>
  );
};

export default SingleImage;
