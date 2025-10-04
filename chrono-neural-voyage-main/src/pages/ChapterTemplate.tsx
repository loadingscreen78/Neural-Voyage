import { useEffect, useState } from 'react';
import { ArrowLeft, Clock, Scroll, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface ChapterTemplateProps {
  title: string;
  subtitle: string;
  era: string;
  description: string;
  backgroundImage?: string;
  color: string;
  content: {
    facts: Array<{
      icon: React.ReactNode;
      title: string;
      description: string;
      size: 'small' | 'medium' | 'large';
    }>;
    quotes: Array<{
      text: string;
      author: string;
    }>;
  };
}

const ChapterTemplate = ({ title, subtitle, era, description, backgroundImage, color, content }: ChapterTemplateProps) => {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardIndex = parseInt(entry.target.getAttribute('data-card-index') || '0');
            setVisibleCards(prev => new Set(prev).add(cardIndex));
          }
        });
      },
      { threshold: 0.2 }
    );

    const cards = document.querySelectorAll('[data-card-index]');
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const getSizeClasses = (size: string) => {
    switch (size) {
      case 'large': return 'col-span-2 row-span-2';
      case 'medium': return 'col-span-2';
      case 'small': return 'col-span-1';
      default: return 'col-span-1';
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-background/95 to-background/90">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {backgroundImage && (
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <div className="mb-6">
            <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium bg-${color}/20 text-${color} border border-${color}/30`}>
              {era}
            </span>
          </div>
          <h1 className="text-6xl md:text-8xl font-display font-bold mb-6 bg-gradient-to-r from-foreground via-neural-glow to-foreground bg-clip-text text-transparent">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-light">
            {subtitle}
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-2 h-2 bg-${color}/30 rounded-full animate-float`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
            {content.facts.map((fact, index) => (
              <div
                key={index}
                data-card-index={index}
                className={`${getSizeClasses(fact.size)} group relative overflow-hidden rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 p-6 hover:bg-card/80 transition-all duration-500 ${
                  visibleCards.has(index) 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={`w-12 h-12 rounded-xl bg-${color}/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {fact.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{fact.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{fact.description}</p>
                
                {/* Hover glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-br from-${color}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              </div>
            ))}

            {/* Quote Cards */}
            {content.quotes.map((quote, index) => (
              <div
                key={`quote-${index}`}
                data-card-index={content.facts.length + index}
                className={`col-span-2 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-${color}/10 to-${color}/5 border border-${color}/20 p-8 ${
                  visibleCards.has(content.facts.length + index) 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${(content.facts.length + index) * 100}ms` }}
              >
                <Scroll className={`w-8 h-8 text-${color} mb-4`} />
                <blockquote className="text-xl font-medium italic mb-4 leading-relaxed">
                  "{quote.text}"
                </blockquote>
                <cite className="text-muted-foreground font-medium">— {quote.author}</cite>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center">
            <Button asChild variant="outline" size="lg" className="group">
              <Link to="/">
                <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                Back to Journey
              </Link>
            </Button>
            <Button asChild size="lg" className="bg-gradient-to-r from-neural-glow to-neural-pulse hover:shadow-glow transition-all">
              <Link to="/timeline">
                <Clock className="w-5 h-5 mr-2" />
                Interactive Timeline
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ChapterTemplate;