import { useEffect, useState } from 'react';
import { Clock, Play, Pause, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Timeline = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeEra, setActiveEra] = useState(0);
  const [visibleEvents, setVisibleEvents] = useState<Set<number>>(new Set());

  const timelineEvents = [
    { year: '3500 BCE', title: 'First Writing Systems', era: 'Ancient', description: 'Cuneiform and hieroglyphs emerge', path: '/ancient' },
    { year: '800 BCE', title: 'Greek Philosophy', era: 'Classical', description: 'Rational thought begins', path: '/greek' },
    { year: '27 BCE', title: 'Roman Empire', era: 'Imperial', description: 'Engineering and law flourish', path: '/roman' },
    { year: '500 CE', title: 'Medieval Era', era: 'Medieval', description: 'Knowledge preservation', path: '/medieval' },
    { year: '1400 CE', title: 'Renaissance', era: 'Renaissance', description: 'Art and science unite', path: '/renaissance' },
    { year: '1760 CE', title: 'Industrial Revolution', era: 'Industrial', description: 'Mechanization begins', path: '/industrial' },
    { year: '1950 CE', title: 'Computer Age', era: 'Digital', description: 'First computers emerge', path: '/digital' },
    { year: '2023 CE', title: 'AI Revolution', era: 'Neural', description: 'Artificial intelligence mainstream', path: '/ai' },
  ];


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const eventIndex = parseInt(entry.target.getAttribute('data-event-index') || '0');
            setVisibleEvents(prev => new Set(prev).add(eventIndex));
          }
        });
      },
      { threshold: 0.3 }
    );

    const events = document.querySelectorAll('[data-event-index]');
    events.forEach(event => observer.observe(event));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-neural-bg to-background">
      {/* Hero Section with 3D Model */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* 3D Spline Model Background */}
        <div className="absolute inset-0 w-full h-full">
          <iframe 
            src='https://my.spline.design/r4xbot-yxkHbOBzMu0bL9qGYZy0UOhB/' 
            frameBorder='0' 
            width='100%' 
            height='100%'
            className="pointer-events-auto"
            title="Interactive 3D Timeline Model"
          />
        </div>
        
        {/* Interactive Overlay for 3D Model */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-20 w-4 h-4 bg-neural-glow rounded-full animate-pulse opacity-70" />
          <div className="absolute top-40 right-32 w-3 h-3 bg-neural-accent rounded-full animate-glow-pulse opacity-60" />
          <div className="absolute bottom-32 left-1/4 w-5 h-5 bg-neural-silver rounded-full animate-neural-pulse opacity-50" />
          <div className="absolute bottom-20 right-20 w-2 h-2 bg-neural-glow rounded-full animate-pulse opacity-80" style={{ animationDelay: '2s' }} />
        </div>
        
        {/* Interactive Overlay Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <div className="bg-background/90 backdrop-blur-lg rounded-3xl p-8 border border-neural-line/30 shadow-2xl mb-8 group hover:shadow-neural-glow/20 transition-all duration-700">
            <div className="mb-6">
              {/* Static Clock */}
              <Clock className="w-16 h-16 mx-auto text-neural-glow mb-4 animate-glow-pulse" />
              
              {/* Interactive Title */}
              <div className="relative group/title">
                <h1 
                  className="text-6xl md:text-8xl font-display font-bold mb-6 bg-gradient-to-r from-neural-glow via-neural-pulse to-neural-glow bg-clip-text text-transparent animate-shimmer cursor-pointer hover:scale-105 transition-transform duration-500"
                  onClick={() => {
                    setActiveEra((prev) => (prev + 1) % timelineEvents.length);
                  }}
                >
                  Interactive Timeline
                </h1>
                <div className="absolute -inset-4 bg-gradient-to-r from-neural-glow/10 via-neural-pulse/10 to-neural-glow/10 rounded-2xl opacity-0 group-hover/title:opacity-100 transition-opacity duration-500 blur-xl" />
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-sm text-neural-glow/60 opacity-0 group-hover/title:opacity-100 transition-opacity duration-300">
                  Click to cycle through eras
                </div>
              </div>
              
              {/* Interactive Description */}
              <div className="space-y-4">
                <p className="text-xl md:text-2xl text-muted-foreground mb-8 hover:text-foreground transition-colors duration-300 cursor-default">
                  Journey through human consciousness and technological evolution
                </p>
                <p className="text-lg text-muted-foreground/80 max-w-2xl mx-auto hover:text-muted-foreground transition-colors duration-300 cursor-default">
                  Interact with the 3D model above to explore different eras, then scroll down to discover detailed milestones
                </p>
              </div>
            </div>

            {/* Interactive Controls */}
            <div className="flex flex-wrap gap-4 justify-center mb-8">
              
              <Button
                onClick={() => setActiveEra(0)}
                variant="outline"
                size="lg"
                className="border-neural-line/30 hover:border-neural-glow hover:bg-neural-glow/10 hover:scale-105 transition-all duration-300 group/reset"
              >
                <RotateCcw className="w-5 h-5 mr-2 group-hover/reset:rotate-180 transition-transform duration-500" />
                Reset
              </Button>
              
              {/* New Interactive Controls */}
              <Button
                onClick={() => setActiveEra((prev) => (prev - 1 + timelineEvents.length) % timelineEvents.length)}
                variant="outline"
                size="lg"
                className="border-neural-pulse/30 hover:border-neural-pulse hover:bg-neural-pulse/10 hover:scale-105 transition-all duration-300 group/prev"
              >
                <span className="w-5 h-5 mr-2 group-hover/prev:-translate-x-1 transition-transform duration-300">←</span>
                Previous Era
              </Button>
              
              <Button
                onClick={() => setActiveEra((prev) => (prev + 1) % timelineEvents.length)}
                variant="outline"
                size="lg"
                className="border-neural-accent/30 hover:border-neural-accent hover:bg-neural-accent/10 hover:scale-105 transition-all duration-300 group/next"
              >
                Next Era
                <span className="w-5 h-5 ml-2 group-hover/next:translate-x-1 transition-transform duration-300">→</span>
              </Button>
            </div>

            {/* Interactive Current Era Display */}
            <div className="bg-gradient-to-r from-neural-glow/10 to-neural-pulse/10 rounded-2xl p-6 border border-neural-line/30 backdrop-blur-sm hover:from-neural-glow/20 hover:to-neural-pulse/20 hover:border-neural-glow/50 transition-all duration-500 cursor-pointer group/era"
                 onClick={() => {
                   const currentEvent = timelineEvents[activeEra];
                   if (currentEvent?.path) {
                     window.location.href = currentEvent.path;
                   }
                 }}>
              <div className="relative">
                <h3 className="text-2xl font-semibold text-neural-glow mb-2 group-hover/era:scale-105 transition-transform duration-300">
                  {timelineEvents[activeEra]?.era}
                </h3>
                <p className="text-lg text-muted-foreground group-hover/era:text-foreground transition-colors duration-300">
                  {timelineEvents[activeEra]?.year} - {timelineEvents[activeEra]?.title}
                </p>
                <p className="text-sm text-muted-foreground/70 mt-2 group-hover/era:text-muted-foreground transition-colors duration-300">
                  {timelineEvents[activeEra]?.description}
                </p>
                
                {/* Era Progress Indicator */}
                <div className="mt-4 flex justify-center space-x-2">
                  {timelineEvents.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer hover:scale-150 ${
                        index === activeEra 
                          ? 'bg-neural-glow shadow-glow' 
                          : 'bg-neural-line/30 hover:bg-neural-glow/50'
                      }`}
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveEra(index);
                      }}
                    />
                  ))}
                </div>
                
                {timelineEvents[activeEra]?.path && (
                  <div className="absolute top-2 right-2 opacity-0 group-hover/era:opacity-100 transition-opacity duration-300">
                    <span className="text-xs text-neural-glow bg-neural-glow/20 px-2 py-1 rounded-full">
                      Click to explore
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* 3D Model Instructions */}
          <div className="mt-8 bg-background/70 backdrop-blur-md rounded-2xl p-6 border border-neural-line/20">
            <h4 className="text-lg font-semibold text-neural-glow mb-3">Explore the 3D Timeline</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-muted-foreground">
              <div className="text-center">
                <div className="w-8 h-8 bg-neural-glow/20 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-neural-glow font-bold">↻</span>
                </div>
                <p>Rotate to explore different angles of human evolution</p>
              </div>
              <div className="text-center">
                <div className="w-8 h-8 bg-neural-pulse/20 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-neural-pulse font-bold">⚡</span>
                </div>
                <p>Click on elements to discover hidden connections</p>
              </div>
              <div className="text-center">
                <div className="w-8 h-8 bg-neural-accent/20 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-neural-accent font-bold">⏳</span>
                </div>
                <p>Watch as time flows through consciousness</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Timeline Events */}
      <section className="py-20 px-6 relative overflow-hidden">
        {/* Animated Background Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-neural-glow/30 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${8 + Math.random() * 8}s`
              }}
            />
          ))}
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-neural-glow via-neural-pulse to-neural-glow bg-clip-text text-transparent mb-4">
              Timeline of Consciousness
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Navigate through the evolution of human thought and technology
            </p>
          </div>
          
          <div className="relative">
            {/* Enhanced Timeline Line with Gradient Flow */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-2 h-full rounded-full overflow-hidden">
              <div className="w-full h-full bg-gradient-to-b from-neural-glow via-neural-pulse to-neural-glow opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-transparent animate-pulse" />
            </div>
            
            {/* Timeline Events with Enhanced Animations */}
            <div className="space-y-20">
              {timelineEvents.map((event, index) => (
                <div
                  key={index}
                  data-event-index={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  } ${
                    visibleEvents.has(index) 
                      ? 'opacity-100 translate-y-0 scale-100' 
                      : 'opacity-0 translate-y-16 scale-95'
                  } transition-all duration-1000 ease-out transform-gpu`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  {/* Interactive Timeline Dot */}
                  <div 
                    className={`absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full border-4 transition-all duration-700 cursor-pointer hover:scale-150 z-20 group ${
                      activeEra === index 
                        ? 'bg-neural-glow border-neural-glow shadow-2xl shadow-neural-glow/50 animate-pulse scale-110' 
                        : visibleEvents.has(index)
                        ? 'bg-background border-neural-glow/80 hover:border-neural-glow shadow-lg hover:shadow-neural-glow/30'
                        : 'bg-background border-neural-line/40 hover:border-neural-glow/60'
                    }`}
                    onClick={() => setActiveEra(index)}
                  >
                    {/* Inner Glow Effect */}
                    <div className={`absolute inset-1 rounded-full transition-all duration-500 ${
                      activeEra === index 
                        ? 'bg-neural-glow/30 animate-ping' 
                        : 'bg-transparent group-hover:bg-neural-glow/20'
                    }`} />
                  </div>
                  
                  {/* Enhanced Event Card */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-12' : 'text-left pl-12'}`}>
                    <div 
                      className={`group relative overflow-hidden rounded-3xl backdrop-blur-xl border-2 p-8 transition-all duration-700 hover:scale-110 cursor-pointer transform-gpu ${
                        activeEra === index 
                          ? 'bg-neural-glow/15 border-neural-glow shadow-2xl shadow-neural-glow/30 scale-105' 
                          : 'bg-card/30 border-border/30 hover:bg-card/60 hover:border-neural-glow/60 hover:shadow-xl hover:shadow-neural-glow/20'
                      }`}
                      onClick={() => setActiveEra(index)}
                    >
                      {/* Animated Background Pattern */}
                      <div className="absolute inset-0 opacity-10">
                        <div className="absolute inset-0 bg-gradient-to-br from-neural-glow/20 via-transparent to-neural-pulse/20 animate-gradient-shift" />
                      </div>
                      
                      <div className="relative z-10">
                        {/* Year Badge */}
                        <div className={`inline-flex items-center gap-2 mb-4 ${
                          index % 2 === 0 ? 'justify-end' : 'justify-start'
                        }`}>
                          <span className={`text-sm font-mono px-4 py-2 rounded-full transition-all duration-500 ${
                            activeEra === index 
                              ? 'bg-neural-glow text-background shadow-lg' 
                              : 'bg-neural-glow/20 text-neural-glow group-hover:bg-neural-glow/30'
                          }`}>
                            {event.year}
                          </span>
                        </div>
                        
                        {/* Content */}
                        <h3 className={`text-2xl font-bold mb-3 transition-colors duration-500 ${
                          activeEra === index ? 'text-neural-glow' : 'text-foreground group-hover:text-neural-glow'
                        }`}>
                          {event.title}
                        </h3>
                        
                        <p className="text-muted-foreground mb-6 leading-relaxed group-hover:text-foreground/80 transition-colors duration-500">
                          {event.description}
                        </p>
                        
                        {/* Era Badge */}
                        <div className={`mb-4 ${
                          index % 2 === 0 ? 'text-right' : 'text-left'
                        }`}>
                          <span className="inline-block px-3 py-1 text-xs font-semibold bg-neural-pulse/20 text-neural-pulse rounded-full">
                            {event.era}
                          </span>
                        </div>
                        
                        {event.path && (
                          <div className={index % 2 === 0 ? 'text-right' : 'text-left'}>
                            <Button 
                              asChild 
                              variant="outline" 
                              size="sm" 
                              className={`transition-all duration-500 ${
                                activeEra === index 
                                  ? 'bg-neural-glow/20 border-neural-glow text-neural-glow hover:bg-neural-glow hover:text-background' 
                                  : 'group-hover:bg-neural-glow/20 group-hover:border-neural-glow group-hover:text-neural-glow'
                              }`}
                            >
                              <Link to={event.path} className="flex items-center gap-2">
                                Explore Era 
                                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                              </Link>
                            </Button>
                          </div>
                        )}
                      </div>
                      
                      {/* Enhanced Hover Effects */}
                      <div className="absolute inset-0 bg-gradient-to-br from-neural-glow/10 via-transparent to-neural-pulse/10 opacity-0 group-hover:opacity-100 transition-all duration-700" />
                      <div className="absolute -inset-1 bg-gradient-to-r from-neural-glow/20 to-neural-pulse/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl" />
                    </div>
                  </div>
                  
                  {/* Connection Lines */}
                  <div className={`w-5/12 flex items-center ${
                    index % 2 === 0 ? 'justify-start pl-12' : 'justify-end pr-12'
                  }`}>
                    <div className={`h-px bg-gradient-to-r transition-all duration-1000 ${
                      visibleEvents.has(index)
                        ? 'w-16 from-neural-glow/60 to-transparent opacity-100'
                        : 'w-0 opacity-0'
                    }`} style={{ transitionDelay: `${index * 150 + 300}ms` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-20 text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="outline" size="lg">
                <Link to="/">
                  ← Back to Journey
                </Link>
              </Button>
              <Button asChild size="lg" className="bg-gradient-to-r from-neural-glow to-neural-pulse hover:shadow-glow">
                <Link to="/explore-timeline">
                  🚀 Explore 3D Timeline
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/ancient">
                  Continue to Chapters →
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Timeline;