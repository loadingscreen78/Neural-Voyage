import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface StorySectionProps {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  era: string;
  children?: React.ReactNode;
  backgroundElement?: React.ReactNode;
}

const StorySection = ({ 
  id, 
  title, 
  subtitle, 
  description, 
  era, 
  children,
  backgroundElement 
}: StorySectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id={id}
      className={cn(
        "section-container relative",
        era
      )}
    >
      {/* Background Elements */}
      {backgroundElement && (
        <div className="absolute inset-0 opacity-10">
          {backgroundElement}
        </div>
      )}

      {/* Neural Background Pattern */}
      <div className="neural-bg" />

      {/* Content */}
      <div className="section-content flex items-center">
        <div className={cn(
          "max-w-6xl mx-auto transition-all duration-1000 delay-300",
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
        )}>
          
          {/* Era Label */}
          <div className={cn(
            "inline-block px-6 py-2 rounded-full text-sm font-medium mb-8 transition-all duration-700",
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          )}>
            <span className="bg-neural-glow/10 text-neural-glow px-4 py-2 rounded-full">
              {title}
            </span>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div>
              <h2 className={cn(
                "font-display text-5xl md:text-7xl font-bold mb-6 leading-tight transition-all duration-1000 delay-500 text-white",
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              )}>
                {subtitle}
              </h2>
              
              <p className={cn(
                "font-body text-lg md:text-xl leading-relaxed mb-8 transition-all duration-1000 delay-700",
                era.includes('medieval') ? 'text-gray-300' : 'text-foreground-muted'
              )}>
                {description}
              </p>

              {children && (
                <div className={cn(
                  "transition-all duration-1000 delay-1000",
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                )}>
                  {children}
                </div>
              )}
            </div>

            {/* Visual Element Placeholder */}
            <div className={cn(
              "relative h-96 transition-all duration-1200 delay-800",
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            )}>
              <div className="absolute inset-0 bg-gradient-to-br from-neural-glow/5 to-neural-accent/5 rounded-2xl backdrop-blur-sm" />
              <div className="absolute inset-4 border border-neural-line/20 rounded-xl" />
              
              {/* Animated Neural Connections */}
              <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-neural-glow rounded-full animate-glow-pulse" />
              <div className="absolute top-3/4 right-1/3 w-0.5 h-0.5 bg-neural-accent rounded-full animate-neural-pulse" />
              <div className="absolute bottom-1/4 left-1/2 w-1.5 h-1.5 bg-neural-silver rounded-full animate-glow-pulse" style={{ animationDelay: '2s' }} />
              
              {/* Content placeholder for era-specific visuals */}
              <div className="absolute inset-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-neural-glow to-neural-accent opacity-20" />
                  <div className="text-sm text-foreground-muted font-body">
                    Era Visualization
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;