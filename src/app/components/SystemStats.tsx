import { motion } from 'motion/react';
import { Brain, Database, Zap, Shield } from 'lucide-react';

export function SystemStats() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mt-8 bg-gradient-to-br from-purple-900/30 to-violet-900/30 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30"
    >
      <div className="text-center mb-4">
        <h4 className="text-gray-100">Powered by Advanced AI & ML</h4>
        <p className="text-sm text-gray-400">Next-generation emotion detection system</p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 text-center border border-purple-500/20">
          <Brain className="w-6 h-6 text-purple-400 mx-auto mb-2" />
          <div className="text-2xl text-purple-400 mb-1">25+</div>
          <div className="text-xs text-gray-400">Emotion Models</div>
        </div>
        
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 text-center border border-violet-500/20">
          <Database className="w-6 h-6 text-violet-400 mx-auto mb-2" />
          <div className="text-2xl text-violet-400 mb-1">1000+</div>
          <div className="text-xs text-gray-400">Content Items</div>
        </div>
        
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 text-center border border-purple-500/20">
          <Zap className="w-6 h-6 text-purple-300 mx-auto mb-2" />
          <div className="text-2xl text-purple-300 mb-1">Smart</div>
          <div className="text-xs text-gray-400">AI Rotation</div>
        </div>
        
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 text-center border border-indigo-500/20">
          <Shield className="w-6 h-6 text-indigo-400 mx-auto mb-2" />
          <div className="text-2xl text-indigo-400 mb-1">NLP</div>
          <div className="text-xs text-gray-400">Detection</div>
        </div>
      </div>
      
      <div className="mt-4 text-center text-xs text-gray-500">
        Uses advanced Natural Language Processing, sentiment analysis, and machine learning to prevent content repetition
      </div>
    </motion.div>
  );
}