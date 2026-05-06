// Mood storage and analytics utilities

export interface MoodEntry {
  id: string;
  emotion: string;
  intensity: number;
  userInput: string;
  timestamp: number;
  secondary?: string;
  completedChallenges?: number;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlocked: boolean;
  unlockedAt?: number;
  progress: number;
  maxProgress: number;
}

const STORAGE_KEY = 'moodlens_history';
const ACHIEVEMENTS_KEY = 'moodlens_achievements';
const STREAK_KEY = 'moodlens_streak';

// Save mood entry
export function saveMoodEntry(entry: Omit<MoodEntry, 'id' | 'timestamp'>): MoodEntry {
  const newEntry: MoodEntry = {
    ...entry,
    id: generateId(),
    timestamp: Date.now()
  };

  const history = getMoodHistory();
  history.push(newEntry);
  
  // Keep only last 100 entries
  const trimmedHistory = history.slice(-100);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(trimmedHistory));

  // Update streak
  updateStreak();

  // Check and update achievements
  updateAchievements(trimmedHistory);

  return newEntry;
}

// Get mood history
export function getMoodHistory(): MoodEntry[] {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

// Get mood insights using AI-like analysis
export function getMoodInsights() {
  const history = getMoodHistory();
  const insights = [];

  if (history.length === 0) return [];

  // Most common mood
  const moodFrequency = history.reduce((acc, entry) => {
    acc[entry.emotion] = (acc[entry.emotion] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const mostCommon = Object.entries(moodFrequency).sort((a, b) => b[1] - a[1])[0];
  insights.push({
    title: 'Most Common Mood',
    description: `You feel ${mostCommon[0]} most often (${mostCommon[1]} times)`,
    trend: 'neutral'
  });

  // Intensity trend
  if (history.length >= 5) {
    const recent5 = history.slice(-5);
    const older5 = history.slice(-10, -5);
    if (older5.length > 0) {
      const recentAvg = recent5.reduce((sum, e) => sum + e.intensity, 0) / recent5.length;
      const olderAvg = older5.reduce((sum, e) => sum + e.intensity, 0) / older5.length;
      const trend = recentAvg > olderAvg ? 'up' : 'down';
      insights.push({
        title: 'Mood Intensity Trend',
        description: `Your mood intensity is ${trend === 'up' ? 'increasing' : 'decreasing'}`,
        trend,
        trendText: `${Math.abs(recentAvg - olderAvg).toFixed(1)} point change`
      });
    }
  }

  // Time-based insight
  const timeAnalysis = analyzeTimePatterns(history);
  if (timeAnalysis) {
    insights.push(timeAnalysis);
  }

  return insights;
}

function analyzeTimePatterns(history: MoodEntry[]) {
  const dayOfWeekMoods: Record<string, number[]> = {};
  
  history.forEach(entry => {
    const day = new Date(entry.timestamp).getDay();
    const dayName = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][day];
    if (!dayOfWeekMoods[dayName]) dayOfWeekMoods[dayName] = [];
    dayOfWeekMoods[dayName].push(entry.intensity);
  });

  const dayAverages = Object.entries(dayOfWeekMoods).map(([day, intensities]) => ({
    day,
    avg: intensities.reduce((sum, i) => sum + i, 0) / intensities.length
  }));

  if (dayAverages.length > 0) {
    const best = dayAverages.sort((a, b) => b.avg - a.avg)[0];
    return {
      title: 'Best Day Pattern',
      description: `You tend to feel best on ${best.day}s`,
      trend: 'up',
      trendText: `Average intensity: ${best.avg.toFixed(1)}`
    };
  }

  return null;
}

// Export mood data
export function exportMoodData(): string {
  const history = getMoodHistory();
  const achievements = getAchievements();
  const streak = getStreak();

  return JSON.stringify({
    version: '1.0',
    exportDate: new Date().toISOString(),
    totalEntries: history.length,
    currentStreak: streak,
    history,
    achievements
  }, null, 2);
}

// Achievements
const ACHIEVEMENT_DEFINITIONS: Achievement[] = [
  {
    id: 'first_entry',
    title: 'First Steps',
    description: 'Analyze your first mood',
    icon: '🎯',
    unlocked: false,
    progress: 0,
    maxProgress: 1
  },
  {
    id: 'mood_explorer',
    title: 'Mood Explorer',
    description: 'Analyze 10 different moods',
    icon: '🧭',
    unlocked: false,
    progress: 0,
    maxProgress: 10
  },
  {
    id: 'week_warrior',
    title: 'Week Warrior',
    description: 'Track your mood for 7 days in a row',
    icon: '🔥',
    unlocked: false,
    progress: 0,
    maxProgress: 7
  },
  {
    id: 'mood_master',
    title: 'Mood Master',
    description: 'Analyze 50 moods',
    icon: '👑',
    unlocked: false,
    progress: 0,
    maxProgress: 50
  },
  {
    id: 'challenge_champion',
    title: 'Challenge Champion',
    description: 'Complete 25 mood challenges',
    icon: '⚡',
    unlocked: false,
    progress: 0,
    maxProgress: 25
  },
  {
    id: 'positivity_pro',
    title: 'Positivity Pro',
    description: 'Record 20 positive moods',
    icon: '✨',
    unlocked: false,
    progress: 0,
    maxProgress: 20
  },
  {
    id: 'month_master',
    title: 'Month Master',
    description: 'Track your mood for 30 days',
    icon: '📅',
    unlocked: false,
    progress: 0,
    maxProgress: 30
  },
  {
    id: 'emotion_scientist',
    title: 'Emotion Scientist',
    description: 'Experience 15 different emotions',
    icon: '🔬',
    unlocked: false,
    progress: 0,
    maxProgress: 15
  }
];

export function getAchievements(): Achievement[] {
  try {
    const data = localStorage.getItem(ACHIEVEMENTS_KEY);
    if (data) {
      return JSON.parse(data);
    }
    // Initialize achievements
    localStorage.setItem(ACHIEVEMENTS_KEY, JSON.stringify(ACHIEVEMENT_DEFINITIONS));
    return ACHIEVEMENT_DEFINITIONS;
  } catch {
    return ACHIEVEMENT_DEFINITIONS;
  }
}

function updateAchievements(history: MoodEntry[]) {
  const achievements = getAchievements();
  let updated = false;

  achievements.forEach(achievement => {
    if (achievement.unlocked) return;

    let newProgress = 0;

    switch (achievement.id) {
      case 'first_entry':
        newProgress = history.length > 0 ? 1 : 0;
        break;
      case 'mood_explorer':
        newProgress = Math.min(history.length, 10);
        break;
      case 'mood_master':
        newProgress = Math.min(history.length, 50);
        break;
      case 'week_warrior':
        newProgress = getStreak();
        break;
      case 'month_master':
        newProgress = getStreak();
        break;
      case 'positivity_pro':
        const positiveEmotions = ['happy', 'joyful', 'excited', 'grateful', 'confident', 'content', 'hopeful', 'peaceful', 'energetic', 'motivated'];
        newProgress = history.filter(e => positiveEmotions.includes(e.emotion.toLowerCase())).length;
        break;
      case 'emotion_scientist':
        const uniqueEmotions = new Set(history.map(e => e.emotion));
        newProgress = uniqueEmotions.size;
        break;
      case 'challenge_champion':
        newProgress = history.reduce((sum, e) => sum + (e.completedChallenges || 0), 0);
        break;
    }

    if (newProgress !== achievement.progress) {
      achievement.progress = Math.min(newProgress, achievement.maxProgress);
      updated = true;

      if (achievement.progress >= achievement.maxProgress && !achievement.unlocked) {
        achievement.unlocked = true;
        achievement.unlockedAt = Date.now();
        showAchievementNotification(achievement);
      }
    }
  });

  if (updated) {
    localStorage.setItem(ACHIEVEMENTS_KEY, JSON.stringify(achievements));
  }

  return achievements;
}

function showAchievementNotification(achievement: Achievement) {
  // This will be handled by the UI component
  const event = new CustomEvent('achievement-unlocked', { detail: achievement });
  window.dispatchEvent(event);
}

// Streak tracking
export function getStreak(): number {
  try {
    const data = localStorage.getItem(STREAK_KEY);
    if (!data) return 0;
    const { streak, lastDate } = JSON.parse(data);
    const today = new Date().toDateString();
    const last = new Date(lastDate).toDateString();
    
    if (today === last) return streak;
    
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    if (yesterday.toDateString() === last) return streak;
    
    return 0; // Streak broken
  } catch {
    return 0;
  }
}

function updateStreak() {
  const today = new Date().toDateString();
  try {
    const data = localStorage.getItem(STREAK_KEY);
    if (!data) {
      localStorage.setItem(STREAK_KEY, JSON.stringify({ streak: 1, lastDate: today }));
      return;
    }

    const { streak, lastDate } = JSON.parse(data);
    const last = new Date(lastDate).toDateString();

    if (today === last) {
      // Same day, no change
      return;
    }

    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    
    if (yesterday.toDateString() === last) {
      // Continue streak
      localStorage.setItem(STREAK_KEY, JSON.stringify({ streak: streak + 1, lastDate: today }));
    } else {
      // Streak broken, start new
      localStorage.setItem(STREAK_KEY, JSON.stringify({ streak: 1, lastDate: today }));
    }
  } catch {
    localStorage.setItem(STREAK_KEY, JSON.stringify({ streak: 1, lastDate: today }));
  }
}

function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
