// src/components/AboutUs.jsx
import React from 'react';

// Import dữ liệu text
import { aboutData, whyUsData } from '../data';
// Import hình ảnh
import aboutImage from '../assets/about-section.jpg'; // <-- Nhớ thay bằng ảnh của bạn
// Import icon
import { BsCheckCircleFill } from 'react-icons/bs';

const AboutUs = () => {
  return (
    // Áp dụng màu nền và màu chữ chính
    <section id="about" className="bg-background text-text-main py-20">
      <div className="container mx-auto px-4">
        
        {/* === PHẦN GIỚI THIỆU === */}
        <div className="flex flex-col md:flex-row gap-12 items-center mb-24">
          <div className="md:w-1/2">
            {/* Tiêu đề dùng màu Đỏ (primary) */}
            <h2 className="text-4xl font-serif font-bold text-primary mb-4">{aboutData.heading}</h2>
            {/* Chữ phụ dùng màu text-light */}
            <p className="italic text-text-light mb-4">{aboutData.paragraph1}</p>
            <ul className="space-y-3 my-6">
              {aboutData.listItems.map((item, index) => (
                <li key={index} className="flex items-start">
                  {/* Icon dùng màu Vàng Kim (secondary) cho tinh tế */}
                  <BsCheckCircleFill className="text-secondary text-xl mr-3 flex-shrink-0 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-text-light">{aboutData.paragraph2}</p>
          </div>
          <div className="md:w-1/2">
            {/* Viền ảnh dùng màu Vàng Kim (secondary) */}
            <img 
              src={aboutImage} 
              alt="Inside of Sakura Restaurant" 
              className="rounded-lg border-4 border-secondary/30 w-full"
            />
          </div>
        </div>

        {/* === PHẦN WHY US === */}
        <div>
          <div className="mb-12">
            <div className="flex items-center">
              <p className="text-text-light uppercase tracking-wider">{whyUsData.superTitle}</p>
              {/* Đường gạch ngang dùng màu Đỏ (primary) */}
              <span className="w-16 h-px bg-primary ml-4"></span>
            </div>
            {/* Tiêu đề dùng màu Vàng Kim (secondary) để tạo sự khác biệt */}
            <h2 className="text-4xl font-serif text-secondary mt-2">{whyUsData.title}</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyUsData.cards.map((card, index) => (
              // Thẻ cha: chứa ảnh nền và có tỷ lệ vuông
              <div 
                key={index} 
                className="group relative aspect-square overflow-hidden rounded-lg shadow-lg"
              >
                {/* Ảnh nền */}
                <img 
                  src={card.image} 
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 "
                />
                
                {/* Lớp phủ màu đen */}
                <div className="absolute inset-0 bg-background opacity-10 transition-all duration-500 group-hover:bg-opacity-70"></div>
                
                {/* Nội dung text */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className='bg-secondary/80 p-4 rounded-lg'>
                    <span className="text-3xl font-bold text-primary">
                      {card.number}
                    </span>
                    <h3 className="text-2xl font-bold text-white my-2">
                      {card.title}
                    </h3>
                    <p className="text-text-main opacity-0 transition-opacity duration-500 group-hover:opacity-100 max-h-0 group-hover:max-h-40 overflow-hidden">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default AboutUs;