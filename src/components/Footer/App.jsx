import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] lg:grid lg:grid-cols-5 text-gray-100">
      <div className="relative block h-32 lg:col-span-2 lg:h-full">
        <img
          src="https://i.pinimg.com/originals/19/35/2e/19352e3a77c6597fa9ba901f497c90cb.gif"
          alt="Footer Background"
          className="absolute inset-0 h-full w-full object-cover opacity-60 transition-opacity duration-500 ease-in-out hover:opacity-100"
        />
      </div>

      <div className="px-4 py-16 sm:px-6 lg:col-span-3 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div>
            <h2 className="text-lg font-bold text-gray-100">Get in Touch</h2>
            <p className="text-xs uppercase tracking-wide text-gray-500">Call Me</p>
            <p className="block text-2xl font-semibold text-gray-100 sm:text-3xl">
              +91 7319022811
            </p>
            <ul className="mt-2 space-y-1 text-sm text-gray-400">
              <li>Monday to Friday: 10am - 9pm</li>
              <li>Weekend: 10am - 6pm</li>
            </ul>

            <ul className="mt-4 flex gap-4">
            <p className="block text-1xl font-semibold text-gray-100 ">
             Social Media
            </p>
              <li>
                <a
                  href="https://github.com/anuragjh"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-400 transition duration-300 hover:text-gray-300"
                  aria-label="GitHub"
                >
                  <FontAwesomeIcon icon={faGithub} size="lg" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/aman-jha-393468318/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-400 transition duration-300 hover:text-gray-300"
                  aria-label="LinkedIn"
                >
                  <FontAwesomeIcon icon={faLinkedin} size="lg" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/aman.jha.dev/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-400 transition duration-300 hover:text-gray-300"
                  aria-label="Instagram"
                >
                  <FontAwesomeIcon icon={faInstagram} size="lg" />
                </a>
              </li>
              <li>
                <a
                  href="https://api.whatsapp.com/send?phone=917319022811"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-400 transition duration-300 hover:text-gray-300"
                  aria-label="WhatsApp"
                >
                  <FontAwesomeIcon icon={faWhatsapp} size="lg" />
                </a>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <h2 className="font-semibold text-gray-100">Services</h2>
              <ul className="mt-4 space-y-2 text-sm text-gray-400">
                {['Android Apps', 'Web Apps', 'Softwares'].map(service => (
                  <li key={service}>
                    <span className="cursor-default">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            
          
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-12">
          <div className="flex flex-col items-center sm:flex-row sm:justify-between">
            <p className="mt-8 text-xs text-gray-500">
              &copy; {new Date().getFullYear()} PORTFOLIO/AMAN JHA. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
