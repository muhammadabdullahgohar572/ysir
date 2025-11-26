// components/OrderProcess.jsx
import React from 'react';

const OrderProcess = () => {
  const steps = [
    {
      id: 1,
      title: "Submit your design",
      description: "Upload your designs, logos, or even a rough sketch. Choose your product, colors, size, and style to bring your ideas to life.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
        </svg>
      )
    },
    {
      id: 2,
      title: "Approve Your Proof",
      description: "Collaboration is key: Our designers will create a digital proof. Tell us what you think, and we'll work together until you love it.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      id: 3,
      title: "The Wait is Almost Over",
      description: "With your approval in hand, our production team will meticulously bring your custom product to life.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      id: 4,
      title: "Unbox and Enjoy",
      description: "The moment you've been waiting for has arrived! We'll deliver your top-notch custom product to you in no time, free of charge.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      )
    }
  ];

  return (
  <div className="bg-black py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
            Order Process
          </h1>
          <p className="mt-4 text-xl text-orange-500 max-w-3xl mx-auto font-semibold">
            One Click to Elevate Your Style – Order Now !
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-gray-800"></div>
          
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div key={step.id} className="relative flex flex-col items-center text-center group">
                <div className="flex items-center justify-center w-20 h-20 rounded-full bg-black shadow-lg border-2 border-orange-500 text-orange-500 mb-6 relative z-10 group-hover:bg-orange-500 group-hover:text-black transition-all duration-300 transform group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-orange-500/25">
                  {step.icon}
                </div>
                
                <div className="hidden md:flex absolute -top-2 -left-2 w-8 h-8 rounded-full bg-orange-500 text-black font-bold items-center justify-center text-sm z-20 border-2 border-black">
                  {index + 1}
                </div>
                
                <div className="bg-gray-900 rounded-xl shadow-lg p-6 border border-gray-800 hover:border-orange-500 hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-300 group-hover:transform group-hover:-translate-y-2">
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
                
                <div className="md:hidden absolute -top-2 -left-2 w-8 h-8 rounded-full bg-orange-500 text-black font-bold flex items-center justify-center text-sm z-20 border-2 border-black">
                  {index + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <button className="inline-flex items-center px-8 py-4 border-2 border-orange-500 text-lg font-bold rounded-full text-black bg-orange-500 hover:bg-orange-600 hover:border-orange-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-black transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-orange-500/25">
            Start Your Order
            <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderProcess;