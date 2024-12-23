import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
}

export default function Card({ children, className = '', href, onClick }: CardProps) {
  const baseStyles = "bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300";
  const combinedStyles = `${baseStyles} ${className}`;

  const content = (
    <motion.div
      whileHover={{ y: -2 }}
      className={combinedStyles}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} className="block">
        {content}
      </a>
    );
  }

  return content;
}