'use client';

import { motion, SpringOptions, useScroll, useSpring } from 'motion/react';
import { cn } from '@/lib/utils';
import { RefObject } from 'react';

export type ScrollProgressProps = {
  className?: string;
  springOptions?: SpringOptions;
  containerRef?: RefObject<HTMLDivElement>;
  orientation?: 'horizontal' | 'vertical';
};

const DEFAULT_SPRING_OPTIONS: SpringOptions = {
  stiffness: 200,
  damping: 50,
  restDelta: 0.001,
};

export function ScrollProgress({
  className,
  springOptions,
  containerRef,
  orientation = 'horizontal',
}: ScrollProgressProps) {
  const { scrollYProgress } = useScroll({
    container: containerRef,
    layoutEffect: Boolean(containerRef?.current),
  });

  const scaleValue = useSpring(scrollYProgress, {
    ...DEFAULT_SPRING_OPTIONS,
    ...(springOptions ?? {}),
  });

  return (
    <motion.div
      className={cn(
        orientation === 'horizontal' 
          ? 'inset-x-0 top-0 h-1 origin-left' 
          : 'inset-y-0 left-0 w-0.5 origin-top',
        className
      )}
      style={{
        [orientation === 'horizontal' ? 'scaleX' : 'scaleY']: scaleValue,
      }}
    />
  );
}
