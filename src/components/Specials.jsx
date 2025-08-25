// src/components/Specials.jsx
import React, { useState } from 'react';
import { specialsData } from '../data';

const Specials = () => {
  const [activeTab, setActiveTab] = useState(0);
  const currentSpecial = specialsData.items[activeTab];

  return (
    // Áp dụng màu nền chính và màu chữ chính
    <section id="specials" className="bg-background text-text-main py-20">
      <div className="container mx-auto px-4">
        {/* Tiêu đề */}
        <div className="mb-12">
          <div className="flex items-center">
            <p className="text-text-light uppercase tracking-wider">{specialsData.superTitle}</p>
            {/* Đường gạch ngang dùng màu Đỏ (primary) */}
            <span className="w-16 h-px bg-primary ml-4"></span>
          </div>
          {/* Tiêu đề chính dùng màu Vàng Kim (secondary) */}
          <h2 className="text-4xl font-serif text-secondary mt-2">{specialsData.title}</h2>
        </div>

        {/* Layout chính: Tabs bên trái, nội dung bên phải */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Cột Trái: Danh sách các Tabs */}
          <div className="md:w-1/4">
            <ul className="flex flex-row md:flex-col border md:border-t md:border-b-0 md:border-l-0 md:border-r border-border rounded md:rounded-none">
              {specialsData.items.map((item, index) => (
                <li key={index} className="flex-1">
                  <button
                    onClick={() => setActiveTab(index)}
                    // Tab active sẽ có màu Đỏ, chữ trắng
                    className={`w-full text-left p-4 transition-colors duration-300 font-bold text-lg ${
                      activeTab === index 
                        ? 'bg-primary text-white' 
                        : 'hover:bg-surface'
                    }`}
                  >
                    {item.tabTitle}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Cột Phải: Nội dung của Tab */}
          <div key={activeTab} className="md:w-3/4 flex flex-col md:flex-row gap-8 animate-fade-in">
            {/* Phần text */}
            {/* Đường kẻ dọc dùng màu Đỏ (primary) */}
            <div className="md:w-2/3 border-l-4 border-primary pl-6">
              <h3 className="text-2xl font-bold mb-4">{currentSpecial.contentTitle}</h3>
              <p className="italic text-text-light mb-4">{currentSpecial.contentP1}</p>
              <p className="text-text-light">{currentSpecial.contentP2}</p>
            </div>
            {/* Phần ảnh */}
            <div className="md:w-1/3">
              <img 
                src={currentSpecial.image} 
                alt={currentSpecial.contentTitle} 
                className="w-full rounded-lg object-cover" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specials;