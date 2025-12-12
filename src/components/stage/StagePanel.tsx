import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { getStageById, getStageCouncilContent } from '@/data';
import { CouncilVoice } from '@/components/council/CouncilVoice';
import { ActivitiesTable } from './ActivitiesTable';
import { CheckCircle2, ArrowLeft, ArrowRight } from 'lucide-react';
import { stages } from '@/data';

interface StagePanelProps {
  stageId: string | null;
  onClose: () => void;
}

export function StagePanel({ stageId, onClose }: StagePanelProps) {
  const navigate = useNavigate();
  const contentRef = useRef<HTMLDivElement>(null);
  const stage = stageId ? getStageById(stageId) : null;
  const councilContent = stageId ? getStageCouncilContent(stageId) : [];

  const currentIndex = stage ? stages.findIndex((s) => s.id === stage.id) : -1;
  const prevStage = currentIndex > 0 ? stages[currentIndex - 1] : null;
  const nextStage = currentIndex < stages.length - 1 ? stages[currentIndex + 1] : null;

  // Scroll to top when stageId changes
  useEffect(() => {
    if (stageId && contentRef.current) {
      contentRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [stageId]);

  const handleNavigate = (targetStageId: string) => {
    navigate(`/stage/${targetStageId}`);
  };

  return (
    <Sheet open={!!stageId} onOpenChange={(open) => !open && onClose()}>
      <SheetContent
        ref={contentRef}
        side="right"
        className="w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl overflow-y-auto overflow-x-hidden bg-background"
      >
        {stage && (
          <>
            <SheetHeader className="space-y-4 pb-6 border-b border-border pr-8">
              <div>
                <SheetTitle className="text-2xl font-bold text-foreground">
                  {stage.name}
                </SheetTitle>
                <p className="text-sm text-muted-foreground mt-1">{stage.subtitle}</p>
              </div>
            </SheetHeader>

            <div className="py-6 px-6 space-y-8">
              {/* Description */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                <p className="text-foreground/90 leading-relaxed">{stage.description}</p>
              </motion.div>

              {/* Council Voices */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-foreground">
                  Council Voices
                </h3>
                <div className="space-y-4">
                  {councilContent
                    .sort((a, b) => (b.isPrimary ? 1 : 0) - (a.isPrimary ? 1 : 0))
                    .map((content, index) => (
                      <CouncilVoice key={`${content.councilId}-${content.stageId}`} content={content} index={index} />
                    ))}
                </div>
              </div>

              {/* Activities */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-foreground">
                  Activities
                </h3>
                <ActivitiesTable stageId={stage.id} />
              </div>

              {/* What Done Looks Like */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="p-5 rounded-lg bg-accent/10 border border-accent/20"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      What "Done" Looks Like
                    </h4>
                    <p className="text-sm text-foreground/80 leading-relaxed">
                      {stage.whatDoneLooksLike}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Navigation */}
              <div className="flex items-center justify-between pt-4 border-t border-border">
                {prevStage ? (
                  <Button
                    variant="ghost"
                    onClick={() => handleNavigate(prevStage.id)}
                    className="gap-2"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    {prevStage.name}
                  </Button>
                ) : (
                  <div />
                )}
                {nextStage && (
                  <Button
                    variant="ghost"
                    onClick={() => handleNavigate(nextStage.id)}
                    className="gap-2"
                  >
                    {nextStage.name}
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                )}
              </div>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
