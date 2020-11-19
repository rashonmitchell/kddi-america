import React, { useState } from "react";

export default function Navbar({ fixed }) {
  const [isExpanded, toggleExpansion] = useState(false)
  return (
    <nav className="bg-white shadow nav-transparent">
      <div className="container mx-auto px-8 py-3 ">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex justify-between items-center">
            <div className="text-xl font-semibold text-gray-700">
            <a className="text-3xl font-semibold leading-none" href="#">
              <img className="h-10" src="../assets/img/Logo@2x.png" alt="KDDI America " width="auto" />
            </a>
            </div>
            {/* Mobile menu button */}
            <div className="block md:hidden nav-pills">
              <button onClick={() => toggleExpansion(!isExpanded)} type="button" className="text-cta hover:text-kddiOrange focus:outline-none focus:text-cta" aria-controls="navbar-nav" aria-label="toggle menu">
                <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                  <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                </svg>
              </button>
            </div>
          </div>
          {/* Mobile Menu open: "block", Menu closed: "hidden" */}
          <div id="navbar-nav" className={`${ isExpanded ? `block` : `hidden` } tony-z-index mobile-menu ml-auto navbar-nav nav-pills -mx-4 sm:justify-end md:flex md:items-center w-full block flex-grow lg:flex lg:items-center justify-end lg:w-auto`}>
            <a href="#" className="block p-2 mx-4 mt-2 md:mt-0 text-sm text-cta uppercase hover:text-orange-600">call  1-888-888-8888</a>
            <div className="orange">
              <button  className="uppercase focus:outline-none " type="button">
                become a partner
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}





