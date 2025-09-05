import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
} from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Activity } from 'lucide-react';
import { AdaptationDataPoint } from '@/types/dashboard';

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className='bg-card border border-border rounded-lg p-3 shadow-card-enhanced'>
        <p className='text-card-foreground font-medium'>{`Date: ${label}`}</p>
        <p className='text-fitness'>{`Adaptation Score: ${payload[0].value}%`}</p>
        <p className='text-muted-foreground text-sm'>
          {`Temperature: ${payload[0].payload.temperature}°F`}
        </p>
      </div>
    );
  }
  return null;
};

interface HeatAdaptationChartProps {
  data?: AdaptationDataPoint[];
  isLoading?: boolean;
}

export const HeatAdaptationChart = ({ data, isLoading = true }: HeatAdaptationChartProps) => {
  if (isLoading || !data) {
    return (
      <Card className='bg-gradient-card border-border/50'>
        <CardHeader>
          <CardTitle className='text-card-foreground flex items-center space-x-2'>
            <div className='p-2 bg-gradient-primary rounded-lg'>
              <Activity className='h-5 w-5 text-primary-foreground' />
            </div>
            <span>Heat Adaptation Progress</span>
          </CardTitle>
          <CardDescription>
            <Skeleton className='h-4 w-80' />
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className='h-80 w-full'>
            <Skeleton className='h-full w-full rounded-lg' />
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className='bg-gradient-card border-border/50'>
      <CardHeader>
        <CardTitle className='text-card-foreground flex items-center space-x-2'>
          <div className='p-2 bg-gradient-primary rounded-lg'>
            <Activity className='h-5 w-5 text-primary-foreground' />
          </div>
          <span>Heat Adaptation Progress</span>
        </CardTitle>
        <CardDescription>
          Your adaptation score over the last 90 days based on heart rate response to temperature
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className='h-80 w-full'>
          <ResponsiveContainer width='100%' height='100%'>
            <AreaChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <defs>
                <linearGradient id='fitnessGradient' x1='0' y1='0' x2='0' y2='1'>
                  <stop offset='5%' stopColor='hsl(var(--fitness-primary))' stopOpacity={0.4} />
                  <stop offset='95%' stopColor='hsl(var(--fitness-secondary))' stopOpacity={0.1} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray='3 3' stroke='hsl(var(--border))' />
              <XAxis
                dataKey='date'
                stroke='hsl(var(--muted-foreground))'
                fontSize={12}
                tickFormatter={(value) =>
                  new Date(value).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
                }
              />
              <YAxis stroke='hsl(var(--muted-foreground))' fontSize={12} domain={[60, 100]} />
              <Tooltip content={<CustomTooltip />} />
              <Area
                type='monotone'
                dataKey='adaptationScore'
                stroke='hsl(var(--fitness-primary))'
                strokeWidth={3}
                fill='url(#fitnessGradient)'
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};
