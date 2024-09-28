import React from 'react';

const VisionMissionSection = () => {
  return (
    <section className="my-12 px-4">
      <div className="container mx-auto flex flex-col md:flex-row gap-8">
        
        <div className="flex-1 bg-[#4B3D25] text-white p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-justify">Our Vision</h2>
          <p className="leading-relaxed text-justify">
            To ensure the longevity of our company through repeat and referral business achieved by customer satisfaction in all areas including timeliness, service-minded attention attitudes to detail dedicated and to provide quality construction. Will treat all employees fairly and involve them in the quality improvement process to ensure responsiveness and cost-effective work execution.
          </p>
        </div>

        
        <div className="flex-1 bg-white text-gray-800 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-justify">Our Mission</h2>
          <p className="leading-relaxed text-justify">
            To be the most excellent construction and real estate development company committed to total customer satisfaction on our strengths - by building innovative designs, superlative quality of material, cutting-edge technology demonstrating workmanship timely the completion highest standards & of workmanship.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;
