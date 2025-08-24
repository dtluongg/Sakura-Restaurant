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
    <section id="about" className="bg-[#0c0b09] text-white py-20">
      <div className="container mx-auto px-4">
        
        {/* === PHẦN ABOUT US - GIỚI THIỆU === */}
        <div className="flex flex-col md:flex-row gap-12 items-center mb-24">
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold text-amber-400 mb-4">{aboutData.heading}</h2>
            <p className="italic text-gray-400 mb-4">{aboutData.paragraph1}</p>
            <ul className="space-y-3 my-6">
              {aboutData.listItems.map((item, index) => (
                <li key={index} className="flex items-start">
                  <BsCheckCircleFill className="text-amber-400 text-xl mr-3 flex-shrink-0 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-400">{aboutData.paragraph2}</p>
          </div>
          <div className="md:w-1/2">
            <img 
              src={aboutImage} 
              alt="Inside of Sakura Restaurant" 
              className="rounded-lg border-4 border-gray-700 w-full"
            />
          </div>
        </div>

              {/* Why us */}
        <div>
          <div className="mb-12">
            <div className="flex items-center">
              <p className="text-gray-400 uppercase tracking-wider">{whyUsData.superTitle}</p>
              <span className="w-16 h-px bg-amber-400 ml-4"></span>
            </div>
            {/* Font-serif sẽ cho chữ có chân, giống với mẫu hơn */}
            <h2 className="text-4xl font-serif text-amber-400 mt-2">{whyUsData.title}</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyUsData.cards.map((card, index) => (
              // **SỬA LỖI 2: Logic Hover**
              <div 
                key={index} 
                // Thêm 'group' để các element con có thể nhận biết trạng thái hover của cha
                className="group p-8 bg-[#1a1814] border border-gray-800 transition duration-300 hover:-translate-y-2 hover:bg-amber-500"
              >
                <span className="text-3xl font-bold text-amber-400 transition-colors duration-300 group-hover:text-white">
                  {card.number}
                </span>
                <h3 className="text-2xl font-bold text-white my-3">
                  {card.title}
                </h3>
                <p className="text-gray-400 transition-colors duration-300 group-hover:text-white">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default AboutUs;