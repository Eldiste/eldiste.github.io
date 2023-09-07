import React from 'react';
import ProjectCard from './ProjectCard';

const projectsData = [
  {
    title: '42sh',
    description: "Le projet 42sh est une étape clé de mon parcours à Epitech, où j'ai développé un interpréteur de commandes Unix avancé en utilisant le langage C. Ce projet m'a permis de maîtriser la gestion des processus, les pipes, la gestion du répertoire courant et bien d'autres concepts essentiels pour la programmation système.",
    imageUrl: '42sh.png',
    projectUrl: 'URL_TO_PROJECT_1',
  },
  {
    title: 'my_rpg',
    description: "Dans le cadre de ce projet, j'ai conçu et développé un jeu de rôle (RPG) en utilisant le langage C et la bibliothèque graphique CSFML. J'ai créé un monde interactif, des personnages jouables, des quêtes et des combats, tout en mettant en œuvre des mécaniques de jeu passionnantes.",
    imageUrl: 'my_rpg.png',
    projectUrl: 'URL_TO_PROJECT_1',
  },
  {
    title: 'Dante',
    description: "Au cours de ce projet j'ai été chargé de développer d'un système de cartographie en temps réel en utilisant les principes de la recherche de chemin et de la génération de labyrinthes. Ce projet a développé ma capacité à résoudre des problèmes algorithmiques et à concevoir des solutions novatrices et efficaces.",
    imageUrl: 'dante.png',
    projectUrl: 'URL_TO_PROJECT_1',
  },
  {
    title: 'Antman',
    description: "Dans le cadre du projet Antman, j'ai été amené à travailler sur la compression et la décompression de fichiers en utilisant des techniques de codage adaptatif. J'ai conçu des algorithmes efficaces pour réduire la taille des fichiers tout en préservant leur intégrité.",
    imageUrl: 'antman.png',
    projectUrl: 'URL_TO_PROJECT_1',
  },
  {
    title: 'Burp',
    description: "Dans le cadre du projet BURP sur TryHackMe.com, j'ai relevé une série de défis de cybersécurité stimulants. J'ai eu l'occasion de mettre en pratique mes compétences en matière de piratage éthique, d'exploitation de vulnérabilités, et de sécurisation des systèmes informatiques.",
    imageUrl: 'burp1.png',
    projectUrl: 'URL_TO_PROJECT_1',
  },
  {
    title: 'my_paint',
    description: "My Paint m'a permis de concevoir une application de dessin complète, incluant une interface conviviale, une variété d'outils de dessin, ainsi que des options de sauvegarde et d'exportation de créations. Ce projet a renforcé mes compétences en développement d'applications et en conception d'interfaces utilisateur.",
    imageUrl: 'my_paint.png',
    projectUrl: 'URL_TO_PROJECT_1',
  },
];

const Projects = () => {
  return (
    <section id="projects-section" className="bg-gray-100 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-16">Mes Projets</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              projectUrl={project.projectUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
