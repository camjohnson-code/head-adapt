import { Moon, Sun, Activity } from 'lucide-react';
import { Button } from './ui/button';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface HeaderProps {
  className?: string;
}

export const Header = ({ className }: HeaderProps) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header
      className={`border-b border-gray-200/30 dark:border-gray-700/30 bg-card/10 backdrop-blur-sm ${
        className || ''
      }`}
    >
      <div className='max-w-7xl mx-auto px-6 py-4'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center space-x-3'>
            <div className='p-2 bg-gradient-primary rounded-lg animate-fitness-pulse'>
              <Activity className='h-6 w-6 text-primary-foreground' />
            </div>
            <div>
              <h1 className='text-xl font-bold text-foreground'>FitAdapt</h1>
              <p className='text-sm text-muted-foreground'>Heat Adaptation Analytics</p>
            </div>
          </div>
          <div className='flex items-center space-x-4'>
            <Button
              variant='ghost'
              size='sm'
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              className='h-8 w-8 p-0 cursor-pointer'
            >
              {!mounted ? (
                <div className='h-4 w-4' />
              ) : theme === 'light' ? (
                <Moon className='h-4 w-4' />
              ) : (
                <Sun className='h-4 w-4' />
              )}
            </Button>
            <Button
              onClick={() => router.push('/login')}
              className='bg-gradient-primary cursor-pointer hover:shadow-fitness font-medium'
              style={{ color: 'hsl(var(--primary-foreground))' }}
            >
              Sign In
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
