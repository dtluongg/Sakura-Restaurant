// src/components/Menu.jsx
import React, { useState } from 'react';
import { menuData } from '../data';

const Menu = () => {
  // State để lưu trữ bộ lọc hiện tại, mặc định là 'All'
  const [activeFilter, setActiveFilter] = useState('All');

  // Lọc danh sách món ăn dựa trên activeFilter
  const filteredItems = activeFilter === 'All' 
    ? menuData.items 
    : menuData.items.filter(item => item.category === activeFilter);

  return (
    <section id="menu" className="bg-[#1a1814] text-white py-20">
      <div className="container mx-auto px-4">
        {/* Tiêu đề */}
        <div className="text-center mb-12">
          <p className="text-gray-400 uppercase tracking-wider">{menuData.superTitle}</p>
          <h2 className="text-4xl font-serif text-amber-400 mt-2">{menuData.title}</h2>
        </div>

        {/* Các nút lọc */}
        <div className="flex justify-center mb-12">
          <ul className="flex space-x-4">
            {menuData.filters.map((filter, index) => (
              <li key={index}>
                <button
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 rounded-full transition-colors duration-300 ${
                    activeFilter === filter ? 'bg-amber-500 text-black' : 'hover:text-amber-400'
                  }`}
                >
                  {filter}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Lưới hiển thị các món ăn */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
          {filteredItems.map(item => (
            <div key={item.id} className="flex items-center">
              {/* Hình ảnh món ăn */}
              <img src={item.image} alt={item.title} className="w-20 h-20 rounded-full border-4 border-gray-600 object-cover" />
              
              {/* Nội dung món ăn */}
              <div className="flex-grow ml-5">
                <div className="flex justify-between items-baseline">
                  <a href="#" className="text-lg font-bold hover:text-amber-400">{item.title}</a>
                  {/* Đường chấm chấm */}
                  <span className="flex-grow border-b-2 border-dotted border-gray-600 mx-3"></span>
                  <span className="font-bold text-amber-400">{item.price}</span>
                </div>
                <p className="text-gray-400 italic mt-1">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;