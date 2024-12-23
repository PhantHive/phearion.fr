'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center">
      {/* Add padding-top for mobile to account for the header height plus the menu */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-32 md:pt-0">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Creating Digital Magic
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            We build projects that help and entertain people, with a commitment to giving back to the community.
          </p>
          <div className="flex gap-4 justify-center lg:justify-start">
            <a href="#projects" className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all hover:scale-105">
              Our Projects
            </a>
            <a href="#team" className="px-6 py-3 border border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 transition-all hover:scale-105">
              Meet the Team
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative hidden lg:block"
        >
          <Image
            src="/images/assistant.webp"
            alt="Phearion Assistant"
            width={500}
            height={500}
            className="w-full h-auto rounded-2xl shadow-2xl"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;