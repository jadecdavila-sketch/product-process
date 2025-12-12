import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import type { Stage } from '@/types';

interface StageStoneProps {
  stage: Stage;
  index: number;
}

export function StageStone({ stage, index }: StageStoneProps) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="flex flex-col items-center"
      style={{ marginTop: isEven ? '0' : '60px' }}
    >
      <Link
        to={`/stage/${stage.id}`}
        className="group relative flex flex-col items-center"
      >
        <motion.div
          whileHover={{ scale: 1.08, y: -4 }}
          whileTap={{ scale: 0.98 }}
          className="relative"
        >
          {/* Stone shape */}
          <div className="w-36 h-36 md:w-44 md:h-44 rounded-full bg-gradient-to-br from-primary/90 to-primary shadow-lg flex items-center justify-center cursor-pointer transition-shadow duration-300 group-hover:shadow-xl group-hover:shadow-primary/20 border-4 border-background">
            <div className="text-center px-2">
              <span className="text-primary-foreground font-semibold text-sm md:text-base leading-tight block">
                {stage.name}
              </span>
            </div>
          </div>

          {/* Glow effect on hover */}
          <div className="absolute inset-0 rounded-full bg-accent/0 group-hover:bg-accent/10 transition-colors duration-300" />
        </motion.div>

        {/* Subtitle below stone */}
        <p className="mt-3 text-xs md:text-sm text-muted-foreground text-center max-w-[140px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {stage.subtitle}
        </p>
      </Link>
    </motion.div>
  );
}
