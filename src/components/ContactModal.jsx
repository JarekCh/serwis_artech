import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeEmailModal } from '../features/EmailJS/emailSlice';

const ContactModal = ({ isEnglish }) => {
  const dispatch = useDispatch();
  const { name } = useSelector((store) => store.email);

  // HIDE MODAL
  const handleClick = (e) => {
    if (e.target.classList.contains('dismiss')) {
      dispatch(closeEmailModal());
    }
  };

  return (
    <div
      className='dismiss fixed top-0 left-0 right-0 w-full h-full flex justify-center items-center z-40 '
      onClick={handleClick}
    >
      {/* MODAL */}
      <article className='flex justify-between items-center flex-col max-w-[24rem] h-[16rem] bg-white rounded-md p-3 shadow-lg transition-all duration-500 xl:hover:scale-110 xl:hover:shadow-2xl bg-gradient-to-br from-white via-indigo-200 to-indigo-400'>
        <h3 className='text-2xl font-bold text-red-600'>
          {isEnglish ? 'Information' : 'Informacja'}
        </h3>
        <p className='text-center'>
          {isEnglish
            ? `${name} your message has been sent, expect our reply shortly.`
            : `${name} twoja wiadomość została wysłana, oczekuj naszej odpowiedzi w najbliższym czasie.`}
        </p>
        <button
          className='dismiss rounded-md border-indigo-900 xl:hover:border-none xl:hover:bg-indigo-900 xl:hover:border-transparent xl:hover:bg-opacity-50  transition-all duration-500 border-2 text-lg w-28 xl:hover:scale-90 h-10 mt-2'
          onClick={handleClick}
        >
          {isEnglish ? 'Close' : 'Zamknij'}
        </button>
      </article>
    </div>
  );
};

export default ContactModal;
