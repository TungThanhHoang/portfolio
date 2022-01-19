import React, { useState, useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

function Navbar() {
  const { darkTheme, setDarkTheme } = useContext(ThemeContext);
  const [isNavbar, setNavbar] = useState(false);
  // const [isDarkMode, setDarkMode] = useState(false);
  const handleCloseModal = () => {
    setNavbar(!isNavbar);
  };

  return (
    <>
      <nav className=" sticky inset-x-0 top-0 left-0 bg-grayyellowcustom z-50 dark:bg-colordark2 ">
        {/* Button Menu Mobile */}
        {isNavbar && (
          <div className="flex flex-1 items-center flex-col p-4 md:hidden fixed top-0 left-0 h-screen w-screen backdrop-blur-xl overflow-hidden  ">
            <ul className="flex flex-col items-center  ">
              <li className="p-4 ">
                <a
                  className="text-xl font-bold text-darkcustom dark:text-slate-50"
                  href="/"
                  onClick={() => handleCloseModal()}
                >
                  Home
                </a>
              </li>
              <li className="p-4">
                <a
                  className="text-xl font-bold text-darkcustom dark:text-slate-50"
                  href="#about"
                  onClick={() => handleCloseModal()}
                >
                  About
                </a>
              </li>
              <li className="p-4">
                <a
                  className="text-xl font-bold text-darkcustom dark:text-slate-50"
                  href="#portfolio"
                  onClick={() => handleCloseModal()}
                >
                  Portfolio
                </a>
              </li>
              <li className="p-4">
                <a
                  className="text-xl font-bold text-darkcustom dark:text-slate-50"
                  href="#contact"
                  onClick={() => handleCloseModal()}
                >
                  Contact
                </a>
              </li>
            </ul>
            <button
              onClick={() => setNavbar(!isNavbar)}
              className="absolute bottom-16 left-1/2 transform -translate-x-1/2 rounded-full  p-2 bg-slate-50 hover:bg-slate-200 "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        )}
        <div className="max-w-screen-xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="mx-5 py-3 font-bold text-darkcustom dark:text-slate-50 capitalize text-2xl">
            <img src="../../ava2.png" alt="" width={40} height={40} />
          </div>
          {/* Navbar item */}
          <div className="hidden md:flex justify-end">
            <div className="flex flex-row ">
              <a
                href="/"
                className="mx-5 py-3 text-md font-bold cursor-pointer dark:text-slate-50 text-green-900 dark:border-b-colordark2 dark:hover:text-blue-300 dark:hover:boder-b-blue-300 border-b-grayyellowcustom border-b-2 hover:text-green-900 hover:border-b-2 hover:border-b-green-900 transation duration-500  "
              >
                Home
              </a>
              <a
                href="#about"
                className="mx-5 py-3 text-md font-bold cursor-pointer dark:text-slate-50 text-green-900 dark:border-b-colordark2 dark:hover:text-blue-300 dark:hover:boder-b-blue-300 border-b-grayyellowcustom border-b-2 hover:text-green-900 hover:border-b-2 hover:border-b-green-900 transation duration-500  "
              >
                About
              </a>
              <a
                href="#portfolio"
                className="mx-5 py-3 text-md font-bold cursor-pointer dark:text-slate-50 text-green-900 dark:border-b-colordark2 dark:hover:text-blue-300 dark:hover:boder-b-blue-300 border-b-grayyellowcustom border-b-2 hover:text-green-900 hover:border-b-2 hover:border-b-green-900 transation duration-500  "
              >
                Portfolio
              </a>
              <div
                href="#contact"
                className="mx-5 py-3 text-md font-bold cursor-pointer dark:text-slate-50 text-green-900 dark:border-b-colordark2 dark:hover:text-blue-300 dark:hover:boder-b-blue-300 border-b-grayyellowcustom border-b-2 hover:text-green-900 hover:border-b-2 hover:border-b-green-900 transation duration-500  "
              >
                Contact
              </div>
            </div>
          </div>
          <div className="flex item-center">
            <button
              className="md:hidden mr-1 "
              onClick={() => setNavbar(!isNavbar)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 stroke-graycustom dark:stroke-slate-50"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            {/* Switch Darkmode */}
            <button
              className=" mx-3 p-1 border-2 rounded-md border-graycustom hover:border-yellowcustom shadow-sm active:border-violet-600"
              onClick={() => setDarkTheme(!darkTheme)}
            >
              {darkTheme ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 fill-green-900"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 fill-green-900"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
