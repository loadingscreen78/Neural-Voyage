import ChapterTemplate from './ChapterTemplate';
import { Pyramid, Scroll, Sun, Eye } from 'lucide-react';

const AncientCivilizations = () => {
  const chapterData = {
    title: "Ancient Civilizations",
    subtitle: "The Dawn of Human Consciousness",
    era: "3500 BCE - 500 CE",
    description: "Journey through the earliest expressions of human thought, from Mesopotamian cuneiform to Egyptian hieroglyphs, where the first seeds of structured knowledge were planted.",
    backgroundImage: "/src/assets/ancient-tablet.jpg",
    color: "amber",
    content: {
      facts: [
        {
          icon: <Pyramid className="w-6 h-6 text-amber-600" />,
          title: "The Great Library of Alexandria",
          description: "Founded around 295 BCE, it housed over 400,000 scrolls containing the world's knowledge.",
          size: 'large' as const
        },
        {
          icon: <Scroll className="w-6 h-6 text-amber-600" />,
          title: "Cuneiform Writing",
          description: "The world's first writing system, developed in Mesopotamia around 3200 BCE.",
          size: 'medium' as const
        },
        {
          icon: <Sun className="w-6 h-6 text-amber-600" />,
          title: "Egyptian Calendar",
          description: "Ancient Egyptians created a 365-day calendar based on astronomical observations.",
          size: 'small' as const
        },
        {
          icon: <Eye className="w-6 h-6 text-amber-600" />,
          title: "Code of Hammurabi",
          description: "One of the earliest written legal codes, establishing justice and order in society.",
          size: 'medium' as const
        }
      ],
      quotes: [
        {
          text: "The beginning of wisdom is the definition of terms.",
          author: "Socrates"
        },
        {
          text: "All things are full of gods.",
          author: "Thales of Miletus"
        }
      ]
    }
  };

  return <ChapterTemplate {...chapterData} />;
};

export default AncientCivilizations;