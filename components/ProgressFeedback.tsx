import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { CheckCircle2, AlertCircle, Target } from 'lucide-react';
import { FeedbackItem } from '@/types/dashboard';

const FeedbackCard = ({ item }: { item: FeedbackItem }) => {
  const getIcon = () => {
    switch (item.type) {
      case 'success':
        return <CheckCircle2 className='h-5 w-5 text-fitness-success' />;
      case 'warning':
        return <AlertCircle className='h-5 w-5 text-fitness-warning' />;
      case 'info':
        return <Target className='h-5 w-5 text-fitness-accent' />;
    }
  };

  const getBadgeVariant = () => {
    switch (item.type) {
      case 'success':
        return 'default';
      case 'warning':
        return 'secondary';
      case 'info':
        return 'outline';
    }
  };

  return (
    <Card className='bg-gradient-card border-border/50 hover:shadow-card-enhanced transition-all duration-300 animate-slide-up'>
      <CardContent className='px-6'>
        <div className='flex items-start space-x-4'>
          <div className='p-2 bg-fitness-primary/10 rounded-full'>{getIcon()}</div>
          <div className='flex-1 space-y-3'>
            <div className='flex items-center justify-between'>
              <h3 className='font-semibold text-card-foreground'>{item.title}</h3>
              <Badge variant={getBadgeVariant()}>{item.type}</Badge>
            </div>
            <p className='text-muted-foreground text-sm leading-relaxed'>{item.description}</p>
            {item.action && (
              <div className='pt-2 border-t border-border/50'>
                <p className='text-fitness-accent text-sm font-medium'>💡 {item.action}</p>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const FeedbackCardSkeleton = () => {
  return (
    <Card className='bg-gradient-card border-border/50'>
      <CardContent className='p-6'>
        <div className='flex items-start space-x-4'>
          <Skeleton className='h-9 w-9 rounded-full' />
          <div className='flex-1 space-y-3'>
            <div className='flex items-center justify-between'>
              <Skeleton className='h-5 w-48' />
              <Skeleton className='h-6 w-16 rounded-full' />
            </div>
            <Skeleton className='h-4 w-full' />
            <Skeleton className='h-4 w-3/4' />
            <div className='pt-2 border-t border-border/50'>
              <Skeleton className='h-4 w-64' />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

interface ProgressFeedbackProps {
  data?: FeedbackItem[];
  isLoading?: boolean;
}

export const ProgressFeedback = ({ data, isLoading = true }: ProgressFeedbackProps) => {
  if (isLoading || !data) {
    return (
      <Card className='bg-gradient-card border-border/50'>
        <CardHeader>
          <CardTitle className='text-card-foreground flex items-center space-x-2'>
            <div className='p-2 bg-gradient-primary rounded-lg'>
              <Target className='h-5 w-5 text-primary-foreground' />
            </div>
            <span className='text-card-foreground font-bold text-2xl'>Heat Adaptation Insights</span>
          </CardTitle>
        </CardHeader>
        <CardContent className='space-y-4'>
          <FeedbackCardSkeleton />
          <FeedbackCardSkeleton />
          <FeedbackCardSkeleton />
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className='bg-gradient-card border-border/50'>
      <CardHeader>
        <CardTitle className='text-card-foreground flex items-center space-x-2'>
          <div className='p-2 bg-gradient-primary rounded-lg'>
            <Target className='h-5 w-5 text-primary-foreground' />
          </div>
          <span className='text-card-foreground font-bold text-2xl'>Heat Adaptation Insights</span>
        </CardTitle>
      </CardHeader>
      <CardContent className='space-y-4'>
        {data.map((item, index) => (
          <FeedbackCard key={index} item={item} />
        ))}
      </CardContent>
    </Card>
  );
};
