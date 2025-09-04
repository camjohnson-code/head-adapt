'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Activity, Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  const router = useRouter();

  return (
    <div className='min-h-screen bg-background flex items-center justify-center'>
      <div className='max-w-md mx-auto text-center px-6'>
        {/* Logo */}
        <div className='flex justify-center mb-8'>
          <div className='p-3 bg-gradient-primary rounded-lg animate-fitness-pulse'>
            <Activity className='h-8 w-8 text-primary-foreground' />
          </div>
        </div>

        {/* 404 Content */}
        <div className='space-y-6'>
          <div>
            <h1 className='text-6xl font-bold text-gradient-primary mb-2'>404</h1>
            <h2 className='text-2xl font-semibold text-foreground mb-4'>Page Not Found</h2>
            <p className='text-muted-foreground leading-relaxed'>
              Looks like this page got lost in the heat! The page you're looking for doesn't exist
              or has been moved.
            </p>
          </div>

          {/* Action Buttons */}
          <div className='flex flex-col sm:flex-row gap-3 justify-center'>
            <Button asChild className='bg-gradient-primary hover:shadow-fitness'>
              <Link href='/' className='flex items-center gap-2'>
                <Home className='h-4 w-4' />
                Go Home
              </Link>
            </Button>
            <Button className='cursor-pointer' variant='outline' onClick={() => router.back()}>
              <ArrowLeft className='h-4 w-4 mr-2' />
              Go Back
            </Button>
          </div>
        </div>

        {/* Fun Message */}
        <div className='mt-12 p-4 bg-gradient-card border border-border/50 rounded-lg'>
          <p className='text-sm text-muted-foreground'>
            💡 <strong>Pro tip:</strong> Even the best athletes sometimes take a wrong turn. Get
            back on track and continue your heat adaptation journey!
          </p>
        </div>
      </div>
    </div>
  );
}
