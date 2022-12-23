import React from 'react';

const GoogleMaps = () => {
  return (
    <section className='w-full'>
      <iframe
        title='google maps'
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d769.5919338959163!2d20.984519956448107!3d52.23789760727192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc816a6d1173%3A0x37cffc504ce8bb32!2sSerwis%20Artech!5e0!3m2!1spl!2spl!4v1666121088503!5m2!1spl!2spl'
        width='100%'
        height='600'
        allowFullScreen=''
        loading='lazy'
        referrerPolicy='no-referrer-when-downgrade'
      ></iframe>
    </section>
  );
};

export default GoogleMaps;
