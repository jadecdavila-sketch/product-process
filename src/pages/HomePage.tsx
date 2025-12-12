import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { RiverCanvas } from '@/components/river/RiverCanvas';
import { RiverFlow } from '@/components/river/RiverFlow';
import { StagePanel } from '@/components/stage/StagePanel';
import { Button } from '@/components/ui/button';
import { councils } from '@/data';

const councilImages: Record<string, string> = {
  architect: '/assets/Architect.png',
  'midnight-responder': '/assets/Midnight Responder.png',
  witness: '/assets/Witness.png',
  questioner: '/assets/Questioner.png',
  groundskeeper: '/assets/Groundskeeper.png',
  'long-game': '/assets/Scale.png',
};

export function HomePage() {
  const { stageId } = useParams();
  const navigate = useNavigate();

  const handleClosePanel = () => {
    navigate('/');
  };

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      {/* Hero section - centered above journey */}
      <section className="pt-10 md:pt-14 pb-10 md:pb-14 px-4 flex-shrink-0">
        <div className="container mx-auto text-center max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3"
          >
            The Product Development Journey
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-sm md:text-base text-muted-foreground mb-5"
          >
            Six council voices guide you through ten stages of building something amazing.
          </motion.p>

          {/* Council thumbnails and button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center gap-3"
          >
            <div className="flex -space-x-4">
              {councils.slice(0, 6).map((council, index) => (
                <motion.div
                  key={council.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + index * 0.05 }}
                  className="w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-background overflow-hidden shadow-md"
                >
                  <img
                    src={councilImages[council.id]}
                    alt={council.name}
                    className="w-full h-full object-cover object-top"
                  />
                </motion.div>
              ))}
            </div>
            <Button asChild size="sm" variant="default">
              <Link to="/councils">
                Meet the Council
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* River canvas - horizontal scrolling journey */}
      <div className="flex-1 overflow-x-auto overflow-y-hidden">
        <div className="h-full px-8 pt-6">
          <RiverCanvas />
        </div>
      </div>

      {/* Fixed river at bottom */}
      <div className="h-32 relative flex-shrink-0">
        <RiverFlow />
      </div>

      {/* Stage panel (sheet) */}
      <StagePanel stageId={stageId || null} onClose={handleClosePanel} />
    </div>
  );
}
