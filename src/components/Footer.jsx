// src/components/Footer.jsx
import React, { useState, useEffect } from 'react';
import { footerData, contactData } from '../data';
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn, FaChevronRight, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);

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

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Phần Footer chính */}
      <footer id="footer" className="bg-surface text-text-main py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
            
            {/* Cột 1: Thông tin nhà hàng */}
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">{contactData.restaurantName}</h3>
              <p className="whitespace-pre-line text-text-light">{contactData.address}</p>
              <p className="mt-4 text-text-light">
                <strong>Telefon:</strong> {contactData.phone}<br />
                <strong>Email:</strong> {contactData.email}
              </p>
              <div className="flex mt-4 space-x-2">
                {/* Icon mạng xã hội với màu Vàng Kim (secondary) */}
                <a href="#" className="w-10 h-10 rounded-full border-2 border-border flex items-center justify-center hover:bg-secondary hover:border-secondary hover:text-background transition"><FaTwitter /></a>
                <a href="#" className="w-10 h-10 rounded-full border-2 border-border flex items-center justify-center hover:bg-secondary hover:border-secondary hover:text-background transition"><FaFacebookF /></a>
                <a href="#" className="w-10 h-10 rounded-full border-2 border-border flex items-center justify-center hover:bg-secondary hover:border-secondary hover:text-background transition"><FaInstagram /></a>
                <a href="#" className="w-10 h-10 rounded-full border-2 border-border flex items-center justify-center hover:bg-secondary hover:border-secondary hover:text-background transition"><FaLinkedinIn /></a>
              </div>
            </div>

            {/* Cột 2: Useful Links */}
            <div>
              <h4 className="font-bold mb-4">Nützliche Links</h4>
              <ul className="text-text-light">
                {footerData.usefulLinks.map((link, index) => (
                  <li key={index} className="mb-2 flex items-center">
                    {/* Icon mũi tên dùng màu Đỏ (primary) */}
                    <FaChevronRight className="text-primary mr-2" />
                    <a href={link.href} className="hover:text-primary">{link.title}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Cột 3: Our Services */}
            <div>
              <h4 className="font-bold mb-4">Unsere Dienstleistungen</h4>
              <ul className="text-text-light">
                {footerData.ourServices.map((service, index) => (
                  <li key={index} className="mb-2 flex items-center">
                    <FaChevronRight className="text-primary mr-2" />
                    <a href={service.href} className="hover:text-primary">{service.title}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Cột 4: Newsletter */}
            <div className="md:col-span-2">
              <h4 className="font-bold mb-4">{footerData.newsletter.title}</h4>
              <p className="mb-4 text-text-light">{footerData.newsletter.description}</p>
              <form action="" method="post">
                <div className="relative">
                  <input type="email" name="email" className="w-full bg-background border border-border p-3 rounded-full text-text-main" />
                  {/* Nút Subscribe dùng màu Đỏ (primary) */}
                  <input type="submit" value="Abonnieren" className="absolute top-0 right-0 bottom-0 bg-primary px-6 rounded-full cursor-pointer hover:bg-red-700 text-white font-semibold" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </footer>
      
      {/* Phần Copyright */}
      <div className="bg-background py-4 text-center text-text-light">
        <p>{footerData.copyright}</p>
        <p className="text-sm">{footerData.credits}</p>
      </div>

      {/* Nút Scroll to Top */}
      {showScroll && (
        <button 
          onClick={scrollTop} 
          // Nút dùng màu Đỏ (primary)
          className="fixed bottom-5 right-5 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white hover:bg-red-700 transition animate-fade-in"
        >
          <FaArrowUp />
        </button>
      )}
    </>
  );
};

export default Footer;