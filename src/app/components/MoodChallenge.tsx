import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Trophy, Star, Zap, Target, Flame, Award, Sparkles, CheckCircle2 } from 'lucide-react';
import { MoodAvatar } from './MoodAvatar';

interface MoodChallengeProps {
  emotion: string;
  intensity: number;
}

export function MoodChallenge({ emotion, intensity }: MoodChallengeProps) {
  const [completedChallenges, setCompletedChallenges] = useState<number[]>([]);
  const [showConfetti, setShowConfetti] = useState(false);
  
  const challenges = getMoodChallenges(emotion);
  const moodData = getMoodData(emotion);
  const level = Math.ceil(intensity / 20);
  const points = intensity * 10;

  const toggleChallenge = (index: number) => {
    if (completedChallenges.includes(index)) {
      setCompletedChallenges(completedChallenges.filter(i => i !== index));
    } else {
      setCompletedChallenges([...completedChallenges, index]);
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 3000);
    }
  };

  const completionPercentage = (completedChallenges.length / challenges.length) * 100;

  return (
    <div className="space-y-6">
      {/* Mood Badge with Stats */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-violet-600/20 to-fuchsia-600/20 blur-3xl" />
        
        <div className="relative bg-gradient-to-br from-gray-900/90 via-purple-900/50 to-violet-900/90 backdrop-blur-xl rounded-3xl p-8 border border-purple-500/30 shadow-2xl">
          {/* Floating Particles */}
          <div className="absolute inset-0 overflow-hidden rounded-3xl">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-purple-400/30 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.2, 0.8, 0.2],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>

          <div className="relative grid md:grid-cols-3 gap-6">
            {/* Main Mood Display */}
            <div className="md:col-span-2 flex items-center gap-6">
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-violet-600 rounded-full blur-xl opacity-50" />
                <div className="relative w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-purple-500 to-violet-600 rounded-full flex items-center justify-center text-5xl md:text-6xl shadow-2xl border-4 border-purple-400/30">
                  {moodData.emoji}
                </div>
                <motion.div
                  className="absolute -top-2 -right-2 w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg border-2 border-yellow-300/50"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Star className="w-6 h-6 text-white fill-white" />
                </motion.div>
              </motion.div>

              <div className="flex-1">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <h2 className="text-3xl md:text-4xl text-transparent bg-gradient-to-r from-purple-300 via-violet-300 to-fuchsia-300 bg-clip-text">
                      {moodData.title}
                    </h2>
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Sparkles className="w-6 h-6 text-yellow-400" />
                    </motion.div>
                  </div>
                  <p className="text-gray-300 text-lg">{moodData.description}</p>
                  
                  {/* Mood Streak */}
                  <div className="flex items-center gap-2 mt-3">
                    <Flame className="w-5 h-5 text-orange-400" />
                    <span className="text-sm text-orange-300">
                      Mood Streak: {Math.floor(Math.random() * 7) + 1} days
                    </span>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="space-y-3">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="bg-gradient-to-br from-purple-600/30 to-violet-600/30 backdrop-blur-sm rounded-2xl p-4 border border-purple-400/30"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-300 text-sm">Mood Level</span>
                  <Trophy className="w-5 h-5 text-yellow-400" />
                </div>
                <div className="text-3xl text-white mb-1">Level {level}</div>
                <div className="text-xs text-purple-300">{points} XP Points</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="bg-gradient-to-br from-violet-600/30 to-fuchsia-600/30 backdrop-blur-sm rounded-2xl p-4 border border-violet-400/30"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-300 text-sm">Challenges</span>
                  <Target className="w-5 h-5 text-green-400" />
                </div>
                <div className="text-3xl text-white mb-1">
                  {completedChallenges.length}/{challenges.length}
                </div>
                <div className="w-full bg-gray-700/50 rounded-full h-2 overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-green-500 to-emerald-500"
                    initial={{ width: 0 }}
                    animate={{ width: `${completionPercentage}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Interactive Challenges */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 rounded-xl bg-gradient-to-br from-purple-600/50 to-violet-600/50 backdrop-blur-sm border border-purple-400/30">
            <Zap className="w-6 h-6 text-yellow-300" />
          </div>
          <h3 className="text-2xl text-gray-100">Quick Mood Challenges</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {challenges.map((challenge, index) => {
            const isCompleted = completedChallenges.includes(index);
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                onClick={() => toggleChallenge(index)}
                className={`group relative cursor-pointer overflow-hidden rounded-2xl border-2 transition-all duration-300 ${
                  isCompleted
                    ? 'border-green-500/50 bg-gradient-to-br from-green-900/30 to-emerald-900/30'
                    : 'border-purple-500/30 bg-gradient-to-br from-gray-800/50 to-gray-900/50 hover:border-purple-400/50'
                } backdrop-blur-sm`}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                    backgroundSize: '24px 24px'
                  }} />
                </div>

                <div className="relative p-6">
                  <div className="flex items-start gap-4">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all ${
                      isCompleted
                        ? 'bg-gradient-to-br from-green-500 to-emerald-600'
                        : 'bg-gradient-to-br from-purple-600 to-violet-600 group-hover:scale-110'
                    }`}>
                      {isCompleted ? (
                        <CheckCircle2 className="w-6 h-6 text-white" />
                      ) : (
                        <challenge.icon className="w-6 h-6 text-white" />
                      )}
                    </div>

                    <div className="flex-1">
                      <h4 className={`mb-2 transition-colors ${
                        isCompleted ? 'text-green-300' : 'text-gray-100'
                      }`}>
                        {challenge.title}
                      </h4>
                      <p className="text-sm text-gray-400 mb-3">{challenge.description}</p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Star className="w-4 h-4 text-yellow-400" />
                          <span className="text-xs text-yellow-300">+{challenge.points} XP</span>
                        </div>
                        <span className="text-xs text-purple-300">{challenge.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Completion Effect */}
                <AnimatePresence>
                  {isCompleted && (
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      className="absolute top-3 right-3"
                    >
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                        <CheckCircle2 className="w-5 h-5 text-white" />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Completion Reward */}
        <AnimatePresence>
          {completedChallenges.length === challenges.length && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.9 }}
              className="mt-6 bg-gradient-to-r from-yellow-600/30 via-orange-600/30 to-red-600/30 backdrop-blur-sm rounded-2xl p-6 border border-yellow-400/30"
            >
              <div className="flex items-center gap-4">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                >
                  <Award className="w-12 h-12 text-yellow-400" />
                </motion.div>
                <div>
                  <h4 className="text-xl text-yellow-300 mb-1">All Challenges Complete! 🎉</h4>
                  <p className="text-gray-300">You've earned {challenges.reduce((sum, c) => sum + c.points, 0)} bonus XP points!</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Confetti Effect */}
      <AnimatePresence>
        {showConfetti && (
          <div className="fixed inset-0 pointer-events-none z-50">
            {[...Array(30)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-3 h-3 rounded-full"
                style={{
                  left: `${50 + (Math.random() - 0.5) * 40}%`,
                  top: '50%',
                  backgroundColor: ['#a855f7', '#ec4899', '#f59e0b', '#10b981'][Math.floor(Math.random() * 4)],
                }}
                initial={{ y: 0, x: 0, opacity: 1, scale: 0 }}
                animate={{
                  y: [0, -200 - Math.random() * 100],
                  x: (Math.random() - 0.5) * 200,
                  opacity: [1, 1, 0],
                  scale: [0, 1, 0.5],
                }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5, ease: 'easeOut' }}
              />
            ))}
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

function getMoodData(emotion: string) {
  const data: Record<string, { emoji: string; title: string; description: string }> = {
    happy: { emoji: '😊', title: 'Radiating Joy', description: 'Your positive energy is contagious!' },
    joyful: { emoji: '😄', title: 'Pure Bliss', description: 'Riding the waves of happiness!' },
    excited: { emoji: '🤩', title: 'Electric Energy', description: 'Your enthusiasm is inspiring!' },
    sad: { emoji: '😢', title: 'Processing Emotions', description: 'It\'s okay to feel this way' },
    anxious: { emoji: '😰', title: 'Finding Balance', description: 'Let\'s work through this together' },
    stressed: { emoji: '😓', title: 'Managing Pressure', description: 'Taking it one step at a time' },
    angry: { emoji: '😠', title: 'Channeling Power', description: 'Your feelings are valid' },
    calm: { emoji: '😌', title: 'Inner Peace', description: 'Embracing tranquility' },
    grateful: { emoji: '🙏', title: 'Thankful Heart', description: 'Abundance flows through you' },
    confident: { emoji: '💪', title: 'Unstoppable Force', description: 'You\'ve got this!' },
    lonely: { emoji: '😔', title: 'Seeking Connection', description: 'You\'re not alone in this' },
    motivated: { emoji: '🔥', title: 'On Fire', description: 'Nothing can stop you now!' },
  };

  return data[emotion.toLowerCase()] || data.calm;
}

function getMoodChallenges(emotion: string) {
  const challenges: Record<string, Array<{
    title: string;
    description: string;
    icon: any;
    points: number;
    duration: string;
  }>> = {
    happy: [
      { title: 'Share the Joy', description: 'Send a positive message to 3 friends', icon: Sparkles, points: 50, duration: '5 min' },
      { title: 'Dance Break', description: 'Dance to your favorite song', icon: Zap, points: 30, duration: '3 min' },
      { title: 'Gratitude List', description: 'Write down 5 things you\'re grateful for', icon: Star, points: 40, duration: '10 min' },
      { title: 'Spread Smiles', description: 'Compliment 3 people today', icon: Trophy, points: 60, duration: '15 min' },
    ],
    sad: [
      { title: 'Self-Care Ritual', description: 'Take a warm shower or bath', icon: Sparkles, points: 50, duration: '20 min' },
      { title: 'Journal It Out', description: 'Write about your feelings', icon: Star, points: 40, duration: '15 min' },
      { title: 'Comfort Food', description: 'Prepare your favorite comfort meal', icon: Trophy, points: 30, duration: '30 min' },
      { title: 'Reach Out', description: 'Call a trusted friend or family member', icon: Zap, points: 60, duration: '10 min' },
    ],
    anxious: [
      { title: 'Breathing Exercise', description: 'Practice 4-7-8 breathing technique', icon: Sparkles, points: 40, duration: '5 min' },
      { title: 'Grounding Exercise', description: 'Use the 5-4-3-2-1 sensory technique', icon: Star, points: 50, duration: '10 min' },
      { title: 'Gentle Movement', description: 'Do some light stretching or yoga', icon: Zap, points: 45, duration: '15 min' },
      { title: 'Worry Journal', description: 'Write down your worries and let them go', icon: Trophy, points: 55, duration: '10 min' },
    ],
    stressed: [
      { title: 'Power Break', description: 'Take a 10-minute technology break', icon: Zap, points: 40, duration: '10 min' },
      { title: 'Task Breakdown', description: 'Break one big task into smaller steps', icon: Star, points: 50, duration: '15 min' },
      { title: 'Quick Workout', description: 'Do 20 jumping jacks or push-ups', icon: Trophy, points: 35, duration: '5 min' },
      { title: 'Meditation', description: 'Guided meditation session', icon: Sparkles, points: 60, duration: '10 min' },
    ],
    excited: [
      { title: 'Channel Energy', description: 'Start that project you\'ve been planning', icon: Zap, points: 70, duration: '30 min' },
      { title: 'Share Plans', description: 'Tell someone about what excites you', icon: Sparkles, points: 40, duration: '10 min' },
      { title: 'Create Vision Board', description: 'Add images of your goals', icon: Star, points: 50, duration: '20 min' },
      { title: 'Action Step', description: 'Take one concrete action toward a goal', icon: Trophy, points: 80, duration: '15 min' },
    ],
    calm: [
      { title: 'Mindful Moment', description: 'Practice 5 minutes of mindfulness', icon: Sparkles, points: 40, duration: '5 min' },
      { title: 'Creative Flow', description: 'Draw, paint, or color for relaxation', icon: Star, points: 50, duration: '20 min' },
      { title: 'Nature Connection', description: 'Spend time outside in nature', icon: Zap, points: 45, duration: '15 min' },
      { title: 'Tea Ceremony', description: 'Mindfully prepare and enjoy tea', icon: Trophy, points: 35, duration: '10 min' },
    ],
  };

  return challenges[emotion.toLowerCase()] || challenges.calm;
}