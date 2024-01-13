import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export function LanguageToggle() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
  };

  return (
    <nav className="bg-neutral-800">
      <div className=" px-10">
        <div className="flex justify-between items-center py-4 w-full">
          {!isOpen && (
            <a href="#" className="text-xl font-bold text-white w-fit h-fit">
              <svg xmlns="http://www.w3.org/2000/svg" height="35" width="35" viewBox="0 0 640 512">
                <path fill="#25b1a5" d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z" />
              </svg>
            </a>
          )}
          <div className="md:hidden absolute right-5 top-5">
            <button
              className="text-white focus:outline-none"
              onClick={toggleNavbar}
            >
              <span className="block w-6 h-1 bg-white mb-1"></span>
              <span className="block w-6 h-1 bg-white mb-1"></span>
              <span className="block w-6 h-1 bg-white"></span>
            </button>
          </div>
          <div
            className={`${isOpen ? "block" : "hidden"
              } md:flex md:items-center md:w-auto w-full`}
          >
            <ul className={`md:flex items-center ${isOpen ? "justify-center items-center align-middle mx-auto" : ""}`}>

              <li className="ml-3">
                <a
                  href="#about"
                  className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-md  font-medium"
                >
                  About
                </a>
              </li>
              <li className="ml-3">
                <a
                  href="#skills"
                  className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-md  font-medium"
                >
                  Skills
                </a>
              </li>
              <li className="ml-3">
                <a
                  href="#project"
                  className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-md  font-medium"
                >
                  Projects
                </a>
              </li>
              <li className="ml-3">
                <a
                  href="#contact"
                  className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-md font-medium"
                >
                  Contact
                </a>
              </li>
              <li className="ml-3">
                <select value={i18n.language} onChange={handleLanguageChange} className="bg-neutral-900 text-white font-semibold px-3 py-2 items-center align-middle text-md rounded-lg" >
                  <option value="en">en</option>
                  <option value="de">de</option>
                </select>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>


  );
}
