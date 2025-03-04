import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { useTranslation } from 'react-i18next';

const Projects = () => {
  const { t } = useTranslation();

  const projects = [
    {
      id: 'area',
      title: t('projects.area.title'),
      description: t('projects.area.description'),
      image: '/area.png',
      technologies: ['FastAPI', 'Redis', 'PostgreSQL', 'Docker', 'Flutter', 'Python'],
      link: 'https://github.com/eldiste/AREA'
    },
    {
      id: 'zappy',
      title: t('projects.zappy.title'),
      description: t('projects.zappy.description'),
      image: '/zappy.png',
      technologies: ['C', 'C++', 'SFML', 'AI', 'Networking'],
      link: 'https://github.com/eldiste/ZAPPY'
    },
    {
      id: 'rtype',
      title: t('projects.rtype.title'),
      description: t('projects.rtype.description'),
      image: '/r-type.png',
      technologies: ['C++', 'SFML', 'CMake', 'Game Development', 'Networking'],
      link: 'https://github.com/eldiste/R-Type'
    },
    {
      id: 'neural',
      title: t('projects.neural.title'),
      description: t('projects.neural.description'),
      image: '/Chess-Analyzer.webp',
      technologies: ['Python', 'Neural Networks', 'Machine Learning', 'Chess Analysis'],
      link: 'https://github.com/eldiste/Neural-Network'
    },
    {
      id: '42sh',
      title: t('projects.42sh.title'),
      description: t('projects.42sh.description'),
      image: '/42sh.png',
      technologies: ['C', 'Unix', 'Shell Scripting'],
      link: 'https://github.com/eldiste/42sh'
    },
    {
      id: 'rpg',
      title: t('projects.rpg.title'),
      description: t('projects.rpg.description'),
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
            {t('projects.title')}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto transition-colors duration-150">
            {t('projects.subtitle')}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
