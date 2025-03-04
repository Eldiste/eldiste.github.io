import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          // Navigation
          "nav.home": "Home",
          "nav.about": "About",
          "nav.projects": "Projects",
          "nav.contact": "Contact",
          
          // Home
          "home.title": "Matéo Lechantre",
          "home.subtitle": "Software Engineering Student at Epitech Lyon",
          "home.viewWork": "View My Work",
          "home.contactMe": "Contact Me",
          
          // About
          "about.title": "About Me",
          "about.description": "A passionate software engineering student with a strong foundation in system programming and web development.",
          "about.paragraph1": "Currently pursuing my third year at Epitech Lyon, I'm deeply immersed in mastering both low-level system programming and modern web technologies. My journey at Epitech has equipped me with strong problem-solving skills and a practical approach to software development.",
          "about.paragraph2": "Through intensive project-based learning, I've developed expertise in C/C++ programming, Unix systems, and web development. I'm particularly interested in building robust applications that combine efficient system-level operations with elegant user interfaces.",
          "about.skills.languages": "Programming Languages",
          "about.skills.web": "Web & Mobile Development",
          "about.skills.tools": "Tools & DevOps",
          
          // Projects
          "projects.title": "Featured Projects",
          "projects.subtitle": "Here are some of my recent projects that showcase my skills and experience in software development.",
          "projects.viewProject": "View Project",
          "projects.viewOnGithub": "View on GitHub",
          "projects.technologies": "Technologies Used",
          
          // Project Cards
          "projects.area.title": "AREA",
          "projects.area.description": "A web-based automation platform inspired by IFTTT/Zapier, built with FastAPI, Redis, and PostgreSQL. Features integrations with GitHub, Microsoft, Google, and Spotify services, enabling users to create custom automation workflows through Actions, Reactions, and Triggers.",
          
          "projects.zappy.title": "Zappy",
          "projects.zappy.description": "A multiplayer game featuring AI-controlled players competing for resources on a virtual planet. Built with a client-server architecture, real-time visualization, and strategic AI decision-making algorithms.",
          
          "projects.rtype.title": "R-Type",
          "projects.rtype.description": "A recreation of the classic R-Type shoot 'em up game with a custom-built networked game engine. Features cross-platform multiplayer, SFML-based rendering, and modular architecture.",
          
          "projects.neural.title": "Neural Network Chess Analyzer",
          "projects.neural.description": "A sophisticated neural network implementation built from scratch to analyze chess positions and classify them into different states (checkmate, check, stalemate, or normal position). Features custom network architecture, flexible configuration, and comprehensive training pipeline.",
          
          "projects.42sh.title": "42sh",
          "projects.42sh.description": "A Unix command interpreter developed in C, featuring process management, pipes, and current directory management. This project demonstrates advanced system programming concepts.",
          
          "projects.rpg.title": "My RPG",
          "projects.rpg.description": "An immersive RPG game built with C and CSFML, featuring an interactive world, playable characters, quests, and combat mechanics.",
          
          // Contact
          "contact.title": "Get in Touch",
          "contact.subtitle": "Feel free to reach out through any of these platforms. I'm always open to new opportunities and collaborations.",
          "contact.button": "Contact Me",
          
          // Theme
          "theme.light": "Light Mode",
          "theme.dark": "Dark Mode"
        }
      },
      fr: {
        translation: {
          // Navigation
          "nav.home": "Accueil",
          "nav.about": "À Propos",
          "nav.projects": "Projets",
          "nav.contact": "Contact",
          
          // Home
          "home.title": "Matéo Lechantre",
          "home.subtitle": "Étudiant en Ingénierie Logicielle à Epitech Lyon",
          "home.viewWork": "Voir Mes Projets",
          "home.contactMe": "Me Contacter",
          
          // About
          "about.title": "À Propos",
          "about.description": "Un étudiant passionné en ingénierie logicielle avec une solide base en programmation système et développement web.",
          "about.paragraph1": "Actuellement en troisième année à Epitech Lyon, je me consacre à la maîtrise de la programmation système bas niveau et des technologies web modernes. Mon parcours à Epitech m'a doté de solides compétences en résolution de problèmes et d'une approche pratique du développement logiciel.",
          "about.paragraph2": "Grâce à un apprentissage intensif basé sur des projets, j'ai développé une expertise en programmation C/C++, systèmes Unix et développement web. Je suis particulièrement intéressé par la création d'applications robustes qui combinent des opérations système efficaces avec des interfaces utilisateur élégantes.",
          "about.skills.languages": "Langages de Programmation",
          "about.skills.web": "Développement Web & Mobile",
          "about.skills.tools": "Outils & DevOps",
          
          // Projects
          "projects.title": "Projets Principaux",
          "projects.subtitle": "Voici quelques-uns de mes projets récents qui démontrent mes compétences et mon expérience en développement logiciel.",
          "projects.viewProject": "Voir le Projet",
          "projects.viewOnGithub": "Voir sur GitHub",
          "projects.technologies": "Technologies Utilisées",
          
          // Project Cards
          "projects.area.title": "AREA",
          "projects.area.description": "Une plateforme d'automatisation web inspirée d'IFTTT/Zapier, construite avec FastAPI, Redis et PostgreSQL. Intègre des services GitHub, Microsoft, Google et Spotify, permettant aux utilisateurs de créer des workflows d'automatisation personnalisés via des Actions, Réactions et Déclencheurs.",
          
          "projects.zappy.title": "Zappy",
          "projects.zappy.description": "Un jeu multijoueur mettant en scène des joueurs contrôlés par IA en compétition pour des ressources sur une planète virtuelle. Construit avec une architecture client-serveur, une visualisation en temps réel et des algorithmes de prise de décision IA stratégiques.",
          
          "projects.rtype.title": "R-Type",
          "projects.rtype.description": "Une recréation du jeu classique R-Type avec un moteur de jeu en réseau personnalisé. Propose du multijoueur multiplateforme, un rendu basé sur SFML et une architecture modulaire.",
          
          "projects.neural.title": "Analyseur d'Échecs par Réseau Neuronal",
          "projects.neural.description": "Une implémentation sophistiquée de réseau neuronal construite from scratch pour analyser les positions d'échecs et les classifier en différents états (échec et mat, échec, pat ou position normale). Comprend une architecture de réseau personnalisée, une configuration flexible et un pipeline d'entraînement complet.",
          
          "projects.42sh.title": "42sh",
          "projects.42sh.description": "Un interpréteur de commandes Unix développé en C, avec gestion des processus, des pipes et du répertoire courant. Ce projet démontre des concepts avancés de programmation système.",
          
          "projects.rpg.title": "My RPG",
          "projects.rpg.description": "Un jeu RPG immersif construit avec C et CSFML, proposant un monde interactif, des personnages jouables, des quêtes et des mécaniques de combat.",
          
          // Contact
          "contact.title": "Me Contacter",
          "contact.subtitle": "N'hésitez pas à me contacter via l'une de ces plateformes. Je suis toujours ouvert aux nouvelles opportunités et collaborations.",
          "contact.button": "Me Contacter",
          
          // Theme
          "theme.light": "Mode Clair",
          "theme.dark": "Mode Sombre"
        }
      }
    },
    fallbackLng: 'en',
    lng: 'en',
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n; 