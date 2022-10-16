import React, { useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useSelector } from 'react-redux';
import emailjs from '@emailjs/browser';
import { FaPhoneVolume, FaHome, FaClock, FaEnvelope } from 'react-icons/fa';

import LocalizationImg from '../assets/artech_lowRes.png';

import { motionControlsValue } from '../utils/utils.js';

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

  return (
    <section className='flex flex-col w-full p-6 max-w-[1600px] mx-auto'>
      <div className='section_title w-full lg:text-center text-indigo-900'>
        {isEnglish ? 'Contact Us' : 'Skontaktuj się z nami'}
      </div>
      <div>
        <div className='flex flex-1 flex-col lg:flex-row'>
          <div className='flex justify-center'>
            <img
              src={LocalizationImg}
              alt='witryna serwisu'
              className='brightness-50 xl:hover:scale-110 rounded-xl hover:transition hover:brightness-90 shadow-2xl w-[400px] lg:h-[400px] lg:w-[450px] xl:w-[550px] 2xl:w-[650px]'
            />
          </div>
          <div className='flex flex-1 justify-center my-4'>
            <div className='flex flex-col gap-3'>
              <div className='flex items-center gap-3'>
                <span className='text-2xl'>
                  <FaHome />
                </span>
                <ul>
                  <li>Serwis Artech</li>
                  <li>ul. Ogrodowa 50</li>
                  <li>00-873 {isEnglish ? 'Warsaw' : 'Warszawa'}</li>
                </ul>
              </div>
              <div className='flex items-center gap-3'>
                <span className='text-2xl'>
                  <FaClock />
                </span>
                <ul>
                  <li>{isEnglish ? 'Open hours:' : 'Godziny otwarcia:'}</li>
                  <li>
                    {isEnglish
                      ? 'monday-friday 9:00-17:00'
                      : 'poniedziałek-piątek 9:00-17:00'}
                  </li>
                </ul>
              </div>
              <div className='flex items-center gap-3'>
                <span className='text-2xl'>
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
                <span className='text-2xl'>
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
          <div className='flex flex-1 justify-center'>
            <form
              ref={form}
              onSubmit={sendEmail}
              className='flex flex-col gap-2'
            >
              <input type='text' name='user_name' placeholder='Name' />

              <input type='email' name='user_email' placeholder='Email' />
              <input type='text' name='subject' placeholder='subject' />
              <textarea name='message' placeholder='Message' />
              <button type='submit' value='Send'>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
