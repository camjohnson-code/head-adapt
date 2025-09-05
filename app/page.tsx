'use client';

import { Button } from '@/components/ui/button';
import { Activity, Sun, Moon, TrendingUp, Thermometer, BarChart3 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
// import dashboardScreenshot from '@/assets/dashboard-screenshot.jpg';
import { Header } from '@/components/Header';

export const LandingPage = () => {
  return (
    <div className='min-h-screen bg-background'>
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <main className='max-w-7xl mx-auto px-6'>
        <div className='py-20 text-center animate-slide-up'>
          <div className='max-w-3xl mx-auto'>
            <h1 className='text-5xl font-bold text-foreground mb-6 leading-tight'>
              Master Your <span className='text-gradient-primary'>Heat Adaptation</span>
            </h1>
            <p className='text-xl text-muted-foreground mb-8 leading-relaxed'>
              Track your body's adaptation to heat stress with advanced analytics. Connect your
              Strava data and get insights into your heat adaptation progress over time.
            </p>
            <Button
              size='lg'
              className='bg-gradient-primary cursor-pointer hover:shadow-fitness text-lg px-8 py-6 h-auto'
            >
              Start Your Analysis
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className='py-16 grid grid-cols-1 md:grid-cols-3 gap-8'>
          <Card
            className='bg-gradient-card border-border/50 animate-slide-up'
            style={{ animationDelay: '0.1s' }}
          >
            <CardHeader className='text-center pb-4'>
              <div className='mx-auto p-3 bg-gradient-primary rounded-full w-fit mb-4'>
                <TrendingUp className='h-8 w-8 text-primary-foreground' />
              </div>
              <CardTitle className='text-xl text-card-foreground'>Progress Tracking</CardTitle>
              <CardDescription>
                Monitor your heat adaptation improvements over 90-day windows with detailed
                analytics
              </CardDescription>
            </CardHeader>
          </Card>

          <Card
            className='bg-gradient-card border-border/50 animate-slide-up'
            style={{ animationDelay: '0.2s' }}
          >
            <CardHeader className='text-center pb-4'>
              <div className='mx-auto p-3 bg-gradient-performance rounded-full w-fit mb-4'>
                <Thermometer className='h-8 w-8 text-primary-foreground' />
              </div>
              <CardTitle className='text-xl text-card-foreground'>Heat Analysis</CardTitle>
              <CardDescription>
                Analyze how your body responds to heat stress during workouts with smart algorithms
              </CardDescription>
            </CardHeader>
          </Card>

          <Card
            className='bg-gradient-card border-border/50 animate-slide-up'
            style={{ animationDelay: '0.3s' }}
          >
            <CardHeader className='text-center pb-4'>
              <div className='mx-auto p-3 bg-gradient-primary rounded-full w-fit mb-4'>
                <BarChart3 className='h-8 w-8 text-primary-foreground' />
              </div>
              <CardTitle className='text-xl text-card-foreground'>Smart Insights</CardTitle>
              <CardDescription>
                Get personalized feedback and recommendations based on your adaptation patterns
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* App Screenshot Section */}
        <div className='py-16 animate-slide-up' style={{ animationDelay: '0.3s' }}>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold text-foreground mb-4'>
              Your Performance Dashboard Awaits
            </h2>
            <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
              Visualize your heat adaptation journey with detailed charts, progress tracking, and
              actionable insights that help you perform better in challenging conditions.
            </p>
          </div>
          <div className='max-w-5xl mx-auto'>
            <div className='relative'>
              <div className='absolute inset-0 bg-gradient-primary opacity-20 blur-3xl rounded-3xl'></div>
              <div className='relative bg-gradient-card border border-border/50 rounded-2xl p-4 shadow-2xl'>
                {/* <Image
                  src={dashboardScreenshot.src}
                  alt='FitAdapt Dashboard Preview'
                  className='w-full h-auto rounded-lg shadow-lg'
                /> */}
              </div>
            </div>
          </div>
        </div>

        {/* Integration Section */}
        <div className='py-16 animate-slide-up' style={{ animationDelay: '0.4s' }}>
          <Card className='bg-gradient-card border-border/50 max-w-4xl mx-auto'>
            <CardHeader className='text-center'>
              <CardTitle className='text-2xl text-card-foreground mb-4'>
                Seamless Strava Integration
              </CardTitle>
              <CardDescription className='text-lg mb-6'>
                Connect your Strava account to automatically sync workout data and start analyzing
                your heat adaptation
              </CardDescription>
            </CardHeader>
            <CardContent className='space-y-4'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div className='space-y-3'>
                  <div className='flex items-center space-x-3'>
                    <CheckCircle className='h-5 w-5 text-fitness-primary' />
                    <span className='text-card-foreground'>Automatic workout sync</span>
                  </div>
                  <div className='flex items-center space-x-3'>
                    <CheckCircle className='h-5 w-5 text-fitness-primary' />
                    <span className='text-card-foreground'>Heart rate analysis</span>
                  </div>
                  <div className='flex items-center space-x-3'>
                    <CheckCircle className='h-5 w-5 text-fitness-primary' />
                    <span className='text-card-foreground'>Weather correlation</span>
                  </div>
                </div>
                <div className='space-y-3'>
                  <div className='flex items-center space-x-3'>
                    <CheckCircle className='h-5 w-5 text-fitness-primary' />
                    <span className='text-card-foreground'>90-day analysis window</span>
                  </div>
                  <div className='flex items-center space-x-3'>
                    <CheckCircle className='h-5 w-5 text-fitness-primary' />
                    <span className='text-card-foreground'>Performance trends</span>
                  </div>
                  <div className='flex items-center space-x-3'>
                    <CheckCircle className='h-5 w-5 text-fitness-primary' />
                    <span className='text-card-foreground'>Personalized insights</span>
                  </div>
                </div>
              </div>
              <div className='pt-6 text-center'>
                <Button
                  size='lg'
                  className='cursor-pointer bg-gradient-primary hover:shadow-fitness'
                >
                  Get Started with Strava
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};
export default LandingPage;
