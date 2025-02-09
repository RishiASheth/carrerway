import React from 'react';
import Aurora from './components/Aurora/Aurora';

const HomePage = () => {
  return (
    <div className="relative min-h-screen">
      <Aurora colorStops={["#3A29FF", "#FF94B4", "#FF3232"]} speed={0.5} />
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="text-white text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome</h1>
          <p className="text-xl mb-4">Explore our amazing features!</p>
          <div className="flex justify-center space-x-4">
            <a href="/domain" className="text-blue-500 hover:underline">Go to Domain</a>
            <a href="/voice-bot" className="text-blue-500 hover:underline">Try VoiceBot</a>
            <a href="/Login" className="text-blue-500 hover:underline">Login</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
