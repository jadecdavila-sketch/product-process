import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { Council } from '@/types';
import { HelpCircle, Users } from 'lucide-react';
import { councilImages } from '@/lib/images';

interface CouncilCardProps {
  council: Council;
  index: number;
}

export function CouncilCard({ council, index }: CouncilCardProps) {
  const imageSrc = councilImages[council.id];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <Link to={`/council/${council.id}`}>
        <Card className="h-full hover:shadow-lg transition-shadow duration-300 hover:border-primary/30 cursor-pointer bg-card overflow-hidden group pt-0">
          {/* Council Image */}
          {imageSrc && (
            <div className="w-full h-56 overflow-hidden">
              <img
                src={imageSrc}
                alt={council.name}
                className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          )}
          <CardHeader className="pb-3 pt-4">
            <CardTitle className="text-xl">{council.name}</CardTitle>
            <p className="text-sm text-muted-foreground">{council.archetypeName}</p>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Pillars */}
            <div className="flex flex-wrap gap-1.5">
              {council.pillars.map((pillar) => (
                <Badge
                  key={pillar}
                  variant="secondary"
                  className="text-xs bg-secondary/20 text-dark border-secondary/40"
                >
                  {pillar}
                </Badge>
              ))}
            </div>

            {/* Human Roles */}
            <div className="flex items-start gap-2">
              <Users className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-0.5" />
              <p className="text-xs text-muted-foreground">
                {council.humanRoles.slice(0, 3).join(', ')}
                {council.humanRoles.length > 3 && '...'}
              </p>
            </div>

            {/* Ask them */}
            <div className="flex items-start gap-2 p-3 rounded-md bg-muted/30">
              <HelpCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
              <p className="text-xs text-muted-foreground italic">
                "{council.askThem}"
              </p>
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}
