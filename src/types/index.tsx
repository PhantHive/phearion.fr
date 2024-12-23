export interface TeamMember {
  name: string;
  role: string;
  image: string;
  description: string;
}

export interface Project {
  title: string;
  description: string;
  link: string;
  status: 'active' | 'upcoming';
}