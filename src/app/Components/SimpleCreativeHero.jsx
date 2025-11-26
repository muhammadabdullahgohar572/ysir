import Image from 'next/image';
import React from 'react';

const SimpleCreativeHero = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
          {/* Content Section */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl leading-snug mb-4">
              Unleash your creativity with our custom patches, where every patch is stitched with love and care.
            </h1>
            
            <p className="text-lg text-gray-600 mb-8">
              Design custom patches, pins, and more.
            </p>
            
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300">
              Chat With An Expert
            </button>
          </div>

          {/* Image Section */}
          <div className="mt-8 lg:mt-0">
            <Image
              src="https://images.unsplash.com/photo-1685059352125-077b37ca6743?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Custom patches design"
              width={500}
              height={400}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimpleCreativeHero;