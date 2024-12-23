'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Linkedin } from 'lucide-react';

const teamMembers = [
  {
    name: 'Zakaria',
    role: 'Founder & Lead Engineer',
    image: '/images/team/phanthive.png',
    description: 'Founder of Phearion, aerospace engineer specialized in AI. ' +
        'Develops educational bots and tools to make learning more accessible and engaging for students worldwide.' +
        'Leads the development of the game bot Mythical.',
    linkedin: 'https://www.linkedin.com/in/zakaria-chaouki-8316801b9/',
    website: 'https://phanthive.com'
  },
  {
    name: 'Maya',
    role: 'Co-Founder & Lead Designer',
    image: '/images/team/maya.png',
    description: 'Lead creative designer at Phearion, ' +
        'creating game assets for Mythical and crafting intuitive interfaces for our educational projects. ' +
        'Brings gaming and learning experiences to life through thoughtful design.',
    linkedin: 'https://www.linkedin.com/in/mayagozel-ovezova-46655a211/',
    website: 'https://maya-design.cloud'
  }
];

const Team = () => {
  return (
    <section id="team" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-amber-500 to-rose-500 bg-clip-text text-transparent">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="group relative"
            >
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden p-6">
                <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-2xl font-semibold mb-2 text-center">{member.name}</h3>
                <p className="text-amber-600 mb-4 text-center">{member.role}</p>
                <p className="text-gray-600 text-center mb-6">{member.description}</p>

                <motion.a
                  href={member.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 bg-gradient-to-r from-amber-500 to-rose-500 text-white rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 block mb-4"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                    Visit Website
                </motion.a>

                <motion.a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 text-gray-600 hover:text-amber-600 transition-colors group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin className="w-5 h-5" />
                  <span className="relative">
                    Connect on LinkedIn
                    <span className="absolute left-0 bottom-0 w-full h-0.5 bg-amber-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                  </span>
                </motion.a>
              </div>

              {/* Decorative elements */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-rose-500 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity -z-10"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/50 to-rose-500/50 rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity -z-10"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;