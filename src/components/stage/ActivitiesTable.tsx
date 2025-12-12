import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { getActivitiesByStage } from '@/data';
import { collaborationModeLabels, type CollaborationMode } from '@/types';
import { Bot, Users, UserCheck, User, Lightbulb, AlertTriangle, Sparkles, Shield } from 'lucide-react';

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
      className="space-y-3"
    >
      <Accordion type="single" collapsible className="w-full space-y-2">
        {activities.map((activity, index) => {
          const Icon = modeIcons[activity.collaborationMode];
          const hasExpandedContent = activity.description || activity.keyConsiderations?.length || activity.commonPitfalls?.length || activity.aiCanHelp?.length || activity.humanMustOwn?.length;

          return (
            <AccordionItem
              key={activity.id}
              value={activity.id}
              className={`rounded-lg border border-border overflow-hidden ${
                index % 2 === 0 ? 'bg-background' : 'bg-muted/10'
              }`}
            >
              <AccordionTrigger
                className="px-4 py-3 hover:no-underline hover:bg-muted/20 transition-colors [&[data-state=open]]:bg-muted/20"
                disabled={!hasExpandedContent}
              >
                <div className="flex items-center justify-between w-full pr-2">
                  <div className="flex items-center gap-3 text-left">
                    <span className="font-medium text-foreground">{activity.name}</span>
                  </div>
                  <div className="flex items-center gap-3 flex-shrink-0">
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
                  </div>
                </div>
              </AccordionTrigger>
              {hasExpandedContent && (
                <AccordionContent className="px-4 pb-4">
                  <div className="space-y-4 pt-2">
                    {/* Description */}
                    {activity.description && (
                      <p className="text-sm text-foreground/80 leading-relaxed">
                        {activity.description}
                      </p>
                    )}

                    {/* Human Expertise */}
                    <div className="flex items-start gap-2 p-3 rounded-md bg-muted/30">
                      <User className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-xs font-medium text-muted-foreground">Human Expertise: </span>
                        <span className="text-xs text-foreground/80">{activity.humanExpertise}</span>
                      </div>
                    </div>

                    {/* Key Considerations */}
                    {activity.keyConsiderations && activity.keyConsiderations.length > 0 && (
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Lightbulb className="w-4 h-4 text-accent" />
                          <h5 className="text-sm font-medium text-foreground">Key Considerations</h5>
                        </div>
                        <ul className="space-y-1 pl-6">
                          {activity.keyConsiderations.map((item, i) => (
                            <li key={i} className="text-sm text-foreground/80 list-disc">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Common Pitfalls */}
                    {activity.commonPitfalls && activity.commonPitfalls.length > 0 && (
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <AlertTriangle className="w-4 h-4 text-warm" />
                          <h5 className="text-sm font-medium text-foreground">Common Pitfalls</h5>
                        </div>
                        <ul className="space-y-1 pl-6">
                          {activity.commonPitfalls.map((item, i) => (
                            <li key={i} className="text-sm text-foreground/80 list-disc">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* AI Can Help / Human Must Own - side by side on larger screens */}
                    <div className="grid gap-4 md:grid-cols-2">
                      {/* AI Can Help */}
                      {activity.aiCanHelp && activity.aiCanHelp.length > 0 && (
                        <div className="p-3 rounded-md bg-accent/10 border border-accent/20">
                          <div className="flex items-center gap-2 mb-2">
                            <Sparkles className="w-4 h-4 text-accent" />
                            <h5 className="text-sm font-medium text-foreground">AI Can Help</h5>
                          </div>
                          <ul className="space-y-1 pl-6">
                            {activity.aiCanHelp.map((item, i) => (
                              <li key={i} className="text-xs text-foreground/80 list-disc">
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Human Must Own */}
                      {activity.humanMustOwn && activity.humanMustOwn.length > 0 && (
                        <div className="p-3 rounded-md bg-primary/10 border border-primary/20">
                          <div className="flex items-center gap-2 mb-2">
                            <Shield className="w-4 h-4 text-primary" />
                            <h5 className="text-sm font-medium text-foreground">Human Must Own</h5>
                          </div>
                          <ul className="space-y-1 pl-6">
                            {activity.humanMustOwn.map((item, i) => (
                              <li key={i} className="text-xs text-foreground/80 list-disc">
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </AccordionContent>
              )}
            </AccordionItem>
          );
        })}
      </Accordion>
    </motion.div>
  );
}
