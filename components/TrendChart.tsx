import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Thermometer } from 'lucide-react';
import { WeeklyTrendData } from '@/types/dashboard';


const getBarColor = (category: string) => {
  switch (category) {
    case 'strong_gain':
      return 'hsl(var(--fitness-success))';
    case 'gain':
      return 'hsl(var(--fitness-primary))';
    case 'loss':
      return 'hsl(var(--fitness-warning))';
    default:
      return 'hsl(var(--fitness-secondary))';
  }
};

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    const gainText = data.gain > 0 ? `+${data.gain}% gain` : `${data.gain}% loss`;
    return (
      <div className='bg-card border border-border rounded-lg p-3 shadow-card-enhanced'>
        <p className='text-card-foreground font-medium'>{label}</p>
        <p className='text-fitness'>{`Adaptation Change: ${gainText}`}</p>
      </div>
    );
  }
  return null;
};

interface TrendChartProps {
  data?: WeeklyTrendData[];
  isLoading?: boolean;
}

export const TrendChart = ({ data, isLoading = true }: TrendChartProps) => {
  if (isLoading || !data) {
    return (
      <Card className='bg-gradient-card border-border/50'>
        <CardHeader>
          <CardTitle className='text-card-foreground flex items-center space-x-2'>
            <div className='p-2 bg-gradient-performance rounded-lg'>
              <Thermometer className='h-5 w-5 text-primary-foreground' />
            </div>
            <span>Weekly Adaptation Trends</span>
          </CardTitle>
          <CardDescription>
            <Skeleton className='h-4 w-72' />
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
          <div className='p-2 bg-gradient-performance rounded-lg'>
            <Thermometer className='h-5 w-5 text-primary-foreground' />
          </div>
          <span>Weekly Adaptation Trends</span>
        </CardTitle>
        <CardDescription>
          Weekly gains and losses in your heat adaptation performance
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className='h-80 w-full'>
          <ResponsiveContainer width='100%' height='100%'>
            <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray='3 3' stroke='hsl(var(--border))' />
              <XAxis
                dataKey='week'
                stroke='hsl(var(--muted-foreground))'
                fontSize={12}
                angle={-45}
                textAnchor='end'
                height={60}
              />
              <YAxis
                stroke='hsl(var(--muted-foreground))'
                fontSize={12}
                label={{ value: 'Adaptation Change (%)', angle: -90, position: 'insideLeft' }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey='gain' radius={[4, 4, 0, 0]}>
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={getBarColor(entry.category)} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};
