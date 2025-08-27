import React, { useState } from 'react';
// Đảm bảo đường dẫn đến tệp dữ liệu của bạn là chính xác
import { menuDataList } from '../data/updateMenu.js'; 

// Component con để hiển thị một món ăn
// Giúp code chính sạch sẽ hơn
const MenuItem = ({ item }) => {
  // Hàm để định dạng giá, dù là chuỗi hay đối tượng
  const formatPrice = (price) => {
    if (typeof price === 'string') {
      return price;
    }
    // Chuyển đối tượng giá { "4 St.": "5,50 €", "8 St.": "9,70 €" }
    // thành chuỗi "4 St.: 5,50 € / 8 St.: 9,70 €"
    return Object.entries(price)
      .map(([key, value]) => `${key}: ${value}`)
      .join(' / ');
  };

  return (
    <div className="py-4">
      <div className="flex justify-between items-baseline">
        <h4 className="text-lg font-bold text-gray-800">{item.name}</h4>
        <p className="text-lg font-semibold text-red-600 ml-4 whitespace-nowrap">{formatPrice(item.price)}</p>
      </div>
      {item.description && (
        <p className="text-gray-600 mt-1 text-sm">{item.description}</p>
      )}
    </div>
  );
};


// Component chính của trang Menu
const SakuraMenuPage = () => {
  // State cho danh mục LỚN đang được chọn
  const [activeCategory, setActiveCategory] = useState('All');
  // State cho danh mục CON đang được chọn
  const [activeSubcategory, setActiveSubcategory] = useState('All');

  // Hàm xử lý khi nhấn vào bộ lọc danh mục LỚN
  const handleCategoryClick = (categoryName) => {
    setActiveCategory(categoryName);
    // Khi đổi danh mục lớn, reset bộ lọc danh mục con về "All"
    setActiveSubcategory('All'); 
  };
  
  // Tìm danh sách các bộ lọc danh mục con dựa trên danh mục lớn đang được chọn
  const subcategoryFilters = menuDataList.filters.find(f => f.name === activeCategory)?.subcategories || [];

  // --- LOGIC LỌC VÀ HIỂN THỊ MÓN ĂN ---
  
  // 1. Lọc các danh mục lớn
  const filteredCategories = activeCategory === 'All'
    ? menuDataList.menu
    : menuDataList.menu.filter(cat => cat.category === activeCategory);

  // 2. Dựa trên kết quả trên, lọc tiếp các danh mục con và trả về một cấu trúc dữ liệu mới để render
  const displayedContent = filteredCategories.map(category => {
    const filteredSubcategories = activeSubcategory === 'All'
      ? category.subcategories
      : category.subcategories.filter(sub => sub.name === activeSubcategory);
      
    return {
      ...category,
      subcategories: filteredSubcategories
    };
  }).filter(category => category.subcategories.length > 0);

  return (
    <div className="bg-pink-50 font-sans min-h-screen">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        
        {/* --- TIÊU ĐỀ --- */}
        <header className="text-center mb-12">
          <h2 className="text-red-500 text-xl font-semibold tracking-wider">SPEISEKARTE</h2>
          <h1 className="text-5xl font-extrabold text-gray-900 mt-2">Entdecken Sie unsere Vielfalt</h1>
        </header>
        
        {/* --- BỘ LỌC DANH MỤC LỚN --- */}
        <nav className="flex justify-center flex-wrap gap-3 md:gap-4 mb-8">
          {menuDataList.filters.map(filter => (
            <button
              key={filter.name}
              onClick={() => handleCategoryClick(filter.name)}
              className={`px-5 py-2 text-sm md:text-base font-semibold rounded-full transition-all duration-300 ease-in-out shadow-sm
                ${activeCategory === filter.name 
                  ? 'bg-red-600 text-white scale-105 shadow-lg' 
                  : 'bg-white text-gray-700 hover:bg-red-100 hover:text-red-700'
                }`}
            >
              {filter.name}
            </button>
          ))}
        </nav>

        {/* --- BỘ LỌC DANH MỤC CON (hiển thị có điều kiện) --- */}
        {activeCategory !== 'All' && subcategoryFilters.length > 1 && (
          <div className="flex justify-center flex-wrap gap-2 md:gap-3 mb-12 p-4 bg-red-100 rounded-xl">
            {subcategoryFilters.map(subFilterName => (
              <button
                key={subFilterName}
                onClick={() => setActiveSubcategory(subFilterName)}
                className={`px-4 py-1.5 text-xs md:text-sm font-medium rounded-full transition-colors duration-200
                  ${activeSubcategory === subFilterName 
                    ? 'bg-white text-red-600 shadow' 
                    : 'bg-transparent text-gray-600 hover:bg-white/70'
                  }`}
              >
                {subFilterName}
              </button>
            ))}
          </div>
        )}

        {/* --- DANH SÁCH MÓN ĂN --- */}
        <main className="mt-8">
          {displayedContent.map(category => (
            // Mỗi danh mục lớn sẽ là một section riêng
            <section key={category.category} className="mb-16">
              {activeCategory === 'All' && (
                <h2 className="text-3xl font-bold text-gray-800 mb-6 border-l-4 border-red-500 pl-4">
                  {category.category}
                </h2>
              )}
              
              <div className="space-y-10">
                {category.subcategories.map(subcategory => (
                  // Mỗi danh mục con
                  <div key={subcategory.name}>
                    <h3 className="text-2xl font-semibold text-gray-800 border-b-2 border-red-200 pb-3 mb-4">
                      {subcategory.name}
                    </h3>
                    <div className="divide-y divide-red-100">
                      {subcategory.items.map(item => (
                        <MenuItem key={item.id} item={item} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </main>

      </div>
    </div>
  );
};

export default SakuraMenuPage;