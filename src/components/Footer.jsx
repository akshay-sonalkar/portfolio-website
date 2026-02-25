import React from 'react';
import { Linkedin, Mail } from 'lucide-react';
import { consultantInfo } from '../mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Book Call', href: '#booking' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <button onClick={scrollToTop} className="text-3xl font-bold hover:text-emerald-400 transition-colors duration-200">
              Akshay<span className="text-emerald-400">.</span>
            </button>
            <p className="text-slate-400 leading-relaxed">
              Building digital solutions that drive business growth and success.
            </p>
            <div className="flex space-x-4">
              <a
                href={`https://${consultantInfo.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-emerald-600 transition-colors duration-200"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${consultantInfo.email}`}
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-emerald-600 transition-colors duration-200"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="text-slate-400 hover:text-emerald-400 transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-6">Get In Touch</h3>
            <ul className="space-y-3 text-slate-400">
              <li>
                <a
                  href={`mailto:${consultantInfo.email}`}
                  className="hover:text-emerald-400 transition-colors duration-200"
                >
                  {consultantInfo.email}
                </a>
              </li>
              <li>{consultantInfo.location}</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-slate-400 text-sm">
              © {currentYear} {consultantInfo.name}. All rights reserved.
            </p>
            <p className="text-slate-400 text-sm">
              Built with passion for excellence
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;