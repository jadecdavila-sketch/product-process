import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border"
    >
      <div className="container mx-auto px-4 h-16 flex items-center">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">PC</span>
          </div>
          <div>
            <h1 className="font-semibold text-foreground group-hover:text-primary transition-colors">
              The Product Council
            </h1>
            <p className="text-xs text-muted-foreground hidden sm:block">
              A journey through product development
            </p>
          </div>
        </Link>
      </div>
    </motion.header>
  );
}
