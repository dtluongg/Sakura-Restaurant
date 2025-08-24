// src/components/Hero.jsx
import React from 'react';

// 1. Import hình ảnh TRỰC TIẾP
import heroBgImage from '../assets/hero-bg.jpg'; 

// 2. Import nội dung TEXT từ file data
import { heroData, contactData } from '../data';

const Hero = () => {
  return (
    // Bạn có thể dùng section cho đúng ngữ nghĩa HTML5
    <section 
      className="relative h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroBgImage})` }}
    >
      {/* Lớp phủ màu đen */}
      <div className="absolute inset-0 bg-black opacity-60 z-10"></div>

      {/* Nội dung text ở giữa */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          {heroData.title} <span className="text-amber-400">{contactData.restaurantName}</span>
        </h1>
        <p className="text-xl my-6">
          {heroData.subtitle}
        </p>
        <a href="#booking" className="bg-amber-400 text-black font-bold py-3 px-8 rounded-full hover:bg-amber-500 transition text-lg">
          {heroData.button2}
        </a>
      </div>
    </section>
  );
};

export default Hero;