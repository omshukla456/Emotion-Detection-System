import { useState } from 'react';
import { EmotionInput } from './components/EmotionInput';
import { EmotionResults } from './components/EmotionResults';
import { MoodAnalytics } from './components/MoodAnalytics';
import { MoodJournal } from './components/MoodJournal';
import { AchievementSystem } from './components/AchievementSystem';
import { BreathingExercise } from './components/BreathingExercise';
import { detectEmotion } from './utils/emotionDetection';
import { saveMoodEntry, getStreak } from './utils/moodStorage';
import { Sparkles, BarChart3, BookOpen, Trophy, Wind, Flame, Home } from 'lucide-react';

export interface Emotion {
  primary: string;
  intensity: number;
  secondary?: string;
  color: string;
  gradient: string;
}

export interface Recommendations {
  music: string[];
  videos: string[];
  quotes: string[];
  activities: string[];
  suggestions: string[];
}

export default function App() {
  const [userInput, setUserInput] = useState('');
  const [emotion, setEmotion] = useState<Emotion | null>(null);
  const [recommendations, setRecommendations] = useState<Recommendations | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [activeTab, setActiveTab] = useState<'home' | 'analytics' | 'journal' | 'achievements' | 'breathing'>('home');
  const streak = getStreak();

  const handleAnalyze = () => {
    if (!userInput.trim()) return;

    setIsAnalyzing(true);

    // Simulate AI processing time
    setTimeout(() => {
      const result = detectEmotion(userInput);
      setEmotion(result.emotion);
      setRecommendations(result.recommendations);
      
      // Save to history
      saveMoodEntry({
        emotion: result.emotion.primary,
        intensity: result.emotion.intensity,
        userInput: userInput,
        secondary: result.emotion.secondary
      });
      
      setIsAnalyzing(false);
    }, 1500);
  };

  const handleReset = () => {
    setUserInput('');
    setEmotion(null);
    setRecommendations(null);
  };

  const tabs = [
    { id: 'home' as const, label: 'Analyze', icon: Home },
    { id: 'analytics' as const, label: 'Analytics', icon: BarChart3 },
    { id: 'journal' as const, label: 'Journal', icon: BookOpen },
    { id: 'achievements' as const, label: 'Achievements', icon: Trophy },
    { id: 'breathing' as const, label: 'Breathing', icon: Wind }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-purple-950 to-violet-950">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="w-8 h-8 text-purple-400" />
            <h1 className="text-5xl bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
              MoodLens
            </h1>
          </div>
          <p className="text-gray-400">
            AI-Powered Emotion Detection & Personalized Wellness Platform
          </p>
          
          {/* Streak Display */}
          {streak > 0 && (
            <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-600/30 to-red-600/30 backdrop-blur-sm rounded-full border border-orange-500/30">
              <Flame className="w-5 h-5 text-orange-400" />
              <span className="text-orange-300">{streak} Day Streak!</span>
            </div>
          )}
        </div>

        {/* Navigation Tabs */}
        <div className="mb-8">
          <div className="bg-gray-900/50 backdrop-blur-lg rounded-2xl p-2 border border-purple-500/30">
            <div className="grid grid-cols-5 gap-2">
              {tabs.map(tab => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => {
                      setActiveTab(tab.id);
                      if (tab.id === 'home') {
                        handleReset();
                      }
                    }}
                    className={`flex items-center justify-center gap-2 px-4 py-3 rounded-xl transition-all ${
                      activeTab === tab.id
                        ? 'bg-gradient-to-r from-purple-600 to-violet-600 text-white shadow-lg shadow-purple-500/50'
                        : 'text-gray-400 hover:text-purple-300 hover:bg-gray-800/50'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="hidden md:inline">{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === 'home' && (
          !emotion ? (
            <EmotionInput
              userInput={userInput}
              setUserInput={setUserInput}
              onAnalyze={handleAnalyze}
              isAnalyzing={isAnalyzing}
            />
          ) : (
            <EmotionResults
              emotion={emotion}
              recommendations={recommendations!}
              onReset={handleReset}
              userInput={userInput}
            />
          )
        )}
        
        {activeTab === 'analytics' && <MoodAnalytics />}
        {activeTab === 'journal' && <MoodJournal />}
        {activeTab === 'achievements' && <AchievementSystem />}
        {activeTab === 'breathing' && <BreathingExercise />}
      </div>
    </div>
  );
}