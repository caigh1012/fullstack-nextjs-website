'use client';

import { gsap, useGSAP } from '@/lib/gsap';
import { useRef, useState } from 'react';
import { useInterval, useTimeoutFn } from 'react-use';
import { MessageCircle } from 'lucide-react';

export default function SmartSupportButton() {
  const containerRef = useRef<HTMLDivElement>(null);
  const hintRef = useRef<HTMLDivElement>(null);
  const [isHintVisible, setIsHintVisible] = useState(false);
  const [, , resetHideHintTimer] = useTimeoutFn(() => {
    setIsHintVisible(false);
  }, 2000);

  useInterval(() => {
    setIsHintVisible(true);
    resetHideHintTimer();
  }, 3000);

  useGSAP(
    () => {
      if (!hintRef.current) {
        return;
      }

      gsap.killTweensOf(hintRef.current);

      if (isHintVisible) {
        gsap.fromTo(
          hintRef.current,
          {
            autoAlpha: 0,
            y: 10,
            scale: 0.96,
          },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.28,
            ease: 'power2.out',
          },
        );

        return;
      }

      gsap.to(hintRef.current, {
        autoAlpha: 0,
        y: 10,
        scale: 0.96,
        duration: 0.2,
        ease: 'power2.in',
      });
    },
    { dependencies: [isHintVisible], scope: containerRef },
  );

  return (
    <div
      ref={containerRef}
      className="fixed right-12 bottom-24 z-10000 flex flex-col items-center">
      <div
        ref={hintRef}
        className="pointer-events-none mb-3 rounded-full bg-slate-950 px-4 py-2 text-xs font-medium whitespace-nowrap text-white opacity-0 shadow-[0_16px_36px_rgba(15,23,42,0.24)]">
        点我有智能客服服务
      </div>
      <button
        type="button"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-500 text-white shadow-[0_18px_45px_rgba(0,112,213,0.35)] transition hover:-translate-y-0.5 hover:bg-brand-400 active:scale-95 focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0">
        <MessageCircle />
      </button>
    </div>
  );
}
