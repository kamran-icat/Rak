import React from 'react';

const StatsSection = () => {
  return (
    <section className="my-12 py-12 relative">
      <div className="container mx-auto px-4">
       
        <div className="relative bg-white rounded-t-lg shadow-lg p-8"> 
         
          <div className="absolute inset-x-0 top-0 h-6 bg-white shadow-md rounded-t-lg"></div>

          <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          
            <div className="text-center md:text-left">
              <span className="block text-5xl font-bold text-[#FBBF24]">500+</span>
              <span className="block text-lg text-gray-500">Projects</span>
              <p className="mt-2 text-gray-400">
                Over 500 luxury villas for "Home Away From Home" experience
              </p>
            </div>

            
            <div className="text-center md:text-left">
              <span className="block text-5xl font-bold text-[#FBBF24]">40+</span>
              <span className="block text-lg text-gray-500">Locations</span>
              <p className="mt-2 text-gray-400">
                Luxury villas and private holiday homes, from all across
              </p>
            </div>

          
            <div className="text-center md:text-left">
              <span className="block text-5xl font-bold text-[#FBBF24]">24/7</span>
              <span className="block text-lg text-gray-500">Help</span>
              <p className="mt-2 text-gray-400">
                24/7 Help service for all customers to guide and support
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
