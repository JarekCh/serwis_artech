import React, { useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useSelector } from 'react-redux';
import emailjs from '@emailjs/browser';

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
    <section className='flex flex-col md:flex-row w-full p-6 max-w-[1600px] mx-auto'>
      <div className='section_title w-full lg:text-center text-indigo-900'>
        {isEnglish ? 'Contact Us' : 'Skontaktuj się z nami'}
      </div>
      <div>
        <div></div>
        <article></article>
        <div>
          <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type='text' name='user_name' />
            <label>Email</label>
            <input type='email' name='user_email' />
            <label>Message</label>
            <textarea name='message' />
            <input type='submit' value='Send' />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
