import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Scroll, Telescope, Brain, Globe, Cpu, Atom, Rocket, Lightbulb, Clock, BookOpen, Zap, Sparkles } from 'lucide-react';
import { Button } from './ui/button';

interface TimelineMilestone {
  id: string;
  year: string;
  title: string;
  description: string;
  icon: any;
  size: 'small' | 'medium' | 'large' | 'wide' | 'tall';
  theme: string;
  image?: string;
}

const milestones: TimelineMilestone[] = [
  {
    id: '1',
    year: '400 BCE',
    title: 'Aristotle\'s Theory of Memory',
    description: 'Aristotle proposed the first systematic theory of memory and learning, laying the foundation for understanding human cognition.',
    icon: Scroll,
    size: 'large',
    theme: 'from-amber-500/20 to-orange-500/20',
  },
  {
    id: '2',
    year: '1600 CE',
    title: 'Galileo\'s Telescope',
    description: 'Galileo built his telescope, revolutionizing science and expanding human perception beyond natural limits.',
    icon: Telescope,
    size: 'medium',
    theme: 'from-blue-500/20 to-indigo-500/20',
  },
  {
    id: '3',
    year: '1943',
    title: 'First Artificial Neuron',
    description: 'McCulloch & Pitts modeled the first artificial neuron, beginning the quest to understand computational thinking.',
    icon: Brain,
    size: 'wide',
    theme: 'from-purple-500/20 to-pink-500/20',
  },
  {
    id: '4',
    year: '1956',
    title: 'Birth of AI',
    description: 'The term \'Artificial Intelligence\' was coined at Dartmouth College, launching a new field of study.',
    icon: Lightbulb,
    size: 'tall',
    theme: 'from-green-500/20 to-emerald-500/20',
  },
  {
    id: '5',
    year: '1990s',
    title: 'Internet Revolution',
    description: 'The World Wide Web transformed human knowledge sharing, creating the first global digital consciousness.',
    icon: Globe,
    size: 'large',
    theme: 'from-cyan-500/20 to-blue-500/20',
  },
  {
    id: '6',
    year: '2012',
    title: 'Deep Learning Breakthrough',
    description: 'AlexNet won ImageNet, proving that deep neural networks could surpass human-level performance.',
    icon: Cpu,
    size: 'medium',
    theme: 'from-violet-500/20 to-purple-500/20',
  },
  {
    id: '7',
    year: '2017',
    title: 'Transformer Architecture',
    description: 'The \'Attention is All You Need\' paper introduced transformers, revolutionizing natural language processing.',
    icon: Zap,
    size: 'wide',
    theme: 'from-neural-glow/20 to-neural-accent/20',
  },
  {
    id: '8',
    year: '2023',
    title: 'Generative AI Mainstream',
    description: 'ChatGPT and other generative AI tools became household names, democratizing artificial intelligence.',
    icon: Sparkles,
    size: 'large',
    theme: 'from-neural-accent/30 to-neural-glow/30',
  },
];

const BentoTimeline = () => {
  const [visibleCards, setVisibleCards] = useState<Set<string>>(new Set());
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardId = entry.target.getAttribute('data-card-id');
            if (cardId) {
              setVisibleCards(prev => new Set([...prev, cardId]));
            }
          }
        });
      },
      { threshold: 0.2, rootMargin: '50px' }
    );

    const cards = containerRef.current?.querySelectorAll('[data-card-id]');
    cards?.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const getSizeClasses = (size: string) => {
    switch (size) {
      case 'large':
        return 'col-span-2 row-span-2 md:col-span-2 md:row-span-2';
      case 'wide':
        return 'col-span-2 md:col-span-2';
      case 'tall':
        return 'row-span-2 md:row-span-2';
      case 'medium':
        return 'col-span-1 row-span-1';
      default:
        return 'col-span-1 row-span-1';
    }
  };

  return (
    <section id="bento-timeline" className="section-container bg-gradient-to-b from-background to-background-soft relative overflow-hidden">
      {/* Enhanced Neural Background */}
      <div className="neural-bg animate-neural-pulse" />
      
      {/* Timeline River Animation */}
      <div className="absolute inset-0 opacity-20">
        <div className="timeline-river absolute top-1/4 left-0 w-full h-1 transform rotate-12" />
        <div className="timeline-river absolute top-2/4 left-0 w-full h-0.5 transform -rotate-6" style={{ animationDelay: '2s' }} />
        <div className="timeline-river absolute top-3/4 left-0 w-full h-1.5 transform rotate-3" style={{ animationDelay: '4s' }} />
      </div>

      <div className="section-content">
        <div className="text-center mb-20">
          <h2 className="font-display text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-neural-line via-neural-glow to-neural-accent bg-clip-text text-transparent">
            The Journey Unfolds
          </h2>
          <p className="font-body text-xl md:text-2xl text-foreground-muted max-w-3xl mx-auto">
            Explore the pivotal moments that shaped human consciousness and artificial intelligence
          </p>
        </div>

        {/* Bento Grid */}
        <div 
          ref={containerRef}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 auto-rows-[200px] max-w-7xl mx-auto"
        >
          {milestones.map((milestone, index) => {
            const Icon = milestone.icon;
            const isVisible = visibleCards.has(milestone.id);
            
            return (
              <div
                key={milestone.id}
                data-card-id={milestone.id}
                className={cn(
                  "group relative rounded-2xl p-6 cursor-pointer overflow-hidden",
                  "bento-card glass-card transition-all duration-700",
                  getSizeClasses(milestone.size),
                  isVisible ? 'reveal opacity-100' : 'opacity-0'
                )}
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  background: `linear-gradient(135deg, ${milestone.theme})`,
                }}
              >
                {/* Card Background Pattern */}
                <div className="absolute inset-0 opacity-30">
                  <div className="absolute top-4 right-4 w-24 h-24 rounded-full bg-gradient-to-br from-white/10 to-transparent" />
                  <div className="absolute bottom-4 left-4 w-16 h-16 rounded-full bg-gradient-to-tr from-white/5 to-transparent" />
                </div>

                {/* Icon */}
                <div className="relative z-10 mb-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-neural-line" />
                  </div>
                </div>

                {/* Year Badge */}
                <div className="relative z-10 mb-3">
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-neural-glow/20 text-neural-line rounded-full backdrop-blur-sm">
                    {milestone.year}
                  </span>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="font-display text-lg md:text-xl font-semibold mb-2 text-neural-line group-hover:text-neural-glow transition-colors duration-300">
                    {milestone.title}
                  </h3>
                  
                  {(milestone.size === 'large' || milestone.size === 'wide' || milestone.size === 'tall') && (
                    <p className="text-sm text-neural-line/70 leading-relaxed">
                      {milestone.description}
                    </p>
                  )}
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-neural-glow/0 to-neural-accent/0 group-hover:from-neural-glow/10 group-hover:to-neural-accent/10 transition-all duration-500" />
                
                {/* Neural Connection Lines (only for larger cards) */}
                {(milestone.size === 'large' || milestone.size === 'wide') && (
                  <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                      <path
                        d="M10,20 Q50,10 90,30 Q70,50 30,70 Q50,90 80,80"
                        stroke="currentColor"
                        strokeWidth="0.5"
                        fill="none"
                        className="text-neural-glow"
                      />
                      <circle cx="10" cy="20" r="1" fill="currentColor" className="text-neural-glow" />
                      <circle cx="90" cy="30" r="1" fill="currentColor" className="text-neural-accent" />
                      <circle cx="30" cy="70" r="1" fill="currentColor" className="text-neural-silver" />
                    </svg>
                  </div>
                )}
              </div>
            );
          })}

          {/* Fill Empty Spaces with Animated Gradient Cards */}
          <div className="relative rounded-2xl overflow-hidden group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-br from-neural-glow/5 to-neural-accent/5 animate-glow-pulse" />
            <div className="relative z-10 p-6 h-full flex items-center justify-center">
              <div className="text-center">
                <Clock className="w-8 h-8 text-neural-silver mx-auto mb-2 group-hover:text-neural-glow transition-colors" />
                <span className="text-sm text-neural-silver group-hover:text-neural-glow transition-colors">
                  More to come...
                </span>
              </div>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-br from-neural-accent/5 to-neural-silver/5 animate-neural-pulse" />
            <div className="relative z-10 p-6 h-full flex items-center justify-center">
              <div className="text-center">
                <BookOpen className="w-8 h-8 text-neural-silver mx-auto mb-2 group-hover:text-neural-accent transition-colors" />
                <span className="text-sm text-neural-silver group-hover:text-neural-accent transition-colors">
                  Explore chapters
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <p className="font-body text-lg text-foreground-muted mb-8">
            Continue the journey through all 16 chapters of human evolution
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button asChild className="group relative glass-button bg-neural-glow/90 hover:bg-neural-glow text-neural-line px-8 py-4 text-lg font-medium border border-neural-glow/30 rounded-xl overflow-hidden">
              <Link to="/ancient">
                <span className="relative z-10 flex items-center">
                  <Rocket className="mr-3 w-5 h-5" />
                  Explore All Chapters
                </span>
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
              </Link>
            </Button>
            
            <Button asChild className="glass-button border-neural-line/30 text-neural-line hover:bg-neural-line/10 px-8 py-4 text-lg backdrop-blur-xl rounded-xl">
              <Link to="/timeline">
                <Atom className="mr-3 w-5 h-5 inline" />
                Interactive Timeline
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BentoTimeline;