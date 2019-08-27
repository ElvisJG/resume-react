import React from 'react';

export default function Contact() {
  return (
    <div>
      <form action='POST' data-netlify='true' className='cm-form'>
        <div className='fields'>
          <div className='text-field'>
            <input type='text' name='name' id='name' placeholder='Name' />
          </div>
          <div className='text-field'>
            <input
              type='email'
              name='email'
              id='email'
              placeholder='johndoe@example.com'
            />
          </div>
          <div className='text-field'>
            <input
              type='tel'
              name='phone'
              id='phone'
              placeholder='Phone Number'
            />
          </div>
          <div className='msg-field'>
            <textarea
              name='message'
              id='message'
              placeholder='Message'
              rows='7'
            />
          </div>
          <div data-netlify-recaptcha='true'></div>
          <button type='submit'>Send It!</button>
        </div>
      </form>
    </div>
  );
}
