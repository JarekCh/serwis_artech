import React from 'react';
import { useDispatch } from 'react-redux';

import { closeEmailModal } from '../features/EmailJS/emailSlice';

const ContactModal = () => {
  const dispatch = useDispatch();
  // HIDE MODAL
  const handleClick = (e) => {
    if (e.target.classList.contains('dismiss')) {
      //   setShowModal(false);
    }
  };

  const handleEmailModal = () => {
    dispatch(closeEmailModal());
  };

  return (
    <div
      className='dismiss fixed top-0 left-0 right-0 w-full h-full flex justify-center items-center bg-black bg-opacity-60 z-40'
      onClick={handleClick}
    >
      <article className='flex justify-center items-center flex-col w-[20rem] h-[12rem] bg-white rounded-md'>
        <h3>TITLE</h3>
        <p>text</p>
        <button onClick={handleEmailModal}>Close</button>
      </article>
    </div>
  );
};

export default ContactModal;
