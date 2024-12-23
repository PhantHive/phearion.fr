import { motion } from 'framer-motion';
import { Project } from '@/types';

const projects: Project[] = [
  {
    title: 'Mythical Bot',
    description: 'A gaming Discord bot focused on creature hatching and collection.',
    link: 'https://mythical.phearion.fr',
    status: 'active',
  },
  {
    title: 'Lucky Bot',
    description: 'A helpful bot designed to assist university students.',
    link: 'https://lucky.phearion.fr',
    status: 'active',
  },
  // Add more projects as needed
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex justify-between items-center">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 hover:text-purple-700"
                >
                  Learn more →
                </a>
                <span className={`px-3 py-1 rounded-full text-sm ${
                  project.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {project.status}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
