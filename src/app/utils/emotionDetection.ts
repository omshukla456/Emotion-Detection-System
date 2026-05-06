import type { Emotion, Recommendations } from '../App';
import { advancedEmotionDetection, updateEmotionHistory } from './advancedEmotionDetection';
import { generateSmartRecommendations } from './smartRecommendationEngine';

interface DetectionResult {
  emotion: Emotion;
  recommendations: Recommendations;
}

// Main emotion detection function using advanced AI
export function detectEmotion(text: string): DetectionResult {
  // Use advanced NLP-based emotion detection
  const emotion = advancedEmotionDetection(text);
  
  // Track emotion history for ML insights
  updateEmotionHistory(emotion.primary);
  
  // Generate smart recommendations with anti-repetition
  const recommendations = generateSmartRecommendations(
    emotion.primary,
    emotion.secondary
  );

  return { emotion, recommendations };
}