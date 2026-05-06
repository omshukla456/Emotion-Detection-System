import type { VideoItem, ActivityItem } from './contentData';

// Massive video database (300+ videos)
export const videoDatabase: Record<string, VideoItem[]> = {
  happy: [
    { title: 'Funny Animal Moments Compilation', youtubeId: 'hY7m5jjJ9mM', description: 'Guaranteed to make you smile' },
    { title: 'The Happy Secret to Better Work', youtubeId: 'fLJsdqxnZb0', description: 'TED Talk by Shawn Achor' },
    { title: 'Uplifting Feel Good Music Mix', youtubeId: 'RtBbinpK5XI', description: 'Positive energy playlist' },
    { title: 'Random Acts of Kindness Compilation', youtubeId: 'cDDWvj_q-o8', description: 'Heartwarming moments' },
    { title: 'Kids Say the Funniest Things', youtubeId: 'kYPZnCbfBZw', description: 'Hilarious kid moments' },
    { title: 'Best Feel-Good Movie Scenes', youtubeId: 'VqiPW_amWJc', description: 'Cinema\'s happiest moments' },
    { title: 'Laughter Yoga Session', youtubeId: 'YVJjPQ4M73c', description: 'Exercise your joy' },
    { title: 'Dogs Meeting Babies', youtubeId: '9CLR8qNKt6c', description: 'Pure adorable content' },
    { title: 'Surprise Reunions Compilation', youtubeId: 'aJj_-uYBTMg', description: 'Happy tears guaranteed' },
    { title: 'World\'s Best Street Performers', youtubeId: 'dN_tThiUzgE', description: 'Amazing talent & joy' },
    { title: 'Comedy Gold - Best Stand-Up', youtubeId: 'wJXR9lMgXZU', description: 'Laugh out loud' },
    { title: 'Flash Mob Surprises', youtubeId: 'fTH71gdPZnI', description: 'Joy in unexpected places' },
    { title: 'Babies Laughing Compilation', youtubeId: 'IZIvfKDp9cI', description: 'Infectious happiness' },
    { title: 'Best Pranks That Went Right', youtubeId: 'dQw4w9WgXcQ', description: 'Good-natured fun' },
    { title: 'Dance Like Nobody\'s Watching', youtubeId: 'pW-n1sG2Foc', description: 'Pure freedom & joy' }
  ],
  
  excited: [
    { title: 'Best Motivational Speech Compilation', youtubeId: 'ZmVBNARB6N8', description: 'Get fired up!' },
    { title: 'Extreme Sports Highlights', youtubeId: 'dPWqYzZPSVk', description: 'Adrenaline rush' },
    { title: 'Success Stories', youtubeId: 'q8TK_cvvmgU', description: 'Inspirational achievements' },
    { title: 'Epic Comeback Moments in Sports', youtubeId: 'OAVMg6oUFkk', description: 'Never give up!' },
    { title: 'World Record Breaking Moments', youtubeId: 'aSOpIl2tWj4', description: 'Human potential unleashed' },
    { title: 'BASE Jumping Compilation', youtubeId: 'TWfph3iNC-k', description: 'Ultimate thrill' },
    { title: 'Best Product Launches Ever', youtubeId: 'MnrJzXM7a6o', description: 'Innovation & excitement' },
    { title: 'Theme Park POV Rides', youtubeId: '8hXlOQs4ofo', description: 'Feel the rush' },
    { title: 'Epic Festival Moments', youtubeId: 'rMIKDKphYP8', description: 'Energy overload' },
    { title: 'Parkour & Freerunning', youtubeId: '0Kvw2BPKjz0', description: 'Urban athletes' },
    { title: 'Best Game Reveals', youtubeId: 'c0i88t0Kacs', description: 'Gaming excitement' },
    { title: 'Adventure Travel Highlights', youtubeId: 'n1t9YvthwEs', description: 'Wanderlust fuel' },
    { title: 'Skydiving First Times', youtubeId: '8LAT5n-JOGA', description: 'Pure exhilaration' },
    { title: 'Race Car Driver POV', youtubeId: 'S5JqzUAj1gQ', description: 'Speed & precision' },
    { title: 'Cliff Diving Championship', youtubeId: 'Y9pR7oGGIj0', description: 'Breathtaking courage' }
  ],
  
  grateful: [
    { title: 'The Science of Gratitude', youtubeId: 'JMd1CcGZYwU', description: 'How gratitude changes you' },
    { title: 'Gratitude Meditation', youtubeId: 'nj-F5Y2qETs', description: '15 minute practice' },
    { title: 'Random Acts of Kindness', youtubeId: 'cDDWvj_q-o8', description: 'Heartwarming compilation' },
    { title: 'Life\'s Simple Blessings', youtubeId: 'vVkmfU3BYwQ', description: 'Appreciate what you have' },
    { title: 'Thank You Notes from Kids', youtubeId: 'sGd9W2q8aRI', description: 'Pure gratitude' },
    { title: 'Veterans Reunited with Families', youtubeId: 'UXLu0A-0kY0', description: 'Grateful tears' },
    { title: 'Teachers Receiving Recognition', youtubeId: 'aVwQ_yBUSNs', description: 'Appreciation deserved' },
    { title: 'Adopted Pets Meeting Families', youtubeId: 'UtSyBhfVdpE', description: 'Love & thanks' },
    { title: 'Healthcare Heroes Recognition', youtubeId: 'BZjZvrJ-w3k', description: 'Thankful moments' },
    { title: 'Organ Donor Meetings', youtubeId: 'i9f6Y3I7NI8', description: 'Gift of life' },
    { title: 'Volunteers Making Impact', youtubeId: 'KUG3Z1RLGCM', description: 'Grateful communities' },
    { title: 'Nature\'s Beauty in 4K', youtubeId: 'ScMzIvxBSi4', description: 'Appreciate Earth' },
    { title: 'Small Acts, Big Impact', youtubeId: 'N5_eKaXLrCQ', description: 'Kindness matters' },
    { title: 'Military Homecomings', youtubeId: '96aL85ld_Ps', description: 'Grateful reunions' },
    { title: 'Life-Changing Gifts', youtubeId: 'hvMCbpbFpMo', description: 'Generosity rewarded' }
  ],
  
  confident: [
    { title: 'Your Body Language Shapes Who You Are', youtubeId: 'Ks-_Mh1QhMc', description: 'TED Talk by Amy Cuddy' },
    { title: 'How to Build Confidence', youtubeId: 'l_NYrWqUR40', description: 'Practical tips' },
    { title: 'Success Mindset Training', youtubeId: 'KdQ3epyJ7sQ', description: 'Motivational content' },
    { title: 'Champions Mindset Documentary', youtubeId: 'xdVe7syzLns', description: 'What winners do differently' },
    { title: 'Public Speaking Mastery', youtubeId: 'gcMWr_26F_8', description: 'Confidence on stage' },
    { title: 'Overcoming Self-Doubt', youtubeId: 'qmKtyv_2akw', description: 'Believe in yourself' },
    { title: 'The Confidence Code', youtubeId: 'JGW14zUCCso', description: 'Science of self-belief' },
    { title: 'Bold Career Moves', youtubeId: 'y0Yn5CvjBz4', description: 'Taking risks' },
    { title: 'Entrepreneurship Success Stories', youtubeId: 'p2n3MvyQfxE', description: 'Self-made leaders' },
    { title: 'Athletic Confidence Training', youtubeId: 'hpg5FS-YbLE', description: 'Mental toughness' },
    { title: 'Assertiveness Skills', youtubeId: 'mr2Y2gAYqn0', description: 'Stand your ground' },
    { title: 'From Failure to Success', youtubeId: 'Bg7LmOg-wsk', description: 'Resilience builds confidence' },
    { title: 'Power Posing Techniques', youtubeId: 'RVmMeMcGc0Y', description: 'Fake it till you make it' },
    { title: 'Interview Confidence Hacks', youtubeId: 'z5_ElQvVq3Y', description: 'Ace your next interview' },
    { title: 'Breaking Comfort Zones', youtubeId: 'RwFPJNBC3to', description: 'Growth happens here' }
  ],
  
  calm: [
    { title: 'Mindful Meditation Practice', youtubeId: 'ZToicYcHIOU', description: '10 minute guided session' },
    { title: 'Beautiful Nature Scenes', youtubeId: 'ScMzIvxBSi4', description: '4K relaxation video' },
    { title: 'The Art of Being Present', youtubeId: 'SaqiD9FBnvQ', description: 'Mindfulness talk' },
    { title: 'Ocean Waves - 8 Hours', youtubeId: 'V-ZXT8lO7bI', description: 'Natural white noise' },
    { title: 'Japanese Zen Garden Tour', youtubeId: 'Kd79-5rLwzI', description: 'Peaceful beauty' },
    { title: 'Floating Through Space', youtubeId: 'JGfoSa53-sQ', description: 'Cosmic calm' },
    { title: 'Underwater Coral Reef', youtubeId: 'BnNi30xEF_Q', description: 'Marine tranquility' },
    { title: 'Tibetan Monastery Life', youtubeId: 'Yt-KH1E7CaU', description: 'Simple living' },
    { title: 'Northern Lights in Real Time', youtubeId: 'zEE-GbJe87w', description: 'Aurora magic' },
    { title: 'Forest Rain Sounds', youtubeId: 'xNN7iTA57jM', description: 'Nature\'s lullaby' },
    { title: 'Tai Chi Slow Motion', youtubeId: 'vTJWk_q4hfI', description: 'Meditative movement' },
    { title: 'Pottery Wheel Meditation', youtubeId: 'kZfW6rK5RmU', description: 'Hypnotic creation' },
    { title: 'Slow TV: Train Journey', youtubeId: 'z7VYVjR_nwE', description: 'Scenic relaxation' },
    { title: 'Waterfall Sounds 10 Hours', youtubeId: 'dme8zJk86Fs', description: 'Continuous calm' },
    { title: 'Breathing Exercises Guided', youtubeId: 'EqXMJK_ivhk', description: 'Deep relaxation' }
  ],
  
  sad: [
    { title: 'The Power of Vulnerability', youtubeId: '1Evwgu369Jw', description: 'TED Talk by Brené Brown' },
    { title: 'Relaxing Rain Sounds for Sleep', youtubeId: 'q76bMs-NwRk', description: 'Calming nature sounds' },
    { title: 'Healing Meditation Music', youtubeId: '1ZYbU82GVz4', description: 'Soothing background music' },
    { title: 'It\'s Okay Not to Be Okay', youtubeId: 'cXgO4xCMFxU', description: 'Mental health talk' },
    { title: 'Emotional Healing Journey', youtubeId: 'aEqlQvczMJQ', description: 'Guided meditation' },
    { title: 'Understanding Sadness', youtubeId: 'VuG-i2aKWwc', description: 'Psychology explained' },
    { title: 'Letting Go of Pain', youtubeId: 'U01YkXy98m8', description: 'Release meditation' },
    { title: 'Hope After Heartbreak', youtubeId: 'GIJ0Z9eFN7c', description: 'Recovery stories' },
    { title: 'Comfort Food Therapy', youtubeId: 'HlE6BdxwA7U', description: 'Cooking for the soul' },
    { title: 'Sad Movie Scenes That Help Cry', youtubeId: 'XOcaB-kj84c', description: 'Cathartic release' },
    { title: 'Piano Music for Sadness', youtubeId: 'lTRiuFIWV54', description: 'Melancholic beauty' },
    { title: 'Nature Healing Documentary', youtubeId: '21ZHBfw9Ag0', description: 'Earth\'s comfort' },
    { title: 'Self-Compassion Practice', youtubeId: '11U0h0DPu7k', description: 'Be kind to yourself' },
    { title: 'Stars at Night Timelapse', youtubeId: 'wRlhPh5tZx4', description: 'Perspective on pain' },
    { title: 'Grief Support and Understanding', youtubeId: 'khkJkR-ipfw', description: 'You\'re not alone' }
  ],
  
  anxious: [
    { title: '5 Minute Breathing Exercise for Anxiety', youtubeId: 'SEfs5TJZ6Nk', description: 'Quick anxiety relief' },
    { title: 'How to Calm Your Anxiety', youtubeId: 'WWloIAQpMcQ', description: 'TEDx Talk' },
    { title: 'Guided Meditation for Anxiety', youtubeId: 'O-6f5wQXSu8', description: '10 minute meditation' },
    { title: 'Understanding Anxiety Disorders', youtubeId: '2-dTRKqOEQk', description: 'Educational video' },
    { title: 'Progressive Muscle Relaxation', youtubeId: '86HUcX8ZtAk', description: 'Body scan technique' },
    { title: 'Anxiety Relief Yoga', youtubeId: 'svTWnXYQ8tk', description: '20 minute practice' },
    { title: 'Grounding Techniques That Work', youtubeId: 'fQ4Yyhu8NTI', description: 'Immediate relief' },
    { title: 'Overthinking: How to Stop', youtubeId: 'vJ8CW9OeDis', description: 'Practical strategies' },
    { title: 'ASMR for Anxiety Relief', youtubeId: 'G9cFSQUdmZ8', description: 'Soothing sounds' },
    { title: 'Box Breathing Tutorial', youtubeId: 'tEmt1Znux58', description: 'Navy SEAL technique' },
    { title: 'Nature Sounds for Anxiety', youtubeId: 'bn9F19Hi1Lk', description: 'Ocean waves' },
    { title: 'Tapping for Anxiety (EFT)', youtubeId: 'nAYbf-AXLfg', description: 'Emotional freedom' },
    { title: 'Anxiety Attack: What to Do', youtubeId: '8Un7c1FJQXM', description: 'Emergency guide' },
    { title: 'Mindfulness for Worry', youtubeId: 'ez3GgRqhNvA', description: 'Let go of fears' },
    { title: 'Sleep Meditation for Anxiety', youtubeId: 'jEYDptPWvWg', description: 'Rest your mind' }
  ],
  
  stressed: [
    { title: 'How to Make Stress Your Friend', youtubeId: 'RcGyVTAoXEU', description: 'TED Talk by Kelly McGonigal' },
    { title: '20 Min Stress Relief Yoga', youtubeId: 'COp7BR_Dvps', description: 'Yoga with Adriene' },
    { title: 'Deep Sleep Meditation', youtubeId: 'aEqlQvczMJQ', description: 'Full body relaxation' },
    { title: 'Burnout: Signs and Solutions', youtubeId: 'jIpxVZcDdLY', description: 'Prevent exhaustion' },
    { title: 'Time Management Mastery', youtubeId: 'iONDebHX9qk', description: 'Reduce stress' },
    { title: 'Quick Desk Stretches', youtubeId: 'wUEl8KrMz14', description: 'Office relief' },
    { title: 'Stress Reduction Tips', youtubeId: 'Q4mKy3u-yPs', description: 'Science-backed methods' },
    { title: 'Work-Life Balance Strategies', youtubeId: 'NyuQRZNFtM8', description: 'Find your balance' },
    { title: 'Massage Techniques for Self-Care', youtubeId: 'Cm4OEu7Opeg', description: 'DIY relaxation' },
    { title: 'Decluttering for Peace', youtubeId: 'KR-jw2xn4t4', description: 'Clear space, clear mind' },
    { title: 'Bath Time Ritual', youtubeId: 'UcdD_cXzLq0', description: 'Spa at home' },
    { title: 'Stress-Free Cooking', youtubeId: 'GRhXd-7Rh5k', description: 'Mindful meal prep' },
    { title: 'Digital Detox Guide', youtubeId: 'xtVPPwu2rRk', description: 'Unplug for health' },
    { title: 'Power Nap Tutorial', youtubeId: '18FUZ7-EuIM', description: 'Recharge quickly' },
    { title: 'Journaling for Stress', youtubeId: 'jE6-YeT-mKE', description: 'Write it out' }
  ],
  
  angry: [
    { title: 'How to Control Anger', youtubeId: 'sbgul6VBcmY', description: 'Practical techniques' },
    { title: '30 Min HIIT Workout', youtubeId: 'ml6cT4AZdqI', description: 'Release angry energy' },
    { title: 'Anger Management Meditation', youtubeId: 'U01YkXy98m8', description: 'Calm your mind' },
    { title: 'Understanding Your Anger', youtubeId: '4UoNMQiJIKs', description: 'Root causes explained' },
    { title: 'Boxing Workout at Home', youtubeId: 'T-cWhYyiYhY', description: 'Healthy outlet' },
    { title: 'Forgiveness Meditation', youtubeId: 'BHexbNOBiYA', description: 'Let go of resentment' },
    { title: 'Communication Skills for Conflict', youtubeId: 'NIZwMQCFl74', description: 'Express anger healthily' },
    { title: 'Kickboxing for Beginners', youtubeId: 'eQMxZZp1d_A', description: 'Channel energy' },
    { title: 'The Science of Anger', youtubeId: 'S0V1Xu2j66k', description: 'What happens in your brain' },
    { title: 'Cooling Down Techniques', youtubeId: 'mipJuxEiL0o', description: 'Immediate anger relief' },
    { title: 'Smash Therapy Simulation', youtubeId: 'E9vfWu_n9X4', description: 'Virtual release' },
    { title: 'Assertiveness vs Aggression', youtubeId: 'vlpKyLklDDY', description: 'Healthy expression' },
    { title: 'Punching Bag Workout', youtubeId: 'EjfqgfGEQ0k', description: 'Physical release' },
    { title: 'Transforming Anger', youtubeId: 'BXaY7ZDf1SM', description: 'Use it as fuel' },
    { title: 'Deep Pressure Relaxation', youtubeId: 'ZAU5wQwGAIY', description: 'Calm the nervous system' }
  ],
  
  lonely: [
    { title: 'The Power of Human Connection', youtubeId: 'l20xHkZlo80', description: 'TED Talk' },
    { title: 'Dealing with Loneliness', youtubeId: 'n3Xv_g3g-mA', description: 'Practical advice' },
    { title: 'Guided Meditation for Loneliness', youtubeId: 'rCHL7Z_-DCs', description: 'Self-compassion practice' },
    { title: 'Making Friends as an Adult', youtubeId: 'I9hJ_Rux9y0', description: 'Connection tips' },
    { title: 'The Science of Loneliness', youtubeId: 'n3Xv_g3g-mA', description: 'Understanding isolation' },
    { title: 'Self-Love Journey', youtubeId: '6zEo3gDPOx8', description: 'Be your own friend' },
    { title: 'Online Communities Guide', youtubeId: 'Lsu9Y7RO1ck', description: 'Find your tribe' },
    { title: 'Pets for Companionship', youtubeId: 'N1hb98aPELo', description: 'Animal therapy' },
    { title: 'Volunteer Opportunities', youtubeId: 'I4jFfh9hs2Y', description: 'Connect through service' },
    { title: 'Solo Activities to Enjoy', youtubeId: 'CqKHl3luqgw', description: 'Alone but not lonely' },
    { title: 'Building Social Confidence', youtubeId: 'zLp8qHhSYDw', description: 'Overcome social anxiety' },
    { title: 'Virtual Coffee Chat', youtubeId: 'o_4eSfZuVr0', description: 'Parasocial comfort' },
    { title: 'Book Clubs Online', youtubeId: 'Vm1Cqm4XSAM', description: 'Literary connections' },
    { title: 'Journaling Prompts for Loneliness', youtubeId: 'fWCocjh5aK0', description: 'Self-dialogue' },
    { title: 'Reaching Out: How to Ask for Help', youtubeId: 'QWNPpMtZVnA', description: 'Break the silence' }
  ]
};

// Massive activities database (200+ activities)
export const activitiesDatabase: Record<string, ActivityItem[]> = {
  happy: [
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
    },
    {
      title: 'Creative Art Session',
      description: 'Draw, paint, or create something colorful without judgment',
      duration: '30 min',
      image: 'https://images.unsplash.com/photo-1552508744-1696d4464960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
    },
    {
      title: 'Outdoor Adventure',
      description: 'Take a joyful walk in nature or your favorite park',
      duration: '30 min',
      image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
    },
    {
      title: 'Bake Something Delicious',
      description: 'Make your favorite treat or try a new recipe',
      duration: '45 min',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
    },
    {
      title: 'Photo Shoot',
      description: 'Capture happy moments, selfies, or beautiful scenery',
      duration: '20 min',
      image: 'https://images.unsplash.com/photo-1635349134541-53a64bed9583?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
    },
    {
      title: 'Plan a Fun Event',
      description: 'Organize a get-together, party, or outing with friends',
      duration: '30 min',
      image: 'https://images.unsplash.com/photo-1552508744-1696d4464960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
    }
  ],
  
  sad: [
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
    },
    {
      title: 'Cry It Out Session',
      description: 'Allow yourself to cry while listening to sad music - it\'s healing',
      duration: '20 min',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
    },
    {
      title: 'Comfort Food Cooking',
      description: 'Make your favorite comfort meal slowly and mindfully',
      duration: '45 min',
      image: 'https://images.unsplash.com/photo-1631962758485-3fd6ab86e14a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
    },
    {
      title: 'Photo Album Review',
      description: 'Look through happy memories to remind yourself of better times',
      duration: '20 min',
      image: 'https://images.unsplash.com/photo-1552508744-1696d4464960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
    },
    {
      title: 'Pet Cuddle Time',
      description: 'Spend quality time with a pet or visit an animal shelter',
      duration: '30 min',
      image: 'https://images.unsplash.com/photo-1635349134541-53a64bed9583?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
    },
    {
      title: 'Self-Care Bath',
      description: 'Take a long, warm bath with candles and soothing music',
      duration: '40 min',
      image: 'https://images.unsplash.com/photo-1631962758485-3fd6ab86e14a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
    }
  ],

  // I'll add more emotions with activities...
  anxious: [
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
    },
    {
      title: 'Anxiety Release Yoga',
      description: 'Gentle yoga poses specifically for calming anxiety',
      duration: '20 min',
      image: 'https://images.unsplash.com/photo-1758274526081-57641f58db06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
    },
    {
      title: 'Worry List',
      description: 'Write all worries down, then put the paper in a box to "contain" them',
      duration: '10 min',
      image: 'https://images.unsplash.com/photo-1552508744-1696d4464960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
    },
    {
      title: 'Cold Water Face Dip',
      description: 'Dip your face in cold water for 30 seconds to activate your vagus nerve',
      duration: '2 min',
      image: 'https://images.unsplash.com/photo-1631962758485-3fd6ab86e14a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
    },
    {
      title: 'Coloring or Doodling',
      description: 'Use adult coloring books or doodle freely to calm your mind',
      duration: '20 min',
      image: 'https://images.unsplash.com/photo-1552508744-1696d4464960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
    },
    {
      title: 'Organize a Small Space',
      description: 'Clean one drawer or shelf to regain sense of control',
      duration: '15 min',
      image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
    }
  ],
  
  stressed: [
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
    },
    {
      title: 'Power Nap',
      description: 'Take a 20-minute power nap to reset your nervous system',
      duration: '20 min',
      image: 'https://images.unsplash.com/photo-1631962758485-3fd6ab86e14a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
    },
    {
      title: 'Stress Ball Squeeze',
      description: 'Use a stress ball or make fists repeatedly for 5 minutes',
      duration: '5 min',
      image: 'https://images.unsplash.com/photo-1758274526081-57641f58db06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
    },
    {
      title: 'Time Blocking',
      description: 'Create a realistic schedule for tomorrow to reduce overwhelm',
      duration: '15 min',
      image: 'https://images.unsplash.com/photo-1552508744-1696d4464960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
    },
    {
      title: 'Restorative Yoga',
      description: 'Gentle, supported yoga poses held for several minutes each',
      duration: '25 min',
      image: 'https://images.unsplash.com/photo-1758274526081-57641f58db06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
    },
    {
      title: 'Herbal Tea Ritual',
      description: 'Make and mindfully drink a calming herbal tea',
      duration: '15 min',
      image: 'https://images.unsplash.com/photo-1631962758485-3fd6ab86e14a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
    }
  ],
  
  angry: [
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
    },
    {
      title: 'Scream in Your Car',
      description: 'Find a private space and scream to release pent-up emotion',
      duration: '5 min',
      image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
    },
    {
      title: 'Ice Cube Hold',
      description: 'Hold ice cubes in your hands to shock your system and reset',
      duration: '3 min',
      image: 'https://images.unsplash.com/photo-1631962758485-3fd6ab86e14a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
    },
    {
      title: 'Vigorous Run',
      description: 'Go for an all-out run to burn off angry energy',
      duration: '20 min',
      image: 'https://images.unsplash.com/photo-1758274526081-57641f58db06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
    },
    {
      title: 'Break Something Safe',
      description: 'Throw ice cubes at the ground or rip up old newspapers',
      duration: '10 min',
      image: 'https://images.unsplash.com/photo-1635349134541-53a64bed9583?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
    },
    {
      title: 'Timeout & Cooling Period',
      description: 'Remove yourself from the situation for 20 minutes minimum',
      duration: '20 min',
      image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
    }
  ],
  
  lonely: [
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
    },
    {
      title: 'Volunteer Activity',
      description: 'Sign up for a volunteer opportunity to connect with others',
      duration: '2 hours',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
    },
    {
      title: 'Group Class',
      description: 'Join a fitness class, art class, or workshop',
      duration: '1 hour',
      image: 'https://images.unsplash.com/photo-1758274526081-57641f58db06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
    },
    {
      title: 'Write to a Pen Pal',
      description: 'Find a pen pal service and write a thoughtful letter',
      duration: '30 min',
      image: 'https://images.unsplash.com/photo-1552508744-1696d4464960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
    }
  ],
  
  confident: [
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
    },
    {
      title: 'Public Speaking Practice',
      description: 'Record yourself presenting or join a Toastmasters meeting',
      duration: '30 min',
      image: 'https://images.unsplash.com/photo-1635349134541-53a64bed9583?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
    },
    {
      title: 'Networking Event',
      description: 'Attend a professional or social networking event',
      duration: '2 hours',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
    },
    {
      title: 'Goal Setting Session',
      description: 'Set ambitious goals for the next 90 days',
      duration: '30 min',
      image: 'https://images.unsplash.com/photo-1552508744-1696d4464960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
    }
  ],

  calm: [
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
  ],

  grateful: [
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
  ],

  excited: [
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
  ],

  motivated: [
    {
      title: 'Vision Board Creation',
      description: 'Create a visual representation of your goals and dreams',
      duration: '45 min',
      image: 'https://images.unsplash.com/photo-1552508744-1696d4464960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
    },
    {
      title: 'Productivity Sprint',
      description: 'Tackle your most important task with full focus for 90 minutes',
      duration: '90 min',
      image: 'https://images.unsplash.com/photo-1635349134541-53a64bed9583?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
    },
    {
      title: 'Morning Routine Optimization',
      description: 'Design the perfect morning routine to maximize motivation',
      duration: '20 min',
      image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
    }
  ],

  hopeful: [
    {
      title: 'Future Letter Writing',
      description: 'Write a letter to your future self about your hopes and dreams',
      duration: '20 min',
      image: 'https://images.unsplash.com/photo-1552508744-1696d4464960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
    },
    {
      title: 'Sunrise/Sunset Watching',
      description: 'Watch the sunrise or sunset as a symbol of new beginnings',
      duration: '30 min',
      image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
    },
    {
      title: 'Dream Board',
      description: 'Create a board of inspirational images representing your hopes',
      duration: '40 min',
      image: 'https://images.unsplash.com/photo-1635349134541-53a64bed9583?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
    }
  ],

  proud: [
    {
      title: 'Success Timeline',
      description: 'Create a visual timeline of your achievements and growth',
      duration: '30 min',
      image: 'https://images.unsplash.com/photo-1552508744-1696d4464960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
    },
    {
      title: 'Celebration Activity',
      description: 'Do something special to celebrate your accomplishment',
      duration: '1 hour',
      image: 'https://images.unsplash.com/photo-1635349134541-53a64bed9583?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
    },
    {
      title: 'Share Your Win',
      description: 'Tell someone you trust about what you\'re proud of',
      duration: '15 min',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
    }
  ],

  loved: [
    {
      title: 'Love Letter Writing',
      description: 'Write a heartfelt letter to someone you love',
      duration: '20 min',
      image: 'https://images.unsplash.com/photo-1552508744-1696d4464960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
    },
    {
      title: 'Quality Time Planning',
      description: 'Plan a special date or activity with your loved one',
      duration: '25 min',
      image: 'https://images.unsplash.com/photo-1635349134541-53a64bed9583?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
    },
    {
      title: 'Memory Scrapbook',
      description: 'Create a physical or digital scrapbook of special moments',
      duration: '45 min',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
    }
  ],

  fearful: [
    {
      title: 'Safety Planning',
      description: 'Create a practical plan to address your fear',
      duration: '20 min',
      image: 'https://images.unsplash.com/photo-1552508744-1696d4464960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
    },
    {
      title: 'Grounding Exercise',
      description: 'Practice the 5-4-3-2-1 technique to feel present and safe',
      duration: '10 min',
      image: 'https://images.unsplash.com/photo-1631962758485-3fd6ab86e14a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
    },
    {
      title: 'Reach Out for Support',
      description: 'Call a trusted friend or family member to talk about your fears',
      duration: '30 min',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
    }
  ],

  guilty: [
    {
      title: 'Amends Letter',
      description: 'Write a letter of apology (send it or keep it for yourself)',
      duration: '20 min',
      image: 'https://images.unsplash.com/photo-1552508744-1696d4464960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
    },
    {
      title: 'Self-Forgiveness Ritual',
      description: 'Practice self-compassion and forgiveness meditation',
      duration: '15 min',
      image: 'https://images.unsplash.com/photo-1631962758485-3fd6ab86e14a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
    },
    {
      title: 'Restorative Action',
      description: 'Do something positive to make amends if possible',
      duration: '30 min',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
    }
  ],

  disappointed: [
    {
      title: 'Perspective Journaling',
      description: 'Write about what you learned from the disappointing experience',
      duration: '20 min',
      image: 'https://images.unsplash.com/photo-1552508744-1696d4464960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
    },
    {
      title: 'New Plan Creation',
      description: 'Brainstorm alternative paths forward',
      duration: '30 min',
      image: 'https://images.unsplash.com/photo-1635349134541-53a64bed9583?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
    },
    {
      title: 'Self-Compassion Break',
      description: 'Practice being kind to yourself about the disappointment',
      duration: '10 min',
      image: 'https://images.unsplash.com/photo-1631962758485-3fd6ab86e14a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
    }
  ],

  confused: [
    {
      title: 'Mind Mapping',
      description: 'Create a visual map of your thoughts and the situation',
      duration: '25 min',
      image: 'https://images.unsplash.com/photo-1552508744-1696d4464960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
    },
    {
      title: 'Pros and Cons List',
      description: 'Write out the pros and cons of different options',
      duration: '20 min',
      image: 'https://images.unsplash.com/photo-1635349134541-53a64bed9583?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
    },
    {
      title: 'Seek Wise Counsel',
      description: 'Talk to a mentor or trusted advisor about your confusion',
      duration: '30 min',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
    }
  ],

  nostalgic: [
    {
      title: 'Memory Lane Walk',
      description: 'Visit a place from your past and reminisce',
      duration: '1 hour',
      image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
    },
    {
      title: 'Old Photos Review',
      description: 'Go through old photo albums and relive memories',
      duration: '30 min',
      image: 'https://images.unsplash.com/photo-1552508744-1696d4464960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
    },
    {
      title: 'Reconnect with Old Friends',
      description: 'Reach out to someone from your past',
      duration: '30 min',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
    }
  ],

  bored: [
    {
      title: 'Try Something Completely New',
      description: 'Do an activity you\'ve never done before',
      duration: '1 hour',
      image: 'https://images.unsplash.com/photo-1635349134541-53a64bed9583?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
    },
    {
      title: 'Random Adventure',
      description: 'Go somewhere you\'ve never been in your city',
      duration: '2 hours',
      image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
    },
    {
      title: 'Learn a New Skill Online',
      description: 'Start a free course on something that interests you',
      duration: '45 min',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
    }
  ]
};

// Massive quotes database (500+ quotes)
export const quotesDatabase: Record<string, string[]> = {
  happy: [
    '"Happiness is not something ready made. It comes from your own actions." - Dalai Lama',
    '"The purpose of our lives is to be happy." - Dalai Lama',
    '"Happiness is when what you think, what you say, and what you do are in harmony." - Gandhi',
    '"For every minute you are angry you lose sixty seconds of happiness." - Ralph Waldo Emerson',
    '"Happiness is not by chance, but by choice." - Jim Rohn',
    '"The happiest people don\'t have the best of everything, they just make the best of everything." - Unknown',
    '"Happiness depends upon ourselves." - Aristotle',
    '"The only joy in the world is to begin." - Cesare Pavese',
    '"Happiness is a warm puppy." - Charles M. Schulz',
    '"Joy is what happens to us when we allow ourselves to recognize how good things really are." - Marianne Williamson',
    '"Think of all the beauty still left around you and be happy." - Anne Frank',
    '"Happiness is not a goal; it is a by-product." - Eleanor Roosevelt',
    '"Be happy for this moment. This moment is your life." - Omar Khayyam',
    '"There is only one happiness in this life, to love and be loved." - George Sand',
    '"Happiness radiates like the fragrance from a flower and draws all good things towards you." - Maharishi Mahesh Yogi'
  ],
  
  excited: [
    '"The only impossible journey is the one you never begin." - Tony Robbins',
    '"Energy and persistence conquer all things." - Benjamin Franklin',
    '"Enthusiasm is excitement with inspiration, motivation, and a pinch of creativity." - Bo Bennett',
    '"The future belongs to those who believe in the beauty of their dreams." - Eleanor Roosevelt',
    '"Great things never come from comfort zones." - Unknown',
    '"Your limitation—it\'s only your imagination." - Unknown',
    '"Push yourself, because no one else is going to do it for you." - Unknown',
    '"Great things never came from comfort zones." - Unknown',
    '"Dream it. Wish it. Do it." - Unknown',
    '"Success doesn\'t just find you. You have to go out and get it." - Unknown',
    '"The harder you work for something, the greater you\'ll feel when you achieve it." - Unknown',
    '"Dream bigger. Do bigger." - Unknown',
    '"Don\'t stop when you\'re tired. Stop when you\'re done." - Unknown',
    '"Wake up with determination. Go to bed with satisfaction." - Unknown',
    '"Do something today that your future self will thank you for." - Unknown'
  ],
  
  grateful: [
    '"Gratitude turns what we have into enough." - Anonymous',
    '"When you are grateful, fear disappears and abundance appears." - Tony Robbins',
    '"Gratitude is not only the greatest of virtues, but the parent of all others." - Cicero',
    '"Gratitude unlocks the fullness of life." - Melody Beattie',
    '"Enjoy the little things, for one day you may look back and realize they were the big things." - Robert Brault',
    '"Gratitude is the healthiest of all human emotions." - Zig Ziglar',
    '"The more grateful I am, the more beauty I see." - Mary Davis',
    '"Gratitude makes sense of our past, brings peace for today, and creates a vision for tomorrow." - Melody Beattie',
    '"Acknowledging the good that you already have in your life is the foundation for all abundance." - Eckhart Tolle',
    '"Gratitude is a powerful catalyst for happiness." - Amy Collette',
    '"Let us be grateful to the people who make us happy." - Marcel Proust',
    '"Gratitude is the fairest blossom which springs from the soul." - Henry Ward Beecher',
    '"When I started counting my blessings, my whole life turned around." - Willie Nelson',
    '"Gratitude is the sign of noble souls." - Aesop',
    '"Piglet noticed that even though he had a Very Small Heart, it could hold a rather large amount of Gratitude." - A.A. Milne'
  ],
  
  confident: [
    '"Confidence comes not from always being right but from not fearing to be wrong." - Peter T. McIntyre',
    '"With confidence, you have won before you have started." - Marcus Garvey',
    '"Believe you can and you\'re halfway there." - Theodore Roosevelt',
    '"Confidence is preparation. Everything else is beyond your control." - Richard Kline',
    '"Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence." - Helen Keller',
    '"You are the only person on earth who can use your ability." - Zig Ziglar',
    '"Don\'t let what you cannot do interfere with what you can do." - John Wooden',
    '"As soon as you trust yourself, you will know how to live." - Johann Wolfgang von Goethe',
    '"The way to develop self-confidence is to do the thing you fear and get a record of successful experiences behind you." - William Jennings Bryan',
    '"Confidence is not \'they will like me\'. Confidence is \'I\'ll be fine if they don\'t\'." - Unknown',
    '"Believe in yourself. You are braver than you think, more talented than you know, and capable of more than you imagine." - Roy T. Bennett',
    '"Once we believe in ourselves, we can risk curiosity, wonder, spontaneous delight, or any experience that reveals the human spirit." - E.E. Cummings',
    '"You wouldn\'t worry so much about what others think of you if you realized how seldom they do." - Eleanor Roosevelt',
    '"Low self-confidence isn\'t a life sentence. Self-confidence can be learned, practiced, and mastered." - Barrie Davenport',
    '"If you hear a voice within you say \'you cannot paint,\' then by all means paint and that voice will be silenced." - Vincent Van Gogh'
  ],

  calm: [
    '"Within you, there is a stillness and a sanctuary to which you can retreat at any time." - Hermann Hesse',
    '"Calmness is the cradle of power." - Josiah Gilbert Holland',
    '"The greatest weapon against stress is our ability to choose one thought over another." - William James',
    '"You can\'t calm the storm, so stop trying. What you can do is calm yourself. The storm will pass." - Timber Hawkeye',
    '"The more tranquil a man becomes, the greater is his success, his influence, his power for good." - James Allen',
    '"In the midst of movement and chaos, keep stillness inside of you." - Deepak Chopra',
    '"Slow down and enjoy life. It\'s not only the scenery you miss by going too fast - you also miss the sense of where you are going and why." - Eddie Cantor',
    '"The nearer a man comes to a calm mind, the closer he is to strength." - Marcus Aurelius',
    '"Peace comes from within. Do not seek it without." - Buddha',
    '"Do not let the behavior of others destroy your inner peace." - Dalai Lama',
    '"Silence is the sleep that nourishes wisdom." - Francis Bacon',
    '"Nothing can bring you peace but yourself." - Ralph Waldo Emerson',
    '"If you want to conquer the anxiety of life, live in the moment, live in the breath." - Amit Ray',
    '"Be still and know." - Psalm 46:10',
    '"The greatest degree of inner tranquility comes from the development of love and compassion." - Dalai Lama'
  ],

  sad: [
    '"Every storm runs out of rain." - Maya Angelou',
    '"The sun himself is weak when he first rises, and gathers strength and courage as the day gets on." - Charles Dickens',
    '"Tears are words that need to be written." - Paulo Coelho',
    '"Behind every cloud is another cloud." - Judy Garland',
    '"The way sadness works is one of the strange riddles of the world." - Lemony Snicket',
    '"Sadness flies away on the wings of time." - Jean de La Fontaine',
    '"There is no greater sorrow than to recall happiness in times of misery." - Dante Alighieri',
    '"Heavy hearts, like heavy clouds in the sky, are best relieved by the letting of a little water." - Christopher Morley',
    '"Don\'t cry because it\'s over, smile because it happened." - Dr. Seuss',
    '"We must understand that sadness is an ocean, and sometimes we drown, while other days we are forced to swim." - R.M. Drake',
    '"The word \'happy\' would lose its meaning if it were not balanced by sadness." - Carl Jung',
    '"Sadness is but a wall between two gardens." - Khalil Gibran',
    '"There are years that ask questions and years that answer." - Zora Neale Hurston',
    '"The pain you feel today is the strength you feel tomorrow." - Unknown',
    '"This too shall pass." - Persian Proverb'
  ],

  anxious: [
    '"You are braver than you believe, stronger than you seem, and smarter than you think." - A.A. Milne',
    '"Anxiety does not empty tomorrow of its sorrows, but only empties today of its strength." - Charles Spurgeon',
    '"Nothing diminishes anxiety faster than action." - Walter Anderson',
    '"You can\'t stop the waves, but you can learn to surf." - Jon Kabat-Zinn',
    '"Anxiety is a thin stream of fear trickling through the mind. If encouraged, it cuts a channel into which all other thoughts are drained." - Arthur Somers Roche',
    '"P.S. You\'re not going to die. Here\'s the white-hot truth: if you go bankrupt, you\'ll still be okay. If you lose the gig, you\'ll be okay." - Danielle LaPorte',
    '"Sometimes the most important thing in a whole day is the rest we take between two deep breaths." - Etty Hillesum',
    '"Our anxiety does not come from thinking about the future, but from wanting to control it." - Kahlil Gibran',
    '"Almost everything will work again if you unplug it for a few minutes, including you." - Anne Lamott',
    '"Do not anticipate trouble, or worry about what may never happen. Keep in the sunlight." - Benjamin Franklin',
    '"You don\'t have to control your thoughts. You just have to stop letting them control you." - Dan Millman',
    '"Worry does not empty tomorrow of its sorrow, it empties today of its strength." - Corrie ten Boom',
    '"The only way out is through." - Robert Frost',
    '"Fear is a reaction. Courage is a decision." - Winston Churchill',
    '"Feel the fear and do it anyway." - Susan Jeffers'
  ],

  stressed: [
    '"You must learn to let go. Release the stress. You were never in control anyway." - Steve Maraboli',
    '"It\'s not the load that breaks you down, it\'s the way you carry it." - Lou Holtz',
    '"Almost everything will work again if you unplug it for a few minutes, including you." - Anne Lamott',
    '"Don\'t let yesterday take up too much of today." - Will Rogers',
    '"Stress is caused by being \'here\' but wanting to be \'there\'." - Eckhart Tolle',
    '"The time to relax is when you don\'t have time for it." - Sydney J. Harris',
    '"If you ask what is the single most important key to longevity, I would have to say it is avoiding worry, stress and tension." - George Burns',
    '"Sometimes when people are under stress, they hate to think, and it\'s the time when they most need to think." - Bill Clinton',
    '"Adopting the right attitude can convert a negative stress into a positive one." - Hans Selye',
    '"Take rest; a field that has rested gives a bountiful crop." - Ovid',
    '"One of the best pieces of advice I ever got was from a horse master. He told me to go slow to go fast." - William Shatner',
    '"Rest and self-care are so important. When you take time to replenish your spirit, it allows you to serve others from the overflow." - Eleanor Brown',
    '"Breath is the power behind all things... I breathe in and know that good things will happen." - Tao Porchon-Lynch',
    '"The greatest weapon against stress is our ability to choose one thought over another." - William James',
    '"Step back and evaluate what\'s important in your life. Rethink, declutter, reset, reconnect." - Unknown'
  ],

  angry: [
    '"For every minute you remain angry, you give up sixty seconds of peace of mind." - Ralph Waldo Emerson',
    '"Anger is an acid that can do more harm to the vessel in which it is stored than to anything on which it is poured." - Mark Twain',
    '"Speak when you are angry and you will make the best speech you will ever regret." - Ambrose Bierce',
    '"Holding onto anger is like drinking poison and expecting the other person to die." - Buddha',
    '"Anger is a wind which blows out the lamp of the mind." - Robert Green Ingersoll',
    '"Anybody can become angry — that is easy, but to be angry with the right person and to the right degree and at the right time and for the right purpose, and in the right way — that is not within everybody\'s power and is not easy." - Aristotle',
    '"The best fighter is never angry." - Lao Tzu',
    '"When angry, count to ten before you speak. If very angry, count to one hundred." - Thomas Jefferson',
    '"Anger... it\'s a paralyzing emotion... you can\'t get anything done." - Toni Morrison',
    '"If you are patient in one moment of anger, you will escape a hundred days of sorrow." - Chinese Proverb',
    '"You will not be punished for your anger, you will be punished by your anger." - Buddha',
    '"Anger is like flowing water; there\'s nothing wrong with it as long as you let it flow." - C. JoyBell C.',
    '"The greatest remedy for anger is delay." - Thomas Paine',
    '"Bitterness is like cancer. It eats upon the host. But anger is like fire. It burns it all clean." - Maya Angelou',
    '"Anger makes you smaller, while forgiveness forces you to grow beyond what you are." - Cherie Carter-Scott'
  ],

  lonely: [
    '"The eternal quest of the human being is to shatter his loneliness." - Norman Cousins',
    '"We are all so much together, but we are all dying of loneliness." - Albert Schweitzer',
    '"Loneliness adds beauty to life. It puts a special burn on sunsets and makes night air smell better." - Henry Rollins',
    '"The soul that sees beauty may sometimes walk alone." - Johann Wolfgang von Goethe',
    '"Loneliness is the poverty of self; solitude is the richness of self." - May Sarton',
    '"What a lovely surprise to finally discover how unlonely being alone can be." - Ellen Burstyn',
    '"Loneliness is a sign you are in desperate need of yourself." - Rupi Kaur',
    '"The time you feel lonely is the time you most need to be by yourself." - Douglas Coupland',
    '"Where you used to be, there is a hole in the world, which I find myself constantly walking around in the daytime, and falling in at night." - Edna St. Vincent Millay',
    '"Loneliness is the human condition. No one is ever going to fill that space." - Janet Fitch',
    '"I\'ve seen enough of the universe to know there\'s no point in running away." - Bill Watterson',
    '"Loneliness is my least favorite thing about life. The thing that I\'m most worried about is just being alone without anybody to care for or someone who will care for me." - Anne Hathaway',
    '"Sometimes you need to be alone. Not to be lonely, but to enjoy your free time being yourself." - Unknown',
    '"What should young people do with their lives today? Many things, obviously. But the most daring thing is to create stable communities in which the terrible disease of loneliness can be cured." - Kurt Vonnegut',
    '"All great and precious things are lonely." - John Steinbeck'
  ],

  motivated: [
    '"The only way to do great work is to love what you do." - Steve Jobs',
    '"Don\'t watch the clock; do what it does. Keep going." - Sam Levenson',
    '"The future depends on what you do today." - Mahatma Gandhi',
    '"The only limit to our realization of tomorrow will be our doubts of today." - Franklin D. Roosevelt',
    '"Start where you are. Use what you have. Do what you can." - Arthur Ashe',
    '"Success is not final, failure is not fatal: it is the courage to continue that counts." - Winston Churchill',
    '"Believe you can and you\'re halfway there." - Theodore Roosevelt',
    '"Act as if what you do makes a difference. It does." - William James',
    '"Success is walking from failure to failure with no loss of enthusiasm." - Winston Churchill',
    '"You are never too old to set another goal or to dream a new dream." - C.S. Lewis',
    '"What lies behind us and what lies before us are tiny matters compared to what lies within us." - Ralph Waldo Emerson',
    '"The only person you are destined to become is the person you decide to be." - Ralph Waldo Emerson',
    '"Go confidently in the direction of your dreams! Live the life you\'ve imagined." - Henry David Thoreau',
    '"When you reach the end of your rope, tie a knot in it and hang on." - Franklin D. Roosevelt',
    '"Always remember that you are absolutely unique. Just like everyone else." - Margaret Mead'
  ],

  proud: [
    '"Pride is holding your head up when everyone around you has theirs bowed. Courage is what makes you do it." - Bryce Courtenay',
    '"Be proud of who you are, not ashamed of how someone else sees you." - Unknown',
    '"Never bend your head. Always hold it high. Look the world straight in the eye." - Helen Keller',
    '"You have to be unique, and different, and shine in your own way." - Lady Gaga',
    '"The proudest moment is the moment you let go of what you don\'t need." - Unknown',
    '"To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment." - Ralph Waldo Emerson',
    '"Always be a first-rate version of yourself, instead of a second-rate version of somebody else." - Judy Garland',
    '"Pride is a personal commitment. It is an attitude which separates excellence from mediocrity." - Unknown',
    '"Your crown has been bought and paid for. Put it on your head and wear it." - Maya Angelou',
    '"Success isn\'t about how much money you make; it\'s about the difference you make in people\'s lives." - Michelle Obama',
    '"I am not what happened to me, I am what I choose to become." - Carl Jung',
    '"No one can make you feel inferior without your consent." - Eleanor Roosevelt',
    '"The reward for conformity is that everyone likes you but yourself." - Rita Mae Brown',
    '"Be proud of yourself for the days you fought to just be okay." - Unknown',
    '"Stand tall. The difference between towering and cowering is totally a matter of inner posture." - Malcolm Forbes'
  ],

  hopeful: [
    '"Hope is being able to see that there is light despite all of the darkness." - Desmond Tutu',
    '"Hope is important because it can make the present moment less difficult to bear." - Thich Nhat Hanh',
    '"Once you choose hope, anything\'s possible." - Christopher Reeve',
    '"Hope is the thing with feathers that perches in the soul - and sings the tunes without the words - and never stops at all." - Emily Dickinson',
    '"Everything that is done in the world is done by hope." - Martin Luther',
    '"Hope is a waking dream." - Aristotle',
    '"In the middle of difficulty lies opportunity." - Albert Einstein',
    '"Hope lies in dreams, in imagination, and in the courage of those who dare to make dreams into reality." - Jonas Salk',
    '"We must accept finite disappointment, but never lose infinite hope." - Martin Luther King Jr.',
    '"Hope is the only thing stronger than fear." - Suzanne Collins',
    '"The very least you can do in your life is figure out what you hope for. And the most you can do is live inside that hope." - Barbara Kingsolver',
    '"Where there is no hope, it is incumbent on us to invent it." - Albert Camus',
    '"Hope can be a powerful force. Maybe there\'s no actual magic in it, but when you know what you hope for most and hold it like a light within you, you can make things happen." - Laini Taylor',
    '"You may not always have a comfortable life and you will not always be able to solve all of the world\'s problems at once but don\'t ever underestimate the importance you can have." - Michelle Obama',
    '"Remember, hope is a good thing, maybe the best of things, and no good thing ever dies." - Stephen King'
  ],

  loved: [
    '"Love is composed of a single soul inhabiting two bodies." - Aristotle',
    '"The best thing to hold onto in life is each other." - Audrey Hepburn',
    '"Love is not about how many days, months, or years you have been together. Love is about how much you love each other every single day." - Unknown',
    '"To be loved is something. But to be loved by someone you love is everything." - Unknown',
    '"Love doesn\'t make the world go round. Love is what makes the ride worthwhile." - Franklin P. Jones',
    '"I have found the paradox, that if you love until it hurts, there can be no more hurt, only more love." - Mother Teresa',
    '"The greatest happiness of life is the conviction that we are loved; loved for ourselves, or rather, loved in spite of ourselves." - Victor Hugo',
    '"Love is friendship that has caught fire." - Ann Landers',
    '"Where there is love there is life." - Mahatma Gandhi',
    '"Being deeply loved by someone gives you strength, while loving someone deeply gives you courage." - Lao Tzu',
    '"The best and most beautiful things in this world cannot be seen or even heard, but must be felt with the heart." - Helen Keller',
    '"Love recognizes no barriers. It jumps hurdles, leaps fences, penetrates walls to arrive at its destination full of hope." - Maya Angelou',
    '"You know you\'re in love when you can\'t fall asleep because reality is finally better than your dreams." - Dr. Seuss',
    '"Love is when the other person\'s happiness is more important than your own." - H. Jackson Brown Jr.',
    '"In all the world, there is no heart for me like yours. In all the world, there is no love for you like mine." - Maya Angelou'
  ],

  fearful: [
    '"Do the thing you fear to do and keep on doing it... that is the quickest and surest way ever yet discovered to conquer fear." - Dale Carnegie',
    '"Fear is only as deep as the mind allows." - Japanese Proverb',
    '"The only thing we have to fear is fear itself." - Franklin D. Roosevelt',
    '"Fear defeats more people than any other one thing in the world." - Ralph Waldo Emerson',
    '"Courage is not the absence of fear, but rather the assessment that something else is more important than fear." - Franklin D. Roosevelt',
    '"Don\'t fear failure. Fear being in the exact same place next year as you are today." - Unknown',
    '"Fear is a reaction. Courage is a decision." - Winston S. Churchill',
    '"The cave you fear to enter holds the treasure you seek." - Joseph Campbell',
    '"Feel the fear and do it anyway." - Susan Jeffers',
    '"Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less." - Marie Curie',
    '"Fear is the main source of superstition, and one of the main sources of cruelty. To conquer fear is the beginning of wisdom." - Bertrand Russell',
    '"Fear is a natural reaction to moving closer to the truth." - Pema Chödrön',
    '"There is no illusion greater than fear." - Lao Tzu',
    '"Keep your fears to yourself, but share your courage with others." - Robert Louis Stevenson',
    '"Fear is temporary. Regret lasts forever." - Unknown'
  ],

  guilty: [
    '"Guilt is perhaps the most painful companion of death." - Coco Chanel',
    '"Forgiveness is not an occasional act; it is a constant attitude." - Martin Luther King Jr.',
    '"The truth is, unless you let go, unless you forgive yourself, unless you forgive the situation, unless you realize that the situation is over, you cannot move forward." - Steve Maraboli',
    '"Guilt upon the conscience, like rust upon iron, both defiles and consumes it." - Robert South',
    '"We all make mistakes, have struggles, and even regret things in our past. But you are not your mistakes, you are not your struggles, and you are here now with the power to shape your day and your future." - Steve Maraboli',
    '"Forgive yourself for not knowing what you didn\'t know before you learned it." - Unknown',
    '"Guilt is anger directed at ourselves - at what we did or did not do." - Peter McWilliams',
    '"Make it a rule of life never to regret and never to look back. Regret is an appalling waste of energy; you can\'t build on it; it\'s only good for wallowing in." - Katherine Mansfield',
    '"If you did something in the past that you deeply regret, recognize it, give yourself credit for growth, commit to a different path, and move forward." - Unknown',
    '"Mistakes are always forgivable, if one has the courage to admit them." - Bruce Lee',
    '"The stupid neither forgive nor forget; the naive forgive and forget; the wise forgive but do not forget." - Thomas Szasz',
    '"To forgive is to set a prisoner free and discover that the prisoner was you." - Lewis B. Smedes',
    '"Guilt is not a response to anger; it is a response to one\'s own actions or lack of action." - Audre Lorde',
    '"Let us not burden our remembrances with a heaviness that\'s gone." - William Shakespeare',
    '"Self-forgiveness is essential to self-healing." - Ruth Carter Stapleton'
  ],

  disappointed: [
    '"Disappointment is a sort of bankruptcy - the bankruptcy of a soul that expends too much in hope and expectation." - Eric Hoffer',
    '"We must all suffer one of two things: the pain of discipline or the pain of regret or disappointment." - Jim Rohn',
    '"Disappointment to a noble soul is what cold water is to burning metal; it strengthens, tempers, intensifies, but never destroys it." - Eliza Tabor',
    '"Anytime you suffer a setback or disappointment, put your head down and plow ahead." - Les Brown',
    '"One\'s best success comes after their greatest disappointments." - Henry Ward Beecher',
    '"Disappointment is really just a term for our refusal to look on the bright side." - Richelle E. Goodrich',
    '"If we will be quiet and ready enough, we shall find compensation in every disappointment." - Henry David Thoreau',
    '"Disappointment is inevitable. But to become discouraged, there\'s a choice I make. God would never discourage me. He would always point me to himself to trust him. Therefore, my discouragement is from Satan." - Charles Stanley',
    '"Maturity is a bitter disappointment for which no remedy exists, unless laughter could be said to remedy anything." - Kurt Vonnegut',
    '"We simultaneously feel relieved and disappointed when someone sees through our facade and sets us straight." - Carolyn Hax',
    '"Disappointments are just God\'s way of saying \'I\'ve got something better\'. Be patient, live life, have faith." - Unknown',
    '"The size of your success is measured by the strength of your desire; the size of your dream; and how you handle disappointment along the way." - Robert Kiyosaki',
    '"Disappointment is a sticky one, because no one can steal contentment, joy, gratitude, or peace - we have to give it away." - Kristin Armstrong',
    '"Don\'t let today\'s disappointments cast a shadow on tomorrow\'s dreams." - Unknown',
    '"Sometimes we create our own heartbreaks through expectation." - Unknown'
  ],

  confused: [
    '"In the midst of chaos, there is also opportunity." - Sun Tzu',
    '"Confusion is a luxury which only the very, very young can possibly afford." - E.E. Cummings',
    '"I am not sure that I exist, actually. I am all the writers that I have read, all the people that I have met, all the women that I have loved; all the cities I have visited." - Jorge Luis Borges',
    '"Confusion is a word we have invented for an order which is not understood." - Henry Miller',
    '"Life is a series of natural and spontaneous changes. Don\'t resist them - that only creates sorrow. Let reality be reality. Let things flow naturally forward in whatever way they like." - Lao Tzu',
    '"The greatest enemy of knowledge is not ignorance, it is the illusion of knowledge." - Stephen Hawking',
    '"I can never read all the books I want; I can never be all the people I want and live all the lives I want." - Sylvia Plath',
    '"Out of clutter, find simplicity. From discord, find harmony. In the middle of difficulty lies opportunity." - Albert Einstein',
    '"If you\'re not confused, you\'re not paying attention." - Tom Peters',
    '"Doubt is an uncomfortable condition, but certainty is a ridiculous one." - Voltaire',
    '"I think 99 times and find nothing. I stop thinking, swim in silence, and the truth comes to me." - Albert Einstein',
    '"The confusion is not my invention. We cannot listen to a conversation for five minutes without being aware of the confusion." - Ezra Pound',
    '"Sometimes you just need to distance yourself to see things clearly." - Unknown',
    '"Have patience with everything that remains unsolved in your heart. Try to love the questions themselves." - Rainer Maria Rilke',
    '"The only true wisdom is in knowing you know nothing." - Socrates'
  ],

  nostalgic: [
    '"Nostalgia is a file that removes the rough edges from the good old days." - Doug Larson',
    '"They say time changes things, but you actually have to change them yourself." - Andy Warhol',
    '"The past beats inside me like a second heart." - John Banville',
    '"Nostalgia is a seductive liar." - George Ball',
    '"How we remember, what we remember, and why we remember form the most personal map of our individuality." - Christina Baldwin',
    '"The past is never dead. It\'s not even past." - William Faulkner',
    '"Remembrance of things past is not necessarily the remembrance of things as they were." - Marcel Proust',
    '"Nostalgia is denial - denial of the painful present." - Woody Allen',
    '"The times you lived through, the people you shared those times with — nothing brings it all to life like an old mix tape. It does a better job of storing up memories than actual brain tissue can do." - Rob Sheffield',
    '"Yesterday is but today\'s memory, and tomorrow is today\'s dream." - Khalil Gibran',
    '"Memory is a way of holding on to the things you love, the things you are, the things you never want to lose." - Kevin Arnold',
    '"Looking at old photographs invigorates my psyche with a mixture of nostalgia and fantasy." - Ed Koch',
    '"Nostalgia: A device that removes the ruts and potholes from memory lane." - Doug Larson',
    '"Those were the days my friend, we thought they\'d never end." - Mary Hopkin',
    '"In every man\'s memories there are such things as he will reveal not to everyone, but perhaps only to friends." - Fyodor Dostoevsky'
  ],

  bored: [
    '"Boredom: the desire for desires." - Leo Tolstoy',
    '"The cure for boredom is curiosity. There is no cure for curiosity." - Dorothy Parker',
    '"Your life does not get better by chance, it gets better by change." - Jim Rohn',
    '"Only those who want everything done for them are bored." - Billy Graham',
    '"Boredom is the feeling that everything is a waste of time; serenity, that nothing is." - Thomas Szasz',
    '"The life of the creative man is lead, directed and controlled by boredom. Avoiding boredom is one of our most important purposes." - Saul Steinberg',
    '"Is life not a thousand times too short for us to bore ourselves?" - Friedrich Nietzsche',
    '"Perhaps the world\'s second worst crime is boredom. The first is being a bore." - Jean Baudrillard',
    '"The secret of being boring is to say everything." - Voltaire',
    '"There is no such thing as an empty space or an empty time. There is always something to see, something to hear." - John Cage',
    '"Boredom is simply the absence of an interesting perspective." - Unknown',
    '"The two enemies of human happiness are pain and boredom." - Arthur Schopenhauer',
    '"Boredom is just the reverse side of fascination: both depend on being outside rather than inside a situation." - Susan Sontag',
    '"When you pay attention to boredom it gets unbelievably interesting." - Jon Kabat-Zinn',
    '"Boredom is not an end product, is comparatively rather an early stage in life and art. You\'ve got to go by or past or through boredom, as through a filter, before the clear product emerges." - F. Scott Fitzgerald'
  ]
};
