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
                <p className="text-gray-400">{contactData.address}</p>
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
                <p className="text-gray-400">{contactData.phone}</p>
              </div>
            </div>
          </div>

          {/* Cột Phải: Form liên hệ */}
          {/* Cột Phải: Form Đặt Bàn - THAY ĐỔI HOÀN TOÀN */}
          <div className="md:w-2/3 w-full">
            {/* Dán link Formspree mới của bạn vào đây */}
            <form action="https://formspree.io/f/YOUR_NEW_ID" method="POST" className="flex flex-col gap-6">
              {/* Hàng 1: Tên và Email */}
              <div className="flex flex-col md:flex-row gap-6">
                <input type="text" name="Name" placeholder="Ihr Name" required className="w-full bg-[#1a1814] border-b-2 border-gray-600 p-3 text-white focus:outline-none focus:border-amber-500 transition" />
                <input type="email" name="Email" placeholder="Ihre Email" required className="w-full bg-[#1a1814] border-b-2 border-gray-600 p-3 text-white focus:outline-none focus:border-amber-500 transition" />
              </div>
              
              {/* Hàng 2: SĐT và Số lượng người */}
              <div className="flex flex-col md:flex-row gap-6">
                <input type="tel" name="Phone" placeholder="Ihre Telefonnummer" required className="w-full bg-[#1a1814] border-b-2 border-gray-600 p-3 text-white focus:outline-none focus:border-amber-500 transition" />
                <input type="number" name="Anzahl_Personen" placeholder="Anzahl Personen" min="1" required className="w-full bg-[#1a1814] border-b-2 border-gray-600 p-3 text-white focus:outline-none focus:border-amber-500 transition" />
              </div>

              {/* Hàng 3: Ngày và Giờ */}
              <div className="flex flex-col md:flex-row gap-6">
                <input type="date" name="Datum" required className="w-full bg-[#1a1814] border-b-2 border-gray-600 p-3 text-white focus:outline-none focus:border-amber-500 transition" />
                <input type="time" name="Uhrzeit" required className="w-full bg-[#1a1814] border-b-2 border-gray-600 p-3 text-white focus:outline-none focus:border-amber-500 transition" />
              </div>

              {/* Hàng 4: Tin nhắn/Ghi chú */}
              <textarea name="Nachricht" rows="4" placeholder="Besondere Wünsche oder Anmerkungen" className="w-full bg-[#1a1814] border-b-2 border-gray-600 p-3 text-white focus:outline-none focus:border-amber-500 transition"></textarea>
              
              {/* Nút Submit */}
              <div className="text-center mt-4">
                <button type="submit" 
                  className="bg-amber-500 text-black font-bold text-lg py-4 px-10 rounded-full 
                  hover:bg-amber-600 hover:scale-105 transform transition-all duration-300
                  shadow-lg shadow-amber-500/30 hover:shadow-xl hover:shadow-amber-500/50"
                >
                  Tisch Reservieren
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;