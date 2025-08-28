// src/components/Gallery.jsx
import React from 'react';
import { galleryData } from '../data';

const Gallery = () => {
  return (
    <section id="gallery" className="bg-background text-text-main py-20">
      <div className="container mx-auto px-4">
        {/* Tiêu đề */}
        <div className='mb-12'>
          <div className="flex items-center">
            <p className="text-text-light uppercase tracking-wider">{galleryData.superTitle}</p>
            <span className="w-16 h-px bg-primary ml-4"></span>
          </div>
          <h2 className="text-4xl font-serif text-secondary mt-2">{galleryData.title}</h2>
        </div>


        {/* Lưới ảnh - ĐÃ SỬA LẠI HOÀN CHỈNH */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryData.images.map((image, index) => (
            // **BƯỚC A: Thêm class aspect-square để tạo ô vuông**
            // Ô chứa bây giờ sẽ luôn là hình vuông, bất kể chiều rộng
            <div 
              key={index} 
              className="group aspect-square relative overflow-hidden rounded-lg shadow-lg"
            >
              <a 
                href={image} 
                className="block w-full h-full"
                onClick={(e) => e.preventDefault()} 
              >
                <img 
                  src={image} 
                  alt={`Gallery image ${index + 1}`} 
                  // **BƯỚC B: Ảnh sẽ lấp đầy ô vuông**
                  // object-cover sẽ tự động cắt ảnh cho vừa khung mà không làm méo hình
                  className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110" 
                />
              </a>
              {/* Lớp phủ viền khi hover */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-secondary transition-all duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;