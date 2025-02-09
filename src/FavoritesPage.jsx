import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import JobCard from './JobCard';

const FavoritesPage = () => {
  const navigate = useNavigate();
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favoriteJobs') || '[]');
    setFavorites(savedFavorites);
  }, []);

  const handleRemove = (job) => {
    const updatedFavorites = favorites.filter(j => j.id !== job.id);
    setFavorites(updatedFavorites);
    localStorage.setItem('favoriteJobs', JSON.stringify(updatedFavorites));
  };

  return (
    <div className="min-h-screen bg-gray-900 px-4 py-8">
      <div className="max-w-7xl mx-auto">
        <header className="flex justify-between items-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-white"
          >
            Favorite Jobs
          </motion.h1>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/SwipePage')}
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl transition-all duration-200"
          >
            Back to Swipe
          </motion.button>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {favorites.length > 0 ? (
            favorites.map(job => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <JobCard
                  job={job}
                  isFavorite={true}
                  onRemove={handleRemove}
                  onMoreInfo={() => navigate(`/job/${job.id}`)}
                />
              </motion.div>
            ))
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="col-span-full text-center py-20"
            >
              <h2 className="text-2xl font-bold text-white mb-4">No favorite jobs yet!</h2>
              <p className="text-gray-400 mb-8">Start swiping to find your dream job</p>
              <button
                onClick={() => navigate('/')}
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl transition-all duration-200"
              >
                Start Swiping
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FavoritesPage