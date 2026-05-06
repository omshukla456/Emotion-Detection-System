import { motion } from 'motion/react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import { TrendingUp, Calendar, Brain, Download, BarChart3, Activity } from 'lucide-react';
import { getMoodHistory, exportMoodData, getMoodInsights } from '../utils/moodStorage';
import { MoodPrediction } from './MoodPrediction';

export function MoodAnalytics() {
  const history = getMoodHistory();
  const insights = getMoodInsights();

  // Prepare data for charts
  const moodFrequency = prepareMoodFrequencyData(history);
  const moodTimeline = prepareMoodTimelineData(history);
  const moodByDayOfWeek = prepareMoodByDayData(history);
  const emotionDistribution = prepareEmotionDistributionData(history);
  const intensityOverTime = prepareIntensityData(history);

  const handleExport = () => {
    const data = exportMoodData();
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `moodlens-data-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  if (history.length === 0) {
    return (
      <div className="text-center py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-br from-gray-900/50 to-purple-900/30 backdrop-blur-sm rounded-3xl p-12 border border-purple-500/30"
        >
          <BarChart3 className="w-16 h-16 text-purple-400 mx-auto mb-4" />
          <h3 className="text-2xl text-gray-100 mb-2">No Data Yet</h3>
          <p className="text-gray-400">Start analyzing your moods to see insights and patterns!</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header with Export */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl text-transparent bg-gradient-to-r from-purple-300 via-violet-300 to-fuchsia-300 bg-clip-text mb-2">
            Mood Analytics
          </h2>
          <p className="text-gray-400">Tracking {history.length} mood entries</p>
        </div>
        <button
          onClick={handleExport}
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 rounded-xl text-white transition-all shadow-lg hover:shadow-purple-500/50"
        >
          <Download className="w-5 h-5" />
          Export Data
        </button>
      </div>

      {/* AI Mood Prediction */}
      <MoodPrediction />

      {/* AI Insights */}
      <div className="grid md:grid-cols-3 gap-4">
        {insights.map((insight, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="relative overflow-hidden bg-gradient-to-br from-gray-900/80 to-purple-900/40 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/30"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-purple-600/30">
                  <Brain className="w-5 h-5 text-purple-300" />
                </div>
                <h4 className="text-gray-100">{insight.title}</h4>
              </div>
              <p className="text-sm text-gray-400">{insight.description}</p>
              {insight.trend && (
                <div className="flex items-center gap-2 mt-3">
                  <TrendingUp className={`w-4 h-4 ${insight.trend === 'up' ? 'text-green-400' : 'text-orange-400'}`} />
                  <span className="text-xs text-gray-500">{insight.trendText}</span>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Charts Grid */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Mood Frequency Chart */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-gradient-to-br from-gray-900/80 to-purple-900/40 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/30"
        >
          <h3 className="text-xl text-gray-100 mb-6 flex items-center gap-2">
            <Activity className="w-5 h-5 text-purple-400" />
            Mood Frequency
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={moodFrequency}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="mood" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#1f2937',
                  border: '1px solid #a855f7',
                  borderRadius: '12px',
                  color: '#f3f4f6'
                }}
              />
              <Bar dataKey="count" fill="url(#colorGradient)" radius={[8, 8, 0, 0]} />
              <defs>
                <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#a855f7" />
                  <stop offset="100%" stopColor="#7c3aed" />
                </linearGradient>
              </defs>
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Emotion Distribution Pie Chart */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-gradient-to-br from-gray-900/80 to-purple-900/40 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/30"
        >
          <h3 className="text-xl text-gray-100 mb-6 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-purple-400" />
            Emotion Distribution
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={emotionDistribution}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomLabel}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {emotionDistribution.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: '#1f2937',
                  border: '1px solid #a855f7',
                  borderRadius: '12px',
                  color: '#f3f4f6'
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Mood Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-br from-gray-900/80 to-purple-900/40 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/30 lg:col-span-2"
        >
          <h3 className="text-xl text-gray-100 mb-6 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-purple-400" />
            Mood Timeline (Last 7 Days)
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={moodTimeline}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="date" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#1f2937',
                  border: '1px solid #a855f7',
                  borderRadius: '12px',
                  color: '#f3f4f6'
                }}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="intensity"
                stroke="#a855f7"
                strokeWidth={3}
                dot={{ fill: '#a855f7', r: 6 }}
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Mood by Day of Week */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-br from-gray-900/80 to-purple-900/40 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/30"
        >
          <h3 className="text-xl text-gray-100 mb-6">Mood by Day of Week</h3>
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart data={moodByDayOfWeek}>
              <PolarGrid stroke="#374151" />
              <PolarAngleAxis dataKey="day" stroke="#9ca3af" />
              <PolarRadiusAxis stroke="#9ca3af" />
              <Radar
                name="Average Intensity"
                dataKey="avgIntensity"
                stroke="#a855f7"
                fill="#a855f7"
                fillOpacity={0.6}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#1f2937',
                  border: '1px solid #a855f7',
                  borderRadius: '12px',
                  color: '#f3f4f6'
                }}
              />
            </RadarChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Intensity Over Time */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-br from-gray-900/80 to-purple-900/40 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/30"
        >
          <h3 className="text-xl text-gray-100 mb-6">Intensity Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={intensityOverTime}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="range" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#1f2937',
                  border: '1px solid #a855f7',
                  borderRadius: '12px',
                  color: '#f3f4f6'
                }}
              />
              <Bar dataKey="count" fill="url(#intensityGradient)" radius={[8, 8, 0, 0]} />
              <defs>
                <linearGradient id="intensityGradient" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#ec4899" />
                  <stop offset="50%" stopColor="#a855f7" />
                  <stop offset="100%" stopColor="#7c3aed" />
                </linearGradient>
              </defs>
            </BarChart>
          </ResponsiveContainer>
        </motion.div>
      </div>
    </div>
  );
}

// Chart colors
const COLORS = ['#a855f7', '#ec4899', '#8b5cf6', '#d946ef', '#c026d3', '#a21caf', '#7c3aed', '#6366f1'];

function renderCustomLabel({ cx, cy, midAngle, innerRadius, outerRadius, percent }: any) {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * Math.PI / 180);
  const y = cy + radius * Math.sin(-midAngle * Math.PI / 180);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
}

function prepareMoodFrequencyData(history: any[]) {
  const frequency: Record<string, number> = {};
  history.forEach(entry => {
    frequency[entry.emotion] = (frequency[entry.emotion] || 0) + 1;
  });
  return Object.entries(frequency)
    .map(([mood, count]) => ({ mood, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 8);
}

function prepareMoodTimelineData(history: any[]) {
  const last7Days = history.slice(-7);
  return last7Days.map(entry => ({
    date: new Date(entry.timestamp).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
    intensity: entry.intensity,
    mood: entry.emotion
  }));
}

function prepareMoodByDayData(history: any[]) {
  const dayData: Record<string, { total: number; count: number }> = {
    'Mon': { total: 0, count: 0 },
    'Tue': { total: 0, count: 0 },
    'Wed': { total: 0, count: 0 },
    'Thu': { total: 0, count: 0 },
    'Fri': { total: 0, count: 0 },
    'Sat': { total: 0, count: 0 },
    'Sun': { total: 0, count: 0 }
  };

  history.forEach(entry => {
    const day = new Date(entry.timestamp).toLocaleDateString('en-US', { weekday: 'short' });
    if (dayData[day]) {
      dayData[day].total += entry.intensity;
      dayData[day].count += 1;
    }
  });

  return Object.entries(dayData).map(([day, data]) => ({
    day,
    avgIntensity: data.count > 0 ? Math.round(data.total / data.count) : 0
  }));
}

function prepareEmotionDistributionData(history: any[]) {
  const categories: Record<string, number> = {};
  history.forEach(entry => {
    const category = getEmotionCategory(entry.emotion);
    categories[category] = (categories[category] || 0) + 1;
  });
  return Object.entries(categories).map(([name, value]) => ({ name, value }));
}

function prepareIntensityData(history: any[]) {
  const ranges = {
    'Low (0-20)': 0,
    'Mild (21-40)': 0,
    'Medium (41-60)': 0,
    'High (61-80)': 0,
    'Very High (81-100)': 0
  };

  history.forEach(entry => {
    const intensity = entry.intensity;
    if (intensity <= 20) ranges['Low (0-20)']++;
    else if (intensity <= 40) ranges['Mild (21-40)']++;
    else if (intensity <= 60) ranges['Medium (41-60)']++;
    else if (intensity <= 80) ranges['High (61-80)']++;
    else ranges['Very High (81-100)']++;
  });

  return Object.entries(ranges).map(([range, count]) => ({ range, count }));
}

function getEmotionCategory(emotion: string): string {
  const categories: Record<string, string> = {
    happy: 'Positive', joyful: 'Positive', excited: 'Positive', grateful: 'Positive', confident: 'Positive',
    content: 'Positive', hopeful: 'Positive', peaceful: 'Positive', energetic: 'Positive', motivated: 'Positive',
    sad: 'Negative', anxious: 'Negative', stressed: 'Negative', angry: 'Negative', lonely: 'Negative',
    overwhelmed: 'Negative', frustrated: 'Negative', melancholic: 'Negative', tired: 'Negative',
    calm: 'Neutral'
  };
  return categories[emotion.toLowerCase()] || 'Neutral';
}