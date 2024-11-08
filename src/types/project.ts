// @/types/project.ts
interface Category {
  name: string;
}

interface ProjectImage {
  src: string;
  caption?: string;
  featured?: boolean;
}

export interface Project {
  title: string;
  slug: string;
  date: Date;
  description?: string;
  categories: Category[];
  images: ProjectImage[];
  featured?: boolean;
}

export interface ProjectNavigationItem {
  title: string;
  slug: string;
}

export interface ProjectLayoutProps {
  project: Project;
  prevProject?: ProjectNavigationItem;
  nextProject?: ProjectNavigationItem;
}

// Props interfaces for components
export interface ProjectCardProps extends Project { }

export interface ProjectGridProps {
  projects: Project[];
  selectedCategory?: string;
  sortOrder?: "asc" | "desc";
}

export interface ProjectGalleryProps {
  projects: Project[];
}