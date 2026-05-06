import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, X, Video as VideoIcon } from 'lucide-react';
import type { VideoItem } from '../utils/contentData';

interface VideoCardProps {
  item: VideoItem;
  index: number;
  color: string;
}

export function VideoCard({ item, index, color }: VideoCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
        className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 cursor-pointer border border-purple-500/20"
        onClick={() => setIsPlaying(true)}
      >
        {/* Thumbnail */}
        <div className="relative aspect-video bg-gradient-to-br from-gray-700 to-gray-800 overflow-hidden">
          <img
            src={`https://img.youtube.com/vi/${item.youtubeId}/hqdefault.jpg`}
            alt={item.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            onError={(e) => {
              // Fallback to default quality if high quality fails
              const target = e.target as HTMLImageElement;
              if (target.src.includes('hqdefault')) {
                target.src = `https://img.youtube.com/vi/${item.youtubeId}/mqdefault.jpg`;
              }
            }}
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
          <div className={`absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity`}>
            <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${getColorGradient(color)} flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform`}>
              <Play className="w-8 h-8 text-white ml-1" />
            </div>
          </div>
        </div>
        
        {/* Content */}
        <div className="p-4">
          <h4 className="text-gray-100 mb-1 line-clamp-2">{item.title}</h4>
          {item.description && (
            <p className="text-sm text-gray-400 line-clamp-1">{item.description}</p>
          )}
        </div>
      </motion.div>

      <AnimatePresence>
        {isPlaying && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setIsPlaying(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-6xl bg-gray-900/90 backdrop-blur-lg rounded-3xl overflow-hidden shadow-2xl border border-purple-500/30"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsPlaying(false)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-purple-600/80 hover:bg-purple-600 rounded-full flex items-center justify-center transition-colors"
              >
                <X className="w-6 h-6 text-white" />
              </button>
              
              <div className={`h-2 bg-gradient-to-r ${getColorGradient(color)}`} />
              
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-2xl text-gray-100">{item.title}</h3>
                  {item.description && (
                    <p className="text-gray-400">{item.description}</p>
                  )}
                </div>
                
                <div className="relative aspect-video rounded-2xl overflow-hidden bg-black">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${item.youtubeId}?autoplay=1`}
                    title={item.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
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
  return gradients[color] || 'from-pink-500 to-pink-600';
}