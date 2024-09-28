import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">

        
        <div className="mb-8 md:mb-0">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhkdT-btE_A34iV7kUT3FOxgNzMxIEN1lo_w&s" alt="RAK Groups" className="h-16 mb-4" />
          <p className="text-gray-600 text-sm">
            "Dream Home is a gated community in the heart of downtown, just steps from beautiful parks. Enjoy the perfect blend of urban convenience and serene green spaces."
          </p>
        </div>

        <div className="mb-8 md:mb-0">
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-600 text-sm hover:text-gray-800">Home</a></li>
            <li><a href="#" className="text-gray-600 text-sm hover:text-gray-800">About Us</a></li>
            <li><a href="#" className="text-gray-600 text-sm hover:text-gray-800">Project</a></li>
            <li><a href="#" className="text-gray-600 text-sm hover:text-gray-800">Our Team</a></li>
            <li><a href="#" className="text-gray-600 text-sm hover:text-gray-800">Enquire Now</a></li>
            <li><a href="#" className="text-gray-600 text-sm hover:text-gray-800">Terms and Conditions</a></li>
          </ul>
        </div>

       
        <div className="mb-8 md:mb-0">
          <h4 className="text-gray-800 font-semibold mb-4">Contact Us</h4>
          <p className="text-gray-600 text-sm mb-2">
            Rak Groups Office, Above Raymonds Showroom, <br />
            Prashanth Nagar, Devanahalli - 562110
          </p>
          <p className="text-gray-600 text-sm mb-1">📞 7760995900</p>
          <p className="text-gray-600 text-sm">📧 rak.developers.dhl@gmail.com</p>
        </div>

              <div className="mb-8 md:mb-0">
          <h4 className="text-gray-800 font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="#"><img src="instagram-icon-url.png" alt="Instagram" className="h-6 w-6" /></a>
            <a href="#"><img src="youtube-icon-url.png" alt="YouTube" className="h-6 w-6" /></a>
            <a href="#"><img src="twitter-icon-url.png" alt="Twitter" className="h-6 w-6" /></a>
          </div>
        </div>
      </div>

   
      <div className="border-t border-gray-300 mt-8 pt-4">
        <p className="text-center text-gray-500 text-xs">© 2024 real estates | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
