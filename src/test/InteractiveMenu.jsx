// src/components/InteractiveMenu.jsx
import React, { useState, useMemo } from 'react';
import { menuDataList } from '../data/updateMenu'; 
// Icons có thể cần nếu bạn muốn dùng lại nút phân trang kiểu cũ
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import logo from '../assets/logo.jpg'

// --- Component Card cho một hàng món ăn (Thiết kế mới với màu sắc cũ) ---
const MenuItemRowThemed = ({ item }) => {
  const formatPrice = (price) => {
    if (typeof price === 'string') return price;
    // Thay đổi / thành xuống hàng trên mobile
    return Object.entries(price)
      .map(([key, value]) => `${key}: ${value}`)
      .join(' / ');
  };

  return (
    <div className="py-5 px-4 flex items-center gap-4">
      {/* Phần hình ảnh, không đổi */}
      {item.image && (
        <img 
          src={item.image} 
          alt={item.name} 
          className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-full border-4 border-border flex-shrink-0"
        />
      )}

      {/* SỬA 1: Container chính thay đổi bố cục trên mobile */}
      {/* Mobile (default): flex-col -> xếp dọc */}
      {/* Desktop (sm:): sm:flex-row -> xếp ngang */}
      <div className="flex-grow min-w-0 flex flex-col sm:flex-row sm:justify-between sm:items-baseline">

        {/* --- Phần Tên & Mô tả --- */}
        {/* Chiếm toàn bộ chiều rộng trên mobile */}
        <div className="w-full">
          <div className="flex items-baseline gap-3">
            <span className="text-xs font-mono bg-border text-text-main px-2 py-1 rounded-md">[{item.id}]</span>
            <h4 className="text-sm font-bold text-text-main group-hover:text-primary transition-colors break-words">
              {item.name}
            </h4>
          </div>
          {item.description && (
            <p className="text-text-light mt-1 text-xs">{item.description}</p>
          )}
        </div>
        
        {/* Đường chấm chấm: Ẩn trên mobile, hiện trên desktop */}
        <span className="hidden sm:block flex-grow border-b-2 border-dotted border-border mx-4"></span>

        {/* --- Phần Giá tiền --- */}
        {/* SỬA 2: Giá tiền có style riêng cho mobile và desktop */}
        <p className="
          font-bold text-secondary text-base whitespace-nowrap 
          mt-2 sm:mt-0               /* Mobile: có margin top, Desktop: không */
          sm:ml-2                    /* Mobile: không margin left, Desktop: có */
          text-right                 /* (default): căn phải */
        ">
          {formatPrice(item.price)}
        </p>

      </div>
    </div>
  );
};
// --- [THIẾT KẾ MỚI] Component Card Danh mục Nhỏ gọn ---
const CompactCategoryCard = ({ category, onSelect }) => (
  <div
    onClick={() => onSelect(category.category)}
    className="relative flex items-center justify-center h-28 sm:h-32 rounded-lg cursor-pointer overflow-hidden group shadow-md transition-transform duration-300 hover:scale-105"
    // Dùng inline style để đặt ảnh nền động
    style={{
      backgroundImage: `url(${category.categoryImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
    {/* Lớp phủ tối để làm nổi bật chữ */}
    <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition-colors duration-300"></div>
    {/* Tên danh mục */}
    <h3 className="relative z-10 text-white text-xl text-center font-serif font-bold px-2">
      {category.category}
    </h3>
  </div>
);


// --- Component chính ---
const InteractiveMenu = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [activeSubcategory, setActiveSubcategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 10;

  const handleSelectCategory = (categoryName) => {
    setSelectedCategory(categoryName);
    setActiveSubcategory('All');
    setCurrentPage(1);
  };
  const handleGoBack = () => setSelectedCategory(null);
  
  const categoryData = useMemo(() => selectedCategory ? menuDataList.menu.find(c => c.category === selectedCategory) : null, [selectedCategory]);
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
    <section id="menu" className="bg-background text-text-main py-20">
      <div className="container mx-auto px-4">
        {/* Logo và Tiêu đề chính */}
        <div className="mb-12">
          <div className="flex items-center">
            <p className="text-text-light uppercase tracking-wider">SPEISEKARTE</p>
            {/* Đường gạch ngang dùng màu Đỏ (primary) */}
            <span className="w-16 h-px bg-primary ml-4"></span>
          </div>
          {/* Tiêu đề chính dùng màu Vàng Kim (secondary) */}
          <h2 className="text-4xl font-serif text-secondary mt-2">Entdecken Sie unsere Vielfalt</h2>
          <img src={logo} alt="Sakura Restaurant" className="w-40 h-40 mx-auto mb-6 rounded-full" />
        </div>
        <main>
          {/* Màn hình lưới danh mục nhỏ gọn */}
          {!selectedCategory && (
            // SỬA: Bố cục lưới mới, 3 cột trên mobile và 5 cột trên desktop
            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 max-w-4xl mx-auto">
              {menuDataList.menu.map(cat => (
                <CompactCategoryCard key={cat.category} category={cat} onSelect={handleSelectCategory} />
              ))}
            </div>
          )}

          {/* Màn hình chi tiết danh mục */}
          {selectedCategory && categoryData && (
            <div className="animate-fade-in">
              <div className="flex items-center mb-8">
                <button onClick={handleGoBack} className="bg-surface text-text-main hover:bg-border px-4 py-2 rounded-full transition-colors mr-4 flex items-center gap-2">
                  <FaChevronLeft size={12} /> Zurück
                </button>
                <h2 className="text-4xl font-serif font-bold text-text-main">{selectedCategory}</h2>
              </div>
              
              {subcategoryFilters.length > 1 && (
                <div className="p-4 bg-surface rounded-xl mb-12">
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                    {subcategoryFilters.map(subFilterName => (
                      <button
                        key={subFilterName}
                        onClick={() => { setActiveSubcategory(subFilterName); setCurrentPage(1); }}
                        className={`w-full text-center p-3 text-sm font-semibold rounded-lg transition-all duration-200 ${activeSubcategory === subFilterName ? 'bg-primary text-white scale-105 shadow-lg' : 'bg-background text-text-light hover:text-text-main'}`}
                      >
                        {subFilterName}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              
              {paginatedItems.length > 0 ? (
                <div className="bg-surface rounded-lg shadow-2xl overflow-hidden">
                  <div className="divide-y divide-border">
                    {paginatedItems.map(item => (
                      <div key={`${item.id}-${item.name}`} className="group cursor-pointer hover:bg-background/50 transition-colors">
                        <MenuItemRowThemed item={item} />
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <p className="text-center text-text-light py-10">Keine Artikel in dieser Kategorie gefunden.</p>
              )}

              {totalPages > 1 && (
                <div className="flex justify-center items-center mt-12 space-x-6">
                  <button onClick={() => setCurrentPage(p => Math.max(1, p - 1))} disabled={currentPage === 1} className="p-3 bg-primary rounded-full text-white disabled:bg-border disabled:cursor-not-allowed transition hover:bg-red-700">
                    <FaChevronLeft />
                  </button>
                  <span className="text-xl font-bold text-text-light">
                    Seite {currentPage} von {totalPages}
                  </span>
                  <button onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))} disabled={currentPage === totalPages} className="p-3 bg-primary rounded-full text-white disabled:bg-border disabled:cursor-not-allowed transition hover:bg-red-700">
                    <FaChevronRight />
                  </button>
                </div>
              )}
            </div>
          )}
        </main>
      </div>
    </section>
  );
};

export default InteractiveMenu;