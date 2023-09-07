import React from 'react';
import { Link } from 'react-scroll';
import Projects from './Projects';

export default function Home() {
  return (
    <div>
      <div className="bg-gray-100 min-h-screen flex flex-col items-center">
        <div className="bg-white p-8 rounded-lg shadow-md text-center mt-16">
          <img src="./img.png" className="w-32 mx-auto mb-4" alt="Logo" />
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Matéo Lechantre</h1>
          <p className="text-gray-600 mb-8 text-lg">
            Etudiant en informatique à Epitech Lyon
          </p>
          <Link
            to="projects-section"
            spy={true}
            smooth={true}
            duration={1000}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-4 rounded-full transition duration-300 cursor-pointer shadow-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 inline-block animate-bounce"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 13l5 5 5-5M7 6l5 5 5-5"
              />
            </svg>
          </Link>
        </div>
        <h2 className="text-4xl font-bold text-gray-800 py-10">À propos de moi</h2>
        <p className="text-gray-600 mx-auto md:text-center max-w-3xl leading-relaxed">
        Actuellement étudiant de deuxième année à Epitech Lyon, je suis depuis toujours passionné par la technologie et le développement informatique. Mon parcours académique et mon engagement à Epitech reflètent mon désir d'acquérir des compétences de pointe dans le domaine de l'informatique. J'aime relever des défis, résoudre des problèmes complexes et travailler en équipe pour créer des solutions innovantes. Mon aventure à Epitech m'a déjà permis d'explorer divers aspects de la programmation, de la sécurité informatique et du développement logiciel, et je suis enthousiaste à l'idée de continuer à apprendre et à grandir en tant que professionnel de l'informatique.
        </p>
      </div>
      <Projects />
    </div>
  );
}
