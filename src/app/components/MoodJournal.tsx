import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, Calendar, Trash2, Search, Filter } from 'lucide-react';
import { useState } from 'react';
import { getMoodHistory, type MoodEntry } from '../utils/moodStorage';

export function MoodJournal() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterEmotion, setFilterEmotion] = useState('all');
  const [sortBy, setSortBy] = useState<'newest' | 'oldest'>('newest');

  let history = getMoodHistory();

  // Filter by emotion
  if (filterEmotion !== 'all') {
    history = history.filter(entry => entry.emotion.toLowerCase() === filterEmotion.toLowerCase());
  }

  // Filter by search term
  if (searchTerm) {
    history = history.filter(entry =>
      entry.userInput.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  // Sort
  history = [...history].sort((a, b) =>
    sortBy === 'newest' ? b.timestamp - a.timestamp : a.timestamp - b.timestamp
  );

  // Get unique emotions for filter
  const allHistory = getMoodHistory();
  const uniqueEmotions = Array.from(new Set(allHistory.map(e => e.emotion)));

  if (allHistory.length === 0) {
    return (
      <div className="text-center py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-br from-gray-900/50 to-purple-900/30 backdrop-blur-sm rounded-3xl p-12 border border-purple-500/30"
        >
          <BookOpen className="w-16 h-16 text-purple-400 mx-auto mb-4" />
          <h3 className="text-2xl text-gray-100 mb-2">Your Journal is Empty</h3>
          <p className="text-gray-400">Start analyzing your moods to build your personal journal!</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-xl bg-gradient-to-br from-purple-600/50 to-violet-600/50 backdrop-blur-sm border border-purple-500/30">
            <BookOpen className="w-6 h-6 text-purple-300" />
          </div>
          <div>
            <h2 className="text-3xl text-transparent bg-gradient-to-r from-purple-300 via-violet-300 to-fuchsia-300 bg-clip-text">
              Mood Journal
            </h2>
            <p className="text-gray-400">{allHistory.length} entries recorded</p>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-gradient-to-br from-gray-900/80 to-purple-900/40 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/30">
        <div className="grid md:grid-cols-3 gap-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input
              type="text"
              placeholder="Search your thoughts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-gray-100 placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
            />
          </div>

          {/* Emotion Filter */}
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            <select
              value={filterEmotion}
              onChange={(e) => setFilterEmotion(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-gray-100 focus:outline-none focus:border-purple-500 transition-colors appearance-none cursor-pointer"
            >
              <option value="all">All Emotions</option>
              {uniqueEmotions.map(emotion => (
                <option key={emotion} value={emotion}>{emotion}</option>
              ))}
            </select>
          </div>

          {/* Sort */}
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'newest' | 'oldest')}
              className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-gray-100 focus:outline-none focus:border-purple-500 transition-colors appearance-none cursor-pointer"
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
            </select>
          </div>
        </div>
      </div>

      {/* Entries */}
      <div className="space-y-4">
        <AnimatePresence mode="popLayout">
          {history.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-12 bg-gradient-to-br from-gray-900/50 to-purple-900/30 backdrop-blur-sm rounded-2xl border border-purple-500/20"
            >
              <p className="text-gray-400">No entries match your filters</p>
            </motion.div>
          ) : (
            history.map((entry, index) => (
              <JournalEntry key={entry.id} entry={entry} index={index} />
            ))
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function JournalEntry({ entry, index }: { entry: MoodEntry; index: number }) {
  const date = new Date(entry.timestamp);
  const emoji = getEmotionEmoji(entry.emotion);
  const gradient = getEmotionGradient(entry.emotion);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ delay: Math.min(index * 0.05, 0.3) }}
      className="group relative bg-gradient-to-br from-gray-900/80 to-purple-900/30 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/30 hover:border-purple-500/50 transition-all"
    >
      {/* Decorative gradient line */}
      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${gradient} rounded-t-2xl`} />

      <div className="flex items-start gap-4">
        {/* Emotion Badge */}
        <div className="flex-shrink-0">
          <div className={`w-16 h-16 bg-gradient-to-br ${gradient} rounded-2xl flex items-center justify-center text-3xl shadow-lg`}>
            {emoji}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between mb-3">
            <div>
              <h3 className="text-xl text-gray-100 mb-1 capitalize">{entry.emotion}</h3>
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <span>{date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                <span>•</span>
                <span>{date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })}</span>
              </div>
            </div>

            {/* Intensity Badge */}
            <div className="flex-shrink-0 px-3 py-1 bg-purple-600/30 rounded-full border border-purple-500/30">
              <span className="text-sm text-purple-300">Intensity: {entry.intensity}</span>
            </div>
          </div>

          {/* User Input */}
          <div className="bg-gray-800/30 rounded-xl p-4 border border-gray-700/50">
            <p className="text-gray-300 leading-relaxed">{entry.userInput}</p>
          </div>

          {/* Secondary Emotion */}
          {entry.secondary && (
            <div className="mt-3 flex items-center gap-2">
              <span className="text-sm text-gray-500">Also feeling:</span>
              <span className="px-3 py-1 bg-violet-600/20 rounded-full border border-violet-500/30 text-sm text-violet-300 capitalize">
                {entry.secondary}
              </span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function getEmotionEmoji(emotion: string): string {
  const emojiMap: Record<string, string> = {
    happy: '😊', joyful: '😄', excited: '🤩', sad: '😢', anxious: '😰',
    stressed: '😓', angry: '😠', calm: '😌', grateful: '🙏', confident: '💪',
    lonely: '😔', content: '😊', overwhelmed: '😵', hopeful: '🌟',
    frustrated: '😤', peaceful: '☮️', energetic: '⚡', tired: '😴',
    motivated: '🔥', melancholic: '🌧️', depressed: '😞', bored: '😑',
    curious: '🤔', inspired: '💡', loving: '❤️'
  };
  return emojiMap[emotion.toLowerCase()] || '😊';
}

function getEmotionGradient(emotion: string): string {
  const gradients: Record<string, string> = {
    happy: 'from-yellow-500 to-orange-500',
    joyful: 'from-pink-500 to-rose-500',
    excited: 'from-purple-500 to-pink-500',
    sad: 'from-blue-600 to-indigo-700',
    anxious: 'from-orange-600 to-red-600',
    stressed: 'from-red-600 to-rose-700',
    angry: 'from-red-500 to-red-700',
    calm: 'from-teal-500 to-cyan-600',
    grateful: 'from-green-500 to-emerald-600',
    confident: 'from-indigo-500 to-purple-600',
    tired: 'from-gray-500 to-gray-600',
    motivated: 'from-orange-500 to-red-500'
  };
  return gradients[emotion.toLowerCase()] || 'from-purple-500 to-violet-600';
}
