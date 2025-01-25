import projectsData from '../data/projects.json';

export interface Project {
  id: string;
  image?: string;
  gif?: string;
  title: string;
  description: string;
  url: string;
  tech: string[];
  featured?: boolean;
}

export function getFeaturedProjects(): Project[] {
  return projectsData.filter(project => project.featured);
}

export function getAllProjects(): Project[] {
  return projectsData;
}
