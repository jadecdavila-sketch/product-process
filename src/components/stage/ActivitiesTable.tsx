import { motion } from 'framer-motion';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { getActivitiesByStage } from '@/data';
import { collaborationModeLabels, type CollaborationMode } from '@/types';
import { Bot, Users, UserCheck, User } from 'lucide-react';

interface ActivitiesTableProps {
  stageId: string;
}

const modeIcons: Record<CollaborationMode, typeof Bot> = {
  'ai-leads': Bot,
  'human-ai-collaborate': Users,
  'human-leads': UserCheck,
  'human-only': User,
};

const modeColors: Record<CollaborationMode, string> = {
  'ai-leads': 'bg-accent/20 text-dark border-accent/50',
  'human-ai-collaborate': 'bg-primary/20 text-dark border-primary/50',
  'human-leads': 'bg-secondary/20 text-dark border-secondary/50',
  'human-only': 'bg-warm/30 text-dark border-warm/60',
};

export function ActivitiesTable({ stageId }: ActivitiesTableProps) {
  const activities = getActivitiesByStage(stageId);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.5 }}
      className="rounded-lg border border-border overflow-hidden"
    >
      <Table>
        <TableHeader>
          <TableRow className="bg-muted/30">
            <TableHead className="font-semibold">Activity</TableHead>
            <TableHead className="font-semibold">Collaboration Mode</TableHead>
            <TableHead className="font-semibold hidden md:table-cell">Human Expertise</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {activities.map((activity, index) => {
            const Icon = modeIcons[activity.collaborationMode];
            return (
              <TableRow
                key={activity.id}
                className={index % 2 === 0 ? 'bg-background' : 'bg-muted/10'}
              >
                <TableCell className="font-medium">{activity.name}</TableCell>
                <TableCell>
                  <Badge
                    variant="outline"
                    className={`${modeColors[activity.collaborationMode]} gap-1.5`}
                  >
                    <Icon className="w-3 h-3" />
                    <span className="hidden sm:inline">
                      {collaborationModeLabels[activity.collaborationMode]}
                    </span>
                    <span className="sm:hidden">
                      {activity.collaborationMode === 'ai-leads'
                        ? 'AI'
                        : activity.collaborationMode === 'human-only'
                        ? 'Human'
                        : activity.collaborationMode === 'human-leads'
                        ? 'Human+'
                        : 'Collab'}
                    </span>
                  </Badge>
                </TableCell>
                <TableCell className="text-sm text-muted-foreground hidden md:table-cell">
                  {activity.humanExpertise}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </motion.div>
  );
}
