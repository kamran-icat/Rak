import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        
       
        <div className="flex items-center">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhkdT-btE_A34iV7kUT3FOxgNzMxIEN1lo_w&s" alt="Logo" className="h-10" />
          <span className="ml-2 text-xl font-bold text-gray-800">RAK Groups</span>
        </div>
        
       
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-gray-800 hover:text-yellow-600">Home</a>
          <a href="#" className="text-gray-800 hover:text-yellow-600">About</a>
          <a href="#" className="text-gray-800 hover:text-yellow-600">Projects</a>
          <a href="#" className="text-gray-800 hover:text-yellow-600">Our Team</a>
          <a href="#" className="text-gray-800 hover:text-yellow-600">Enquire now</a>

          <a href="#" className="bg-yellow-600 text-white px-4 py-2 rounded-md hover:bg-yellow-700">
            Log In
          </a>
        </div>

        
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="outline-none mobile-menu-button">
            <svg
              className="w-6 h-6 text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      
      <div className={`mobile-menu ${isOpen ? '' : 'hidden'} md:hidden`}>
        <ul className="">
          <li><a href="#" className="block text-sm px-2 py-4 text-gray-800 hover:bg-yellow-600">Home</a></li>
          <li><a href="#" className="block text-sm px-2 py-4 text-gray-800 hover:bg-yellow-600">About</a></li>
          <li><a href="#" className="block text-sm px-2 py-4 text-gray-800 hover:bg-yellow-600">Projects</a></li>
          <li><a href="#" className="block text-sm px-2 py-4 text-gray-800 hover:bg-yellow-600">Our Team</a></li>
          <li><a href="#" className="block text-sm px-2 py-4 text-gray-800 hover:bg-yellow-600">Enquire now</a></li>
          <li><a href="#" className="block text-sm px-2 py-4 text-gray-800 hover:bg-yellow-600">Log In</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
