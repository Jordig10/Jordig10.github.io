import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, type MotionProps } from "motion/react";

import { cn } from "@/lib/utils";

interface TerminalProps {
  children: React.ReactNode;
  className?: string;
}

export function Terminal({ children, className }: TerminalProps) {
  return (
    <div
      className={cn(
        "border-border bg-background/60 backdrop-blur-sm z-0 w-full max-w-md rounded-xl border shadow-lg",
        className
      )}
    >
      <div className="border-border flex flex-row gap-x-2 border-b p-3">
        <div className="h-2.5 w-2.5 rounded-full bg-red-500" />
        <div className="h-2.5 w-2.5 rounded-full bg-yellow-500" />
        <div className="h-2.5 w-2.5 rounded-full bg-green-500" />
      </div>
      <pre className="p-4">
        <code className="grid gap-y-1.5 overflow-auto">{children}</code>
      </pre>
    </div>
  );
}

interface TypingAnimationProps extends Omit<MotionProps, "children"> {
  children: string;
  className?: string;
  duration?: number;
  delay?: number;
}

export function TypingAnimation({
  children,
  className,
  duration = 45,
  delay = 0,
  ...props
}: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [started, setStarted] = useState(false);
  const elementRef = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(elementRef, { amount: 0.3, once: true });

  useEffect(() => {
    if (!isInView) return;
    const startTimeout = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(startTimeout);
  }, [isInView, delay]);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const typingEffect = setInterval(() => {
      i++;
      setDisplayedText(children.slice(0, i));
      if (i >= children.length) clearInterval(typingEffect);
    }, duration);
    return () => clearInterval(typingEffect);
  }, [started, children, duration]);

  return (
    <motion.span
      ref={elementRef}
      className={cn("text-sm font-normal tracking-tight", className)}
      {...props}
    >
      {displayedText}
    </motion.span>
  );
}

interface AnimatedSpanProps extends MotionProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export function AnimatedSpan({
  children,
  delay = 0,
  className,
  ...props
}: AnimatedSpanProps) {
  const elementRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(elementRef, { amount: 0.3, once: true });

  return (
    <motion.div
      ref={elementRef}
      initial={{ opacity: 0, y: -5 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -5 }}
      transition={{ duration: 0.3, delay: delay / 1000 }}
      className={cn("grid text-sm font-normal tracking-tight", className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
