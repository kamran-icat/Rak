import React from 'react';

const AboutSection = () => {
  return (
    <section className="font-poppins my-12 mb-16"> 
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-start gap-8">
        
     
        <div className="md:w-5/12 flex flex-col justify-between bg-white p-8 h-full">
          <div>
            <h2 className="text-4xl font-semibold text-gray-800 mb-4 leading-tight">Why RAK Groups?</h2>
            <p className="text-gray-600 text-lg leading-relaxed text-left">
              As one of India’s premier developers of plotted and gated communities, we provide an idyllic sanctuary away from 
              the frenetic pace of city life. Awaken to the gentle melodies of nature and immerse yourself in a harmonious, 
              healthy lifestyle within our meticulously crafted living spaces.
            </p>
          </div>
        </div>

        <div className="md:w-7/12 bg-[#F9F2D7] rounded-lg p-8 shadow-lg flex flex-col justify-between h-full">
          <div>
            <h2 className="text-4xl font-semibold text-gray-800 mb-4 leading-tight">About us</h2>
            <p className="text-gray-700 text-lg leading-relaxed text-left">
              RAK Felicity is a stunning villa plot community in Devanahalli, surrounded by nature and offering delightful amenities. 
              Just a short drive from the city and 10 minutes from Bengaluru International Airport, this prime location balances 
              accessibility with tranquility. Developed by Vencer, RAK Felicity features RERA-approved villa plots and a range 
              of amenities, including a children’s play area, jogging track, yoga deck, outdoor gym, and 24/7 CCTV security. 
              Experience luxurious living in a serene setting at RAK Felicity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
