import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Sparkles, Zap } from 'lucide-react';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 1000);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToStory = () => {
    const nextSection = document.getElementById('bento-timeline');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="section-container relative bg-background overflow-hidden">
      {/* Enhanced 3D Spline Background with Parallax */}
      <div 
        className="hero-3d"
        style={{
          transform: `translate3d(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px, 0) scale(${1 + scrollY * 0.0001})`,
        }}
      >
        <iframe 
          src='https://my.spline.design/3dsliderwithimmersioneffect-eUzahpkPdxWdOVrz2zGU7r5W/' 
          frameBorder='0' 
          width='100%' 
          height='100%'
          className="absolute inset-0"
          loading="lazy"
        />
        
        {/* Cinematic Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background/60" />
      </div>

      {/* Enhanced Neural Network Overlay Pattern */}
      <div className="neural-bg animate-neural-pulse" />

      {/* Floating Neurons */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="floating-neuron absolute top-1/4 left-1/4 w-2 h-2 bg-gray-400 rounded-full opacity-60" />
        <div className="floating-neuron absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-gray-500 rounded-full opacity-80" style={{ animationDelay: '2s' }} />
        <div className="floating-neuron absolute bottom-1/3 left-1/2 w-3 h-3 bg-gray-300 rounded-full opacity-40" style={{ animationDelay: '4s' }} />
        <div className="floating-neuron absolute top-2/3 right-1/4 w-1 h-1 bg-gray-400 rounded-full opacity-70" style={{ animationDelay: '1s' }} />
        <div className="floating-neuron absolute bottom-1/4 left-1/3 w-2.5 h-2.5 bg-gray-500 rounded-full opacity-50" style={{ animationDelay: '3s' }} />
      </div>

      {/* Hero Content Overlay */}
      <div 
        className="hero-overlay section-content flex items-center justify-center"
        style={{
          transform: `translate3d(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px, 0)`,
        }}
      >
        <div className={`text-center max-w-7xl mx-auto transition-all duration-1000 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          
          {/* Enhanced Cinematic Title */}
          <div className="relative mb-8">
            <h1 className="font-display text-7xl md:text-9xl lg:text-[12rem] font-bold leading-none animate-hero-float">
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-white via-muted-foreground to-foreground bg-clip-text text-transparent hero-shimmer">
                  Neural
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-gray-600 via-gray-300 to-gray-500 bg-clip-text text-transparent animate-shimmer opacity-30" />
              </span>
              <br />
              <span className="relative inline-block text-foreground">
                Odyssey
                <div className="absolute -inset-2 bg-gray-300/20 blur-3xl rounded-full animate-glow-pulse" />
              </span>
            </h1>
          </div>
          
          {/* Enhanced Subtitle */}
          <p className="font-body text-xl md:text-3xl text-foreground-muted mb-16 max-w-4xl mx-auto leading-relaxed animate-hero-float" style={{ animationDelay: '0.3s' }}>
            An immersive journey through the evolution of human consciousness—
            <br className="hidden md:block" />
            <span className="text-gray-500">from ancient wisdom to artificial intelligence</span>
          </p>

          {/* Glassmorphism CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-20">
            <Button 
              onClick={scrollToStory}
              size="lg"
              className="group relative glass-button bg-gray-200/90 hover:bg-gray-300 text-gray-800 px-10 py-6 text-xl font-medium border border-gray-300/50 animate-hero-float overflow-hidden"
              style={{ animationDelay: '0.6s' }}
            >
              <span className="relative z-10 flex items-center">
                <Sparkles className="mr-3 w-6 h-6" />
                Begin the Journey
                <ChevronDown className="ml-3 w-6 h-6 group-hover:translate-y-1 transition-transform duration-300" />
              </span>
              
              {/* Light Trail Effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            </Button>
            
            <Button 
              variant="outline"
              size="lg"
              className="group glass-button border-gray-400/50 text-gray-700 hover:bg-gray-200/20 px-10 py-6 text-xl backdrop-blur-xl animate-hero-float"
              style={{ animationDelay: '0.9s' }}
            >
              <Zap className="mr-3 w-6 h-6 group-hover:text-gray-400 transition-colors" />
              Explore Timeline
            </Button>
          </div>

          {/* Enhanced Status Indicator */}
          <div className="inline-flex items-center space-x-4 glass-card px-8 py-4 rounded-full animate-hero-float" style={{ animationDelay: '1.2s' }}>
            <div className="flex space-x-2">
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-glow-pulse" />
              <div className="w-2 h-2 bg-gray-500 rounded-full animate-glow-pulse" style={{ animationDelay: '0.3s' }} />
              <div className="w-2 h-2 bg-gray-300 rounded-full animate-glow-pulse" style={{ animationDelay: '0.6s' }} />
            </div>
            <span className="text-sm text-foreground-muted font-body">
              16 Chapters • Interactive Experience • AI Powered
            </span>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-center hero-overlay">
        <div className="flex flex-col items-center space-y-4 animate-hero-float" style={{ animationDelay: '1.5s' }}>
          <span className="text-sm text-foreground-muted font-body">Scroll to explore the timeline</span>
          <div className="relative">
            <ChevronDown className="w-8 h-8 text-gray-500 animate-bounce" />
            <div className="absolute inset-0 w-8 h-8 text-gray-500 animate-bounce opacity-50" style={{ animationDelay: '0.5s' }} />
          </div>
        </div>
      </div>

      {/* Cinematic Vignette */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-radial from-transparent via-transparent to-background/30" />
    </section>
  );
};

export default HeroSection;