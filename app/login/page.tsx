'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Activity, ArrowLeft } from 'lucide-react';
import { Card, CardHeader, CardDescription, CardTitle, CardContent } from '@/components/ui/card';

export default function LoginPage() {
  const router = useRouter();

  return (
    <div className='min-h-screen bg-background flex items-center justify-center'>
      <Button
        variant='ghost'
        onClick={() => router.push('/')}
        className='absolute top-6 left-6 text-muted-foreground hover:text-foreground cursor-pointer'
      >
        <ArrowLeft className='mr-2 h-4 w-4' />
        Back to Home
      </Button>

      <div className='max-w-md mx-auto text-center px-6'>
        {/* Logo */}
        <div className='flex justify-center items-center gap-2 mb-8'>
          <div className='p-3 bg-gradient-primary rounded-lg animate-fitness-pulse'>
            <Activity className='h-8 w-8 text-primary-foreground' />
          </div>
          <h1 className='text-4xl font-bold bg-gradient-to-r from-fitness-primary to-fitness-secondary bg-clip-text text-transparent'>
            HeatAdapt
          </h1>
        </div>

        <Card className='w-full max-w-md relative border-0 shadow-2xl bg-card/80 backdrop-blur-sm'>
          <CardHeader className='relative space-y-4 text-center pt-0'>
            <CardTitle className='text-xl font-bold text-foreground'>Connect Your Data</CardTitle>
            <CardDescription className='text-muted-foreground'>
              Sign in with Strava to start tracking your heat adaptation progress
            </CardDescription>
          </CardHeader>

          <CardContent className='relative space-y-6'>
            <div className='text-center space-y-4'>
              <p className='text-sm text-muted-foreground'>
                We use Strava to securely access your workout data and analyze your heat adaptation
                patterns. Your privacy and data security are our top priorities.
              </p>

              <Button
                onClick={() => router.push('/app')}
                size='lg'
                className='cursor-pointer w-full bg-fitness-primary hover:shadow-fitness text-primary-foreground font-semibold py-3'
              >
                <Activity className='mr-3 h-5 w-5' />
                Connect with Strava
              </Button>

              <div className='text-xs text-muted-foreground'>
                By connecting, you agree to our data usage for heat adaptation analysis
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
