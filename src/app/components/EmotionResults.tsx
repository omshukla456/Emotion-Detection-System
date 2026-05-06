import { motion } from 'motion/react';
import { ArrowLeft, Music, Video, Quote, Lightbulb, Activity } from 'lucide-react';
import type { Emotion, Recommendations } from '../App';
import { MusicCard } from './MusicCard';
import { VideoCard } from './VideoCard';
import { ActivityCard } from './ActivityCard';
import { QuoteCard } from './QuoteCard';
import { MoodChallenge } from './MoodChallenge';
import { getSmartMusicContent, getSmartVideoContent, getSmartActivityContent, getSmartQuoteContent } from '../utils/smartRecommendationEngine';

interface EmotionResultsProps {
  emotion: Emotion;
  recommendations: Recommendations;
  onReset: () => void;
  userInput: string;
}

export function EmotionResults({ emotion, recommendations, onReset, userInput }: EmotionResultsProps) {
  // Get smart content that avoids repetition
  const musicContent = getSmartMusicContent(emotion.primary, 4);
  const videoContent = getSmartVideoContent(emotion.primary, 3);
  const activityContent = getSmartActivityContent(emotion.primary, 3);
  const quoteContent = getSmartQuoteContent(emotion.primary, 3);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="space-y-8"
    >
      {/* Back Button */}
      <button
        onClick={onReset}
        className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
      >
        <ArrowLeft className="w-5 h-5" />
        Analyze Again
      </button>

      {/* Interactive Mood Challenge - Replaces emotion display */}
      <MoodChallenge emotion={emotion.primary} intensity={emotion.intensity} />

      {/* Music Section */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 rounded-xl bg-purple-900/50 backdrop-blur-sm border border-purple-500/30">
            <Music className="w-6 h-6 text-purple-400" />
          </div>
          <h3 className="text-2xl text-gray-100">Music for Your Mood</h3>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {musicContent.map((item, index) => (
            <MusicCard key={index} item={item} index={index} color="purple" />
          ))}
        </div>
      </section>

      {/* Videos Section */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 rounded-xl bg-violet-900/50 backdrop-blur-sm border border-violet-500/30">
            <Video className="w-6 h-6 text-violet-400" />
          </div>
          <h3 className="text-2xl text-gray-100">Videos to Watch</h3>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {videoContent.map((item, index) => (
            <VideoCard key={index} item={item} index={index} color="violet" />
          ))}
        </div>
      </section>

      {/* Quotes Section */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 rounded-xl bg-purple-900/50 backdrop-blur-sm border border-purple-500/30">
            <Quote className="w-6 h-6 text-purple-300" />
          </div>
          <h3 className="text-2xl text-gray-100">Inspirational Quotes</h3>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {quoteContent.map((quote, index) => (
            <QuoteCard key={index} quote={quote} index={index} color="purple" />
          ))}
        </div>
      </section>

      {/* Activities Section */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 rounded-xl bg-indigo-900/50 backdrop-blur-sm border border-indigo-500/30">
            <Activity className="w-6 h-6 text-indigo-400" />
          </div>
          <h3 className="text-2xl text-gray-100">Activities to Try</h3>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {activityContent.map((item, index) => (
            <ActivityCard key={index} item={item} index={index} color="indigo" />
          ))}
        </div>
      </section>

      {/* Suggestions Section */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 rounded-xl bg-violet-900/50 backdrop-blur-sm border border-violet-500/30">
            <Lightbulb className="w-6 h-6 text-violet-400" />
          </div>
          <h3 className="text-2xl text-gray-100">Personalized Suggestions</h3>
        </div>
        <div className="space-y-3">
          {recommendations.suggestions.map((suggestion, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-r from-violet-900/30 to-purple-900/30 backdrop-blur-sm rounded-2xl p-6 border border-violet-500/30"
            >
              <p className="text-gray-300 leading-relaxed">{suggestion}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}

function getEmotionEmoji(emotion: string): string {
  const emojiMap: Record<string, string> = {
    happy: '😊',
    joyful: '😄',
    excited: '🤩',
    sad: '😢',
    anxious: '😰',
    stressed: '😓',
    angry: '😠',
    calm: '😌',
    grateful: '🙏',
    confident: '💪',
    lonely: '😔',
    content: '😊',
    overwhelmed: '😵',
    hopeful: '🌟',
    frustrated: '😤',
    peaceful: '☮️',
    energetic: '⚡',
    tired: '😴',
    motivated: '🔥',
    melancholic: '🌧️'
  };

  return emojiMap[emotion.toLowerCase()] || '😊';
}