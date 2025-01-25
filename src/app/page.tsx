import React from 'react';
import Link from 'next/link';
import ProjectCard from '../app/components/ProjectCard';
import { getFeaturedProjects } from '../app/lib/projects';

export default function Home() {
  const projects = getFeaturedProjects();

  return (
    <main className="container mx-auto px-4 py-20">
      <section className="text-center mb-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
            Engenheiro de Software Sênior
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            Desenvolvendo soluções escaláveis e de alta performance com arquitetura moderna e boas práticas
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center dark:text-white">Projetos de Destaque</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </section>
    </main>
  );
}
