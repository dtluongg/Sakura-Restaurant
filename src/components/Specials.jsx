// src/components/Specials.jsx
import React, { useState } from 'react';
import { specialsData } from '../data';

const Specials = () => {
  // State để lưu index của tab đang active, mặc định là tab đầu tiên (index 0)
  const [activeTab, setActiveTab] = useState(0);

  // Lấy ra thông tin của món ăn đang active để hiển thị
  const currentSpecial = specialsData.items[activeTab];

  return (
    <section id="specials" className="bg-[#0c0b09] text-white py-20">
      <div className="container mx-auto px-4">
        {/* Tiêu đề */}
        <div className="mb-12">
          <div className="flex items-center">
            <p className="text-gray-400 uppercase tracking-wider">{specialsData.superTitle}</p>
            <span className="w-16 h-px bg-amber-400 ml-4"></span>
          </div>
          <h2 className="text-4xl font-serif text-amber-400 mt-2">{specialsData.title}</h2>
        </div>

        {/* Layout chính: Tabs bên trái, nội dung bên phải */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Cột Trái: Danh sách các Tabs */}
          <div className="md:w-1/4">
            <ul className="flex flex-row md:flex-col">
              {specialsData.items.map((item, index) => (
                <li key={index}>
                  <button
                    onClick={() => setActiveTab(index)}
                    // Áp dụng style khác nhau cho tab đang active
                    className={`w-full text-left p-4 transition-colors duration-300 font-bold ${
                      activeTab === index 
                        ? 'bg-amber-500 text-black' 
                        : 'hover:text-amber-400'
                    }`}
                  >
                    {item.tabTitle}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Cột Phải: Nội dung của Tab */}
          {/* Thêm key={activeTab} để React render lại component và tạo hiệu ứng fade-in */}
          <div key={activeTab} className="md:w-3/4 flex flex-col md:flex-row gap-8 animate-fade-in">
            {/* Phần text */}
            <div className="md:w-2/3 border-l-4 border-amber-500 pl-6">
              <h3 className="text-2xl font-bold mb-4">{currentSpecial.contentTitle}</h3>
              <p className="italic text-gray-400 mb-4">{currentSpecial.contentP1}</p>
              <p className="text-gray-400">{currentSpecial.contentP2}</p>
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

// Hàm định nghĩa animation fade-in (tùy chọn nhưng nên có)
// Bạn cần thêm nó vào file tailwind.config.js nếu muốn
// Nếu không, có thể xóa class "animate-fade-in" ở trên
const fadeInAnimation = {
  'fade-in': {
    '0%': { opacity: '0.3', transform: 'translateY(10px)' },
    '100%': { opacity: '1', transform: 'translateY(0)' },
  },
};

export default Specials;