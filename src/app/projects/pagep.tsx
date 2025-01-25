import React from 'react';
import { getAllProjects } from '../../../lib/projects';
import ProjectCard from '../../../components/ProjectCard';

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Todos os Projetos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </main>
  );
}
