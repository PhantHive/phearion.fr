import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            Creating Digital Magic
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            We build projects that help and entertain people, with a commitment to giving back to the community.
          </p>
          <div className="flex items-center justify-center gap-2">
            <Sparkles className="text-purple-500 w-6 h-6" />
            <span className="text-purple-600">Making dreams come true, one project at a time</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}