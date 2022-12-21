import React from 'react';

const ContactForm = ({ handleSubmit, isEnglish, formData, handleChange }) => {
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className='flex flex-col gap-2 items-center p-2 w-full'
      >
        <input
          type='text'
          id='name'
          name='name'
          onChange={handleChange}
          value={formData.name}
          placeholder={isEnglish ? 'Name' : 'Imię'}
          required
          className='contact__input focus:shadow-outline'
        />

        <input
          type='email'
          id='email'
          name='email'
          placeholder='Email'
          onChange={handleChange}
          value={formData.email}
          required
          className='contact__input focus:shadow-outline'
        />
        <input
          type='text'
          id='subject'
          name='subject'
          onChange={handleChange}
          value={formData.subject}
          placeholder={isEnglish ? 'Subject' : 'Temat'}
          required
          className='contact__input focus:shadow-outline'
        />
        <textarea
          id='message'
          name='message'
          onChange={handleChange}
          value={formData.message}
          placeholder={isEnglish ? 'Message' : 'Wiadomość'}
          rows='8'
          required
          className='contact__input focus:shadow-outline'
        />
        <button
          type='submit'
          className='rounded-md border-indigo-900 xl:hover:border-none xl:hover:bg-indigo-900 xl:hover:border-transparent xl:hover:bg-opacity-50  transition-all duration-500 border-2 text-lg w-28 hover:scale-105 h-10 mt-2'
        >
          {isEnglish ? 'Submit' : 'Wyślij'}
        </button>
      </form>
    </>
  );
};

export default ContactForm;
