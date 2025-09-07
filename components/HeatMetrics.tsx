import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { TrendingUp, TrendingDown, Thermometer, Heart, BarChart3 } from 'lucide-react';
import { HeatMetricsData } from '@/types/dashboard';

interface MetricCardProps {
  title: string;
  value: string;
  change: number;
  trend: 'up' | 'down';
  icon: React.ReactNode;
  isHeartRateDrop?: boolean;
}

const MetricCard = ({
  title,
  value,
  change,
  trend,
  icon,
  isHeartRateDrop = false,
}: MetricCardProps) => {
  const TrendIcon = trend === 'up' ? TrendingUp : TrendingDown;
  const trendColor = isHeartRateDrop
    ? change > 0
      ? 'text-fitness-success'
      : 'text-fitness-warning'
    : trend === 'up'
    ? 'text-fitness-success'
    : 'text-fitness-accent';
  const displayChange = Math.abs(change);
  const changeText = isHeartRateDrop
    ? change > 0
      ? 'drop'
      : 'increase'
    : change > 0
    ? 'improvement'
    : 'decrease';

  return (
    <Card className='bg-gradient-card border-border/50 hover:shadow-card-enhanced transition-all duration-300'>
      <CardContent className='px-6'>
        <div className='flex items-center justify-between'>
          <div className='space-y-2'>
            <p className='text-muted-foreground text-sm font-medium'>{title}</p>
            <p className='text-2xl font-bold text-card-foreground'>{value}</p>
            <div className='flex items-center space-x-1'>
              <TrendIcon className={`h-4 w-4 ${trendColor}`} />
              <span className={`text-sm font-medium ${trendColor}`}>
                {displayChange}% {changeText}
              </span>
            </div>
          </div>
          <div className='p-3 bg-fitness-primary/10 text-fitness-primary rounded-full'>{icon}</div>
        </div>
      </CardContent>
    </Card>
  );
};

const MetricCardSkeleton = () => {
  return (
    <Card className='bg-gradient-card border-border/50'>
      <CardContent className='p-6'>
        <div className='flex items-center justify-between'>
          <div className='space-y-2'>
            <Skeleton className='h-4 w-32' />
            <Skeleton className='h-8 w-16' />
            <div className='flex items-center space-x-1'>
              <Skeleton className='h-4 w-4' />
              <Skeleton className='h-4 w-24' />
            </div>
          </div>
          <Skeleton className='h-12 w-12 rounded-full' />
        </div>
      </CardContent>
    </Card>
  );
};

interface HeatMetricsProps {
  data?: HeatMetricsData;
  isLoading?: boolean;
}

export const HeatMetrics = ({ data, isLoading = true }: HeatMetricsProps) => {
  if (isLoading || !data) {
    return (
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        <MetricCardSkeleton />
        <MetricCardSkeleton />
        <MetricCardSkeleton />
      </div>
    );
  }

  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
      <MetricCard
        title='Heat Adaptation Score'
        value={`${data.adaptationScore}%`}
        change={data.adaptationScoreChange}
        trend='up'
        icon={<Thermometer className='h-6 w-6 text-fitness' />}
      />
      <MetricCard
        title='Avg Heart Rate Drop'
        value={`${data.heartRateDrop} BPM`}
        change={data.heartRateDropChange}
        trend={data.heartRateDropChange > 0 ? 'down' : 'up'}
        icon={<Heart className='h-6 w-6 text-fitness'></Heart>}
        isHeartRateDrop={true}
      />
      <MetricCard
        title='Performance Index'
        value={`${data.performanceIndex}/10`}
        change={data.performanceIndexChange}
        trend='up'
        icon={<BarChart3 className='h-6 w-6 text-fitness' />}
      />
    </div>
  );
};
