// src/components/Footer.jsx
import React, { useState, useEffect } from 'react';
import { footerData, contactData } from '../data';
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn, FaChevronRight, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);

  // Logic để hiển thị nút scroll to top
  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 400) {
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= 400) {
        setShowScroll(false);
      }
    };
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [showScroll]);

  // Hàm để cuộn lên đầu trang
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer id="footer" className="bg-[#1a1814] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
            
            {/* Cột 1: Thông tin nhà hàng */}
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">{contactData.restaurantName}</h3>
              <p className="whitespace-pre-line">{contactData.address}</p>
              <p className="mt-4">
                <strong>Phone:</strong> {contactData.phone}<br />
                <strong>Email:</strong> {contactData.email}
              </p>
              <div className="flex mt-4 space-x-2">
                <a href="#" className="w-10 h-10 rounded-full border-2 border-gray-700 flex items-center justify-center hover:bg-amber-500 hover:border-amber-500 transition"><FaTwitter /></a>
                <a href="#" className="w-10 h-10 rounded-full border-2 border-gray-700 flex items-center justify-center hover:bg-amber-500 hover:border-amber-500 transition"><FaFacebookF /></a>
                <a href="#" className="w-10 h-10 rounded-full border-2 border-gray-700 flex items-center justify-center hover:bg-amber-500 hover:border-amber-500 transition"><FaInstagram /></a>
                <a href="#" className="w-10 h-10 rounded-full border-2 border-gray-700 flex items-center justify-center hover:bg-amber-500 hover:border-amber-500 transition"><FaLinkedinIn /></a>
              </div>
            </div>

            {/* Cột 2: Useful Links */}
            <div>
              <h4 className="font-bold mb-4">Useful Links</h4>
              <ul>
                {footerData.usefulLinks.map((link, index) => (
                  <li key={index} className="mb-2 flex items-center">
                    <FaChevronRight className="text-amber-500 mr-2" />
                    <a href={link.href} className="hover:text-amber-500">{link.title}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Cột 3: Our Services */}
            <div>
              <h4 className="font-bold mb-4">Our Services</h4>
              <ul>
                {footerData.ourServices.map((service, index) => (
                  <li key={index} className="mb-2 flex items-center">
                    <FaChevronRight className="text-amber-500 mr-2" />
                    <a href={service.href} className="hover:text-amber-500">{service.title}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Cột 4: Newsletter */}
            <div className="md:col-span-2">
              <h4 className="font-bold mb-4">{footerData.newsletter.title}</h4>
              <p className="mb-4">{footerData.newsletter.description}</p>
              <form action="" method="post">
                <div className="relative">
                  <input type="email" name="email" className="w-full bg-gray-800 border border-gray-700 p-3 rounded-full text-white" />
                  <input type="submit" value="Subscribe" className="absolute top-0 right-0 bottom-0 bg-amber-500 px-6 rounded-full cursor-pointer hover:bg-amber-600" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </footer>
      <div className="bg-black py-4 text-center text-gray-400">
        <p>{footerData.copyright}</p>
        <p className="text-sm">Designed by <a href="https://bootstrapmade.com/" className="text-amber-500">BootstrapMade</a></p>
      </div>

      {/* Nút Scroll to Top */}
      {showScroll && (
        <button 
          onClick={scrollTop} 
          className="fixed bottom-5 right-5 w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center text-white hover:bg-amber-600 transition animate-fade-in"
        >
          <FaArrowUp />
        </button>
      )}
    </>
  );
};

export default Footer;