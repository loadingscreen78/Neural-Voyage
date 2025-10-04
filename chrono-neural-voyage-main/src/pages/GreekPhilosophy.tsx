import ChapterTemplate from './ChapterTemplate';
import { Brain, Lightbulb, Users, Award } from 'lucide-react';

const GreekPhilosophy = () => {
  const chapterData = {
    title: "Greek Philosophy",
    subtitle: "The Birth of Rational Thought",
    era: "800 BCE - 600 CE",
    description: "Explore the philosophical foundations that shaped Western thought, from the Socratic method to Platonic ideals and Aristotelian logic.",
    backgroundImage: "/src/assets/greek-columns.jpg",
    color: "blue",
    content: {
      facts: [
        {
          icon: <Brain className="w-6 h-6 text-blue-600" />,
          title: "The Academy",
          description: "Plato's school of higher learning, founded in 387 BCE, considered the first institution of higher education in the Western world.",
          size: 'large' as const
        },
        {
          icon: <Lightbulb className="w-6 h-6 text-blue-600" />,
          title: "Socratic Method",
          description: "A form of inquiry based on asking questions to stimulate critical thinking and illuminate ideas.",
          size: 'medium' as const
        },
        {
          icon: <Users className="w-6 h-6 text-blue-600" />,
          title: "Democracy",
          description: "Athens developed the world's first democracy, where citizens could participate in decision-making.",
          size: 'small' as const
        },
        {
          icon: <Award className="w-6 h-6 text-blue-600" />,
          title: "Aristotelian Logic",
          description: "Aristotle's systematic approach to reasoning became the foundation of logical thinking.",
          size: 'medium' as const
        }
      ],
      quotes: [
        {
          text: "The unexamined life is not worth living.",
          author: "Socrates"
        },
        {
          text: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
          author: "Aristotle"
        }
      ]
    }
  };

  return <ChapterTemplate {...chapterData} />;
};

export default GreekPhilosophy;