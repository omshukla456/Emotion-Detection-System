import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Trophy, Lock, Star, Sparkles, Award } from 'lucide-react';
import { getAchievements, type Achievement } from '../utils/moodStorage';

export function AchievementSystem() {
  const [achievements, setAchievements] = useState<Achievement[]>([]);
  const [showNotification, setShowNotification] = useState(false);
  const [newAchievement, setNewAchievement] = useState<Achievement | null>(null);

  useEffect(() => {
    loadAchievements();

    // Listen for achievement unlocks
    const handleAchievement = (event: any) => {
      setNewAchievement(event.detail);
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 5000);
      loadAchievements();
    };

    window.addEventListener('achievement-unlocked', handleAchievement);
    return () => window.removeEventListener('achievement-unlocked', handleAchievement);
  }, []);

  const loadAchievements = () => {
    setAchievements(getAchievements());
  };

  const unlockedCount = achievements.filter(a => a.unlocked).length;
  const totalCount = achievements.length;
  const completionPercentage = (unlockedCount / totalCount) * 100;

  return (
    <div className="space-y-6">
      {/* Header Stats */}
      <div className="bg-gradient-to-br from-gray-900/80 to-purple-900/40 backdrop-blur-lg rounded-3xl p-8 border border-purple-500/30">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg">
              <Trophy className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-3xl text-transparent bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300 bg-clip-text">
                Achievements
              </h2>
              <p className="text-gray-400">Track your progress and unlock rewards</p>
            </div>
          </div>

          <div className="text-right">
            <div className="text-4xl text-transparent bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text mb-1">
              {unlockedCount}/{totalCount}
            </div>
            <p className="text-sm text-gray-400">Unlocked</p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="relative">
          <div className="w-full h-4 bg-gray-800/50 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500"
              initial={{ width: 0 }}
              animate={{ width: `${completionPercentage}%` }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 right-4 text-sm text-white font-medium">
            {Math.round(completionPercentage)}%
          </div>
        </div>
      </div>

      {/* Achievement Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {achievements.map((achievement, index) => (
          <motion.div
            key={achievement.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
            className="relative group"
          >
            <div
              className={`relative overflow-hidden rounded-2xl p-6 border-2 transition-all ${
                achievement.unlocked
                  ? 'bg-gradient-to-br from-yellow-900/30 to-orange-900/30 border-yellow-500/50 shadow-lg shadow-yellow-500/20'
                  : 'bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-gray-700/50'
              }`}
            >
              {/* Shine effect for unlocked achievements */}
              {achievement.unlocked && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                  initial={{ x: '-100%' }}
                  animate={{ x: '200%' }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                />
              )}

              <div className="relative">
                {/* Icon */}
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`w-16 h-16 rounded-xl flex items-center justify-center text-3xl ${
                      achievement.unlocked
                        ? 'bg-gradient-to-br from-yellow-500 to-orange-600 shadow-lg'
                        : 'bg-gray-800/50 grayscale opacity-50'
                    }`}
                  >
                    {achievement.unlocked ? achievement.icon : <Lock className="w-6 h-6 text-gray-600" />}
                  </div>

                  {achievement.unlocked && (
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ type: 'spring', delay: 0.2 }}
                    >
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                        <Star className="w-4 h-4 text-white fill-white" />
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* Content */}
                <h3
                  className={`text-lg mb-2 ${
                    achievement.unlocked ? 'text-yellow-300' : 'text-gray-500'
                  }`}
                >
                  {achievement.title}
                </h3>
                <p
                  className={`text-sm mb-4 ${
                    achievement.unlocked ? 'text-gray-300' : 'text-gray-600'
                  }`}
                >
                  {achievement.description}
                </p>

                {/* Progress */}
                <div>
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className={achievement.unlocked ? 'text-yellow-400' : 'text-gray-600'}>
                      Progress
                    </span>
                    <span className={achievement.unlocked ? 'text-yellow-400' : 'text-gray-600'}>
                      {achievement.progress}/{achievement.maxProgress}
                    </span>
                  </div>
                  <div className="w-full h-2 bg-gray-800/50 rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full ${
                        achievement.unlocked
                          ? 'bg-gradient-to-r from-yellow-500 to-orange-500'
                          : 'bg-gray-700'
                      }`}
                      initial={{ width: 0 }}
                      animate={{
                        width: `${(achievement.progress / achievement.maxProgress) * 100}%`
                      }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                    />
                  </div>
                </div>

                {/* Unlock date */}
                {achievement.unlocked && achievement.unlockedAt && (
                  <div className="mt-3 text-xs text-gray-500">
                    Unlocked {new Date(achievement.unlockedAt).toLocaleDateString()}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Achievement Notification */}
      <AnimatePresence>
        {showNotification && newAchievement && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -50, scale: 0.8 }}
            className="fixed bottom-8 right-8 z-50 max-w-md"
          >
            <div className="bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 p-1 rounded-2xl shadow-2xl">
              <div className="bg-gray-900 rounded-xl p-6">
                <div className="flex items-center gap-4">
                  <motion.div
                    animate={{
                      rotate: [0, 360],
                      scale: [1, 1.2, 1]
                    }}
                    transition={{ duration: 0.5 }}
                    className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-xl flex items-center justify-center text-3xl shadow-lg"
                  >
                    {newAchievement.icon}
                  </motion.div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <Award className="w-5 h-5 text-yellow-400" />
                      <span className="text-sm text-yellow-400">Achievement Unlocked!</span>
                    </div>
                    <h4 className="text-xl text-white mb-1">{newAchievement.title}</h4>
                    <p className="text-sm text-gray-400">{newAchievement.description}</p>
                  </div>

                  <Sparkles className="w-6 h-6 text-yellow-400 animate-pulse" />
                </div>
              </div>
            </div>

            {/* Confetti */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 rounded-full"
                  style={{
                    left: '50%',
                    top: '50%',
                    backgroundColor: ['#fbbf24', '#f59e0b', '#ef4444', '#a855f7'][i % 4],
                  }}
                  initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                  animate={{
                    x: (Math.random() - 0.5) * 200,
                    y: -100 - Math.random() * 100,
                    opacity: 0,
                    scale: 0,
                  }}
                  transition={{ duration: 1.5, ease: 'easeOut' }}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
