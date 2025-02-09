import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const JobCard = ({ job, onSwipe, isFavorite, onRemove, onMoreInfo, swipeDirection }) => {
  return (
    <AnimatePresence>
      <motion.div
        className="relative w-full max-w-md mx-auto bg-gray-800 rounded-2xl overflow-hidden shadow-xl"
        initial={{ scale: 1 }}
        animate={{
          x: swipeDirection === 'right' ? 1000 : swipeDirection === 'left' ? -1000 : 0,
          rotate: swipeDirection === 'right' ? 20 : swipeDirection === 'left' ? -20 : 0
        }}
        exit={{ scale: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative h-64">
          <img
            src={job.image}
            alt={job.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
          <img
            src={job.companyLogo}
            alt={job.company}
            className="absolute bottom-4 left-4 w-12 h-12 rounded-full border-2 border-white"
          />
        </div>
        
        <div className="p-6">
          <h2 className="text-2xl font-bold text-white mb-2">{job.title}</h2>
          <h3 className="text-xl text-purple-400 mb-4">{job.company}</h3>
          
          <div className="space-y-2">
            <p className="text-gray-300">
              <span className="inline-block w-5 mr-2">📍</span>
              {job.location}
            </p>
            <p className="text-gray-300">
              <span className="inline-block w-5 mr-2">💰</span>
              {job.salary}
            </p>
          </div>

          {isFavorite ? (
            <div className="flex gap-4 mt-6">
              <button
                onClick={() => onRemove(job)}
                className="flex-1 bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl transition-all duration-200 transform hover:scale-105"
              >
                Remove
              </button>
              <button
                onClick={() => onMoreInfo(job)}
                className="flex-1 bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-xl transition-all duration-200 transform hover:scale-105"
              >
                More Info
              </button>
            </div>
          ) : (
            <div className="flex justify-center gap-8 mt-6">
              <button
                onClick={() => onSwipe(job, false)}
                className="w-16 h-16 flex items-center justify-center bg-red-500 hover:bg-red-600 text-white text-2xl rounded-full transition-all duration-200 transform hover:scale-110"
              >
                ✕
              </button>
              <button
                onClick={() => onSwipe(job, true)}
                className="w-16 h-16 flex items-center justify-center bg-purple-600 hover:bg-purple-700 text-white text-2xl rounded-full transition-all duration-200 transform hover:scale-110"
              >
                ♥
              </button>
            </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default JobCard