import { ProjectDetail, projectsData as initialProjectsData } from '../data/projects';

// Mock credentials
const MOCK_EMAIL = 'admin@civiltech.in';
const MOCK_PASSWORD = 'civiltech2026';

// Helper to interact with local storage
const getStoredProjects = (): ProjectDetail[] => {
  const stored = localStorage.getItem('civiltech_projects');
  if (stored) {
    return JSON.parse(stored);
  }
  // Initialize with static data on first load
  localStorage.setItem('civiltech_projects', JSON.stringify(initialProjectsData));
  return initialProjectsData;
};

const setStoredProjects = (projects: ProjectDetail[]) => {
  localStorage.setItem('civiltech_projects', JSON.stringify(projects));
};

export const api = {
  // Auth API
  login: async (email: string, password: string): Promise<{ token: string; user: { name: string; email: string } }> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 800));

    if (email === MOCK_EMAIL && password === MOCK_PASSWORD) {
      return {
        token: 'mock-jwt-token-' + Date.now(),
        user: { name: 'Admin User', email: MOCK_EMAIL }
      };
    }
    throw new Error('Invalid email or password');
  },

  // Projects API
  getProjects: async (): Promise<ProjectDetail[]> => {
    await new Promise(resolve => setTimeout(resolve, 300));
    return getStoredProjects();
  },

  getProjectById: async (id: string): Promise<ProjectDetail | undefined> => {
    await new Promise(resolve => setTimeout(resolve, 300));
    const projects = getStoredProjects();
    return projects.find(p => p.id === id);
  },

  createProject: async (projectData: Partial<ProjectDetail>, imageFile?: File): Promise<ProjectDetail> => {
    await new Promise(resolve => setTimeout(resolve, 800));
    const projects = getStoredProjects();
    
    // In a real app, we'd upload the imageFile to a bucket/server and get a URL back
    // Here we'll use a placeholder or fake object URL if a file is provided, 
    // or fallback to the provided string image (if any) or a placeholder.
    let imageUrl = projectData.image || '/assets/casestudies/placeholder.jpg';
    if (imageFile) {
      // Create a temporary object URL for demo purposes (Note: won't persist across reloads perfectly, but works for demo)
      imageUrl = URL.createObjectURL(imageFile);
    }

    const newProject: ProjectDetail = {
      id: projectData.id || `proj-${Date.now()}`,
      title: projectData.title || '',
      location: projectData.location || '',
      category: projectData.category || '',
      sector: projectData.sector || '',
      description: projectData.description || '',
      image: imageUrl,
      // Status could be handled internally if added to type, currently we use category/description loosely
    };

    const newProjects = [newProject, ...projects];
    setStoredProjects(newProjects);
    return newProject;
  },

  updateProject: async (id: string, projectData: Partial<ProjectDetail>, imageFile?: File): Promise<ProjectDetail> => {
    await new Promise(resolve => setTimeout(resolve, 800));
    const projects = getStoredProjects();
    const index = projects.findIndex(p => p.id === id);
    
    if (index === -1) {
      throw new Error('Project not found');
    }

    let imageUrl = projectData.image || projects[index].image;
    if (imageFile) {
      imageUrl = URL.createObjectURL(imageFile);
    }

    const updatedProject = {
      ...projects[index],
      ...projectData,
      image: imageUrl
    };

    projects[index] = updatedProject;
    setStoredProjects(projects);
    return updatedProject;
  },

  deleteProject: async (id: string): Promise<void> => {
    await new Promise(resolve => setTimeout(resolve, 500));
    const projects = getStoredProjects();
    const filtered = projects.filter(p => p.id !== id);
    setStoredProjects(filtered);
  }
};
