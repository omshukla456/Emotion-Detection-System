import { motion } from 'motion/react';
import { Send, Loader2 } from 'lucide-react';
import { SystemStats } from './SystemStats';

interface EmotionInputProps {
  userInput: string;
  setUserInput: (value: string) => void;
  onAnalyze: () => void;
  isAnalyzing: boolean;
}

export function EmotionInput({ userInput, setUserInput, onAnalyze, isAnalyzing }: EmotionInputProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-3xl mx-auto"
    >
      <div className="bg-gray-900/50 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-purple-500/30">
        <div className="mb-6">
          <label htmlFor="thoughts" className="block text-gray-200 mb-3">
            How are you feeling today?
          </label>
          <textarea
            id="thoughts"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Share your thoughts, feelings, or what's on your mind..."
            className="w-full h-48 px-6 py-4 border-2 border-purple-500/30 rounded-2xl focus:border-purple-400 focus:outline-none resize-none transition-colors bg-gray-800/50 text-gray-100 placeholder-gray-500"
            disabled={isAnalyzing}
          />
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={onAnalyze}
            disabled={!userInput.trim() || isAnalyzing}
            className="flex-1 bg-gradient-to-r from-purple-600 to-violet-600 text-white py-4 px-6 rounded-xl hover:shadow-lg hover:shadow-purple-500/50 hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
          >
            {isAnalyzing ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Analyzing your mood...
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                Analyze My Mood
              </>
            )}
          </button>
        </div>

        {/* Example prompts */}
        <div className="mt-6 pt-6 border-t border-purple-500/20">
          <p className="text-sm text-gray-400 mb-3">Try these examples:</p>
          <div className="flex flex-wrap gap-2">
            {[
              "I'm feeling really happy today!",
              "I'm stressed about work...",
              "Feeling grateful for my friends",
              "I'm anxious about tomorrow"
            ].map((example) => (
              <button
                key={example}
                onClick={() => setUserInput(example)}
                className="text-sm px-4 py-2 bg-purple-900/30 text-purple-300 rounded-full hover:bg-purple-800/40 transition-colors border border-purple-500/30"
                disabled={isAnalyzing}
              >
                {example}
              </button>
            ))}
          </div>
        </div>
      </div>
      
      <SystemStats />
    </motion.div>
  );
}