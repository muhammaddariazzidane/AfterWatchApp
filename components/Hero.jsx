import React from "react";

const Hero = () => {
  return (
    <div className="absolute left-0 right-0 top-[15%] lg:top-[33%] flex  flex-col items-center justify-center flex-1 text-center">
      <h1 className="lg:text-5xl text-2xl font-bold text-white max-w-lg lg:px-0 px-12">Unlimited movies, TV shows, and more.</h1>
      <h2 className="lg:text-2xl text-lg mb-3 lg:mb-6 my-5 text-white ">Watch anywhere. Cancel anytime.</h2>
      <p className="max-w-xs lg:max-w-full text-white">Ready to watch? Enter your email to create or restart your membership.</p>
      <div className="flex lg:flex-row flex-col gap-4 lg:gap-0 mt-2 lg:mt-4">
        <input type="email" placeholder="email" className="focus:outline-none selection:bg-green-500 bg-white lg:p-4 p-3 min-w-[320px] lg:min-w-[400px]" />
        <button className="flex items-center max-w-xs p-2 mx-auto bg-indigo-600 text-white text-xs lg:text-lg text-center px-4 rounded-sm lg:rounded-none">
          Get Started
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="mx-auto lg:w-6 w-3 h-3 lg:h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Hero;
