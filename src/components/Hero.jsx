import React from 'react';

// Import hình ảnh TRỰC TIẾP
import heroBgImage from '../assets/hero-bg.jpg'; 

// Import nội dung TEXT từ file data
import { heroData, contactData } from '../data';

const Hero = () => {
  return (
    <section 
      id='hero'
      className="relative h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroBgImage})` }}
    >
      {/* Lớp phủ màu đen */}
      <div className="absolute inset-0 bg-background opacity-60 z-10"></div>

      {/* Nội dung text ở giữa - ĐÃ TINH CHỈNH */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-text-main px-4">
        
        {/* BƯỚC A: Giảm kích thước chữ và điều chỉnh layout */}
        <h1 className="text-5xl md:text-6xl font-serif font-bold leading-tight drop-shadow-lg max-w-4xl">
          {heroData.title} 
          <span className="text-secondary"> {contactData.restaurantName}</span>
        </h1>
        
        {/* BƯỚE B: Tăng khoảng cách và kích thước cho subtitle */}
        <p className="text-xl md:text-2xl my-8 max-w-2xl drop-shadow-md">
          {heroData.subtitle}
        </p>
        
        <a 
          href="#booking" 
          className="bg-primary text-white font-bold py-3 px-8 rounded-full 
                     hover:bg-red-700 hover:scale-105 transform transition-all duration-300
                     shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/50 text-base md:text-lg"
        >
          {heroData.button2}
        </a>
      </div>
    </section>
  );
};

export default Hero;