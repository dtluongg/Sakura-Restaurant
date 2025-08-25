// src/components/Header.jsx
import React, { useState, useEffect } from 'react';
import { IoIosCall, IoIosMail } from 'react-icons/io';
import { contactData } from '../data';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    // SỬA Ở ĐÂY: Dùng dấu ` ` thay vì ' '
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black shadow-xl' : 'bg-transparent'}`}>
      {/* Top Bar */}
      <div 
        // SỬA Ở ĐÂY: Dùng dấu ` ` thay vì ' '
        className={`bg-black bg-opacity-25 transition-transform duration-300 ${isScrolled ? '-translate-y-full' : 'translate-y-0'}`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center py-2 text-sm text-white">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <IoIosMail className="text-amber-400" />
              <span>{contactData.email}</span>
            </div>
            <div className="flex items-center space-x-2">
              <IoIosCall className="text-amber-400" />
              <span>{contactData.phone}</span>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-2">
            <span>En</span>
            <span>/</span>
            <span>De</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className={`container mx-auto px-4 flex justify-between items-center text-white transition-all duration-300 ${isScrolled ? 'py-3' : 'py-4'}`}>
        <h1 className="text-3xl font-bold tracking-wider">
          <a href="#">{contactData.restaurantName}</a>
        </h1>
        <nav className="hidden md:block">
          <ul className="flex items-center space-x-6">
            <li><a href="#" className="text-amber-400 font-bold">Startseite</a></li>
            <li><a href="#about" className="hover:text-amber-400">Über Uns</a></li>
            <li><a href="#menu" className="hover:text-amber-400">Speisekarte</a></li>
            <li><a href="#specials" className="hover:text-amber-400">Sonderangebote</a></li>
            <li><a href="#events" className="hover:text-amber-400">Veranstaltungen</a></li>
            <li><a href="#gallery" className="hover:text-amber-400">Galerie</a></li>
            <li><a href="#contact" className="hover:text-amber-400">Kontakt</a></li>
          </ul>
        </nav>
        <a href="#booking" className="border border-amber-400 text-amber-400 rounded-full px-6 py-2 hover:bg-amber-400 hover:text-white transition duration-300 hidden md:block">
          TISCH RESERVIEREN
        </a>
      </div>
    </header>
  );
};

export default Header;