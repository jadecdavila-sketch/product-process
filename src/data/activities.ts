import type { Activity } from '@/types';

export const activities: Activity[] = [
  // Discovery
  { id: 'discovery-1', stageId: 'discovery', name: 'Identify target users', collaborationMode: 'human-leads', humanExpertise: 'Product Manager with market sense and strategic judgment' },
  { id: 'discovery-2', stageId: 'discovery', name: 'User interviews', collaborationMode: 'human-only', humanExpertise: 'UX Researcher with empathy and listening skills' },
  { id: 'discovery-3', stageId: 'discovery', name: 'Observation / contextual inquiry', collaborationMode: 'human-only', humanExpertise: 'UX Researcher who can watch without interfering' },
  { id: 'discovery-4', stageId: 'discovery', name: 'Competitive landscape analysis', collaborationMode: 'ai-leads', humanExpertise: 'No special expertise needed' },
  { id: 'discovery-5', stageId: 'discovery', name: 'Problem definition', collaborationMode: 'human-ai-collaborate', humanExpertise: 'Product Manager with strategic judgment' },
  { id: 'discovery-6', stageId: 'discovery', name: 'Assumption mapping', collaborationMode: 'human-ai-collaborate', humanExpertise: 'Product Manager or UX Researcher' },
  { id: 'discovery-7', stageId: 'discovery', name: 'Research synthesis', collaborationMode: 'human-ai-collaborate', humanExpertise: 'UX Researcher with pattern recognition' },

  // Validation
  { id: 'validation-1', stageId: 'validation', name: 'Design validation experiments', collaborationMode: 'human-ai-collaborate', humanExpertise: 'Product Manager with experimental mindset' },
  { id: 'validation-2', stageId: 'validation', name: 'Build landing page / MVP', collaborationMode: 'ai-leads', humanExpertise: 'Basic web skills' },
  { id: 'validation-3', stageId: 'validation', name: 'Prototype creation', collaborationMode: 'human-ai-collaborate', humanExpertise: 'Designer with prototyping skills' },
  { id: 'validation-4', stageId: 'validation', name: 'Run experiments', collaborationMode: 'human-leads', humanExpertise: 'Product Manager or Growth person' },
  { id: 'validation-5', stageId: 'validation', name: 'Analyze results', collaborationMode: 'human-ai-collaborate', humanExpertise: 'Product Manager with analytical skills' },
  { id: 'validation-6', stageId: 'validation', name: 'Pivot/persevere decision', collaborationMode: 'human-leads', humanExpertise: 'Founders/leadership with strategic judgment' },

  // Design
  { id: 'design-1', stageId: 'design', name: 'Information architecture', collaborationMode: 'human-ai-collaborate', humanExpertise: 'UX Designer with structural thinking' },
  { id: 'design-2', stageId: 'design', name: 'User flow design', collaborationMode: 'human-ai-collaborate', humanExpertise: 'UX Designer' },
  { id: 'design-3', stageId: 'design', name: 'Wireframing', collaborationMode: 'human-ai-collaborate', humanExpertise: 'UX Designer' },
  { id: 'design-4', stageId: 'design', name: 'Visual design', collaborationMode: 'human-leads', humanExpertise: 'Visual Designer with taste and brand sense' },
  { id: 'design-5', stageId: 'design', name: 'Interaction design', collaborationMode: 'human-leads', humanExpertise: 'UX Designer with motion/interaction skills' },
  { id: 'design-6', stageId: 'design', name: 'Design system creation', collaborationMode: 'human-ai-collaborate', humanExpertise: 'Designer with systems thinking' },
  { id: 'design-7', stageId: 'design', name: 'Prototype testing', collaborationMode: 'human-only', humanExpertise: 'UX Researcher facilitating, users participating' },
  { id: 'design-8', stageId: 'design', name: 'Accessibility review', collaborationMode: 'human-ai-collaborate', humanExpertise: 'Designer with accessibility knowledge' },

  // Architecture
  { id: 'architecture-1', stageId: 'architecture', name: 'Technology selection', collaborationMode: 'human-leads', humanExpertise: 'Senior Engineer with breadth of experience' },
  { id: 'architecture-2', stageId: 'architecture', name: 'System design', collaborationMode: 'human-leads', humanExpertise: 'Senior Engineer or Architect' },
  { id: 'architecture-3', stageId: 'architecture', name: 'Database design', collaborationMode: 'human-ai-collaborate', humanExpertise: 'Engineer with data modeling skills' },
  { id: 'architecture-4', stageId: 'architecture', name: 'API design', collaborationMode: 'human-ai-collaborate', humanExpertise: 'Engineer with API design experience' },
  { id: 'architecture-5', stageId: 'architecture', name: 'Security architecture', collaborationMode: 'human-leads', humanExpertise: 'Security Engineer or security-minded Senior Engineer' },
  { id: 'architecture-6', stageId: 'architecture', name: 'Infrastructure planning', collaborationMode: 'human-ai-collaborate', humanExpertise: 'DevOps/Platform Engineer' },
  { id: 'architecture-7', stageId: 'architecture', name: 'CI/CD setup', collaborationMode: 'ai-leads', humanExpertise: 'DevOps knowledge helpful' },
  { id: 'architecture-8', stageId: 'architecture', name: 'Development environment setup', collaborationMode: 'ai-leads', humanExpertise: 'Basic DevOps knowledge' },

  // Build
  { id: 'build-1', stageId: 'build', name: 'Feature implementation', collaborationMode: 'human-ai-collaborate', humanExpertise: 'Engineers at appropriate level' },
  { id: 'build-2', stageId: 'build', name: 'Frontend development', collaborationMode: 'human-ai-collaborate', humanExpertise: 'Frontend Engineer' },
  { id: 'build-3', stageId: 'build', name: 'Backend development', collaborationMode: 'human-ai-collaborate', humanExpertise: 'Backend Engineer' },
  { id: 'build-4', stageId: 'build', name: 'API implementation', collaborationMode: 'human-ai-collaborate', humanExpertise: 'Backend Engineer' },
  { id: 'build-5', stageId: 'build', name: 'Database implementation', collaborationMode: 'human-ai-collaborate', humanExpertise: 'Backend Engineer with DB skills' },
  { id: 'build-6', stageId: 'build', name: 'Writing tests', collaborationMode: 'ai-leads', humanExpertise: 'Engineers with testing knowledge' },
  { id: 'build-7', stageId: 'build', name: 'Code review', collaborationMode: 'human-leads', humanExpertise: 'Engineers reviewing each other' },
  { id: 'build-8', stageId: 'build', name: 'Accessibility implementation', collaborationMode: 'human-ai-collaborate', humanExpertise: 'Frontend Engineer with a11y knowledge' },
  { id: 'build-9', stageId: 'build', name: 'Documentation (technical)', collaborationMode: 'ai-leads', humanExpertise: 'Engineers documenting their work' },

  // Harden
  { id: 'harden-1', stageId: 'harden', name: 'Load testing', collaborationMode: 'ai-leads', humanExpertise: 'Engineer with performance testing knowledge' },
  { id: 'harden-2', stageId: 'harden', name: 'Security testing', collaborationMode: 'human-leads', humanExpertise: 'Security Engineer or security-focused Engineer' },
  { id: 'harden-3', stageId: 'harden', name: 'Penetration testing', collaborationMode: 'human-only', humanExpertise: 'Security specialist (often external)' },
  { id: 'harden-4', stageId: 'harden', name: 'Accessibility audit', collaborationMode: 'human-ai-collaborate', humanExpertise: 'Accessibility specialist or trained Engineer' },
  { id: 'harden-5', stageId: 'harden', name: 'Error handling review', collaborationMode: 'human-ai-collaborate', humanExpertise: 'Senior Engineer' },
  { id: 'harden-6', stageId: 'harden', name: 'Monitoring setup', collaborationMode: 'human-ai-collaborate', humanExpertise: 'DevOps/Platform Engineer' },
  { id: 'harden-7', stageId: 'harden', name: 'Alerting configuration', collaborationMode: 'human-leads', humanExpertise: 'DevOps/Platform Engineer' },
  { id: 'harden-8', stageId: 'harden', name: 'Runbook creation', collaborationMode: 'human-ai-collaborate', humanExpertise: 'DevOps/Engineers who built the system' },
  { id: 'harden-9', stageId: 'harden', name: 'Disaster recovery testing', collaborationMode: 'human-leads', humanExpertise: 'DevOps/Platform Engineer' },

  // Launch
  { id: 'launch-1', stageId: 'launch', name: 'Launch planning', collaborationMode: 'human-leads', humanExpertise: 'Product Manager coordinating cross-functionally' },
  { id: 'launch-2', stageId: 'launch', name: 'Staged rollout', collaborationMode: 'human-ai-collaborate', humanExpertise: 'Engineer managing the deployment' },
  { id: 'launch-3', stageId: 'launch', name: 'Monitoring during launch', collaborationMode: 'human-leads', humanExpertise: 'Engineers and DevOps watching systems' },
  { id: 'launch-4', stageId: 'launch', name: 'User support triage', collaborationMode: 'human-only', humanExpertise: 'Support team or team members handling queries' },
  { id: 'launch-5', stageId: 'launch', name: 'Quick fixes and hotfixes', collaborationMode: 'human-ai-collaborate', humanExpertise: 'Engineers responding rapidly' },
  { id: 'launch-6', stageId: 'launch', name: 'Communication (internal/external)', collaborationMode: 'human-leads', humanExpertise: 'Product Manager, Marketing, Support' },
  { id: 'launch-7', stageId: 'launch', name: 'Launch retrospective', collaborationMode: 'human-only', humanExpertise: 'Full team reflecting on what went well/poorly' },

  // Learn
  { id: 'learn-1', stageId: 'learn', name: 'Analytics review', collaborationMode: 'human-ai-collaborate', humanExpertise: 'Product Manager or Analyst' },
  { id: 'learn-2', stageId: 'learn', name: 'User interview rounds', collaborationMode: 'human-only', humanExpertise: 'UX Researcher or Product Manager' },
  { id: 'learn-3', stageId: 'learn', name: 'Support ticket analysis', collaborationMode: 'human-ai-collaborate', humanExpertise: 'Support lead or Product Manager' },
  { id: 'learn-4', stageId: 'learn', name: 'Funnel analysis', collaborationMode: 'human-ai-collaborate', humanExpertise: 'Product Manager or Analyst' },
  { id: 'learn-5', stageId: 'learn', name: 'Cohort analysis', collaborationMode: 'human-ai-collaborate', humanExpertise: 'Analyst or Data Scientist' },
  { id: 'learn-6', stageId: 'learn', name: 'Incident retrospectives', collaborationMode: 'human-only', humanExpertise: 'Engineering team' },
  { id: 'learn-7', stageId: 'learn', name: 'Synthesis and prioritization', collaborationMode: 'human-leads', humanExpertise: 'Product Manager with strategic judgment' },

  // Iterate
  { id: 'iterate-1', stageId: 'iterate', name: 'Prioritization', collaborationMode: 'human-leads', humanExpertise: 'Product Manager with strategic judgment' },
  { id: 'iterate-2', stageId: 'iterate', name: 'Design iteration', collaborationMode: 'human-ai-collaborate', humanExpertise: 'Designer refining based on learning' },
  { id: 'iterate-3', stageId: 'iterate', name: 'Feature development', collaborationMode: 'human-ai-collaborate', humanExpertise: 'Engineers' },
  { id: 'iterate-4', stageId: 'iterate', name: 'Technical debt paydown', collaborationMode: 'human-ai-collaborate', humanExpertise: 'Engineers' },
  { id: 'iterate-5', stageId: 'iterate', name: 'Refactoring', collaborationMode: 'ai-leads', humanExpertise: 'Engineers' },
  { id: 'iterate-6', stageId: 'iterate', name: 'A/B testing setup', collaborationMode: 'human-ai-collaborate', humanExpertise: 'Engineer with experimentation knowledge' },
  { id: 'iterate-7', stageId: 'iterate', name: 'Documentation updates', collaborationMode: 'ai-leads', humanExpertise: 'Engineers and Product' },

  // Scale
  { id: 'scale-1', stageId: 'scale', name: 'Compliance work (SOC 2, etc.)', collaborationMode: 'human-leads', humanExpertise: 'Security/Compliance specialist' },
  { id: 'scale-2', stageId: 'scale', name: 'Internationalization', collaborationMode: 'human-ai-collaborate', humanExpertise: 'Engineers, with i18n expertise' },
  { id: 'scale-3', stageId: 'scale', name: 'Localization', collaborationMode: 'human-leads', humanExpertise: 'Professional translators, local market experts' },
  { id: 'scale-4', stageId: 'scale', name: 'Performance optimization for scale', collaborationMode: 'human-ai-collaborate', humanExpertise: 'Senior Engineers' },
  { id: 'scale-5', stageId: 'scale', name: 'Cost optimization', collaborationMode: 'human-ai-collaborate', humanExpertise: 'DevOps/Finance' },
  { id: 'scale-6', stageId: 'scale', name: 'Enterprise features', collaborationMode: 'human-ai-collaborate', humanExpertise: 'Engineers with enterprise experience' },
  { id: 'scale-7', stageId: 'scale', name: 'Advanced security measures', collaborationMode: 'human-leads', humanExpertise: 'Security Engineer' },
  { id: 'scale-8', stageId: 'scale', name: 'Team scaling', collaborationMode: 'human-only', humanExpertise: 'Leadership, HR' },
];

export const getActivitiesByStage = (stageId: string): Activity[] =>
  activities.filter((a) => a.stageId === stageId);
