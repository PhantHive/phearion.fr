import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Header() {
  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-sm z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/" className="text-2xl font-bold text-purple-600">
            Phearion
          </Link>
        </motion.div>
        <div className="flex gap-8">
          <Link href="#projects" className="text-gray-600 hover:text-purple-600 transition-colors">
            Projects
          </Link>
          <Link href="#team" className="text-gray-600 hover:text-purple-600 transition-colors">
            Team
          </Link>
          <Link href="#mission" className="text-gray-600 hover:text-purple-600 transition-colors">
            Mission
          </Link>
        </div>
      </nav>
    </header>
  );
}