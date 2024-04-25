import React from 'react';

const ContactUs = () => {
  return (

    <>
    <div className="relative">
      <div className="absolute inset-0 bg-cover bg-center z-0 bg-img"></div>
      <div className="container mx-auto p-8 relative z-10">
        <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg">
          <h2 className='Heading-text text-center text-blue-600 my-3 py-1 px-2 lg:text-6xl hover:scale-105 hover:cursor-pointer' style={{ fontFamily: 'cursive' }}> <mark className="px-2 text-white bg-blue-600 rounded dark:bg-blue-500">Get in Touch</mark></h2>
          <div className="container mx-auto py-12 px-4 text-center">
            <h1 className="text-3xl font-bold mb-6"></h1>
            <p className="text-lg mb-4">
              I'd love to hear from you! Whether you have a question about our services, need assistance with your account, or just want to say hello, feel free to reach out to me.
            </p>
            <h2 className='font-bold mb-2 text-lg text-blue-600'> Developer: Raghav Khanna</h2>
<h4 className='font-bold mb-2 text-sm text-gray-600'>Designation: Software Developer</h4>

  
            <a href="mailto:raghavkhanna0011@gmail.com"><button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg">Mail Me</button></a>
            <a href="https://www.linkedin.com/in/raghav-khanna-3b379b1aa/" target='_blank'><button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg mx-2">My LinkedIn</button></a>
          </div>
        </div>
      </div>
    </div>
  </>
  
  );
}

export default ContactUs;
