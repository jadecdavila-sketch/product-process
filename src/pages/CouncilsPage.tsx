import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { councils } from '@/data';
import { CouncilCard } from '@/components/council/CouncilCard';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export function CouncilsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        {/* Back button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-8"
        >
          <Button variant="ghost" asChild>
            <Link to="/" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Journey
            </Link>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            The Six Councils of Product Greatness
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Each council has a distinct personality and voice. They appear when relevant,
            offering wisdom specific to the current stage or situation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {councils.map((council, index) => (
            <CouncilCard key={council.id} council={council} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
