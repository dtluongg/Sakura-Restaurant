// src/components/Menu.jsx
import React, { useState } from 'react';
// Sửa lại đường dẫn import cho đúng file data trung tâm
import { menuData } from '../data/menuData.js'; 
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Menu = () => {
  // === STATE MANAGEMENT ===
  // State để lưu trữ bộ lọc (danh mục) đang active
  const [activeFilter, setActiveFilter] = useState('All');
  // State để theo dõi trang hiện tại
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12; // Hiển thị 12 món mỗi trang

  // === LOGIC KẾT HỢP LỌC VÀ PHÂN TRANG ===

  // 1. LỌC TRƯỚC: Lấy danh sách các món ăn dựa trên bộ lọc đang active
  const filteredItems = activeFilter === 'All'
    ? menuData.items
    : menuData.items.filter(item => item.category === activeFilter);

  // 2. PHÂN TRANG SAU: Tính toán phân trang dựa trên danh sách ĐÃ LỌC
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // Lấy ra các món ăn để hiển thị trên trang hiện tại từ danh sách ĐÃ LỌC
  const currentItemsToDisplay = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  // === CÁC HÀM XỬ LÝ SỰ KIỆN ===

  // Hàm xử lý khi bấm vào một nút lọc
  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
    // Rất quan trọng: Reset về trang 1 mỗi khi đổi bộ lọc
    setCurrentPage(1); 
  };

  // Hàm xử lý chuyển trang tới
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Hàm xử lý lùi trang
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

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
          {/* Gợi ý: Dùng flex-wrap để các nút tự xuống dòng trên màn hình nhỏ */}
          <ul className="flex flex-wrap justify-center gap-2 md:gap-4">
            {menuData.filters.map((filter, index) => (
              <li key={index}>
                <button
                  onClick={() => handleFilterClick(filter)}
                  className={`px-4 py-2 rounded-full text-sm md:text-base transition-colors duration-300 ${
                    activeFilter === filter ? 'bg-amber-500 text-black' : 'hover:text-amber-400'
                  }`}
                >
                  {filter}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Lưới hiển thị các món ăn của trang hiện tại */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 min-h-[500px]">
          {currentItemsToDisplay.map(item => (
            <div key={item.id} className="flex items-center">
              {item.image && (
                <img src={item.image} alt={item.name} className="w-20 h-20 rounded-full border-4 border-gray-600 object-cover flex-shrink-0" />
              )}
              
              <div className={`flex-grow ${item.image ? 'ml-5' : ''}`}>
                <div className="flex justify-between items-baseline">
                  <span className="text-lg font-bold hover:text-amber-400">{item.name}</span>
                  <span className="flex-grow border-b-2 border-dotted border-gray-600 mx-3"></span>
                  <span className="font-bold text-amber-400">{item.price}</span>
                </div>
                <p className="text-gray-400 italic mt-1">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Nút điều hướng phân trang */}
        {/* Chỉ hiển thị phân trang nếu có nhiều hơn 1 trang */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center mt-12 space-x-6">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className="p-3 bg-amber-500 rounded-full text-black disabled:bg-gray-600 disabled:cursor-not-allowed transition"
            >
              <FaChevronLeft />
            </button>
            <span className="text-xl font-bold">
              Seite {currentPage} von {totalPages}
            </span>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="p-3 bg-amber-500 rounded-full text-black disabled:bg-gray-600 disabled:cursor-not-allowed transition"
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