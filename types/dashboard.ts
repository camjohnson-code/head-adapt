export interface HeatMetricsData {
  adaptationScore: number;
  heartRateDrop: number;
  performanceIndex: number;
  adaptationScoreChange: number;
  heartRateDropChange: number;
  performanceIndexChange: number;
}

export interface AdaptationDataPoint {
  date: string;
  adaptationScore: number;
  temperature: number;
  heartRate: number;
  trend: string;
}

export interface WeeklyTrendData {
  week: string;
  gain: number;
  category: string;
}

export interface FeedbackItem {
  type: 'success' | 'warning' | 'info';
  title: string;
  description: string;
  action?: string;
}

export interface DashboardData {
  heatMetrics: HeatMetricsData;
  adaptationChart: AdaptationDataPoint[];
  trendChart: WeeklyTrendData[];
  feedback: FeedbackItem[];
}
