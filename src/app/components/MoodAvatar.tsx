import { motion } from 'motion/react';

interface MoodAvatarProps {
  emotion: string;
  size?: 'sm' | 'md' | 'lg';
}

export function MoodAvatar({ emotion, size = 'md' }: MoodAvatarProps) {
  const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24',
    lg: 'w-32 h-32'
  };

  const avatarData = getAvatarData(emotion);

  return (
    <div className={`relative ${sizeClasses[size]}`}>
      {/* Glow effect */}
      <motion.div
        className={`absolute inset-0 rounded-full bg-gradient-to-br ${avatarData.gradient} blur-2xl opacity-50`}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />

      {/* Avatar circle */}
      <motion.div
        className={`relative z-10 w-full h-full rounded-full bg-gradient-to-br ${avatarData.gradient} flex items-center justify-center shadow-2xl border-4 ${avatarData.borderColor}`}
        animate={avatarData.animation}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut'
        }}
      >
        <motion.div
          className="text-4xl"
          animate={{
            rotate: avatarData.rotate ? [0, 10, -10, 0] : 0,
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        >
          {avatarData.emoji}
        </motion.div>
      </motion.div>

      {/* Particles */}
      {avatarData.particles && (
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute w-2 h-2 rounded-full ${avatarData.particleColor}`}
              style={{
                left: '50%',
                top: '50%',
              }}
              animate={{
                x: Math.cos((i * Math.PI * 2) / 8) * 40,
                y: Math.sin((i * Math.PI * 2) / 8) * 40,
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.1,
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function getAvatarData(emotion: string) {
  const data: Record<string, {
    emoji: string;
    gradient: string;
    borderColor: string;
    animation: any;
    particles?: boolean;
    particleColor?: string;
    rotate?: boolean;
  }> = {
    happy: {
      emoji: '😊',
      gradient: 'from-yellow-400 to-orange-500',
      borderColor: 'border-yellow-300/50',
      animation: { y: [0, -10, 0] },
      particles: true,
      particleColor: 'bg-yellow-400'
    },
    joyful: {
      emoji: '😄',
      gradient: 'from-pink-400 to-rose-500',
      borderColor: 'border-pink-300/50',
      animation: { scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] },
      particles: true,
      particleColor: 'bg-pink-400',
      rotate: true
    },
    excited: {
      emoji: '🤩',
      gradient: 'from-purple-400 to-pink-500',
      borderColor: 'border-purple-300/50',
      animation: { scale: [1, 1.15, 1], y: [0, -15, 0] },
      particles: true,
      particleColor: 'bg-purple-400'
    },
    sad: {
      emoji: '😢',
      gradient: 'from-blue-600 to-indigo-700',
      borderColor: 'border-blue-400/50',
      animation: { y: [0, 5, 0] }
    },
    anxious: {
      emoji: '😰',
      gradient: 'from-orange-600 to-red-600',
      borderColor: 'border-orange-400/50',
      animation: { x: [-2, 2, -2], y: [-2, 2, -2] }
    },
    stressed: {
      emoji: '😓',
      gradient: 'from-red-600 to-rose-700',
      borderColor: 'border-red-400/50',
      animation: { rotate: [-5, 5, -5] }
    },
    angry: {
      emoji: '😠',
      gradient: 'from-red-500 to-red-700',
      borderColor: 'border-red-300/50',
      animation: { scale: [1, 1.05, 1], rotate: [-3, 3, -3] },
      particles: true,
      particleColor: 'bg-red-500'
    },
    calm: {
      emoji: '😌',
      gradient: 'from-teal-400 to-cyan-500',
      borderColor: 'border-teal-300/50',
      animation: { y: [0, -5, 0] }
    },
    grateful: {
      emoji: '🙏',
      gradient: 'from-green-400 to-emerald-500',
      borderColor: 'border-green-300/50',
      animation: { scale: [1, 1.05, 1] },
      particles: true,
      particleColor: 'bg-green-400'
    },
    confident: {
      emoji: '💪',
      gradient: 'from-indigo-500 to-purple-600',
      borderColor: 'border-indigo-300/50',
      animation: { y: [0, -10, 0], scale: [1, 1.1, 1] },
      particles: true,
      particleColor: 'bg-purple-400'
    },
    lonely: {
      emoji: '😔',
      gradient: 'from-gray-600 to-gray-700',
      borderColor: 'border-gray-400/50',
      animation: { y: [0, 3, 0] }
    },
    motivated: {
      emoji: '🔥',
      gradient: 'from-orange-500 to-red-600',
      borderColor: 'border-orange-300/50',
      animation: { scale: [1, 1.15, 1], y: [0, -10, 0] },
      particles: true,
      particleColor: 'bg-orange-500',
      rotate: true
    },
    peaceful: {
      emoji: '☮️',
      gradient: 'from-blue-400 to-cyan-500',
      borderColor: 'border-blue-300/50',
      animation: { rotate: [0, 360] }
    },
    energetic: {
      emoji: '⚡',
      gradient: 'from-yellow-400 to-yellow-600',
      borderColor: 'border-yellow-300/50',
      animation: { scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] },
      particles: true,
      particleColor: 'bg-yellow-400'
    },
    tired: {
      emoji: '😴',
      gradient: 'from-gray-500 to-gray-600',
      borderColor: 'border-gray-400/50',
      animation: { y: [0, 2, 0], opacity: [1, 0.8, 1] }
    }
  };

  return data[emotion.toLowerCase()] || data.calm;
}
