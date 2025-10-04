import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '@/components/HeroSection';
import BentoTimeline from '@/components/BentoTimeline';
import StorySection from '@/components/StorySection';
import NavigationDots from '@/components/NavigationDots';
import FloatingNavbar from '@/components/FloatingNavbar';
import { Button } from '@/components/ui/button';
import { ArrowRight, Scroll, Columns3, Sword, Palette, Rocket, Brain, Sparkles, Zap } from 'lucide-react';

// Import generated images
import ancientTablet from '@/assets/ancient-tablet.jpg';
import greekColumns from '@/assets/greek-columns.jpg';
import neuralFuture from '@/assets/neural-future.jpg';

const Index = () => {
  useEffect(() => {
    // Smooth scroll behavior for the entire page
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <main className="relative overflow-x-hidden">
      {/* Navigation Dots */}
      <NavigationDots />

      {/* Floating Navbar */}
      <FloatingNavbar />

      {/* Hero Section with Enhanced 3D Background */}
      <div id="hero">
        <HeroSection />
      </div>

      {/* Bento Grid Timeline Section */}
      <BentoTimeline />

      {/* Ancient Civilizations */}
      <StorySection
        id="ancient-civilizations"
        title="Chapter I"
        subtitle="Ancient Civilizations"
        description="In the dawn of human consciousness, our ancestors carved knowledge into stone and clay. From Mesopotamian cuneiform to Egyptian hieroglyphs, the first recorded thoughts emerged—laying the foundation for all knowledge to come."
        era="era-ancient"
        backgroundElement={
          <div 
            className="w-full h-full bg-cover bg-center opacity-20"
            style={{ backgroundImage: `url(${ancientTablet})` }}
          />
        }
      >
        <div className="flex flex-wrap gap-4">
          <Button variant="outline" className="border-amber-600 text-amber-700 hover:bg-amber-50">
            <Scroll className="mr-2 w-4 h-4" />
            Explore Hieroglyphs
          </Button>
          <Button variant="ghost" className="text-amber-600 hover:text-amber-700">
            Learn More <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </StorySection>

      {/* Greek Philosophy */}
      <StorySection
        id="greek-philosophy"
        title="Chapter II"
        subtitle="Greek Philosophy & Democracy"
        description="The birthplace of rational thought and democratic ideals. Here, Socrates questioned everything, Plato envisioned perfect forms, and Aristotle categorized the natural world. Philosophy became the first science of the mind."
        era="era-greek"
        backgroundElement={
          <div 
            className="w-full h-full bg-cover bg-center opacity-20"
            style={{ backgroundImage: `url(${greekColumns})` }}
          />
        }
      >
        <div className="flex flex-wrap gap-4">
          <Button variant="outline" className="border-blue-600 text-blue-700 hover:bg-blue-50">
            <Columns3 className="mr-2 w-4 h-4" />
            Philosophical Methods
          </Button>
          <Button variant="ghost" className="text-blue-600 hover:text-blue-700">
            Democratic Ideas <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </StorySection>

      {/* Roman Empire */}
      <StorySection
        id="roman-empire"
        title="Chapter III"
        subtitle="Roman Empire & Engineering"
        description="Rome transformed philosophy into practice, creating the first global information network. Aqueducts, roads, and the Colosseum demonstrated systematic thinking at planetary scale—the first glimpse of engineered intelligence."
        era="era-roman"
      >
        <div className="flex flex-wrap gap-4">
          <Button variant="outline" className="border-red-600 text-red-700 hover:bg-red-50">
            <Sword className="mr-2 w-4 h-4" />
            Roman Innovations
          </Button>
          <Button variant="ghost" className="text-red-600 hover:text-red-700">
            Engineering Marvels <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </StorySection>

      {/* Medieval Era */}
      <StorySection
        id="medieval-era"
        title="Chapter IV"
        subtitle="Medieval Era"
        description="In cathedral schools and monasteries, knowledge was preserved through the Dark Ages. Illuminated manuscripts and Gothic architecture revealed humanity's drive to reach toward the divine—preparing the mind for scientific revolution."
        era="era-medieval"
      >
        <div className="flex flex-wrap gap-4">
          <Button variant="outline" className="border-gray-400 text-gray-300 hover:bg-gray-800">
            <Scroll className="mr-2 w-4 h-4" />
            Illuminated Texts
          </Button>
          <Button variant="ghost" className="text-gray-300 hover:text-gray-200">
            Gothic Innovation <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </StorySection>

      {/* Renaissance */}
      <StorySection
        id="renaissance"
        title="Chapter V"
        subtitle="Renaissance Art & Science"
        description="Leonardo da Vinci sketched flying machines and anatomical studies. Art and science merged as one discipline. The human mind began modeling itself—the first steps toward understanding consciousness as computable patterns."
        era="era-renaissance"
      >
        <div className="flex flex-wrap gap-4">
          <Button variant="outline" className="border-purple-600 text-purple-700 hover:bg-purple-50">
            <Palette className="mr-2 w-4 h-4" />
            Da Vinci Studies
          </Button>
          <Button variant="ghost" className="text-purple-600 hover:text-purple-700">
            Scientific Method <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </StorySection>

      {/* Future Vision */}
      <StorySection
        id="future-vision"
        title="Chapter XVI"
        subtitle="Future Vision"
        description="We stand at the threshold of a new era where human consciousness and artificial intelligence merge into something unprecedented. Neural networks mirror the very patterns of thought, creating infinite possibilities for collective intelligence."
        era="era-future"
        backgroundElement={
          <div 
            className="w-full h-full bg-cover bg-center opacity-30"
            style={{ backgroundImage: `url(${neuralFuture})` }}
          />
        }
      >
        <div className="flex flex-wrap gap-4">
          <Button className="bg-neural-glow hover:bg-neural-glow/90 text-neural-line glow-on-hover">
            <Brain className="mr-2 w-4 h-4" />
            Neural Networks
          </Button>
          <Button variant="outline" className="border-neural-accent text-neural-accent hover:bg-neural-accent/10">
            <Rocket className="mr-2 w-4 h-4" />
            Beyond Tomorrow
          </Button>
        </div>
      </StorySection>

      {/* Call to Action Section */}
      <section className="section-container bg-gradient-to-br from-neural-glow/5 to-neural-accent/5 relative overflow-hidden">
        <div className="neural-bg animate-neural-pulse" />
        
        <div className="section-content text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-neural-line via-neural-glow to-neural-accent bg-clip-text text-transparent">
              Continue the Journey
            </h2>
            
            <p className="font-body text-xl text-foreground-muted mb-12 max-w-2xl mx-auto">
              This is just the beginning. Explore all 16 chapters of human evolution, 
              from ancient wisdom to the neural networks of tomorrow.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-neural-glow to-neural-pulse text-background hover:shadow-glow transition-all">
              <Link to="/ancient">Explore All Chapters</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-neural-line/30 hover:border-neural-glow hover:bg-neural-glow/10 transition-all">
              <Link to="/timeline">Interactive Timeline</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-neural-accent/30 hover:border-neural-accent hover:bg-neural-accent/10 transition-all">
              <Link to="/history-ai" className="flex items-center gap-2">
                <Brain className="w-4 h-4" />
                History AI Chat
              </Link>
            </Button>
            </div>
          </div>
        </div>

        {/* Floating Neural Elements */}
        <div className="absolute top-1/4 left-10 w-3 h-3 bg-neural-glow rounded-full animate-glow-pulse" />
        <div className="absolute top-1/3 right-20 w-2 h-2 bg-neural-accent rounded-full animate-neural-pulse" />
        <div className="absolute bottom-1/4 left-1/3 w-2.5 h-2.5 bg-neural-silver rounded-full animate-glow-pulse" style={{ animationDelay: '1.5s' }} />
        <div className="absolute bottom-1/3 right-1/4 w-1.5 h-1.5 bg-neural-glow rounded-full animate-neural-pulse" style={{ animationDelay: '2.5s' }} />
      </section>
    </main>
  );
};

export default Index;