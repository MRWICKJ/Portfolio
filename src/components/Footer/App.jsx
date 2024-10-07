import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] lg:grid lg:grid-cols-5">
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
            <h2 className="text-lg font-bold text-gray-900 dark:text-white">Get in Touch</h2>
            <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">Call us</p>
            <a
              href="tel:0123456789"
              className="block text-2xl font-semibold text-gray-900 hover:text-blue-500 sm:text-3xl dark:text-white transition-colors duration-300"
            >
              0123456789
            </a>
            <ul className="mt-2 space-y-1 text-sm text-gray-700 dark:text-gray-200">
              <li>Monday to Friday: 10am - 5pm</li>
              <li>Weekend: 10am - 3pm</li>
            </ul>

            <ul className="mt-4 flex gap-4">
              {['Facebook', 'Instagram', 'Twitter', 'GitHub', 'Dribbble'].map((platform) => (
                <li key={platform}>
                  <a
                    href="#"
                    rel="noreferrer"
                    target="_blank"
                    className="text-gray-700 transition duration-300 hover:opacity-75 dark:text-gray-200"
                    aria-label={platform}
                  >
                    {/* Icon SVGs can be included here for each platform */}
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      {/* Include appropriate paths for each social media icon */}
                      <path d="M0 0h24v24H0z" fill="none" />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <h2 className="font-semibold text-gray-900 dark:text-white">Services</h2>
              <ul className="mt-4 space-y-2 text-sm text-gray-700 dark:text-gray-200">
                {['1on1 Coaching', 'Company Review', 'Accounts Review', 'HR Consulting', 'SEO Optimisation'].map(service => (
                  <li key={service}>
                    <a
                      href="#"
                      className="transition duration-300 hover:text-blue-500 dark:hover:text-blue-400"
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-gray-900 dark:text-white">Company</h2>
              <ul className="mt-4 space-y-2 text-sm text-gray-700 dark:text-gray-200">
                {['About', 'Meet the Team', 'Accounts Review'].map(company => (
                  <li key={company}>
                    <a
                      href="#"
                      className="transition duration-300 hover:text-blue-500 dark:hover:text-blue-400"
                    >
                      {company}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-100 pt-12 dark:border-gray-800">
          <div className="flex flex-col items-center sm:flex-row sm:justify-between">
            <ul className="flex flex-wrap gap-4 text-xs">
              {['Terms & Conditions', 'Privacy Policy', 'Cookies'].map(policy => (
                <li key={policy}>
                  <a
                    href="#"
                    className="text-gray-500 transition duration-300 hover:underline dark:text-gray-400"
                  >
                    {policy}
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-xs text-gray-500 dark:text-gray-400">
              &copy; {new Date().getFullYear()} Company Name. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
