'use client';

import { motion } from 'framer-motion';

const Mission = () => {
  return (
    <section id="mission" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-2xl shadow-xl p-12 text-center"
        >
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Our Mission
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We believe in creating technology that makes a difference. Our commitment is reflected
            in our promise: 50% of our future earnings will be donated to charity, while the other
            50% will be reinvested in Phearion and distributed among our members.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Mission;