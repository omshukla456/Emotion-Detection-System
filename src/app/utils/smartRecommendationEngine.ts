import type { Recommendations } from '../App';
import { musicDatabase } from './expandedContentDatabase';
import { videoDatabase, activitiesDatabase, quotesDatabase } from './expandedVideosActivitiesQuotes';
import { hasSeenContent, trackContent } from './advancedEmotionDetection';

// Smart recommendation algorithm that ensures variety and prevents repetition
export function generateSmartRecommendations(
  primaryEmotion: string,
  secondaryEmotion?: string
): Recommendations {
  // Get content pools
  const primaryMusic = musicDatabase[primaryEmotion] || musicDatabase['calm'];
  const secondaryMusic = secondaryEmotion ? (musicDatabase[secondaryEmotion] || []) : [];
  
  const primaryVideos = videoDatabase[primaryEmotion] || videoDatabase['calm'];
  const secondaryVideos = secondaryEmotion ? (videoDatabase[secondaryEmotion] || []) : [];
  
  const primaryActivities = activitiesDatabase[primaryEmotion] || activitiesDatabase['calm'];
  const secondaryActivities = secondaryEmotion ? (activitiesDatabase[secondaryEmotion] || []) : [];
  
  const primaryQuotes = quotesDatabase[primaryEmotion] || quotesDatabase['calm'];
  const secondaryQuotes = secondaryEmotion ? (quotesDatabase[secondaryEmotion] || []) : [];
  
  // Select music (4 items, prioritizing unseen content)
  const selectedMusic = smartSelect(
    [...primaryMusic, ...secondaryMusic],
    4,
    'music'
  );
  
  // Select videos (3 items)
  const selectedVideos = smartSelect(
    [...primaryVideos, ...secondaryVideos],
    3,
    'video'
  );
  
  // Select activities (3 items)
  const selectedActivities = smartSelect(
    [...primaryActivities, ...secondaryActivities],
    3,
    'activity'
  );
  
  // Select quotes (3 items)
  const selectedQuotes = smartSelect(
    [...primaryQuotes, ...secondaryQuotes],
    3,
    'quote'
  );
  
  // Generate AI-powered suggestions based on emotion analysis
  const suggestions = generateAISuggestions(primaryEmotion, secondaryEmotion);
  
  return {
    music: selectedMusic.map(item => 
      `${item.title} by ${item.artist}`
    ),
    videos: selectedVideos.map(item => item.title),
    quotes: selectedQuotes,
    activities: selectedActivities.map(item => item.title),
    suggestions
  };
}

// Smart selection algorithm with diversity scoring
function smartSelect<T extends { title: string; youtubeId?: string }>(
  items: T[],
  count: number,
  type: 'music' | 'video' | 'activity' | 'quote'
): T[] {
  if (items.length === 0) return [];
  
  // Score each item based on:
  // 1. Whether it's been seen before (unseen items get higher priority)
  // 2. Randomization for variety
  // 3. Diversity (if we track keywords, ensure variety)
  
  const scoredItems = items.map(item => {
    const id = type === 'quote' 
      ? (item as any) // quotes are strings
      : (item.youtubeId || item.title);
    
    const hasSeen = hasSeenContent(type, id);
    const randomScore = Math.random();
    
    // Unseen content gets a 2x boost
    const baseScore = hasSeen ? randomScore : randomScore + 2;
    
    return {
      item,
      score: baseScore,
      id
    };
  });
  
  // Sort by score (highest first)
  scoredItems.sort((a, b) => b.score - a.score);
  
  // Take top items
  const selected = scoredItems.slice(0, Math.min(count, items.length));
  
  // Track that we've shown these
  selected.forEach(({ id }) => {
    trackContent(type, id);
  });
  
  return selected.map(({ item }) => item);
}

// AI-powered suggestion generation based on emotional state
function generateAISuggestions(
  primaryEmotion: string,
  secondaryEmotion?: string
): string[] {
  const suggestionTemplates: Record<string, string[]> = {
    happy: [
      'This is a great time to tackle challenging tasks while your energy is high - use this momentum wisely',
      'Share your positive mood with others through acts of kindness or a simple smile',
      'Document this moment in a journal to revisit during harder times',
      'Consider starting that project you\'ve been putting off while motivation is high',
      'Your positive emotions can boost your immune system - embrace and savor this feeling'
    ],
    
    sad: [
      'It\'s okay to feel sad - allow yourself to process these emotions without judgment',
      'Reach out to a trusted friend or therapist if sadness persists for more than two weeks',
      'Remember that this feeling is temporary and will pass, even though it doesn\'t feel that way now',
      'Avoid making major decisions while feeling this way - give yourself time',
      'Gentle physical activity like walking can help regulate your mood without overwhelming you'
    ],
    
    anxious: [
      'Limit caffeine and sugar intake as they can increase anxiety symptoms',
      'Focus on what you can control right now, and let go of what you cannot',
      'Consider speaking with a mental health professional if anxiety persists or interferes with daily life',
      'Practice the 4-7-8 breathing technique several times today',
      'Remember: anxiety is your body\'s alarm system being overactive, not a sign that something is actually wrong'
    ],
    
    stressed: [
      'Break large tasks into smaller, manageable steps to reduce overwhelm',
      'Schedule time for rest - it\'s not optional, it\'s essential for productivity',
      'Don\'t forget to eat regular meals and stay hydrated, even when busy',
      'Say "no" to non-essential commitments to protect your energy',
      'Consider what you can delegate or postpone to create breathing room'
    ],
    
    angry: [
      'Take a pause before responding to the situation - anger clouds judgment',
      'Physical exercise can help release angry energy constructively',
      'Once calm, address the root cause of your anger rationally and assertively',
      'Ask yourself: "Will this matter in 5 years?" to gain perspective',
      'Anger often masks other emotions like hurt or fear - explore what\'s underneath'
    ],
    
    calm: [
      'This is a perfect state for creative thinking and problem-solving',
      'Consider journaling about what helps you maintain this calm',
      'Share your peaceful energy with others who might need it',
      'Use this clarity to make important decisions you\'ve been considering',
      'Practice gratitude to help maintain this positive state'
    ],
    
    grateful: [
      'Science shows gratitude improves mental health, relationships, and even physical health',
      'Consider volunteering or giving back to your community',
      'Keep a gratitude jar and add to it daily',
      'Express your gratitude to someone who made a difference in your life',
      'Studies show grateful people sleep better and have stronger immune systems'
    ],
    
    excited: [
      'Use this high-energy state to tackle your most important goals',
      'Make a plan to sustain this momentum over time',
      'Remember to pace yourself to avoid burnout',
      'Channel this energy into creative or physical pursuits',
      'Share your excitement - enthusiasm is contagious and strengthens relationships'
    ],
    
    lonely: [
      'Loneliness is different from being alone - reach out when you\'re ready',
      'Consider joining clubs, classes, or groups to meet like-minded people',
      'Remember that many people feel this way - you\'re not alone in feeling lonely',
      'Quality connections matter more than quantity - focus on depth',
      'Volunteering is one of the best ways to combat loneliness while helping others'
    ],
    
    confident: [
      'This is an excellent time to tackle challenges you\'ve been avoiding',
      'Use this confidence to build positive habits that will serve you long-term',
      'Remember this feeling during future moments of self-doubt',
      'Take on a new challenge that pushes you outside your comfort zone',
      'Confidence is built through action - use this momentum to take bold steps'
    ],
    
    motivated: [
      'Strike while the iron is hot - start that important project today',
      'Write down your goals while motivation is high, for when it inevitably wavers',
      'Create systems and habits now that will carry you when motivation fades',
      'Remember: motivation gets you started, discipline keeps you going',
      'Share your goals with an accountability partner to increase follow-through'
    ],
    
    proud: [
      'Take time to truly celebrate your achievements - you\'ve earned it',
      'Reflect on how far you\'ve come and the growth you\'ve experienced',
      'Share your success story to inspire others who are struggling',
      'Document this accomplishment to revisit during future challenges',
      'Pride in your work is healthy - own your success without diminishing it'
    ],
    
    hopeful: [
      'Hope is a powerful predictor of success - nurture this feeling',
      'Take small action steps toward your hopes today',
      'Share your optimism with others - hope is contagious',
      'Hope combined with action creates real change',
      'Research shows hopeful people are more resilient and achieve more'
    ],
    
    loved: [
      'Expressing love strengthens the bond - tell them how you feel',
      'Love releases oxytocin, which reduces stress and improves health',
      'Savor these feelings of connection and belonging',
      'Acts of love and kindness benefit both giver and receiver',
      'Strong relationships are the #1 predictor of long-term happiness'
    ],
    
    fearful: [
      'Fear is often worse in anticipation than in reality',
      'Break down the fear into specific, actionable steps you can take',
      'Ask yourself: What\'s the worst that could happen? And how would you handle it?',
      'Courage isn\'t the absence of fear, but action in spite of it',
      'If fear persists, professional support can provide effective strategies'
    ],
    
    guilty: [
      'If you can make amends, do so. If not, learn from it and let it go',
      'Guilt serves a purpose when it leads to change, but chronic guilt is unproductive',
      'Self-forgiveness is a skill that can be learned and practiced',
      'Ask yourself: Would you judge a friend this harshly for the same action?',
      'Growth comes from mistakes - what has this taught you?'
    ],
    
    disappointed: [
      'Disappointment means you cared enough to hope - that\'s valuable',
      'Every setback is a setup for a comeback',
      'Ask: What can I learn from this? What would I do differently?',
      'It\'s okay to grieve what didn\'t happen before moving forward',
      'Often, disappointment redirects us toward something better'
    ],
    
    confused: [
      'Confusion often precedes clarity - you\'re in a growth phase',
      'Sometimes the best action is to wait for more information',
      'Break down complex situations into smaller, clearer pieces',
      'Talk it through with someone you trust - speaking out loud helps',
      'When confused, focus on your values to guide decision-making'
    ],
    
    nostalgic: [
      'Nostalgia can be bittersweet - honor the past while living in the present',
      'Use positive memories as fuel, not escape',
      'Consider: What made those times special? Can you recreate any of those elements now?',
      'Reach out to people from your past to reconnect',
      'While the past is gone, the person you became from those experiences remains'
    ],
    
    bored: [
      'Boredom is your mind\'s way of saying it\'s ready for growth',
      'Try something new today - even small novel experiences stimulate your brain',
      'Boredom can spark creativity if you resist the urge to numb it',
      'Consider: What would excite you? What have you always wanted to try?',
      'Sometimes boredom signals the need for a bigger change in your life'
    ]
  };
  
  // Get suggestions for primary emotion
  let suggestions = suggestionTemplates[primaryEmotion] || suggestionTemplates['calm'];
  
  // If there's a secondary emotion, blend in one suggestion from it
  if (secondaryEmotion && suggestionTemplates[secondaryEmotion]) {
    const secondarySuggestions = suggestionTemplates[secondaryEmotion];
    const randomSecondary = secondarySuggestions[Math.floor(Math.random() * secondarySuggestions.length)];
    
    // Replace the last suggestion with the secondary one
    suggestions = [...suggestions.slice(0, 2), randomSecondary];
  }
  
  // Randomize and select 3
  const shuffled = [...suggestions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, 3);
}

// Export public content getter with smart selection
export function getSmartMusicContent(emotion: string, count: number = 4) {
  const pool = musicDatabase[emotion] || musicDatabase['calm'];
  return smartSelect(pool, count, 'music');
}

export function getSmartVideoContent(emotion: string, count: number = 3) {
  const pool = videoDatabase[emotion] || videoDatabase['calm'];
  return smartSelect(pool, count, 'video');
}

export function getSmartActivityContent(emotion: string, count: number = 3) {
  const pool = activitiesDatabase[emotion] || activitiesDatabase['calm'];
  return smartSelect(pool, count, 'activity');
}

export function getSmartQuoteContent(emotion: string, count: number = 3) {
  const pool = quotesDatabase[emotion] || quotesDatabase['calm'];
  const selected = smartSelect(
    pool.map(q => ({ title: q, youtubeId: q })),
    count,
    'quote'
  );
  return selected.map(item => item.title);
}
