import { useEffect, useState } from 'react';
import { ArrowLeft, Clock, Zap, Brain, Cpu, Globe, Rocket, Atom } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
const ExploreTimeline = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  const [isInteracting, setIsInteracting] = useState(false);
  const [navPosition, setNavPosition] = useState({ x: 0, y: 24 }); // Initial position (centered x, 24px from top)
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });

      // Handle dragging
      if (isDragging) {
        setNavPosition({
          x: e.clientX - dragStart.x,
          y: e.clientY - dragStart.y
        });
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, dragStart]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({
      x: e.clientX - navPosition.x,
      y: e.clientY - navPosition.y
    });
  };

  const handleLinkClick = (e: React.MouseEvent) => {
    if (isDragging) {
      e.preventDefault();
    }
  };
  const explorationAreas = [{
    title: "Ancient Consciousness",
    description: "Explore the birth of self-awareness in early civilizations",
    icon: <Brain className="w-6 h-6" />,
    color: "amber",
    position: "top-20 left-20"
  }, {
    title: "Digital Networks",
    description: "Discover how information flows through artificial systems",
    icon: <Globe className="w-6 h-6" />,
    color: "cyan",
    position: "top-32 right-32"
  }, {
    title: "Neural Evolution",
    description: "Watch the development of artificial neural networks",
    icon: <Cpu className="w-6 h-6" />,
    color: "purple",
    position: "bottom-40 left-1/3"
  }, {
    title: "Future Synthesis",
    description: "Experience the convergence of human and artificial intelligence",
    icon: <Rocket className="w-6 h-6" />,
    color: "emerald",
    position: "bottom-20 right-20"
  }];
  return <main className="min-h-screen bg-gradient-to-br from-background via-neural-bg to-background overflow-hidden">
      {/* Full-Screen 3D Model Container */}
      <section className="relative h-screen w-full">
        {/* 3D Spline Model - Full Screen */}
        <div className="absolute inset-0 w-full h-full">
          <iframe src='https://my.spline.design/r4xbot-yxkHbOBzMu0bL9qGYZy0UOhB/' frameBorder='0' width='100%' height='100%' className="pointer-events-auto" title="Explore Timeline 3D Model" onMouseEnter={() => setIsInteracting(true)} onMouseLeave={() => setIsInteracting(false)} />
        </div>

        {/* Draggable Navigation Bar */}
        <nav 
          className={`fixed z-50 bg-white/10 backdrop-blur-xl rounded-full px-8 py-4 border border-white/20 shadow-2xl hover:shadow-white/10 transition-all duration-300 ${
            isDragging ? 'cursor-grabbing scale-105' : 'cursor-grab'
          }`}
          style={{
            left: `calc(50% + ${navPosition.x}px)`,
            top: `${navPosition.y}px`,
            transform: 'translateX(-50%)'
          }}
          onMouseDown={handleMouseDown}
        >
          <div className="flex items-center gap-8">
            <Link to="/" onClick={handleLinkClick} className="text-white/90 hover:text-white text-sm font-medium transition-colors duration-200 hover:scale-105 transform">
              Home
            </Link>
            <Link to="/about" onClick={handleLinkClick} className="text-white/90 hover:text-white text-sm font-medium transition-colors duration-200 hover:scale-105 transform">
              About
            </Link>
            <Link to="/contact" onClick={handleLinkClick} className="text-white/90 hover:text-white text-sm font-medium transition-colors duration-200 hover:scale-105 transform">
              Contact
            </Link>
            <Link to="/login" onClick={handleLinkClick} className="text-white/90 hover:text-white text-sm font-medium px-4 py-2 rounded-full border border-white/30 hover:bg-white/10 transition-all duration-200">
              Login
            </Link>
          </div>
        </nav>

        {/* Dynamic Mouse-Following Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-4 h-4 bg-neural-glow rounded-full opacity-30 pointer-events-none transition-all duration-100 ease-out" style={{
            left: mousePosition.x - 8,
            top: mousePosition.y - 8,
            opacity: isInteracting ? 0.7 : 0.3,
            transform: `scale(${isInteracting ? 1.5 : 1})`
          }} />
          <div className="absolute w-2 h-2 bg-neural-accent rounded-full opacity-50 pointer-events-none transition-all duration-200 ease-out" style={{
            left: mousePosition.x - 4 + Math.sin(Date.now() / 1000) * 20,
            top: mousePosition.y - 4 + Math.cos(Date.now() / 1000) * 20
          }} />
        </div>

        {/* Top Navigation Bar */}
        <div className="absolute top-0 left-0 right-0 z-20 p-6">
          <div className="flex justify-between items-center">
            <Button asChild variant="outline" className="bg-background/80 backdrop-blur-lg border-neural-line/30 hover:bg-neural-glow/10">
              <Link to="/timeline">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Timeline
              </Link>
            </Button>
            
            <div className="bg-background/80 backdrop-blur-lg rounded-full px-6 py-3 border border-neural-line/30">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-neural-glow animate-pulse" />
                <span className="font-medium text-neural-glow">Explore Mode</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Info Panel */}
        <div className="absolute bottom-0 left-0 right-0 z-20 p-6">
          <div className="bg-background/90 backdrop-blur-lg rounded-2xl border border-neural-line/30 shadow-2xl">
            
          </div>
        </div>

        {/* Ambient Particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(15)].map((_, i) => <div key={i} className={`absolute w-2 h-2 bg-neural-glow/30 rounded-full animate-float`} style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 8}s`,
          animationDuration: `${6 + Math.random() * 6}s`
        }} />)}
        </div>
      </section>
    </main>;
};
export default ExploreTimeline;