import React, { useState } from 'react';
import { contactData } from '../data';
import { IoLocationSharp, IoTime, IoCall, IoMail } from 'react-icons/io5';

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "84fa4667-fa68-44f7-997c-2c0d96748e46");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    // Áp dụng màu nền chính và màu chữ chính
    <section id="contact" className="bg-background text-text-main py-20">
      <div className="container mx-auto px-4">
        <div className='mb-12'>
            <div className="flex items-center">
              <p className="text-text-light uppercase tracking-wider">RESERVIERUNG</p>
              <span className="w-16 h-px bg-primary ml-4"></span>
            </div>
            <h2 className="text-4xl font-serif text-secondary mt-2">Buchen Sie einen Tisch</h2>
          </div>
        {/* Tiêu đề */}
      </div>

      {/* Bản đồ Google Maps */}
      <div className="container mx-auto px-4 mb-12">
        <iframe 
          src={contactData.mapSrc}
          className="w-full h-96 border-0 rounded-lg"
          allowFullScreen="" 
          loading="lazy"
        ></iframe>
      </div>

      <div id='booking' className="container mx-auto px-4">
        {/* Layout 2 cột */}
        <div className="flex flex-col md:flex-row gap-8 lg:gap-12 items-start">
          {/* Cột Trái: Thông tin liên hệ */}
          <div className="md:w-1/3 w-full">
            <div className="flex items-start mb-6">
              {/* Icon dùng màu Vàng Kim (secondary) */}
              <div className="bg-secondary p-3 rounded-full mr-4"><IoLocationSharp className="text-background text-2xl" /></div>
              <div>
                <h3 className="text-xl font-bold">Standort:</h3>
                <p className="text-text-light">{contactData.address}</p>
              </div>
            </div>
            <div className="flex items-start mb-6">
              <div className="bg-secondary p-3 rounded-full mr-4"><IoTime className="text-background text-2xl" /></div>
              <div>
                <h3 className="text-xl font-bold">Öffnungszeiten:</h3>
                <p className="text-text-light">{contactData.openHours}</p>
              </div>
            </div>
            <div className="flex items-start mb-6">
              <div className="bg-secondary p-3 rounded-full mr-4"><IoMail className="text-background text-2xl" /></div>
              <div>
                <h3 className="text-xl font-bold">Email:</h3>
                <p className="text-text-light">{contactData.email}</p>
              </div>
            </div>
            <div className="flex items-start mb-6">
              <div className="bg-secondary p-3 rounded-full mr-4"><IoCall className="text-background text-2xl" /></div>
              <div>
                <h3 className="text-xl font-bold">Anruf:</h3>
                <p className="text-text-light">{contactData.phone}</p>
              </div>
            </div>
          </div>

          {/* Cột Phải: Form Đặt Bàn */}
          <div className="md:w-2/3 w-full">
            <form onSubmit={onSubmit} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Input fields với màu mới */}
                <input type="text" name="Name" placeholder="Ihr Name" required className="w-full bg-surface border-b-2 border-border p-3 text-text-main focus:outline-none focus:border-primary transition" />
                <input type="email" name="Email" placeholder="Ihre Email" required className="w-full bg-surface border-b-2 border-border p-3 text-text-main focus:outline-none focus:border-primary transition" />
                <input type="tel" name="Phone" placeholder="Ihre Telefonnummer" required className="w-full bg-surface border-b-2 border-border p-3 text-text-main focus:outline-none focus:border-primary transition" />
                <input type="number" name="Anzahl_Personen" placeholder="Anzahl Personen" min="1" required className="w-full bg-surface border-b-2 border-border p-3 text-text-main focus:outline-none focus:border-primary transition" />
              </div>

              <input type="date" name="Datum" required className="w-full bg-surface border-b-2 border-border p-3 text-text-main focus:outline-none focus:border-primary transition" />
              <input type="time" name="Uhrzeit" required className="w-full bg-surface border-b-2 border-border p-3 text-text-main focus:outline-none focus:border-primary transition" />
              <textarea name="Nachricht" rows="4" placeholder="Besondere Wünsche oder Anmerkungen" className="w-full bg-surface border-b-2 border-border p-3 text-text-main focus:outline-none focus:border-primary transition"></textarea>
              
              {/* Nút Submit */}
              <div className="text-center mt-4">
                <button type="submit" 
                  className="bg-primary text-white font-bold text-lg py-4 px-10 rounded-full 
                  hover:bg-red-700 hover:scale-105 transform transition-all duration-300
                  shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/50"
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