import React from 'react';
import { useNavigate } from 'react-router-dom';
import SpotlightCard from './components/SpotlightCard/SpotlightCard';
import Squares from './components/Squares/Squares';
import engineeringImg from './assets/engineering.jpg';
import doctorImg from './assets/doctor.jpg';
import commerceImg from './assets/commerce.jpg';
import LiquidChrome from './components/LiquidChrome/LiquidChrome';
import marketingImg from './assets/marketing.jpg';
import financeImg from './assets/finance.jpg';
import legalImg from './assets/legal.jpg';
import MotorSportsImg from './assets/motorsports.jpg';


const DomainPage = () => {
  const navigate = useNavigate();

  const handleCardClick = (cardType) => {
    if (cardType === 'engineering') {
      navigate('/SwipePage');
    } else if (cardType === 'doctor') {
      navigate('/domain/doctor');
    } else if (cardType === 'commerce') {
      navigate('/domain/commerce');
    }
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Full-screen Squares Background (Interactive) */}
      <LiquidChrome
        baseColor={[0.1, 0.1, 0.1]}
        speed={1}
        amplitude={0.6}
        interactive={true}
        style={{
          position: 'absolute',
          amplitude: 3,
          top: 0,
          left: 0,
          zIndex: -1,  // Behind the content
          width: '100%',
          height: '100vh',  // Full viewport height
        }}
      />

      {/* Black Overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 0, // Overlay between background and cards
          width: '100%',
          height: '100vh', // Full viewport height
          backgroundColor: 'rgba(0, 0, 0, 0.8)', // Semi-transparent black
        }}
      />

      {/* Content Layer */}
      <div className="relative z-10 flex items-center justify-center min-h-screen flex-col">
        {/* New Button to Go to Questionnaire */}
        <button
          className="bg-purple-600 text-white px-4 py-2 rounded-lg mb-4"
          onClick={() => navigate('/questionnaire')}
        >
          Go to Career Questionnaire
        </button>

        {/* Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-4">
          {/* Engineering Card */}
          <div
            className="cursor-pointer"
            onClick={() => handleCardClick('engineering')}
          >
            <SpotlightCard className="custom-spotlight-card w-60 h-60">
              <img
                src={engineeringImg}
                alt="Engineering"
                className="w-full h-40 object-cover rounded-md mb-2"
              />
              <h2 className="text-white text-center font-bold">Engineering</h2>
            </SpotlightCard>
          </div>

          {/* Doctor Card */}
          <div
            className="cursor-pointer"
            onClick={() => handleCardClick('doctor')}
          >
            <SpotlightCard className="custom-spotlight-card w-60 h-60">
              <img
                src={doctorImg}
                alt="Doctor"
                className="w-full h-40 object-cover rounded-md mb-2"
              />
              <h2 className="text-white text-center font-bold">Doctor</h2>
            </SpotlightCard>
          </div>

          {/*Legal*/}
          <div
            className="cursor-pointer"
          >
            <SpotlightCard className="custom-spotlight-card w-60 h-60">
              <img
                src={legalImg}
                alt="Doctor"
                className="w-full h-40 object-cover rounded-md mb-2"
              />
              <h2 className="text-white text-center font-bold">Legal</h2>
            </SpotlightCard>
          </div>

          {/*Marketing and Advertising*/}
          <div
            className="cursor-pointer"
          >
            <SpotlightCard className="custom-spotlight-card w-60 h-60">
              <img
                src={marketingImg}
                alt="Doctor"
                className="w-full h-40 object-cover rounded-md mb-2"
              />
              <h2 className="text-white text-center font-bold">Marketing and Advertising</h2>
            </SpotlightCard>
          </div>

          {/*Finance and Accounting*/}
          <div
            className="cursor-pointer"
          >
            <SpotlightCard className="custom-spotlight-card w-60 h-60">
              <img
                src={financeImg}
                alt="Doctor"
                className="w-full h-40 object-cover rounded-md mb-2"
              />
              <h2 className="text-white text-center font-bold">Finance and Accounting</h2>
            </SpotlightCard>
          </div>

          {/*MotorSports*/}
          <div
            className="cursor-pointer"
          >
            <SpotlightCard className="custom-spotlight-card w-60 h-60">
              <img
                src={MotorSportsImg}
                alt="Doctor"
                className="w-full h-40 object-cover rounded-md mb-2"
              />
              <h2 className="text-white text-center font-bold">Motorsports</h2>
            </SpotlightCard>
          </div>

          

          {/* Commerce Card */}
          <div
            className="cursor-pointer"
            onClick={() => handleCardClick('commerce')}
          >
            <SpotlightCard className="custom-spotlight-card w-60 h-60">
              <img
                src={commerceImg}
                alt="Commerce"
                className="w-full h-40 object-cover rounded-md mb-2"
              />
              <h2 className="text-white text-center font-bold">Commerce</h2>
            </SpotlightCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DomainPage;
