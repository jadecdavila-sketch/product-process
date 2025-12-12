import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getCouncilById, stages } from '@/data';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  ArrowLeft,
  MessageCircle,
  HelpCircle,
  Volume2,
  Users,
  Lightbulb,
  BookOpen,
  Wrench,
  Heart,
  Zap,
  HelpingHand
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import type { CouncilMember } from '@/types';

const councilImages: Record<string, string> = {
  architect: '/assets/Architect.png',
  'midnight-responder': '/assets/Midnight Responder.png',
  witness: '/assets/Witness.png',
  questioner: '/assets/Questioner.png',
  groundskeeper: '/assets/Groundskeeper.png',
  'long-game': '/assets/Scale.png',
};

function MemberCard({ member, index }: { member: CouncilMember; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 * index }}
    >
      <Card className="bg-card border-border">
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between">
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/30">
              {member.pillar}
            </Badge>
          </div>
          <CardTitle className="text-xl mt-2">{member.name}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Who They Are */}
          <div>
            <p className="text-foreground/90 leading-relaxed">{member.whoTheyAre}</p>
          </div>

          <Accordion type="single" collapsible defaultValue="wisdom" className="w-full">
            {/* Core Wisdom */}
            <AccordionItem value="wisdom">
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center gap-2">
                  <Lightbulb className="w-4 h-4 text-accent" />
                  <span>Core Wisdom</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2 pl-6">
                  {member.coreWisdom.map((wisdom, i) => (
                    <li key={i} className="text-foreground/80 list-disc">
                      {wisdom}
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>

            {/* War Stories */}
            {member.warStories.length > 0 && (
              <AccordionItem value="stories">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-warm" />
                    <span>War Stories</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    {member.warStories.map((story, i) => (
                      <div key={i} className="p-3 bg-muted/30 rounded-md">
                        <h5 className="font-medium text-foreground mb-1">{story.title}</h5>
                        <p className="text-sm text-foreground/80">{story.description}</p>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            )}

            {/* Toolkit */}
            {Object.keys(member.toolkit).length > 0 && (
              <AccordionItem value="toolkit">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-2">
                    <Wrench className="w-4 h-4 text-secondary" />
                    <span>Their Toolkit</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3">
                    {Object.entries(member.toolkit).map(([tool, description], i) => (
                      <div key={i}>
                        <h5 className="font-medium text-foreground text-sm">{tool}</h5>
                        <p className="text-sm text-foreground/80">{description}</p>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            )}

            {/* Allies & Tensions */}
            {(member.allies.length > 0 || member.tensions.length > 0) && (
              <AccordionItem value="relationships">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-2">
                    <Heart className="w-4 h-4 text-primary" />
                    <span>Allies & Tensions</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    {member.allies.length > 0 && (
                      <div>
                        <h5 className="text-sm font-medium text-foreground mb-2 flex items-center gap-1">
                          <HelpingHand className="w-3 h-3" /> Allies
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {member.allies.map((ally, i) => (
                            <Badge key={i} variant="outline" className="text-xs border-primary/30">
                              {ally}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                    {member.tensions.length > 0 && (
                      <div>
                        <h5 className="text-sm font-medium text-foreground mb-2 flex items-center gap-1">
                          <Zap className="w-3 h-3" /> Tensions
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {member.tensions.map((tension, i) => (
                            <Badge key={i} variant="outline" className="text-xs border-warm/50 text-warm">
                              {tension}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </AccordionContent>
              </AccordionItem>
            )}

            {/* Questions They Ask */}
            {member.questions.length > 0 && (
              <AccordionItem value="questions">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-accent" />
                    <span>Questions They Ask</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2">
                    {member.questions.map((question, i) => (
                      <li key={i} className="text-foreground/80 italic text-sm">
                        "{question}"
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            )}
          </Accordion>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export function CouncilPage() {
  const { councilId } = useParams();
  const council = councilId ? getCouncilById(councilId) : null;
  const imageSrc = councilId ? councilImages[councilId] : null;

  if (!council) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold mb-4">Council not found</h1>
        <Button asChild>
          <Link to="/councils">Back to Councils</Link>
        </Button>
      </div>
    );
  }

  // Find stages where this council is loudest
  const relevantStages = stages.filter(
    (stage) =>
      stage.primaryCouncils.includes(council.id) ||
      stage.secondaryCouncils.includes(council.id)
  );

  return (
    <div>
      {/* Hero Image */}
      {imageSrc && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative w-full h-80 md:h-[28rem] lg:h-[32rem] overflow-hidden"
        >
          <img
            src={imageSrc}
            alt={council.name}
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
          {/* Back button overlaid on image */}
          <div className="absolute top-4 left-4">
            <Button
              variant="secondary"
              size="sm"
              asChild
              className="bg-background/90 hover:bg-background text-foreground border-0 backdrop-blur-sm shadow-lg"
            >
              <Link to="/councils" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                All Councils
              </Link>
            </Button>
          </div>
        </motion.div>
      )}

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Back button (shown if no image) */}
        {!imageSrc && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-8"
          >
            <Button variant="ghost" asChild>
              <Link to="/councils" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                All Councils
              </Link>
            </Button>
          </motion.div>
        )}

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={imageSrc ? '-mt-20 relative z-10 mb-8' : 'mb-8'}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-1">
            {council.name}
          </h1>
          <p className="text-lg text-muted-foreground mb-4">{council.archetypeName}</p>

          {/* Pillars */}
          <div className="flex flex-wrap gap-2 mb-4">
            {council.pillars.map((pillar) => (
              <Badge
                key={pillar}
                variant="secondary"
                className="bg-secondary/10 text-dark"
              >
                {pillar}
              </Badge>
            ))}
          </div>

          {/* Human Roles */}
          <div className="flex items-start gap-2">
            <Users className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
            <div className="flex flex-wrap gap-2">
              {council.humanRoles.map((role) => (
                <Badge
                  key={role}
                  variant="outline"
                  className="text-xs border-primary/30 text-dark"
                >
                  {role}
                </Badge>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Personality */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <h2 className="text-xl font-semibold mb-3 text-foreground">Personality</h2>
          <p className="text-foreground/90 leading-relaxed">{council.personality}</p>
        </motion.section>

        {/* Cares About */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="mb-8"
        >
          <h2 className="text-xl font-semibold mb-3 text-foreground">Cares About</h2>
          <p className="text-foreground/90 leading-relaxed italic">"{council.caresAbout}"</p>
        </motion.section>

        {/* Ask Them */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <Card className="bg-accent/10 border-accent/20">
            <CardContent className="p-5">
              <div className="flex items-start gap-3">
                <HelpCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Ask Them</h3>
                  <p className="text-foreground/90 italic">"{council.askThem}"</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Signature Quote */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="mb-8"
        >
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-start gap-3">
                <Volume2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-3">Signature Quote</h3>
                  <blockquote className="text-foreground/90 italic leading-relaxed">
                    "{council.signatureQuote}"
                  </blockquote>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Loudest At */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <h2 className="text-xl font-semibold mb-4 text-foreground">Loudest At</h2>
          <div className="flex flex-wrap gap-3">
            {relevantStages.map((stage) => {
              const isPrimary = stage.primaryCouncils.includes(council.id);
              return (
                <Link key={stage.id} to={`/stage/${stage.id}`}>
                  <Badge
                    variant="outline"
                    className={`cursor-pointer hover:bg-primary/10 transition-colors ${
                      isPrimary ? 'border-primary text-primary' : 'border-border'
                    }`}
                  >
                    {stage.name}
                    {isPrimary && ' (Primary)'}
                  </Badge>
                </Link>
              );
            })}
          </div>
        </motion.section>

        {/* Council Speaks */}
        {council.councilSpeaks && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="mb-10"
          >
            <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <MessageCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-3 text-lg">
                      The Council Speaks
                    </h3>
                    <blockquote className="text-foreground/90 italic leading-relaxed whitespace-pre-line">
                      "{council.councilSpeaks}"
                    </blockquote>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.section>
        )}

        {/* Council Members */}
        {council.members && council.members.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold mb-6 text-foreground">
              Meet the Council Members
            </h2>
            <div className="grid gap-6">
              {council.members.map((member, index) => (
                <MemberCard key={member.id} member={member} index={index} />
              ))}
            </div>
          </motion.section>
        )}
      </div>
    </div>
  );
}
