import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: 'AREA',
      description: "A web-based automation platform inspired by IFTTT/Zapier, built with FastAPI, Redis, and PostgreSQL. Features integrations with GitHub, Microsoft, Google, and Spotify services, enabling users to create custom automation workflows through Actions, Reactions, and Triggers.",
      image: '/area.png',
      technologies: ['FastAPI', 'Redis', 'PostgreSQL', 'Docker', 'Flutter', 'Python'],
      link: 'https://github.com/eldiste/AREA'
    },
    {
      title: 'Zappy',
      description: "A multiplayer game featuring AI-controlled players competing for resources on a virtual planet. Built with a client-server architecture, real-time visualization, and strategic AI decision-making algorithms.",
      image: '/zappy.png',
      technologies: ['C', 'C++', 'SFML', 'AI', 'Networking'],
      link: 'https://github.com/eldiste/ZAPPY'
    },
    {
      title: 'R-Type',
      description: "A recreation of the classic R-Type shoot 'em up game with a custom-built networked game engine. Features cross-platform multiplayer, SFML-based rendering, modular architecture, and customizable settings for resolution and FPS.",
      image: '/rtype.png',
      technologies: ['C++', 'SFML', 'CMake', 'Game Development', 'Networking'],
      link: 'https://github.com/eldiste/R-Type'
    },
    {
      title: 'Neural Network Chess Analyzer',
      description: "A sophisticated neural network implementation built from scratch to analyze chess positions and classify them into different states (checkmate, check, stalemate, or normal position). Features custom network architecture, flexible configuration, and comprehensive training pipeline.",
      image: '/neural_network.png',
      technologies: ['Python', 'Neural Networks', 'Machine Learning', 'Chess Analysis'],
      link: 'https://github.com/eldiste/Neural-Network'
    },
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
    }
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
