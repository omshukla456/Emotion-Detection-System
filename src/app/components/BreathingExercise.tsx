import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Wind, Play, Pause, RotateCcw, Settings } from 'lucide-react';

type Phase = 'inhale' | 'hold1' | 'exhale' | 'hold2';

export function BreathingExercise() {
  const [isActive, setIsActive] = useState(false);
  const [phase, setPhase] = useState<Phase>('inhale');
  const [count, setCount] = useState(0);
  const [cycles, setCycles] = useState(0);
  const [showSettings, setShowSettings] = useState(false);
  
  // Customizable timings (in seconds)
  const [timings, setTimings] = useState({
    inhale: 4,
    hold1: 7,
    exhale: 8,
    hold2: 0
  });

  const [currentPreset, setCurrentPreset] = useState('478');

  const presets = {
    '478': { name: '4-7-8 (Relaxation)', inhale: 4, hold1: 7, exhale: 8, hold2: 0 },
    'box': { name: 'Box Breathing (Focus)', inhale: 4, hold1: 4, exhale: 4, hold2: 4 },
    'calm': { name: 'Calm (5-5)', inhale: 5, hold1: 0, exhale: 5, hold2: 0 },
    'energy': { name: 'Energy Boost', inhale: 3, hold1: 3, exhale: 3, hold2: 0 }
  };

  const phaseLabels = {
    inhale: 'Breathe In',
    hold1: 'Hold',
    exhale: 'Breathe Out',
    hold2: 'Hold'
  };

  const phaseColors = {
    inhale: 'from-cyan-500 to-blue-500',
    hold1: 'from-purple-500 to-violet-500',
    exhale: 'from-pink-500 to-rose-500',
    hold2: 'from-purple-500 to-violet-500'
  };

  useEffect(() => {
    if (!isActive) return;

    const currentDuration = timings[phase];
    if (currentDuration === 0) {
      // Skip phases with 0 duration
      moveToNextPhase();
      return;
    }

    const interval = setInterval(() => {
      setCount(prev => {
        if (prev >= currentDuration - 1) {
          moveToNextPhase();
          return 0;
        }
        return prev + 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isActive, phase, count, timings]);

  const moveToNextPhase = () => {
    const phases: Phase[] = ['inhale', 'hold1', 'exhale', 'hold2'];
    const currentIndex = phases.indexOf(phase);
    const nextIndex = (currentIndex + 1) % phases.length;
    
    setPhase(phases[nextIndex]);
    
    if (phases[nextIndex] === 'inhale') {
      setCycles(prev => prev + 1);
    }
  };

  const handleReset = () => {
    setIsActive(false);
    setPhase('inhale');
    setCount(0);
    setCycles(0);
  };

  const applyPreset = (presetKey: string) => {
    const preset = presets[presetKey as keyof typeof presets];
    setTimings({
      inhale: preset.inhale,
      hold1: preset.hold1,
      exhale: preset.exhale,
      hold2: preset.hold2
    });
    setCurrentPreset(presetKey);
    handleReset();
    setShowSettings(false);
  };

  const progress = timings[phase] > 0 ? ((count + 1) / timings[phase]) * 100 : 100;
  const circleScale = phase === 'inhale' ? 1.5 : phase === 'exhale' ? 0.5 : 1;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-600/50 to-blue-600/50 backdrop-blur-sm border border-cyan-500/30">
            <Wind className="w-6 h-6 text-cyan-300" />
          </div>
          <div>
            <h3 className="text-2xl text-gray-100">Guided Breathing</h3>
            <p className="text-sm text-gray-400">Reduce stress and find calm</p>
          </div>
        </div>
        
        <button
          onClick={() => setShowSettings(!showSettings)}
          className={`p-3 rounded-xl transition-all ${
            showSettings
              ? 'bg-purple-600 text-white'
              : 'bg-gray-800/50 text-gray-400 hover:text-purple-300'
          }`}
        >
          <Settings className="w-5 h-5" />
        </button>
      </div>

      {/* Settings Panel */}
      <AnimatePresence>
        {showSettings && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div className="bg-gradient-to-br from-gray-900/80 to-purple-900/40 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/30">
              <h4 className="text-lg text-gray-100 mb-4">Breathing Presets</h4>
              <div className="grid grid-cols-2 gap-3">
                {Object.entries(presets).map(([key, preset]) => (
                  <button
                    key={key}
                    onClick={() => applyPreset(key)}
                    className={`p-4 rounded-xl text-left transition-all ${
                      currentPreset === key
                        ? 'bg-gradient-to-br from-purple-600 to-violet-600 text-white border-2 border-purple-400'
                        : 'bg-gray-800/50 text-gray-300 hover:bg-gray-800 border border-gray-700'
                    }`}
                  >
                    <div className="text-sm mb-1">{preset.name}</div>
                    <div className="text-xs opacity-70">
                      {preset.inhale}-{preset.hold1}-{preset.exhale}
                      {preset.hold2 > 0 && `-${preset.hold2}`}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Breathing Circle */}
      <div className="relative">
        <div className="bg-gradient-to-br from-gray-900/80 to-purple-900/40 backdrop-blur-lg rounded-3xl p-12 border border-purple-500/30">
          {/* Background particles */}
          <div className="absolute inset-0 overflow-hidden rounded-3xl">
            {[...Array(30)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-cyan-400/20 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>

          <div className="relative flex flex-col items-center">
            {/* Stats */}
            <div className="mb-8 text-center">
              <div className="text-sm text-gray-400 mb-1">Cycles Completed</div>
              <div className="text-4xl text-transparent bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text">
                {cycles}
              </div>
            </div>

            {/* Breathing Circle */}
            <div className="relative w-80 h-80 flex items-center justify-center">
              {/* Outer ring - progress indicator */}
              <svg className="absolute inset-0 w-full h-full -rotate-90">
                <circle
                  cx="50%"
                  cy="50%"
                  r="38%"
                  fill="none"
                  stroke="#374151"
                  strokeWidth="4"
                />
                <motion.circle
                  cx="50%"
                  cy="50%"
                  r="38%"
                  fill="none"
                  stroke="url(#progressGradient)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeDasharray={`${2 * Math.PI * 152} ${2 * Math.PI * 152}`}
                  strokeDashoffset={2 * Math.PI * 152 * (1 - progress / 100)}
                  initial={false}
                  animate={{ strokeDashoffset: 2 * Math.PI * 152 * (1 - progress / 100) }}
                  transition={{ duration: 0.5 }}
                />
                <defs>
                  <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#06b6d4" />
                    <stop offset="50%" stopColor="#a855f7" />
                    <stop offset="100%" stopColor="#ec4899" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Animated breathing circle */}
              <motion.div
                className={`absolute inset-0 m-auto rounded-full bg-gradient-to-br ${phaseColors[phase]} blur-2xl`}
                animate={{
                  scale: circleScale,
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  scale: { duration: timings[phase] || 1 },
                  opacity: { duration: 2, repeat: Infinity }
                }}
                style={{ width: '200px', height: '200px' }}
              />

              <motion.div
                className={`relative z-10 rounded-full bg-gradient-to-br ${phaseColors[phase]} shadow-2xl flex flex-col items-center justify-center`}
                animate={{
                  scale: circleScale,
                }}
                transition={{ duration: timings[phase] || 1 }}
                style={{ width: '200px', height: '200px' }}
              >
                <div className="text-white text-center">
                  <div className="text-2xl mb-2">{phaseLabels[phase]}</div>
                  <div className="text-6xl">
                    {timings[phase] > 0 ? timings[phase] - count : '•'}
                  </div>
                </div>
              </motion.div>

              {/* Pulsing rings */}
              {isActive && (
                <>
                  <motion.div
                    className={`absolute inset-0 m-auto rounded-full border-2 border-cyan-400/30`}
                    animate={{
                      scale: [1, 1.8],
                      opacity: [0.5, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeOut'
                    }}
                    style={{ width: '200px', height: '200px' }}
                  />
                  <motion.div
                    className={`absolute inset-0 m-auto rounded-full border-2 border-purple-400/30`}
                    animate={{
                      scale: [1, 1.8],
                      opacity: [0.5, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeOut',
                      delay: 1
                    }}
                    style={{ width: '200px', height: '200px' }}
                  />
                </>
              )}
            </div>

            {/* Controls */}
            <div className="mt-8 flex items-center gap-4">
              <button
                onClick={() => setIsActive(!isActive)}
                className={`flex items-center gap-2 px-8 py-4 rounded-xl transition-all shadow-lg ${
                  isActive
                    ? 'bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500'
                    : 'bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500'
                } text-white`}
              >
                {isActive ? (
                  <>
                    <Pause className="w-5 h-5" />
                    Pause
                  </>
                ) : (
                  <>
                    <Play className="w-5 h-5" />
                    Start
                  </>
                )}
              </button>

              <button
                onClick={handleReset}
                className="p-4 bg-gray-800/50 hover:bg-gray-800 text-gray-300 rounded-xl transition-all"
              >
                <RotateCcw className="w-5 h-5" />
              </button>
            </div>

            {/* Tips */}
            <div className="mt-6 text-center max-w-md">
              <p className="text-sm text-gray-400">
                {phase === 'inhale' && 'Breathe in slowly through your nose'}
                {phase === 'hold1' && 'Hold your breath gently'}
                {phase === 'exhale' && 'Exhale slowly through your mouth'}
                {phase === 'hold2' && 'Pause before the next breath'}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits */}
      <div className="grid md:grid-cols-3 gap-4">
        {[
          { title: 'Reduces Stress', desc: 'Activates your parasympathetic nervous system', icon: '🧘' },
          { title: 'Improves Focus', desc: 'Increases oxygen flow to your brain', icon: '🎯' },
          { title: 'Better Sleep', desc: 'Helps calm your mind before bed', icon: '😴' }
        ].map((benefit, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-gradient-to-br from-gray-900/50 to-purple-900/30 backdrop-blur-sm rounded-xl p-4 border border-purple-500/20"
          >
            <div className="text-2xl mb-2">{benefit.icon}</div>
            <h4 className="text-gray-100 mb-1">{benefit.title}</h4>
            <p className="text-sm text-gray-400">{benefit.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
