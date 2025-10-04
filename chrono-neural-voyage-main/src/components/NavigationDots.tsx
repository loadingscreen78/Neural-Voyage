import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const sections = [
  { id: 'hero', label: 'Beginning' },
  { id: 'bento-timeline', label: 'Timeline' },
  { id: 'ancient-civilizations', label: 'Ancient' },
  { id: 'greek-philosophy', label: 'Greek' },
  { id: 'roman-empire', label: 'Roman' },
  { id: 'medieval-era', label: 'Medieval' },
  { id: 'renaissance', label: 'Renaissance' },
  { id: 'future-vision', label: 'Future' }
];

const NavigationDots = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block">
      <div className="flex flex-col space-y-3">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className={cn(
              "group relative w-3 h-3 rounded-full transition-all duration-300",
              activeSection === section.id
                ? "bg-neural-glow shadow-glow"
                : "bg-neural-line/30 hover:bg-neural-glow/50"
            )}
          >
            <span className="absolute right-6 top-1/2 transform -translate-y-1/2 whitespace-nowrap text-sm font-body opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full border border-neural-line/20">
              {section.label}
            </span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default NavigationDots;