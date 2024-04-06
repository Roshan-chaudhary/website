import React, { useState } from 'react';

function Contactt() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    // Handle form submission logic here
    alert('MESSAGE SENT SUCCESSFULLY');
    // Clear input fields after submission
    setName('');
    setEmail('');
    setPhone('');
    setSubject('');
    setMessage('');
  };

  return (
    <div className="grid grid-cols-2 mb-[3%] mt-[8%]">
      <div className="ml-[20%]">
        <h1 className='text-5xl font-bold mb-[5%] text-red-500'>Get in Touch</h1>
        <p className='text-gray-500 font-semibold text-xl'>Glossifi IT Solutions Pvt. Ltd</p>
        <p className='text-gray-500 font-semibold text-xl'>Dhara Galli, Nayabazar-16, Kathmandu,<br />Nepal</p>
        <p className='text-gray-500 font-semibold text-xl'>Phone- <span className='text-red-500'>+977 1 4953242, +977-9840712345</span></p>
        <p className='text-gray-500 font-semibold text-xl'>Email- <span className='text-red-500'>Softtechitsolutionsofficial@gmail.com</span></p>
        <h1 className='text-4xl font-bold my-[8%] text-red-600'>Contact Us</h1>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="p-[3%] w-[90%] rounded-md border-[5%] bg-gray-200 mb-[2%]" placeholder="Name*"></input><br />
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="p-[3%] w-[90%] rounded-md bg-gray-200 mb-[2%]" placeholder="Email*"></input><br />
        <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} className="p-[3%] w-[90%] rounded-md bg-gray-200 mb-[2%]" placeholder="Phone number "></input><br />
        <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} className="p-[3%] w-[90%] rounded-md bg-gray-200 mb-[2%]" placeholder="Subject"></input><br />
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} className="p-[3%] w-[90%] rounded-md mt-[5%] bg-gray-200" placeholder="Message"></textarea><br />
        <button onClick={handleSubmit} className='text-white font-bold text-xl bg-red-500 p-[3%] my-[5%] rounded-full w-[35%] text-center hover:bg-yellow-700'>Send</button>
      </div>

      <div>
        <iframe className="lg:w-[100%] md:w-[95%] sm:w-[95%] w-[95%] mr-[55%]"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.980915497401!2d85.33226867249184!3d27.68698472358112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19358ca58eef%3A0x55df86d8885cbfce!2sPremier%20College%20New%20Baneshowr%20%2B2!5e0!3m2!1sen!2snp!4v1708272543360!5m2!1sen!2snp"
          height="500"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default Contactt;
