import React, { useState, useMemo } from 'react';
// Đảm bảo đường dẫn đúng
import { menuDataList } from '../data/updateMenu.js'; 


// --- [MỚI] Component cho một hàng trong danh sách món ăn ---
const MenuItemListRow = ({ item }) => {
  // Hàm để định dạng giá, dù là chuỗi hay đối tượng
  const formatPrice = (price) => {
    if (typeof price === 'string') return price;
    return Object.entries(price).map(([key, value]) => `${key}: ${value}`).join(' / ');
  };

  return (
    <div className="py-4 px-4 sm:px-6 flex justify-between items-start">
      {/* Phần bên trái: ID, Tên, Mô tả */}
      <div className="pr-4">
        <div className="flex items-center flex-wrap gap-x-3 gap-y-1">
          <span className="text-xs font-mono bg-gray-200 text-gray-600 px-2 py-1 rounded-md order-first">[{item.id}]</span>
          <h4 className="text-lg font-bold text-gray-800">{item.name}</h4>
        </div>
        {item.description && (
          <p className="text-gray-600 mt-1 text-sm max-w-xl">{item.description}</p>
        )}
      </div>
      {/* Phần bên phải: Giá */}
      <p className="text-lg font-semibold text-red-600 ml-4 whitespace-nowrap text-right">{formatPrice(item.price)}</p>
    </div>
  );
};


// --- Component Card cho Danh mục (Không thay đổi) ---
const CategoryCard = ({ category, onSelect }) => (
  <div 
    className="relative rounded-lg shadow-lg overflow-hidden cursor-pointer group"
    onClick={() => onSelect(category.category)}
  >
    <img src={category.categoryImage} alt={category.category} className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" />
    <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
      <h3 className="text-white text-3xl font-extrabold tracking-wider">{category.category}</h3>
    </div>
  </div>
);


// --- Component chính (Đã cập nhật logic hiển thị) ---
const InteractiveMenu = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [activeSubcategory, setActiveSubcategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 10; // <-- ĐÃ THAY ĐỔI TỪ 8 SANG 10

  const handleSelectCategory = (categoryName) => {
    setSelectedCategory(categoryName);
    setActiveSubcategory('All');
    setCurrentPage(1);
  };

  const handleGoBack = () => {
    setSelectedCategory(null);
  };

  const categoryData = useMemo(() => {
    if (!selectedCategory) return null;
    return menuDataList.menu.find(c => c.category === selectedCategory);
  }, [selectedCategory]);

  const allFilteredItems = useMemo(() => {
    if (!categoryData) return [];
    return categoryData.subcategories.flatMap(sub => 
      activeSubcategory === 'All' || sub.name === activeSubcategory ? sub.items : []
    );
  }, [categoryData, activeSubcategory]);
  
  const paginatedItems = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return allFilteredItems.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [allFilteredItems, currentPage]);
  
  const totalPages = Math.ceil(allFilteredItems.length / ITEMS_PER_PAGE);

  const subcategoryFilters = menuDataList.filters.find(f => f.name === selectedCategory)?.subcategories || [];

  return (
    <div className="bg-pink-50 min-h-screen font-sans">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        <header className="text-center mb-12">
          <h2 className="text-red-500 text-xl font-semibold tracking-wider">SPEISEKARTE</h2>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mt-2">Entdecken Sie unsere Vielfalt</h1>
        </header>

        <main>
          {/* Màn hình lưới danh mục */}
          {!selectedCategory && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {menuDataList.menu.map(cat => (
                <CategoryCard key={cat.category} category={cat} onSelect={handleSelectCategory} />
              ))}
            </div>
          )}

          {/* Màn hình chi tiết danh mục */}
          {selectedCategory && categoryData && (
            <div>
              <div className="flex items-center mb-8">
                <button onClick={handleGoBack} className="bg-white text-gray-700 hover:bg-gray-200 px-4 py-2 rounded-full shadow-sm transition-all mr-4">
                  &larr; Zurück
                </button>
                <h2 className="text-3xl font-bold text-gray-800">{selectedCategory}</h2>
              </div>
              
              {subcategoryFilters.length > 1 && (
                <div className="flex justify-center flex-wrap gap-2 md:gap-3 mb-10 p-4 bg-red-100 rounded-xl">
                    {subcategoryFilters.map(subFilterName => (
                    <button
                        key={subFilterName}
                        onClick={() => { setActiveSubcategory(subFilterName); setCurrentPage(1); }}
                        className={`px-4 py-1.5 text-xs md:text-sm font-medium rounded-full transition-colors duration-200 ${activeSubcategory === subFilterName ? 'bg-white text-red-600 shadow' : 'bg-transparent text-gray-600 hover:bg-white/70'}`}
                    >
                        {subFilterName}
                    </button>
                    ))}
                </div>
              )}
              
              {/* --- [ĐÃ THAY ĐỔI] HIỂN THỊ DẠNG DANH SÁCH --- */}
              {paginatedItems.length > 0 ? (
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="divide-y divide-red-100">
                    {paginatedItems.map(item => (
                      <MenuItemListRow key={`${item.id}-${item.name}`} item={item} />
                    ))}
                  </div>
                </div>
              ) : (
                <p className="text-center text-gray-500 py-10">Keine Artikel in dieser Kategorie gefunden.</p>
              )}

              {/* Phân trang */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center mt-12 space-x-2">
                  <button onClick={() => setCurrentPage(p => Math.max(1, p - 1))} disabled={currentPage === 1} className="px-4 py-2 bg-white rounded-md shadow disabled:opacity-50 disabled:cursor-not-allowed">
                    Vorherige
                  </button>
                  <span className="text-gray-700 font-semibold">
                    Seite {currentPage} von {totalPages}
                  </span>
                  <button onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))} disabled={currentPage === totalPages} className="px-4 py-2 bg-white rounded-md shadow disabled:opacity-50 disabled:cursor-not-allowed">
                    Nächste
                  </button>
                </div>
              )}
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default InteractiveMenu;