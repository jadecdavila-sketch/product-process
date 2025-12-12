import { motion } from 'framer-motion';
import { stages } from '@/data';
import { StageStone } from './StageStone';

export function RiverCanvas() {
  return (
    <div className="flex items-start gap-6 md:gap-8 pr-12 min-w-max">
      {/* Start marker */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="flex flex-col items-center pt-6"
      >
        <div className="w-3 h-3 rounded-full bg-secondary" />
        <div className="w-0.5 h-12 bg-gradient-to-b from-secondary to-transparent" />
        <span className="text-xs text-muted-foreground mt-2">Start</span>
      </motion.div>

      {/* Stage stones */}
      {stages.map((stage, index) => (
        <StageStone key={stage.id} stage={stage} index={index} />
      ))}

      {/* End marker / cycle indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="flex flex-col items-center pt-6"
      >
        <div className="w-3 h-3 rounded-full bg-accent" />
        <div className="w-0.5 h-12 bg-gradient-to-b from-accent to-transparent" />
        <span className="text-xs text-muted-foreground mt-2 text-center">
          Cycle<br />continues
        </span>
      </motion.div>
    </div>
  );
}
