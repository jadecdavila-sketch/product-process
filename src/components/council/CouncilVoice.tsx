import { motion } from 'framer-motion';
import { getCouncilById } from '@/data';
import type { StageCouncilContent } from '@/types';
import { councilImages } from '@/lib/images';

interface CouncilVoiceProps {
  content: StageCouncilContent;
  index: number;
}

export function CouncilVoice({ content, index }: CouncilVoiceProps) {
  const council = getCouncilById(content.councilId);
  const imageSrc = councilImages[content.councilId];

  if (!council) return null;

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.2 + index * 0.15, duration: 0.5 }}
      className={`rounded-lg border overflow-hidden ${
        content.isPrimary
          ? 'bg-primary/5 border-primary/20'
          : 'bg-muted/30 border-border'
      }`}
    >
      <div className="flex items-stretch">
        {/* Council image */}
        {imageSrc && (
          <div className="flex-shrink-0 w-28 md:w-32 aspect-square self-stretch">
            <img
              src={imageSrc}
              alt={council.name}
              className="w-full h-full object-cover object-center"
            />
          </div>
        )}

        <div className="flex-1 min-w-0 p-4">
          {/* Council name and archetype */}
          <div className="flex items-center gap-2 mb-1">
            <h4 className="font-semibold text-foreground">{council.name}</h4>
            {content.isPrimary && (
              <span className="text-xs px-2 py-0.5 rounded-full bg-accent/20 text-accent-foreground font-medium">
                Primary
              </span>
            )}
          </div>
          <p className="text-xs text-muted-foreground mb-3">
            {council.archetypeName}
          </p>

          {/* Quote */}
          <blockquote className="text-sm text-foreground/90 italic leading-relaxed">
            "{content.quote}"
          </blockquote>
        </div>
      </div>
    </motion.div>
  );
}
