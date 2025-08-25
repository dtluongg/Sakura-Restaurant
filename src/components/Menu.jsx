// src/components/Menu.jsx
import React, { useState } from 'react';
// Sửa lại đường dẫn import cho đúng file data trung tâm
import { menuData } from '../data/menuData'; 
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Menu = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const filteredItems = activeFilter === 'All'
    ? menuData.items
    : menuData.items.filter(item => item.category === activeFilter);

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItemsToDisplay = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
    setCurrentPage(1); 
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    // Áp dụng màu nền phụ (surface) và màu chữ chính
    <section id="menu" className="bg-surface text-text-main py-20">
      <div className="container mx-auto px-4">
        {/* Tiêu đề */}
        <div className="text-center mb-12">
          {/* Chữ phụ dùng màu text-light */}
          <p className="text-text-light uppercase tracking-wider">{menuData.superTitle}</p>
          {/* Tiêu đề chính dùng màu Đỏ (primary) */}
          <h2 className="text-4xl font-serif text-primary mt-2">{menuData.title}</h2>
        </div>

        {/* Các nút lọc */}
        <div className="flex justify-center mb-12">
          <ul className="flex flex-wrap justify-center gap-2 md:gap-4">
            {menuData.filters.map((filter, index) => (
              <li key={index}>
                <button
                  onClick={() => handleFilterClick(filter)}
                  // Nút active sẽ có màu Đỏ, chữ trắng
                  className={`px-4 py-2 rounded-full text-sm md:text-base transition-colors duration-300 ${
                    activeFilter === filter ? 'bg-primary text-white' : 'hover:text-primary'
                  }`}
                >
                  {filter}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Lưới hiển thị các món ăn */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 min-h-[500px]">
          {currentItemsToDisplay.map(item => (
            <div key={item.id} className="flex items-center">
              {item.image && (
                // Viền ảnh dùng màu border
                <img src={item.image} alt={item.name} className="w-20 h-20 rounded-full border-4 border-border object-cover flex-shrink-0" />
              )}
              
              <div className={`flex-grow ${item.image ? 'ml-5' : ''}`}>
                <div className="flex justify-between items-baseline">
                  {/* Tên món ăn hover sẽ có màu Đỏ */}
                  <span className="text-lg font-bold hover:text-primary cursor-pointer">{item.name}</span>
                  {/* Đường chấm chấm dùng màu viền */}
                  <span className="flex-grow border-b-2 border-dotted border-border mx-3"></span>
                  {/* Giá tiền dùng màu Vàng Kim (secondary) */}
                  <span className="font-bold text-secondary">{item.price}</span>
                </div>
                {/* Mô tả dùng màu chữ phụ */}
                <p className="text-text-light italic mt-1">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Nút điều hướng phân trang */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center mt-12 space-x-6">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              // Nút dùng màu Đỏ (primary)
              className="p-3 bg-primary rounded-full text-white disabled:bg-gray-600 disabled:cursor-not-allowed transition hover:bg-red-700"
            >
              <FaChevronLeft />
            </button>
            <span className="text-xl font-bold">
              Seite {currentPage} von {totalPages}
            </span>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="p-3 bg-primary rounded-full text-white disabled:bg-gray-600 disabled:cursor-not-allowed transition hover:bg-red-700"
            >
              <FaChevronRight />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Menu;