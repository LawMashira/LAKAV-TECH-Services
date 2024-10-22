// types.ts
// mockProjects.ts

  
  export interface Project {
    id: number;
    title: string;
    image: string; // URL or path to the image
    link: string; // URL to the project
  }
  
  const mockProjects: Project[] = [
    {
      id: 1,
      title: 'Portfolio Website',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Replace with actual image path
      link: 'http://lawson-matutu.vercel.app', // Unique link for Project One
    },
    {
      id: 2,
      title: 'College Admission System',
      image:"https://images.unsplash.com/photo-1720547014644-580224472fa7?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with actual image path
      link: 'https://maghandi-institute.vercel.app', // Unique link for Project Two
    },
    {
      id: 3,
      title: 'Spring Boot',
      image: 'data:image/png;base64,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', // Replace with actual image path
      link: 'https://github.com/LawMashira', // Unique link for Project Three
    },
  ];
  
  export default mockProjects;
  