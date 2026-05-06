export interface MusicItem {
  title: string;
  artist: string;
  youtubeId: string;
  thumbnail?: string;
}

export interface VideoItem {
  title: string;
  youtubeId: string;
  thumbnail?: string;
  description?: string;
}

export interface ActivityItem {
  title: string;
  description: string;
  duration: string;
  image: string;
}

export const emotionContent = {
  happy: {
    music: [
      { title: 'Happy', artist: 'Pharrell Williams', youtubeId: 'ZbZSe6N_BXs' },
      { title: "Don't Stop Me Now", artist: 'Queen', youtubeId: 'HgzGwKwLmgM' },
      { title: 'Walking on Sunshine', artist: 'Katrina and the Waves', youtubeId: 'iPUmE-tne5U' },
      { title: 'Good Vibrations', artist: 'The Beach Boys', youtubeId: 'Eab_beh07HU' }
    ],
    videos: [
      { title: 'Funny Animal Moments Compilation', youtubeId: 'hY7m5jjJ9mM', description: 'Guaranteed to make you smile' },
      { title: 'The Happy Secret to Better Work', youtubeId: 'fLJsdqxnZb0', description: 'TED Talk by Shawn Achor' },
      { title: 'Uplifting Feel Good Music Mix', youtubeId: 'RtBbinpK5XI', description: 'Positive energy playlist' }
    ],
    activities: [
      {
        title: 'Dance Party',
        description: 'Put on your favorite upbeat songs and dance freely for 15 minutes',
        duration: '15 min',
        image: 'https://images.unsplash.com/photo-1635349134541-53a64bed9583?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
      },
      {
        title: 'Gratitude Journaling',
        description: 'Write down 5 things that made you happy today',
        duration: '10 min',
        image: 'https://images.unsplash.com/photo-1552508744-1696d4464960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
      },
      {
        title: 'Share Your Joy',
        description: 'Call a friend or family member to spread your positive energy',
        duration: '20 min',
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
      }
    ]
  },
  sad: {
    music: [
      { title: 'Fix You', artist: 'Coldplay', youtubeId: 'k4V3Mo61fJM' },
      { title: 'The Scientist', artist: 'Coldplay', youtubeId: 'RB-RcX5DS5A' },
      { title: 'Lovely', artist: 'Billie Eilish & Khalid', youtubeId: 'V1Pl8CzNzCw' },
      { title: 'Someone Like You', artist: 'Adele', youtubeId: 'hLQl3WQQoQ0' }
    ],
    videos: [
      { title: 'The Power of Vulnerability', youtubeId: '1Evwgu369Jw', description: 'TED Talk by Brené Brown' },
      { title: 'Relaxing Rain Sounds for Sleep', youtubeId: 'q76bMs-NwRk', description: 'Calming nature sounds' },
      { title: 'Healing Meditation Music', youtubeId: '1ZYbU82GVz4', description: 'Soothing background music' }
    ],
    activities: [
      {
        title: 'Comfort Movie Night',
        description: 'Watch your favorite feel-good movie with a warm blanket',
        duration: '2 hours',
        image: 'https://images.unsplash.com/photo-1631962758485-3fd6ab86e14a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
      },
      {
        title: 'Emotional Release Writing',
        description: 'Write freely about your feelings without judgment',
        duration: '15 min',
        image: 'https://images.unsplash.com/photo-1552508744-1696d4464960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
      },
      {
        title: 'Nature Walk',
        description: 'Take a slow, mindful walk in a park or nature setting',
        duration: '30 min',
        image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
      }
    ]
  },
  anxious: {
    music: [
      { title: 'Weightless', artist: 'Marconi Union', youtubeId: 'UfcAVejslrU' },
      { title: 'Clair de Lune', artist: 'Debussy', youtubeId: 'CvFH_6DNRCY' },
      { title: 'Breathe Me', artist: 'Sia', youtubeId: 'SFGvmrJ5rjM' },
      { title: 'River Flows in You', artist: 'Yiruma', youtubeId: '7maJOI3QMu0' }
    ],
    videos: [
      { title: '5 Minute Breathing Exercise for Anxiety', youtubeId: 'SEfs5TJZ6Nk', description: 'Quick anxiety relief' },
      { title: 'How to Calm Your Anxiety', youtubeId: 'WWloIAQpMcQ', description: 'TEDx Talk' },
      { title: 'Guided Meditation for Anxiety', youtubeId: 'O-6f5wQXSu8', description: '10 minute meditation' }
    ],
    activities: [
      {
        title: '4-7-8 Breathing',
        description: 'Breathe in for 4, hold for 7, exhale for 8. Repeat 4 times',
        duration: '5 min',
        image: 'https://images.unsplash.com/photo-1631962758485-3fd6ab86e14a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
      },
      {
        title: 'Progressive Muscle Relaxation',
        description: 'Tense and release each muscle group from toes to head',
        duration: '15 min',
        image: 'https://images.unsplash.com/photo-1758274526081-57641f58db06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
      },
      {
        title: '5-4-3-2-1 Grounding',
        description: 'Name 5 things you see, 4 you touch, 3 you hear, 2 you smell, 1 you taste',
        duration: '5 min',
        image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
      }
    ]
  },
  stressed: {
    music: [
      { title: 'Spa Music', artist: 'Meditation Relax Music', youtubeId: '1ZYbU82GVz4' },
      { title: 'Peaceful Piano', artist: 'Relaxing Music', youtubeId: 'lTRiuFIWV54' },
      { title: 'Ocean Waves', artist: 'Nature Sounds', youtubeId: 'bn9F19Hi1Lk' },
      { title: 'Gymnopédie No.1', artist: 'Erik Satie', youtubeId: 'S-Xm7s9eGxU' }
    ],
    videos: [
      { title: 'How to Make Stress Your Friend', youtubeId: 'RcGyVTAoXEU', description: 'TED Talk by Kelly McGonigal' },
      { title: '20 Min Stress Relief Yoga', youtubeId: 'COp7BR_Dvps', description: 'Yoga with Adriene' },
      { title: 'Deep Sleep Meditation', youtubeId: 'aEqlQvczMJQ', description: 'Full body relaxation' }
    ],
    activities: [
      {
        title: 'Digital Detox Break',
        description: 'Turn off all devices for 30 minutes and enjoy silence',
        duration: '30 min',
        image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
      },
      {
        title: 'Warm Bath Ritual',
        description: 'Take a relaxing bath with essential oils and calm music',
        duration: '30 min',
        image: 'https://images.unsplash.com/photo-1631962758485-3fd6ab86e14a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
      },
      {
        title: 'Organizing Session',
        description: 'Declutter one small area to create a sense of control',
        duration: '20 min',
        image: 'https://images.unsplash.com/photo-1552508744-1696d4464960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
      }
    ]
  },
  angry: {
    music: [
      { title: 'Killing in the Name', artist: 'Rage Against the Machine', youtubeId: 'bWXazVhlyxQ' },
      { title: 'Break Stuff', artist: 'Limp Bizkit', youtubeId: 'ZpUYjpKg9KY' },
      { title: 'In the End', artist: 'Linkin Park', youtubeId: 'eVTXPUF4Oz4' },
      { title: 'The Pretender', artist: 'Foo Fighters', youtubeId: 'SBjQ9tuuTJQ' }
    ],
    videos: [
      { title: 'How to Control Anger', youtubeId: 'sbgul6VBcmY', description: 'Practical techniques' },
      { title: '30 Min HIIT Workout', youtubeId: 'ml6cT4AZdqI', description: 'Release angry energy' },
      { title: 'Anger Management Meditation', youtubeId: 'U01YkXy98m8', description: 'Calm your mind' }
    ],
    activities: [
      {
        title: 'Intense Workout',
        description: 'Channel your energy into a high-intensity exercise session',
        duration: '30 min',
        image: 'https://images.unsplash.com/photo-1758274526081-57641f58db06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
      },
      {
        title: 'Anger Letter',
        description: 'Write an uncensored letter expressing your feelings, then tear it up',
        duration: '15 min',
        image: 'https://images.unsplash.com/photo-1552508744-1696d4464960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
      },
      {
        title: 'Punch Pillow Session',
        description: 'Release physical tension safely with a pillow or punching bag',
        duration: '10 min',
        image: 'https://images.unsplash.com/photo-1635349134541-53a64bed9583?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
      }
    ]
  },
  calm: {
    music: [
      { title: 'Spiegel im Spiegel', artist: 'Arvo Pärt', youtubeId: 'TJ6Mzvh3XCc' },
      { title: 'Music for Airports', artist: 'Brian Eno', youtubeId: 'vNwYtllyt3Q' },
      { title: 'Meditation Music', artist: 'Peaceful Piano', youtubeId: 'lTRiuFIWV54' },
      { title: 'Bamboo Flute', artist: 'Asian Zen', youtubeId: 'KZK6sDZxPuE' }
    ],
    videos: [
      { title: 'Mindful Meditation Practice', youtubeId: 'ZToicYcHIOU', description: '10 minute guided session' },
      { title: 'Beautiful Nature Scenes', youtubeId: 'ScMzIvxBSi4', description: '4K relaxation video' },
      { title: 'The Art of Being Present', youtubeId: 'SaqiD9FBnvQ', description: 'Mindfulness talk' }
    ],
    activities: [
      {
        title: 'Tea Meditation',
        description: 'Mindfully prepare and enjoy a cup of tea, savoring each moment',
        duration: '15 min',
        image: 'https://images.unsplash.com/photo-1631962758485-3fd6ab86e14a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
      },
      {
        title: 'Nature Observation',
        description: 'Sit outside and observe nature without distraction',
        duration: '20 min',
        image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
      },
      {
        title: 'Gentle Stretching',
        description: 'Do slow, mindful stretches focusing on your breath',
        duration: '15 min',
        image: 'https://images.unsplash.com/photo-1758274526081-57641f58db06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
      }
    ]
  },
  grateful: {
    music: [
      { title: 'What a Wonderful World', artist: 'Louis Armstrong', youtubeId: 'VqhCQZaH4Vs' },
      { title: 'Thank You', artist: 'Dido', youtubeId: '1TO48Cnl66w' },
      { title: 'Count on Me', artist: 'Bruno Mars', youtubeId: 'fLexgOxsZu0' },
      { title: 'Three Little Birds', artist: 'Bob Marley', youtubeId: 'zaGUr6wzyT8' }
    ],
    videos: [
      { title: 'The Science of Gratitude', youtubeId: 'JMd1CcGZYwU', description: 'How gratitude changes you' },
      { title: 'Gratitude Meditation', youtubeId: 'nj-F5Y2qETs', description: '15 minute practice' },
      { title: 'Random Acts of Kindness', youtubeId: 'cDDWvj_q-o8', description: 'Heartwarming compilation' }
    ],
    activities: [
      {
        title: 'Gratitude Letter',
        description: 'Write a heartfelt letter to someone who made a difference in your life',
        duration: '20 min',
        image: 'https://images.unsplash.com/photo-1552508744-1696d4464960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
      },
      {
        title: 'Photo Memory Review',
        description: 'Look through photos of happy memories and reflect on them',
        duration: '15 min',
        image: 'https://images.unsplash.com/photo-1635349134541-53a64bed9583?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
      },
      {
        title: 'Volunteer Planning',
        description: 'Research and sign up for a volunteer opportunity to give back',
        duration: '30 min',
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
      }
    ]
  },
  excited: {
    music: [
      { title: 'Eye of the Tiger', artist: 'Survivor', youtubeId: 'btPJPFnesV4' },
      { title: 'Till I Collapse', artist: 'Eminem', youtubeId: 'ytQ5CYE1VZw' },
      { title: "Can't Stop", artist: 'Red Hot Chili Peppers', youtubeId: 'BfOdWSiyWoc' },
      { title: 'Levels', artist: 'Avicii', youtubeId: '_ovdm2yX4MA' }
    ],
    videos: [
      { title: 'Best Motivational Speech Compilation', youtubeId: 'ZmVBNARB6N8', description: 'Get fired up!' },
      { title: 'Extreme Sports Highlights', youtubeId: 'dPWqYzZPSVk', description: 'Adrenaline rush' },
      { title: 'Success Stories', youtubeId: 'q8TK_cvvmgU', description: 'Inspirational achievements' }
    ],
    activities: [
      {
        title: 'Goal Planning Session',
        description: 'Create an action plan for a goal you\'re excited about',
        duration: '30 min',
        image: 'https://images.unsplash.com/photo-1552508744-1696d4464960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
      },
      {
        title: 'High Energy Workout',
        description: 'Channel your excitement into an energizing exercise session',
        duration: '45 min',
        image: 'https://images.unsplash.com/photo-1758274526081-57641f58db06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
      },
      {
        title: 'Creative Brainstorm',
        description: 'Start that creative project you\'ve been thinking about',
        duration: '40 min',
        image: 'https://images.unsplash.com/photo-1635349134541-53a64bed9583?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
      }
    ]
  },
  lonely: {
    music: [
      { title: "You've Got a Friend", artist: 'Carole King', youtubeId: 'BeOu_D6tHAw' },
      { title: 'Lean on Me', artist: 'Bill Withers', youtubeId: 'fOZ-MySzAac' },
      { title: 'Bridge Over Troubled Water', artist: 'Simon & Garfunkel', youtubeId: '4G-YQA_bsOU' },
      { title: 'True Colors', artist: 'Cyndi Lauper', youtubeId: 'LPn0KFlbqX8' }
    ],
    videos: [
      { title: 'The Power of Human Connection', youtubeId: 'l20xHkZlo80', description: 'TED Talk' },
      { title: 'Dealing with Loneliness', youtubeId: 'n3Xv_g3g-mA', description: 'Practical advice' },
      { title: 'Guided Meditation for Loneliness', youtubeId: 'rCHL7Z_-DCs', description: 'Self-compassion practice' }
    ],
    activities: [
      {
        title: 'Video Call a Friend',
        description: 'Reach out to someone you haven\'t talked to in a while',
        duration: '30 min',
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
      },
      {
        title: 'Join Online Community',
        description: 'Find and engage with a community around your interests',
        duration: '20 min',
        image: 'https://images.unsplash.com/photo-1635349134541-53a64bed9583?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
      },
      {
        title: 'Visit Public Space',
        description: 'Go to a coffee shop, library, or park to be around people',
        duration: '1 hour',
        image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
      }
    ]
  },
  confident: {
    music: [
      { title: 'Stronger', artist: 'Kanye West', youtubeId: 'PsO6ZnUZI0g' },
      { title: 'Roar', artist: 'Katy Perry', youtubeId: 'CevxZvSJLk8' },
      { title: 'Hall of Fame', artist: 'The Script', youtubeId: 'mk48xRzuNvA' },
      { title: 'Confident', artist: 'Demi Lovato', youtubeId: 'cwX9K6bS6HQ' }
    ],
    videos: [
      { title: 'Your Body Language Shapes Who You Are', youtubeId: 'Ks-_Mh1QhMc', description: 'TED Talk by Amy Cuddy' },
      { title: 'How to Build Confidence', youtubeId: 'l_NYrWqUR40', description: 'Practical tips' },
      { title: 'Success Mindset Training', youtubeId: 'KdQ3epyJ7sQ', description: 'Motivational content' }
    ],
    activities: [
      {
        title: 'Bold Challenge',
        description: 'Do something outside your comfort zone that excites you',
        duration: '1 hour',
        image: 'https://images.unsplash.com/photo-1635349134541-53a64bed9583?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
      },
      {
        title: 'Achievement Journal',
        description: 'Document your recent wins and strengths',
        duration: '15 min',
        image: 'https://images.unsplash.com/photo-1552508744-1696d4464960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
      },
      {
        title: 'Skill Development',
        description: 'Start learning something new while your confidence is high',
        duration: '45 min',
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
      }
    ]
  }
};
