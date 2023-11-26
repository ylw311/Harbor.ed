import React from "react";

function Navbar() {
  return (
    <nav className="bg-white border-gray-200 fixed w-full z-20">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="./images/heartmessagetransparent.png"
            className="h-8"
            alt="Logo"
          />
          <span className="text-grey-900 self-center text-2xl font-semibold whitespace-nowrap">
            Dont Jump DP
          </span>
        </a>

        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
            <li className="flex items-center justify-center">
              <a
                
                className="block py-4 px-6 text-white bg-pink-400 rounded md:bg-transparent md:text-pink-700 md:p-0 md:hover:text-pink-400"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li className="flex items-center justify-center">
              <a
                href="/about"
                className="block py-4 px-6 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-pink-400 md:p-0"
              >
                About
              </a>
            </li>
            <li className="flex items-center justify-center">
              <a
             
                className="block py-4 px-6 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-pink-400 md:p-0"
              >
                Services
              </a>
            </li>
            <li className="flex items-center justify-center">
              <button class="block px-6 py-4 bg-gradient-to-r from-rose-300 via-purple-400 to-indigo-400 text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg">
                Sign Up
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
