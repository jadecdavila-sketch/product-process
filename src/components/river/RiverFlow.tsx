import { motion } from 'framer-motion';
import { continuousActivities } from '@/data';

export function RiverFlow() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* River SVG */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="riverGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#075660" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#075660" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#075660" stopOpacity="0.6" />
          </linearGradient>
        </defs>

        {/* Animated wave paths */}
        <motion.path
          d="M0,20 Q150,0 300,20 T600,20 T900,20 T1200,20 L1200,120 L0,120 Z"
          fill="url(#riverGradient)"
          animate={{
            d: [
              'M0,20 Q150,0 300,20 T600,20 T900,20 T1200,20 L1200,120 L0,120 Z',
              'M0,20 Q150,40 300,20 T600,20 T900,20 T1200,20 L1200,120 L0,120 Z',
              'M0,20 Q150,0 300,20 T600,20 T900,20 T1200,20 L1200,120 L0,120 Z',
            ],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <motion.path
          d="M0,30 Q200,10 400,30 T800,30 T1200,30 L1200,120 L0,120 Z"
          fill="url(#riverGradient)"
          animate={{
            d: [
              'M0,30 Q200,10 400,30 T800,30 T1200,30 L1200,120 L0,120 Z',
              'M0,30 Q200,50 400,30 T800,30 T1200,30 L1200,120 L0,120 Z',
              'M0,30 Q200,10 400,30 T800,30 T1200,30 L1200,120 L0,120 Z',
            ],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.5,
          }}
        />
      </svg>

      {/* Continuous activities labels */}
      <div className="absolute bottom-3 left-0 right-0 z-10">
        <div className="flex justify-center items-center gap-4 md:gap-8 px-4">
          <span className="text-white/60 text-xs md:text-sm font-medium">Ongoing:</span>
          {continuousActivities.map((activity, index) => (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
              className="flex items-center gap-2"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                className="w-2 h-2 rounded-full bg-accent"
              />
              <span className="text-sm md:text-base text-white font-medium tracking-wide">
                {activity.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
