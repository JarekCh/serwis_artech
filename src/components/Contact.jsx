import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useSelector } from 'react-redux';
import emailjs from '@emailjs/browser';
import { FaPhoneVolume, FaHome, FaClock, FaEnvelope } from 'react-icons/fa';

import LocalizationImg from '../assets/artech_lowRes.png';

import { motionControlsValue } from '../utils/utils.js';

// TODO create key for emailjs
// regexp on input fields

const Contact = () => {
  const { isEnglish } = useSelector((store) => store.language);
  const form = useRef();

  const controls = useAnimation();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        form.current,
        'YOUR_PUBLIC_KEY'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  // Change Lang animations
  useEffect(() => {
    const changeLangAnimation = () => {
      controls.start(motionControlsValue);
    };

    changeLangAnimation();
  }, [isEnglish]);

  return (
    <section className='w-full relative bg-slate-200 px-6 pb-14 lg:mt-32'>
      <div className='hidden lg:block bg-slate-200 absolute -top-20 rotate-[4deg] -left-12 w-[120%] h-[40%] z-0'></div>
      <div className='flex flex-col w-full max-w-[1600px] mx-auto z-2 pt-12'>
        {/* TITLE */}
        <motion.div
          className='section_title w-full lg:text-center text-indigo-900 z-10'
          animate={controls}
        >
          {isEnglish ? 'Contact Us' : 'Skontaktuj się z nami'}
        </motion.div>
        {/* CONTENT CONTAINER */}
        <div className='flex gap-6 flex-col lg:flex-row'>
          {/* SECTION IMAGE */}
          <div className='flex flex-1 order-2 lg:order-1 justify-center'>
            <img
              src={LocalizationImg}
              alt='witryna serwisu'
              className='brightness-50 xl:hover:scale-110 rounded-xl hover:transition hover:brightness-90 shadow-2xl w-[400px] lg:h-[400px] lg:w-[450px] xl:w-[550px]'
            />
          </div>
          {/* COMPANY INFO */}
          <div className='flex flex-1 order-1 lg:order-2 justify-center my-4'>
            <div className='flex flex-col justify-center gap-6'>
              <div className='flex items-center gap-3'>
                <span className='text-2xl text-indigo-900'>
                  <FaHome />
                </span>
                <ul>
                  <li>Serwis Artech</li>
                  <li>ul. Ogrodowa 50</li>
                  <motion.li animate={controls}>
                    00-873 {isEnglish ? 'Warsaw' : 'Warszawa'}
                  </motion.li>
                </ul>
              </div>
              <div className='flex items-center gap-3'>
                <span className='text-2xl text-indigo-900'>
                  <FaClock />
                </span>
                <ul>
                  <motion.li animate={controls}>
                    {isEnglish ? 'Open hours:' : 'Godziny otwarcia:'}
                  </motion.li>
                  <motion.li animate={controls}>
                    {isEnglish
                      ? 'monday-friday 9:00-17:00'
                      : 'poniedziałek-piątek 9:00-17:00'}
                  </motion.li>
                </ul>
              </div>
              <div className='flex items-center gap-3'>
                <span className='text-2xl text-indigo-900'>
                  <FaPhoneVolume />
                </span>
                <span>
                  <ul>
                    <li>22 620 14 14</li>
                    <li>501 748 999</li>
                  </ul>
                </span>
              </div>
              <div className='flex items-center gap-3'>
                <span className='text-2xl text-indigo-900'>
                  <FaEnvelope />
                </span>
                <span>
                  <ul>
                    <li>serwis@artech.waw.pl</li>
                    <li>biuro@serwisartech.pl</li>
                  </ul>
                </span>
              </div>
            </div>
          </div>
          {/* FORM */}
          <div className='flex flex-col order-3 flex-1 justify-center z-10'>
            <form
              ref={form}
              onSubmit={sendEmail}
              className='flex flex-col gap-2 items-center p-2 w-full'
            >
              <input
                type='text'
                name='user_name'
                placeholder={isEnglish ? 'Name' : 'Imię'}
                required
                className='contact__input focus:shadow-outline'
              />

              <input
                type='email'
                name='user_email'
                placeholder='Email'
                required
                className='contact__input focus:shadow-outline'
              />
              <input
                type='text'
                name='subject'
                placeholder={isEnglish ? 'Subject' : 'Temat'}
                required
                className='contact__input focus:shadow-outline'
              />
              <textarea
                name='message'
                placeholder={isEnglish ? 'Message' : 'Wiadomość'}
                rows='8'
                required
                className='contact__input focus:shadow-outline'
              />
              <button
                type='button'
                value='Send'
                className='rounded-md border-indigo-900 hover:border-none hover:bg-indigo-900 hover:border-transparent hover:bg-opacity-50  transition-all duration-500 border-2 text-lg w-28 hover:scale-90 h-10 mt-2'
              >
                {isEnglish ? 'Submit' : 'Wyślij'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
