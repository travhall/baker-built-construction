export interface Project {
  title: string;
  slug: string;
  date: Date;
  description?: string;
  categories: Array<{
    name: string;
  }>;
  images: Array<{
    src: string;
    caption?: string;
    featured?: boolean;
  }>;
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