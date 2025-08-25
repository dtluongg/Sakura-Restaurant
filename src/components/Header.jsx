// src/components/Header.jsx
import React, { useState, useEffect, useRef } from 'react'; // BƯỚC A: Import thêm useRef
import { IoIosCall, IoIosMail, IoIosTime } from 'react-icons/io';
import { IoLocationSharp } from "react-icons/io5";
import { navLinks, contactData } from '../data'; 
import logo from '../assets/logo.jpg'; 

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  
  // BƯỚC B: Dùng useRef để tránh re-render không cần thiết
  const observer = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // useEffect để quan sát các section - ĐÃ SỬA LẠI LOGIC
  useEffect(() => {
    // Ngắt kết nối observer cũ trước khi tạo mới
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver(
      (entries) => {
        // Tìm entry có tỷ lệ giao nhau cao nhất (nằm trên màn hình nhiều nhất)
        const intersectingEntry = entries.find(entry => entry.isIntersecting);
        if (intersectingEntry) {
          setActiveSection(intersectingEntry.target.id);
        }
      }, 
      {
        // rootMargin: Giúp "thu hẹp" vùng quan sát, tránh việc highlight sớm
        // -30% từ trên, 0 từ trái phải, -30% từ dưới
        rootMargin: "-30% 0px -30% 0px",
        threshold: 0, // Kích hoạt ngay khi pixel đầu tiên của section lọt vào vùng quan sát
      }
    );

    const { current: currentObserver } = observer;
    const sections = navLinks.map(link => document.getElementById(link.to)).filter(Boolean);

    sections.forEach(section => {
      if (section) currentObserver.observe(section);
    });

    return () => {
      sections.forEach(section => {
        if (section) currentObserver.unobserve(section);
      });
    };
  }, []); // [] để effect chỉ chạy một lần

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/95 shadow-xl' : 'bg-transparent'}`}>
      {/* Top Bar */}
      <div className={`bg-black bg-opacity-25 transition-transform duration-300 ${isScrolled ? '-translate-y-full' : 'translate-y-0'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center py-1 text-sm text-text-main">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <IoIosTime className="text-primary" />
              <span>{contactData.openHours}</span>
            </div>
            <div className="flex items-center space-x-2">
              <IoIosCall className="text-primary" />
              <span>{contactData.phone}</span>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-2">
            <IoLocationSharp className="text-primary" />
            <span>{contactData.address}</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className={`container mx-auto px-4 flex justify-between items-center text-text-main transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}>
        <a href="#hero" className="flex items-center gap-3">
          <img src={logo} alt="Sakura Restaurant Logo" className="h-16 w-auto rounded-full" />
          <span className="hidden sm:block text-2xl font-bold tracking-wider">
            {contactData.restaurantName}
          </span>
        </a>

        {/* BƯỚC C: Sửa lại màu active và màu hover */}
        <nav className="hidden lg:flex">
          <ul className="flex items-center space-x-8 text-md">
            {navLinks.map((link) => (
              <li key={link.to}>
                <a 
                  href={`#${link.to}`} 
                  className={`transition-colors hover:text-primary ${
                    activeSection === link.to ? 'text-primary font-bold' : ''
                  }`}
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#booking" className="border-2 border-pritext-primary text-primary font-bold rounded-full px-6 py-2 
                       hover:bg-primary hover:text-white transition duration-300 hidden md:block">
          TISCH RESERVIEREN
        </a>
      </div>
    </header>
  );
};

export default Header;