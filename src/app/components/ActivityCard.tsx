import { motion } from 'motion/react';
import { Clock, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';
import type { ActivityItem } from '../utils/contentData';

interface ActivityCardProps {
  item: ActivityItem;
  index: number;
  color: string;
}

export function ActivityCard({ item, index, color }: ActivityCardProps) {
  const [isCompleted, setIsCompleted] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1 }}
      className={`group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 border-2 ${
        isCompleted ? `border-${color}-500` : 'border-purple-500/20'
      }`}
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-900">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent`} />
        
        {/* Duration Badge */}
        <div className="absolute top-3 right-3 bg-purple-900/80 backdrop-blur-sm text-purple-100 px-3 py-1.5 rounded-full flex items-center gap-1.5 text-sm border border-purple-500/30">
          <Clock className="w-4 h-4" />
          {item.duration}
        </div>
        
        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h4 className="text-white text-xl">{item.title}</h4>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-4">
        <p className="text-gray-300 mb-4">{item.description}</p>
        
        <button
          onClick={() => setIsCompleted(!isCompleted)}
          className={`w-full py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all ${
            isCompleted
              ? `bg-gradient-to-r ${getColorGradient(color)} text-white`
              : 'bg-gray-700/50 text-gray-300 hover:bg-gray-700/70 border border-purple-500/20'
          }`}
        >
          <CheckCircle2 className={`w-5 h-5 ${isCompleted ? 'fill-current' : ''}`} />
          {isCompleted ? 'Completed!' : 'Mark as Done'}
        </button>
      </div>
    </motion.div>
  );
}

function getColorGradient(color: string): string {
  const gradients: Record<string, string> = {
    purple: 'from-purple-500 to-purple-600',
    pink: 'from-pink-500 to-pink-600',
    indigo: 'from-indigo-500 to-indigo-600',
    blue: 'from-blue-500 to-blue-600',
    violet: 'from-violet-500 to-violet-600'
  };
  return gradients[color] || gradients.blue;
}