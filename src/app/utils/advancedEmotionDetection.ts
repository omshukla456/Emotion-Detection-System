import type { Emotion } from '../App';

// Comprehensive emotion categories with subcategories
export const emotionCategories = {
  // Positive Emotions
  joy: ['happy', 'joyful', 'cheerful', 'delighted', 'ecstatic', 'elated', 'jubilant', 'overjoyed'],
  excitement: ['excited', 'thrilled', 'enthusiastic', 'energized', 'pumped', 'hyped', 'animated'],
  gratitude: ['grateful', 'thankful', 'appreciative', 'blessed', 'fortunate'],
  love: ['loving', 'affectionate', 'caring', 'tender', 'devoted', 'adoring'],
  contentment: ['content', 'satisfied', 'fulfilled', 'peaceful', 'serene', 'tranquil'],
  confidence: ['confident', 'assured', 'self-assured', 'bold', 'empowered', 'strong'],
  pride: ['proud', 'accomplished', 'triumphant', 'victorious', 'successful'],
  hope: ['hopeful', 'optimistic', 'encouraged', 'inspired', 'motivated'],
  
  // Negative Emotions
  sadness: ['sad', 'unhappy', 'sorrowful', 'miserable', 'heartbroken', 'dejected', 'gloomy', 'melancholic'],
  anxiety: ['anxious', 'worried', 'nervous', 'uneasy', 'apprehensive', 'fearful', 'panicked'],
  stress: ['stressed', 'overwhelmed', 'pressured', 'tense', 'strained', 'frazzled', 'burned out'],
  anger: ['angry', 'mad', 'furious', 'irritated', 'annoyed', 'frustrated', 'enraged', 'livid'],
  fear: ['scared', 'afraid', 'terrified', 'frightened', 'alarmed', 'panicked'],
  loneliness: ['lonely', 'isolated', 'alone', 'abandoned', 'disconnected', 'excluded'],
  guilt: ['guilty', 'ashamed', 'remorseful', 'regretful', 'apologetic'],
  disappointment: ['disappointed', 'let down', 'discouraged', 'disheartened', 'dismayed'],
  
  // Neutral/Complex Emotions
  surprise: ['surprised', 'shocked', 'astonished', 'amazed', 'stunned', 'startled'],
  confusion: ['confused', 'puzzled', 'perplexed', 'bewildered', 'uncertain'],
  nostalgia: ['nostalgic', 'wistful', 'sentimental', 'reminiscent'],
  boredom: ['bored', 'uninterested', 'apathetic', 'listless', 'indifferent'],
  exhaustion: ['exhausted', 'tired', 'fatigued', 'drained', 'weary', 'depleted'],
  restless: ['restless', 'agitated', 'fidgety', 'impatient', 'antsy'],
  jealousy: ['jealous', 'envious', 'resentful', 'covetous'],
  embarrassment: ['embarrassed', 'humiliated', 'self-conscious', 'awkward']
};

// Advanced keyword patterns with weights
const emotionPatterns = {
  // Positive emotions
  happy: {
    primary: ['happy', 'joy', 'happiness', 'cheerful', 'delighted', 'wonderful', 'amazing', 'fantastic', 'great', 'awesome'],
    secondary: ['smile', 'smiling', 'laughing', 'laugh', 'fun', 'enjoying', 'love it', 'loving'],
    intensity: ['very happy', 'so happy', 'extremely happy', 'incredibly happy', 'super happy'],
    negation: ['not happy', 'unhappy', "can't be happy"],
    weight: 1.0,
    color: '#10b981',
    gradient: '#10b981, #3b82f6'
  },
  excited: {
    primary: ['excited', 'exciting', 'thrilled', 'pumped', 'eager', 'enthusiastic', 'hyped', 'energetic', 'psyched'],
    secondary: ['can\'t wait', 'looking forward', 'anticipating', 'stoked', 'amped'],
    intensity: ['so excited', 'very excited', 'super excited', 'really excited'],
    negation: ['not excited', 'unexcited'],
    weight: 1.0,
    color: '#ec4899',
    gradient: '#ec4899, #f97316'
  },
  grateful: {
    primary: ['grateful', 'thankful', 'blessed', 'appreciate', 'appreciation', 'fortunate', 'lucky', 'thank'],
    secondary: ['grace', 'gratitude', 'blessings', 'gift', 'privilege'],
    intensity: ['so grateful', 'very thankful', 'extremely blessed'],
    negation: ['ungrateful', 'not thankful'],
    weight: 1.0,
    color: '#8b5cf6',
    gradient: '#8b5cf6, #a855f7'
  },
  confident: {
    primary: ['confident', 'confidence', 'strong', 'capable', 'empowered', 'determined', 'ready', 'prepared'],
    secondary: ['believe in myself', 'can do', 'will succeed', 'got this', 'unstoppable'],
    intensity: ['very confident', 'super confident', 'extremely confident'],
    negation: ['not confident', 'lack confidence', 'unconfident'],
    weight: 1.0,
    color: '#f97316',
    gradient: '#f97316, #eab308'
  },
  calm: {
    primary: ['calm', 'peaceful', 'relaxed', 'serene', 'tranquil', 'quiet', 'still', 'composed', 'centered'],
    secondary: ['at peace', 'at ease', 'settled', 'balanced', 'zen'],
    intensity: ['very calm', 'completely relaxed', 'totally peaceful'],
    negation: ['not calm', 'uncalm'],
    weight: 1.0,
    color: '#06b6d4',
    gradient: '#06b6d4, #0ea5e9'
  },
  loved: {
    primary: ['love', 'loved', 'loving', 'affection', 'care', 'cherish', 'adore', 'treasure'],
    secondary: ['warm', 'connected', 'close', 'intimate', 'bond'],
    intensity: ['deeply in love', 'so much love', 'overwhelmed with love'],
    negation: ['unloved', 'not loved'],
    weight: 1.0,
    color: '#f43f5e',
    gradient: '#f43f5e, #ec4899'
  },
  proud: {
    primary: ['proud', 'pride', 'accomplished', 'achievement', 'success', 'triumph', 'victory'],
    secondary: ['earned', 'deserve', 'worked hard', 'made it', 'achieved'],
    intensity: ['very proud', 'so proud', 'extremely proud'],
    negation: ['not proud', 'ashamed'],
    weight: 1.0,
    color: '#eab308',
    gradient: '#eab308, #f97316'
  },
  hopeful: {
    primary: ['hopeful', 'hope', 'optimistic', 'positive', 'encouraged', 'inspired', 'motivated'],
    secondary: ['things will get better', 'looking up', 'bright future', 'possibility'],
    intensity: ['very hopeful', 'really optimistic', 'full of hope'],
    negation: ['hopeless', 'no hope'],
    weight: 1.0,
    color: '#22c55e',
    gradient: '#22c55e, #10b981'
  },
  
  // Negative emotions
  sad: {
    primary: ['sad', 'sadness', 'depressed', 'down', 'unhappy', 'miserable', 'heartbroken', 'crying', 'tears'],
    secondary: ['blue', 'gloomy', 'upset', 'hurt', 'pain', 'ache', 'broken'],
    intensity: ['very sad', 'so sad', 'extremely depressed', 'deeply hurt'],
    negation: ['not sad'],
    weight: 1.0,
    color: '#3b82f6',
    gradient: '#3b82f6, #6366f1'
  },
  anxious: {
    primary: ['anxious', 'anxiety', 'worried', 'worry', 'nervous', 'panic', 'fear', 'scared', 'afraid'],
    secondary: ['uneasy', 'tense', 'on edge', 'restless', 'apprehensive', 'concerned'],
    intensity: ['very anxious', 'so worried', 'extremely nervous', 'panic attack'],
    negation: ['not anxious', 'no anxiety'],
    weight: 1.0,
    color: '#f59e0b',
    gradient: '#f59e0b, #ef4444'
  },
  stressed: {
    primary: ['stressed', 'stress', 'overwhelmed', 'pressure', 'exhausted', 'tired', 'drained', 'burned out'],
    secondary: ['swamped', 'too much', 'can\'t handle', 'breaking point', 'overloaded'],
    intensity: ['very stressed', 'so overwhelmed', 'completely exhausted'],
    negation: ['not stressed', 'unstressed'],
    weight: 1.0,
    color: '#ef4444',
    gradient: '#ef4444, #dc2626'
  },
  angry: {
    primary: ['angry', 'anger', 'mad', 'furious', 'annoyed', 'irritated', 'frustrated', 'rage', 'pissed'],
    secondary: ['upset', 'hate', 'disgusted', 'outraged', 'livid', 'seething'],
    intensity: ['very angry', 'so mad', 'extremely frustrated', 'absolutely furious'],
    negation: ['not angry'],
    weight: 1.0,
    color: '#dc2626',
    gradient: '#dc2626, #991b1b'
  },
  lonely: {
    primary: ['lonely', 'loneliness', 'alone', 'isolated', 'abandoned', 'solitary', 'excluded'],
    secondary: ['no one', 'by myself', 'disconnected', 'left out', 'separate'],
    intensity: ['very lonely', 'so alone', 'completely isolated'],
    negation: ['not lonely'],
    weight: 1.0,
    color: '#6366f1',
    gradient: '#6366f1, #8b5cf6'
  },
  fearful: {
    primary: ['fear', 'scared', 'afraid', 'terrified', 'frightened', 'alarmed', 'horror'],
    secondary: ['nightmare', 'threat', 'danger', 'panic', 'dread'],
    intensity: ['very scared', 'so afraid', 'absolutely terrified'],
    negation: ['not scared', 'fearless'],
    weight: 1.0,
    color: '#7c3aed',
    gradient: '#7c3aed, #6366f1'
  },
  guilty: {
    primary: ['guilty', 'guilt', 'ashamed', 'shame', 'remorse', 'regret', 'sorry'],
    secondary: ['my fault', 'shouldn\'t have', 'mistake', 'wrong', 'bad person'],
    intensity: ['very guilty', 'so ashamed', 'deep regret'],
    negation: ['not guilty', 'no regret'],
    weight: 1.0,
    color: '#64748b',
    gradient: '#64748b, #475569'
  },
  disappointed: {
    primary: ['disappointed', 'disappointment', 'let down', 'discouraged', 'disheartened', 'dismayed'],
    secondary: ['expected more', 'failed', 'didn\'t work out', 'hopes dashed'],
    intensity: ['very disappointed', 'so let down', 'deeply discouraged'],
    negation: ['not disappointed'],
    weight: 1.0,
    color: '#71717a',
    gradient: '#71717a, #52525b'
  },
  
  // Complex emotions
  confused: {
    primary: ['confused', 'confusion', 'puzzled', 'perplexed', 'bewildered', 'uncertain', 'unsure'],
    secondary: ['don\'t understand', 'lost', 'unclear', 'mixed feelings', 'conflicted'],
    intensity: ['very confused', 'so puzzled', 'completely bewildered'],
    negation: ['not confused', 'clear'],
    weight: 1.0,
    color: '#94a3b8',
    gradient: '#94a3b8, #64748b'
  },
  nostalgic: {
    primary: ['nostalgic', 'nostalgia', 'miss', 'missing', 'remember', 'memories', 'past'],
    secondary: ['used to', 'back then', 'old times', 'those days', 'reminisce'],
    intensity: ['really miss', 'deeply nostalgic'],
    negation: [],
    weight: 1.0,
    color: '#a78bfa',
    gradient: '#a78bfa, #8b5cf6'
  },
  bored: {
    primary: ['bored', 'boring', 'dull', 'monotonous', 'tedious', 'uninteresting'],
    secondary: ['nothing to do', 'same old', 'routine', 'repetitive'],
    intensity: ['very bored', 'so bored', 'extremely dull'],
    negation: ['not bored', 'interesting'],
    weight: 1.0,
    color: '#9ca3af',
    gradient: '#9ca3af, #6b7280'
  },
  motivated: {
    primary: ['motivated', 'motivation', 'driven', 'ambitious', 'focused', 'determined', 'goal'],
    secondary: ['going to', 'will do', 'committed', 'dedicated', 'pursue'],
    intensity: ['very motivated', 'highly driven', 'extremely focused'],
    negation: ['unmotivated', 'no motivation'],
    weight: 1.0,
    color: '#fb923c',
    gradient: '#fb923c, #f97316'
  }
};

// Advanced NLP-based emotion detection
export function advancedEmotionDetection(text: string): Emotion {
  const lowerText = text.toLowerCase();
  const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0);
  const words = lowerText.split(/\s+/);
  
  // Calculate scores for each emotion
  const emotionScores: Record<string, number> = {};
  
  Object.entries(emotionPatterns).forEach(([emotion, pattern]) => {
    let score = 0;
    
    // Check for negations first
    const hasNegation = pattern.negation.some(neg => lowerText.includes(neg));
    if (hasNegation) {
      score -= 5;
    }
    
    // Primary keywords (highest weight)
    pattern.primary.forEach(keyword => {
      const count = (lowerText.match(new RegExp(`\\b${keyword}\\b`, 'g')) || []).length;
      score += count * 3;
    });
    
    // Secondary keywords
    pattern.secondary.forEach(keyword => {
      if (lowerText.includes(keyword)) {
        score += 2;
      }
    });
    
    // Intensity modifiers (boost the score)
    pattern.intensity.forEach(phrase => {
      if (lowerText.includes(phrase)) {
        score += 4;
      }
    });
    
    // Contextual analysis
    // Check for repeated mentions (indicates strong emotion)
    const uniqueMatches = new Set<string>();
    [...pattern.primary, ...pattern.secondary].forEach(keyword => {
      if (lowerText.includes(keyword)) {
        uniqueMatches.add(keyword);
      }
    });
    if (uniqueMatches.size > 2) {
      score += 2;
    }
    
    // Punctuation analysis
    const exclamationCount = (text.match(/!/g) || []).length;
    const questionCount = (text.match(/\?/g) || []).length;
    
    if (exclamationCount > 0 && score > 0) {
      score += exclamationCount * 0.5;
    }
    
    // Capitalization (indicates intensity)
    const capsWords = (text.match(/\b[A-Z]{2,}\b/g) || []).length;
    if (capsWords > 0 && score > 0) {
      score += capsWords * 0.5;
    }
    
    emotionScores[emotion] = score * pattern.weight;
  });
  
  // Get top emotions
  const sortedEmotions = Object.entries(emotionScores)
    .sort(([, a], [, b]) => b - a)
    .filter(([, score]) => score > 0);
  
  // Default to calm if no strong emotion detected
  let primaryEmotion = sortedEmotions[0]?.[0] || 'calm';
  const primaryScore = sortedEmotions[0]?.[1] || 0;
  const secondaryEmotion = sortedEmotions[1]?.[0];
  const secondaryScore = sortedEmotions[1]?.[1] || 0;
  
  // Calculate intensity (0-100)
  let intensity = Math.min(100, Math.max(20, primaryScore * 10));
  
  // Adjust intensity based on text length and emotion density
  const emotionDensity = primaryScore / words.length;
  intensity = Math.min(100, intensity + (emotionDensity * 100));
  
  // Check if secondary emotion is close enough to mention
  const shouldMentionSecondary = secondaryScore > primaryScore * 0.5;
  
  const emotionData = emotionPatterns[primaryEmotion as keyof typeof emotionPatterns];
  
  return {
    primary: primaryEmotion,
    intensity: Math.round(intensity),
    secondary: shouldMentionSecondary ? secondaryEmotion : undefined,
    color: emotionData.color,
    gradient: emotionData.gradient
  };
}

// Content diversity tracking
interface ContentHistory {
  musicIds: Set<string>;
  videoIds: Set<string>;
  activityIds: Set<string>;
  quoteIds: Set<string>;
  lastEmotion: string;
  emotionCount: Record<string, number>;
}

let contentHistory: ContentHistory = {
  musicIds: new Set(),
  videoIds: new Set(),
  activityIds: new Set(),
  quoteIds: new Set(),
  lastEmotion: '',
  emotionCount: {}
};

export function resetContentHistory() {
  contentHistory = {
    musicIds: new Set(),
    videoIds: new Set(),
    activityIds: new Set(),
    quoteIds: new Set(),
    lastEmotion: '',
    emotionCount: {}
  };
}

export function trackContent(type: 'music' | 'video' | 'activity' | 'quote', id: string) {
  switch (type) {
    case 'music':
      contentHistory.musicIds.add(id);
      break;
    case 'video':
      contentHistory.videoIds.add(id);
      break;
    case 'activity':
      contentHistory.activityIds.add(id);
      break;
    case 'quote':
      contentHistory.quoteIds.add(id);
      break;
  }
  
  // Auto-reset if history gets too large
  if (contentHistory.musicIds.size > 50) {
    contentHistory.musicIds.clear();
  }
  if (contentHistory.videoIds.size > 50) {
    contentHistory.videoIds.clear();
  }
  if (contentHistory.activityIds.size > 50) {
    contentHistory.activityIds.clear();
  }
  if (contentHistory.quoteIds.size > 50) {
    contentHistory.quoteIds.clear();
  }
}

export function hasSeenContent(type: 'music' | 'video' | 'activity' | 'quote', id: string): boolean {
  switch (type) {
    case 'music':
      return contentHistory.musicIds.has(id);
    case 'video':
      return contentHistory.videoIds.has(id);
    case 'activity':
      return contentHistory.activityIds.has(id);
    case 'quote':
      return contentHistory.quoteIds.has(id);
    default:
      return false;
  }
}

export function updateEmotionHistory(emotion: string) {
  contentHistory.lastEmotion = emotion;
  contentHistory.emotionCount[emotion] = (contentHistory.emotionCount[emotion] || 0) + 1;
}

export function getContentHistory() {
  return contentHistory;
}