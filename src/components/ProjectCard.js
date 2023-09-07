import React from 'react';

const ProjectCard = ({ title, description, imageUrl, projectUrl }) => {
  return (
    <a href={projectUrl} target="_blank" rel="noopener noreferrer">
      <div className="w-128 h-64 mx-auto rounded-xl overflow-hidden shadow-md transform transition-transform hover:scale-105 relative group">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img
              className="w-128 h-64 object-cover"
              src={imageUrl}
              alt={`${title} IMG`}
            />
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 group-hover:opacity-80 transition-opacity"></div>
        <p
          className="text-center text-2xl font-semibold py-4 absolute top-0 left-0 w-full text-white p-8 opacity-0 group-hover:opacity-100 transition-opacity"
        >
          {title}
        </p>
        <p
          className="absolute top-0 left-0 w-full h-full text-white p-12 opacity-0 group-hover:opacity-100 transition-opacity"
        >
          {description}
        </p>
      </div>
    </a>
  );
};

export default ProjectCard;
