import React, { useState } from 'react';
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa';
import emailjs from 'emailjs-com';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate inputs
    if (!name || !email || !message) {
      alert('Please fill in all fields.');
      return;
    }

    // Send email using EmailJS
    emailjs.send('service_xnfwhtg', 'template_98y5u3g', {
      name,
      email,
      message,
    }, '9XfFzkkzPenedbFzv')
    .then((response) => {
      console.log('Email sent successfully!', response.status, response.text);
      alert('Email sent successfully!');
      // Clear the form
      setName('');
      setEmail('');
      setMessage('');
    })
    .catch((err) => {
      console.error('Failed to send email. Error:', err);
      alert('Failed to send email. Please try again later.');
    });
  };

  return (
    <div className="bg-black text-white py-20" id="contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
<h2 className="text-4xl font-bold text-center mb-12 text-blue-600">Contact Me</h2>

        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="flex-1">
<h3 className='text-3xl font-bold bg-clip-text text-blue-600 mb-4'>Let's Talk</h3>

            <p>I'm open to discussing web development projects or partnership opportunities.</p>
            <div className='mb-4 mt-8'>
<FaEnvelope className='inline-block text-blue-600 mr-2'></FaEnvelope>

                <a href="tyronekariuki@gmail.com" className='hover:underline'>
                    tyronekariuki@gmail.com
                </a>
            </div>
            <div className='mb-4'>
<FaPhone className='inline-block text-blue-600 mr-2'></FaPhone>

                <span>0706915524</span>
            </div>
            <div className='mb-4'>
<FaMapMarkedAlt className='inline-block text-blue-600 mr-2'></FaMapMarkedAlt>

                <span>Nairobi,Kenya</span>
            </div>
          </div>
          <div className='flex-1 w-full'>
            <form className='space-y-4' onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name" className='block mb-2'>Name</label>
                    <input type="text" 
                    className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                    focus:border-blue-400'
                    placeholder='Enter Your Name'
                    value={name}
                    onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="email" className='block mb-2'>Email</label>
                    <input type="email" 
                    className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                    focus:border-blue-400'
                    placeholder='Enter Your Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="message" className='block mb-2'>Message</label>
                    <textarea 
                    className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                    focus:border-blue-400'
                    rows="5"
                    placeholder='Enter Your Message'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)} />
                </div>
                <button className='bg-blue-600 text-white-800 py-2 px-4 rounded hover:bg-blue-700'>
                    Send
                </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
