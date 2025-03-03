import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: '42sh',
      description: "A Unix command interpreter developed in C, featuring process management, pipes, and current directory management. This project demonstrates advanced system programming concepts.",
      image: '/42sh.png',
      technologies: ['C', 'Unix', 'Shell Scripting'],
      link: 'https://github.com/eldiste/42sh'
    },
    {
      title: 'My RPG',
      description: "An immersive RPG game built with C and CSFML, featuring an interactive world, playable characters, quests, and combat mechanics.",
      image: '/my_rpg.png',
      technologies: ['C', 'CSFML', 'Game Development'],
      link: 'https://github.com/eldiste/my_rpg'
    },
    {
      title: 'Dante',
      description: "A real-time mapping system utilizing pathfinding principles and maze generation algorithms. This project showcases algorithmic problem-solving and efficient solution design.",
      image: '/dante.png',
      technologies: ['C', 'Algorithms', 'Data Structures'],
      link: 'https://github.com/eldiste/dante'
    },
    // Add more projects as needed
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-100 via-white to-gray-50 dark:from-black dark:to-gray-900 transition-colors duration-150">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-200 bg-clip-text text-transparent transition-colors duration-150">
            Featured Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto transition-colors duration-150">
            Here are some of my recent projects that showcase my skills and experience in software development.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
