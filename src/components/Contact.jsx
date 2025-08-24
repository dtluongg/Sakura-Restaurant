// src/components/Contact.jsx
import React from 'react';
import { contactData } from '../data';
// Import các icon cần thiết
import { IoLocationSharp, IoTime, IoCall, IoMail } from 'react-icons/io5';

const Contact = () => {
  return (
    <section id="contact" className="bg-[#0c0b09] text-white py-20">
      <div className="container mx-auto px-4">
        {/* Tiêu đề */}
        <div className="text-center mb-12">
          <p className="text-gray-400 uppercase tracking-wider">{contactData.superTitle}</p>
          <h2 className="text-4xl font-serif text-amber-400 mt-2">{contactData.title}</h2>
        </div>
      </div>

      {/* Bản đồ Google Maps */}
      {/* Thêm container để đảm bảo bản đồ không bị tràn */}
      <div className="container mx-auto px-4 mb-12">
        <iframe 
          src={contactData.mapSrc}
          className="w-full h-96 border-0"
          allowFullScreen="" 
          loading="lazy"
        ></iframe>
      </div>

      <div id='booking' className="container mx-auto px-4">
        {/* Layout 2 cột */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Cột Trái: Thông tin liên hệ */}
          <div className="md:w-1/3">
            <div className="flex items-start mb-6">
              <div className="bg-amber-500 p-3 rounded-full mr-4"><IoLocationSharp className="text-white text-2xl" /></div>
              <div>
                <h3 className="text-xl font-bold">Location:</h3>
                <p className="text-gray-400">{contactData.location}</p>
              </div>
            </div>
            <div className="flex items-start mb-6">
              <div className="bg-amber-500 p-3 rounded-full mr-4"><IoTime className="text-white text-2xl" /></div>
              <div>
                <h3 className="text-xl font-bold">Open Hours:</h3>
                <p className="text-gray-400">{contactData.openHours}</p>
              </div>
            </div>
            <div className="flex items-start mb-6">
              <div className="bg-amber-500 p-3 rounded-full mr-4"><IoMail className="text-white text-2xl" /></div>
              <div>
                <h3 className="text-xl font-bold">Email:</h3>
                <p className="text-gray-400">{contactData.email}</p>
              </div>
            </div>
            <div className="flex items-start mb-6">
              <div className="bg-amber-500 p-3 rounded-full mr-4"><IoCall className="text-white text-2xl" /></div>
              <div>
                <h3 className="text-xl font-bold">Call:</h3>
                <p className="text-gray-400">{contactData.call}</p>
              </div>
            </div>
          </div>

          {/* Cột Phải: Form liên hệ */}
          <div className="md:w-2/3">
            {/* Quan trọng: Thay thế action bằng link Formspree của bạn */}
            <form action="https://formspree.io/f/YOUR_UNIQUE_ID" method="POST" className="flex flex-col gap-4">
              <div className="flex gap-4">
                <input type="text" name="name" placeholder="Your Name" required className="w-1/2 bg-[#1a1814] border border-gray-600 p-3 text-white focus:outline-none focus:ring-2 focus:ring-amber-500" />
                <input type="email" name="email" placeholder="Your Email" required className="w-1/2 bg-[#1a1814] border border-gray-600 p-3 text-white focus:outline-none focus:ring-2 focus:ring-amber-500" />
              </div>
              <input type="text" name="subject" placeholder="Subject" required className="w-full bg-[#1a1814] border border-gray-600 p-3 text-white focus:outline-none focus:ring-2 focus:ring-amber-500" />
              <textarea name="message" rows="5" placeholder="Message" required className="w-full bg-[#1a1814] border border-gray-600 p-3 text-white focus:outline-none focus:ring-2 focus:ring-amber-500"></textarea>
              <div className="text-center">
                <button type="submit" className="bg-amber-500 text-black font-bold py-3 px-8 rounded-full hover:bg-amber-600 transition">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;