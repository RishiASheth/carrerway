import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { jobs } from './data/jobs_engineering';

const JobDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const job = jobs.find(j => j.id === parseInt(id));

  // Dynamically inject the chatbot embed code
  useEffect(() => {
    const script1 = document.createElement('script');
    script1.src = "https://cdn.botpress.cloud/webchat/v2.2/inject.js";
    script1.async = true;
    document.body.appendChild(script1);

    const script2 = document.createElement('script');
    script2.src = "https://files.bpcontent.cloud/2025/02/08/14/20250208143542-1IRIURNC.js";
    script2.async = true;
    document.body.appendChild(script2);

    return () => {
      // Cleanup scripts if the component unmounts
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []);

  if (!job) return <div>Job not found</div>;

  return (
    <div className="min-h-screen bg-gray-900 px-4 py-8 relative">
      <div className="max-w-4xl mx-auto">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/favorites')}
          className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl mb-8 transition-all duration-200"
        >
          Back to Favorites
        </motion.button>

        {/* New Button for Movies Page */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/movies')}  // Adjust the path as needed
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl mb-8 ml-4 transition-all duration-200"
        >
          Go to Movies
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-800 rounded-2xl overflow-hidden shadow-xl"
        >
          <div className="relative h-80">
            <img
              src={job.image}
              alt={job.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
            <img
              src={job.companyLogo}
              alt={job.company}
              className="absolute bottom-6 left-6 w-20 h-20 rounded-full border-4 border-white"
            />
          </div>

          <div className="p-8">
            <h1 className="text-4xl font-bold text-white mb-2">{job.title}</h1>
            <h2 className="text-2xl text-purple-400 mb-8">{job.company}</h2>

            <div className="space-y-8">
              <DetailSection title="Location" content={job.location} icon="📍" />
              <DetailSection title="Salary" content={job.salary} icon="💰" />
              <DetailSection title="Description" content={job.description} icon="📝" />
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white flex items-center gap-3">
                  <span className="text-2xl">💼</span> Required Skills
                </h3>
                <ul className="grid grid-cols-2 gap-4">
                  {job.requirements.map((req, index) => (
                    <li key={index} className="bg-gray-700 text-white px-4 py-2 rounded-lg">
                      {req}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white flex items-center gap-3">
                  <span className="text-2xl">📚</span> Recommended Courses
                </h3>
                <ul className="space-y-3">
                  {job.courses.map((course, index) => (
                    <li key={index} className="text-gray-300">• {course}</li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white flex items-center gap-3">
                  <span className="text-2xl">🎓</span> Recommended Colleges
                </h3>
                <ul className="space-y-3">
                  {job.colleges.map((college, index) => (
                    <li key={index} className="text-gray-300">• {college}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Add a container for the chatbot */}
      
    </div>
  );
};

const DetailSection = ({ title, content, icon }) => (
  <div className="space-y-2">
    <h3 className="text-xl font-semibold text-white flex items-center gap-3">
      <span className="text-2xl">{icon}</span> {title}
    </h3>
    <p className="text-gray-300">{content}</p>
  </div>
);

export default JobDetailsPage;
