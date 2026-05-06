import { motion } from 'motion/react';
import { Quote, Share2, Heart } from 'lucide-react';
import { useState } from 'react';

interface QuoteCardProps {
  quote: string;
  index: number;
  color: string;
}

export function QuoteCard({ quote, index, color }: QuoteCardProps) {
  const [isLiked, setIsLiked] = useState(false);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        text: quote,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(quote);
      alert('Quote copied to clipboard!');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15 }}
      className={`relative bg-gradient-to-br ${getColorGradient(color)} backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 border border-purple-400/20`}
    >
      <Quote className="w-10 h-10 text-white/30 mb-4" />
      
      <p className="text-white text-lg leading-relaxed mb-6 italic">
        {quote}
      </p>
      
      <div className="flex items-center gap-3">
        <button
          onClick={() => setIsLiked(!isLiked)}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all ${
            isLiked
              ? 'bg-white text-red-500'
              : 'bg-white/20 text-white hover:bg-white/30'
          }`}
        >
          <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
          {isLiked ? 'Loved' : 'Love this'}
        </button>
        
        <button
          onClick={handleShare}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/20 text-white hover:bg-white/30 transition-all"
        >
          <Share2 className="w-5 h-5" />
          Share
        </button>
      </div>
    </motion.div>
  );
}

function getColorGradient(color: string): string {
  const gradients: Record<string, string> = {
    purple: 'from-purple-700/80 to-purple-800/80',
    pink: 'from-pink-700/80 to-pink-800/80',
    indigo: 'from-indigo-700/80 to-indigo-800/80',
    blue: 'from-blue-700/80 to-blue-800/80',
    violet: 'from-violet-700/80 to-violet-800/80'
  };
  return gradients[color] || gradients.purple;
}