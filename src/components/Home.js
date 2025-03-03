import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { useTheme } from 'next-themes';

const Home = () => {
  const { theme } = useTheme();

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-100 via-white to-gray-50 dark:from-gray-900 dark:to-black transition-colors duration-150" />
      
      {/* Animated background shapes */}
      <motion.div
        className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-br from-gray-200 to-white dark:from-gray-800 dark:to-gray-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-70"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute -bottom-20 -left-20 w-96 h-96 bg-gradient-to-tr from-gray-200 to-white dark:from-gray-800 dark:to-gray-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-70"
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [90, 0, 90],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <motion.div
            className="w-32 h-32 mb-8 rounded-full overflow-hidden ring-2 ring-gray-100 dark:ring-gray-800 transition-colors duration-150"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <img
              src={theme === 'dark' ? '/IMG_0957.png' : '/img.png'}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-200 transition-colors duration-150">
            Matéo Lechantre
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 font-light transition-colors duration-150">
            Software Engineering Student at Epitech Lyon
          </h2>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col md:flex-row items-center justify-center gap-4"
          >
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={200}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-full hover:from-blue-700 hover:to-blue-600 transition-all duration-150 cursor-pointer shadow-sm hover:shadow-md"
            >
              View My Work
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={200}
              className="px-8 py-3 border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white rounded-full hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-150 cursor-pointer hover:shadow-md"
            >
              Contact Me
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
