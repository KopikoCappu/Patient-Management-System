import React from 'react';
import { Button, ButtonProps as BaseButtonProps } from '@/components/ui/button';
import Image from 'next/image';

// Extend the base button props and add our custom props
interface SubmitButtonProps extends Omit<BaseButtonProps, 'children'> {
  isLoading: boolean;
  className?: string; // Make className optional
  children: React.ReactNode;
}

const SubmitButton = ({ 
  isLoading, 
  className = 'shad-primary-btn w-full', // Provide default value
  children,
  ...props // Spread remaining button props
}: SubmitButtonProps) => {
  return (
    <Button 
      type="submit" 
      disabled={isLoading} 
      className={className}
      {...props}
    >
      {isLoading ? (
        <div className='flex items-center gap-4'>
          <Image 
            src="/assets/icons/loader.svg" 
            alt="loader" 
            width={24} 
            height={24} 
            className="animate-spin" 
          />
          Loading...
        </div>
      ) : children}
    </Button>
  );
};

export default SubmitButton;