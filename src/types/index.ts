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

export type Theme = 'light' | 'dark';

export type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}; 