'use client';

import { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { HeatMetrics } from '@/components/HeatMetrics';
import { HeatAdaptationChart } from '@/components/HeatAdaptationChart';
import { TrendChart } from '@/components/TrendChart';
import { ProgressFeedback } from '@/components/ProgressFeedback';
import { DashboardData } from '@/types/dashboard';

// Mock data - in real app, this would come from API
const mockDashboardData: DashboardData = {
  heatMetrics: {
    adaptationScore: 91,
    heartRateDrop: 15,
    performanceIndex: 8.7,
    adaptationScoreChange: 3,
    heartRateDropChange: 2,
    performanceIndexChange: 0.3,
  },
  adaptationChart: [
    { date: '2024-05-01', adaptationScore: 72, temperature: 68, heartRate: 165, trend: 'baseline' },
    {
      date: '2024-05-08',
      adaptationScore: 73,
      temperature: 70,
      heartRate: 164,
      trend: 'slight_gain',
    },
    { date: '2024-05-15', adaptationScore: 74, temperature: 72, heartRate: 162, trend: 'gain' },
    { date: '2024-05-22', adaptationScore: 76, temperature: 73, heartRate: 161, trend: 'gain' },
    {
      date: '2024-06-01',
      adaptationScore: 78,
      temperature: 75,
      heartRate: 159,
      trend: 'strong_gain',
    },
    { date: '2024-06-08', adaptationScore: 79, temperature: 76, heartRate: 158, trend: 'gain' },
    {
      date: '2024-06-15',
      adaptationScore: 81,
      temperature: 78,
      heartRate: 156,
      trend: 'strong_gain',
    },
    { date: '2024-06-22', adaptationScore: 83, temperature: 79, heartRate: 155, trend: 'gain' },
    {
      date: '2024-07-01',
      adaptationScore: 85,
      temperature: 82,
      heartRate: 154,
      trend: 'strong_gain',
    },
    {
      date: '2024-07-08',
      adaptationScore: 86,
      temperature: 83,
      heartRate: 153,
      trend: 'slight_gain',
    },
    { date: '2024-07-15', adaptationScore: 88, temperature: 85, heartRate: 152, trend: 'gain' },
    {
      date: '2024-07-22',
      adaptationScore: 89,
      temperature: 86,
      heartRate: 151,
      trend: 'slight_gain',
    },
    {
      date: '2024-07-31',
      adaptationScore: 91,
      temperature: 87,
      heartRate: 150,
      trend: 'strong_gain',
    },
  ],
  trendChart: [
    { week: 'Week 1', gain: 2, category: 'gain' },
    { week: 'Week 2', gain: 1, category: 'gain' },
    { week: 'Week 3', gain: 3, category: 'strong_gain' },
    { week: 'Week 4', gain: 2, category: 'gain' },
    { week: 'Week 5', gain: -1, category: 'loss' },
    { week: 'Week 6', gain: 4, category: 'strong_gain' },
    { week: 'Week 7', gain: 2, category: 'gain' },
    { week: 'Week 8', gain: 1, category: 'gain' },
    { week: 'Week 9', gain: 3, category: 'strong_gain' },
    { week: 'Week 10', gain: 1, category: 'gain' },
    { week: 'Week 11', gain: 2, category: 'gain' },
    { week: 'Week 12', gain: 3, category: 'strong_gain' },
  ],
  feedback: [
    {
      type: 'success',
      title: 'Excellent Heat Adaptation Progress',
      description:
        'Your heart rate in hot conditions has dropped 15 BPM over 90 days. This indicates strong physiological adaptation.',
      action: 'Continue current training intensity',
    },
    {
      type: 'info',
      title: 'Optimal Training Window',
      description:
        'Best heat adaptation occurs between 75-85°F. Your recent workouts align perfectly with this range.',
      action: 'Maintain 4-6 heat sessions per week',
    },
    {
      type: 'warning',
      title: 'Hydration Optimization',
      description:
        'Your performance dips slightly in temperatures above 85°F. Consider pre-cooling strategies.',
      action: 'Increase fluid intake 2 hours before training',
    },
  ],
};

export const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState<DashboardData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate API call with setTimeout
    const fetchDashboardData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 2000));

        setDashboardData(mockDashboardData);
      } catch (error) {
        console.error('Failed to fetch dashboard data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  return (
    <div className='min-h-screen bg-background'>
      <Header className='sticky top-0 z-50' />
      {/* Main Dashboard */}
      <main className='max-w-7xl mx-auto px-6 py-8 space-y-8'>
        {/* Metrics Overview */}
        <section className='animate-slide-up'>
          <h2 className='text-2xl font-bold text-foreground mb-6'>
            90-Day Heat Adaptation Overview
          </h2>
          <HeatMetrics data={dashboardData?.heatMetrics} isLoading={isLoading} />
        </section>

        {/* Charts Section */}
        <div className='grid grid-cols-1 xl:grid-cols-2 gap-8'>
          <section className='animate-slide-up' style={{ animationDelay: '0.1s' }}>
            <HeatAdaptationChart data={dashboardData?.adaptationChart} isLoading={isLoading} />
          </section>

          <section className='animate-slide-up' style={{ animationDelay: '0.15s' }}>
            <TrendChart data={dashboardData?.trendChart} isLoading={isLoading} />
          </section>
        </div>

        {/* Feedback Section */}
        <section className='animate-slide-up' style={{ animationDelay: '0.2s' }}>
          <ProgressFeedback data={dashboardData?.feedback} isLoading={isLoading} />
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
