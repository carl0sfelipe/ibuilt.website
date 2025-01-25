'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Project } from '../lib/projects';
import ImageWrapper from './ImageWrapper';

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
      style={{ animationDelay: `${index * 100}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-video bg-gradient-to-br from-gray-50 to-gray-50 dark:from-gray-900 dark:to-gray-900">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <ImageWrapper
          src={isHovered && project.gif ? project.gif : project.image || "/globe.svg"}
          alt={project.title}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-in-out ${isHovered ? 'scale-105 opacity-95' : 'scale-100 opacity-100'}`}
        />
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-2xl font-bold text-white drop-shadow-lg">{project.title}</h3>
        </div>
      </div>
      
      <div className="p-6">
        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="tech-badge bg-gray-50 dark:bg-gray-800 px-3 py-1.5 rounded-full text-sm text-gray-600 dark:text-gray-300 border border-gray-100 dark:border-gray-700 hover:bg-white dark:hover:bg-gray-700 hover:shadow-sm transition-all duration-200"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <Link
            href={project.url}
            target="_blank"
            className="group/link inline-flex items-center text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 font-medium"
          >
            <span className="relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-primary after:transition-all after:duration-300 group-hover/link:after:w-full">
              Ver Projeto
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transition-transform duration-300 group-hover/link:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
          
          <span className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
            {project.tech.length} tecnologias
          </span>
        </div>
      </div>
    </div>
  );
}
