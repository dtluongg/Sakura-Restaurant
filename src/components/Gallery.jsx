// src/components/Gallery.jsx
import React from 'react';
import { galleryData } from '../data';

const Gallery = () => {
  return (
    <section id="gallery" className="bg-[#0c0b09] text-white py-20">
      <div className="container mx-auto px-4">
        {/* Tiêu đề */}
        <div className="text-center mb-12">
          <p className="text-gray-400 uppercase tracking-wider">{galleryData.superTitle}</p>
          <h2 className="text-4xl font-serif text-amber-400 mt-2">{galleryData.title}</h2>
        </div>

        {/* Lưới ảnh */}
        {/* Trên màn hình nhỏ (mobile) sẽ là 2 cột, trên màn hình lớn (desktop) là 4 cột */}
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {galleryData.images.map((image, index) => (
            // Bọc mỗi ảnh trong một thẻ `a` để có thể thêm chức năng lightbox sau này
            <a 
              key={index} 
              href={image} // Tạm thời link đến chính nó
              className="group overflow-hidden"
              // Ngăn chặn hành vi mặc định, vì chúng ta chưa có lightbox
              onClick={(e) => e.preventDefault()} 
            >
              <img 
                src={image} 
                alt={`Gallery image ${index + 1}`} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;