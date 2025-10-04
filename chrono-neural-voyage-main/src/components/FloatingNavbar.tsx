import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Brain, MessageCircle, X, Menu } from 'lucide-react';

const FloatingNavbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50">
      {/* Main floating container */}
      <div className={`bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl transition-all duration-300 ${
        isExpanded ? 'p-4 w-64' : 'p-3 w-14'
      }`}>
        
        {/* Toggle button */}
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full h-8 text-white hover:bg-white/20 rounded-xl mb-2"
        >
          {isExpanded ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </Button>

        {/* Navigation items */}
        <div className={`space-y-3 transition-all duration-300 ${
          isExpanded ? 'opacity-100 max-h-96' : 'opacity-0 max-h-0 overflow-hidden'
        }`}>
          
          {/* History AI Chat Button */}
          <Button
            asChild
            className="w-full bg-neural-glow hover:bg-neural-glow/90 text-black font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
          >
            <Link to="/history-ai" className="flex items-center gap-3 justify-start">
              <Brain className="w-5 h-5" />
              <span>History AI Chat</span>
            </Link>
          </Button>

          {/* Additional navigation items */}
          <Button
            asChild
            variant="outline"
            className="w-full border-white/30 text-white hover:bg-white/10 rounded-xl"
          >
            <Link to="/timeline" className="flex items-center gap-3 justify-start">
              <MessageCircle className="w-5 h-5" />
              <span>Timeline</span>
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            className="w-full border-white/30 text-white hover:bg-white/10 rounded-xl"
          >
            <Link to="/ancient" className="flex items-center gap-3 justify-start">
              <MessageCircle className="w-5 h-5" />
              <span>Explore</span>
            </Link>
          </Button>
        </div>

        {/* Collapsed state - show only AI icon */}
        {!isExpanded && (
          <div className="flex justify-center">
            <Button
              asChild
              size="sm"
              className="w-8 h-8 p-0 bg-neural-glow hover:bg-neural-glow/90 text-black rounded-lg"
            >
              <Link to="/history-ai">
                <Brain className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        )}
      </div>

      {/* Floating glow effect */}
      <div className="absolute inset-0 bg-neural-glow/20 rounded-2xl blur-xl -z-10 animate-pulse" />
    </div>
  );
};

export default FloatingNavbar;
