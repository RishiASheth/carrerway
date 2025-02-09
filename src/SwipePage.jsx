import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import JobCard from './JobCard';
import { jobs } from './data/jobs_engineering';

const SwipePage = () => {
  const navigate = useNavigate();
  const [currentJobIndex, setCurrentJobIndex] = useState(0);
  const [favorites, setFavorites] = useState([]);
  const [swipeDirection, setSwipeDirection] = useState(null);

  const handleSwipe = (job, isLike) => {
    setSwipeDirection(isLike ? 'right' : 'left');
    
    if (isLike) {
      const updatedFavorites = [...favorites, job];
      setFavorites(updatedFavorites);
      localStorage.setItem('favoriteJobs', JSON.stringify(updatedFavorites));
    }

    setTimeout(() => {
      setCurrentJobIndex(prev => prev + 1);
      setSwipeDirection(null);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <header className="flex justify-between items-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-white"
          >
            Job Matcher
          </motion.h1>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/favorites')}
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl transition-all duration-200"
          >
            Favorites
          </motion.button>
        </header>

        <div className="flex justify-center items-center min-h-[60vh]">
          {currentJobIndex < jobs.length ? (
            <JobCard
              job={jobs[currentJobIndex]}
              onSwipe={handleSwipe}
              isFavorite={false}
              swipeDirection={swipeDirection}
            />
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center"
            >
              <h2 className="text-2xl font-bold text-white mb-6">No more jobs to show!</h2>
              <button
                onClick={() => navigate('/favorites')}
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl transition-all duration-200"
              >
                View Favorites
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SwipePage