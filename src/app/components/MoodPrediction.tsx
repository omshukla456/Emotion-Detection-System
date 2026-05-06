import { motion } from 'motion/react';
import { Brain, TrendingUp, Clock, Calendar } from 'lucide-react';
import { getMoodHistory } from '../utils/moodStorage';

export function MoodPrediction() {
  const prediction = predictNextMood();

  if (!prediction) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-br from-gray-900/50 to-purple-900/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30 text-center"
      >
        <Brain className="w-12 h-12 text-purple-400 mx-auto mb-4" />
        <h3 className="text-xl text-gray-100 mb-2">Not Enough Data</h3>
        <p className="text-gray-400">Track more moods to get AI predictions!</p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gradient-to-br from-purple-900/40 via-violet-900/30 to-fuchsia-900/40 backdrop-blur-lg rounded-3xl p-8 border border-purple-500/30 shadow-2xl overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-purple-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 rounded-xl bg-gradient-to-br from-purple-600 to-violet-600 shadow-lg">
            <Brain className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-2xl text-transparent bg-gradient-to-r from-purple-300 via-violet-300 to-fuchsia-300 bg-clip-text">
              AI Mood Prediction
            </h3>
            <p className="text-sm text-gray-400">Based on your patterns</p>
          </div>
        </div>

        {/* Prediction */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Main Prediction */}
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20">
            <div className="flex items-center gap-2 mb-4">
              <Clock className="w-5 h-5 text-purple-400" />
              <span className="text-sm text-gray-400">Next Expected Mood</span>
            </div>
            
            <div className="flex items-center gap-4 mb-4">
              <div className={`w-16 h-16 bg-gradient-to-br ${getEmotionGradient(prediction.emotion)} rounded-2xl flex items-center justify-center text-3xl shadow-lg`}>
                {getEmotionEmoji(prediction.emotion)}
              </div>
              <div>
                <h4 className="text-2xl text-gray-100 capitalize mb-1">{prediction.emotion}</h4>
                <div className="flex items-center gap-2">
                  <div className="px-3 py-1 bg-purple-600/30 rounded-full border border-purple-500/30">
                    <span className="text-sm text-purple-300">{prediction.confidence}% confidence</span>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-gray-400 text-sm">{prediction.reason}</p>
          </div>

          {/* Insights */}
          <div className="space-y-3">
            <div className="bg-gradient-to-br from-blue-900/30 to-indigo-900/30 backdrop-blur-sm rounded-xl p-4 border border-blue-500/20">
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-gray-300">Time Pattern</span>
              </div>
              <p className="text-xs text-gray-400">{prediction.timePattern}</p>
            </div>

            <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 backdrop-blur-sm rounded-xl p-4 border border-green-500/20">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-4 h-4 text-green-400" />
                <span className="text-sm text-gray-300">Trend</span>
              </div>
              <p className="text-xs text-gray-400">{prediction.trend}</p>
            </div>

            <div className="bg-gradient-to-br from-orange-900/30 to-red-900/30 backdrop-blur-sm rounded-xl p-4 border border-orange-500/20">
              <div className="flex items-center gap-2 mb-2">
                <Brain className="w-4 h-4 text-orange-400" />
                <span className="text-sm text-gray-300">Suggestion</span>
              </div>
              <p className="text-xs text-gray-400">{prediction.suggestion}</p>
            </div>
          </div>
        </div>

        {/* Accuracy Info */}
        <div className="mt-6 p-4 bg-gray-800/30 rounded-xl border border-gray-700/30">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-purple-600/30 rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-sm">ℹ️</span>
            </div>
            <div>
              <h5 className="text-sm text-gray-300 mb-1">How it works</h5>
              <p className="text-xs text-gray-500">
                Our AI analyzes your mood history, time of day, day of week, and intensity patterns 
                to predict your next emotional state. Accuracy improves with more data.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function predictNextMood() {
  const history = getMoodHistory();
  
  if (history.length < 3) return null;

  const now = new Date();
  const currentHour = now.getHours();
  const currentDay = now.getDay();

  // Analyze patterns
  const hourlyMoods: Record<number, string[]> = {};
  const dailyMoods: Record<number, string[]> = {};
  const recentMoods = history.slice(-5).map(e => e.emotion);

  history.forEach(entry => {
    const date = new Date(entry.timestamp);
    const hour = date.getHours();
    const day = date.getDay();

    if (!hourlyMoods[hour]) hourlyMoods[hour] = [];
    hourlyMoods[hour].push(entry.emotion);

    if (!dailyMoods[day]) dailyMoods[day] = [];
    dailyMoods[day].push(entry.emotion);
  });

  // Find most common mood for current time
  const similarHourMoods = hourlyMoods[currentHour] || [];
  const similarDayMoods = dailyMoods[currentDay] || [];

  // Combine all relevant moods
  const relevantMoods = [...similarHourMoods, ...similarDayMoods, ...recentMoods];
  
  if (relevantMoods.length === 0) {
    return {
      emotion: history[history.length - 1].emotion,
      confidence: 40,
      reason: 'Based on your last recorded mood',
      timePattern: 'Insufficient time data',
      trend: 'Building pattern recognition',
      suggestion: 'Keep tracking to improve predictions!'
    };
  }

  // Count frequency
  const frequency: Record<string, number> = {};
  relevantMoods.forEach(mood => {
    frequency[mood] = (frequency[mood] || 0) + 1;
  });

  const predicted = Object.entries(frequency).sort((a, b) => b[1] - a[1])[0];
  const confidence = Math.min(95, Math.round((predicted[1] / relevantMoods.length) * 100));

  // Generate insights
  const timeOfDay = currentHour < 12 ? 'morning' : currentHour < 17 ? 'afternoon' : 'evening';
  const dayName = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][currentDay];

  const suggestions: Record<string, string> = {
    happy: 'Share your positive energy with others!',
    sad: 'Consider reaching out to someone you trust',
    anxious: 'Try a breathing exercise from our Breathing tab',
    stressed: 'Take breaks and practice self-care',
    excited: 'Channel your energy into creative projects',
    calm: 'Perfect time for reflection and planning',
    angry: 'Physical activity can help release tension',
    grateful: 'Write down what you\'re thankful for',
    confident: 'Great time to tackle challenging tasks!',
    tired: 'Prioritize rest and recovery'
  };

  return {
    emotion: predicted[0],
    confidence,
    reason: `You often feel ${predicted[0]} on ${dayName}s in the ${timeOfDay}`,
    timePattern: `${timeOfDay.charAt(0).toUpperCase() + timeOfDay.slice(1)}s are typically ${predicted[0]} for you`,
    trend: `${predicted[0]} appears in ${predicted[1]} of similar time periods`,
    suggestion: suggestions[predicted[0]] || 'Stay mindful of your emotional state'
  };
}

function getEmotionEmoji(emotion: string): string {
  const emojiMap: Record<string, string> = {
    happy: '😊', joyful: '😄', excited: '🤩', sad: '😢', anxious: '😰',
    stressed: '😓', angry: '😠', calm: '😌', grateful: '🙏', confident: '💪',
    lonely: '😔', content: '😊', overwhelmed: '😵', hopeful: '🌟',
    frustrated: '😤', peaceful: '☮️', energetic: '⚡', tired: '😴',
    motivated: '🔥', melancholic: '🌧️'
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
