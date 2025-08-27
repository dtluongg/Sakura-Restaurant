// src/components/Events.jsx
import React, { useState, useEffect } from 'react';
import { eventsData } from '../data';
import { BsCheckCircleFill } from 'react-icons/bs';
import eventsBg from '../assets/events/events-bg.jpg';

const Events = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide(prevSlide => (prevSlide + 1) % eventsData.slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="events"
      className="relative py-20 bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${eventsBg})` }}
    >
      {/* Lớp phủ màu đen - Sử dụng màu nền chính */}
      <div className="absolute inset-0 bg-background bg-opacity-80"></div>
      
      <div className="relative z-10 container mx-auto px-4">
        {/* Tiêu đề */}
        <div className="text-center text-text-main mb-12">
          <p className="uppercase tracking-wider">{eventsData.superTitle}</p>
          {/* Tiêu đề chính dùng màu Vàng Kim (secondary) */}
          <h2 className="text-4xl font-serif text-secondary mt-2">{eventsData.title}</h2>
        </div>

        {/* --- KHUNG CHỨA SLIDER (CỬA SỔ) --- */}
        {/* Nền slide dùng màu surface */}
        <div className="overflow-hidden bg-surface bg-opacity-80 rounded-lg shadow-2xl">
          {/* --- DẢI SLIDE (FILM STRIP) --- */}
          <div 
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${activeSlide * 100}%)` }}
          >
            {/* Render tất cả các slide */}
            {eventsData.slides.map((slide, index) => (
              <div 
                key={index} 
                className="min-w-full w-full flex-shrink-0"
              >
                <div className="p-8 flex flex-col md:flex-row gap-8 text-text-main">
                  {/* Cột Trái: Hình ảnh */}
                  <div className="md:w-1/2">
                    <img src={slide.image} alt={slide.title} className="w-full rounded" />
                  </div>
                  {/* Cột Phải: Nội dung */}
                  <div className="md:w-1/2">
                    {/* Tiêu đề slide dùng màu Đỏ (primary) */}
                    <h3 className="text-3xl font-bold text-primary">{slide.title}</h3>
                    {/* Giá tiền dùng màu Vàng Kim (secondary) */}
                    <p className="text-2xl italic my-4 border-b border-dotted border-border pb-4">
                      {slide.price}
                    </p>
                    <p className="text-text-light mb-4">{slide.description}</p>
                    <ul className="space-y-2">
                      {slide.listItems.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          {/* Icon check dùng màu Vàng Kim */}
                          <BsCheckCircleFill className="text-secondary text-xl mr-3 flex-shrink-0 mt-1" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Dấu chấm điều hướng */}
        <div className="flex justify-center mt-8 space-x-3">
          {eventsData.slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              // Dấu chấm active sẽ có màu Đỏ, còn lại có màu xám
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                activeSlide === index ? 'bg-primary' : 'bg-border hover:bg-gray-500'
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;