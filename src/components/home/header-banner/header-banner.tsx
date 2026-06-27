'use client';

import { gsap, useGSAP } from '@/lib/gsap';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const titleText = 'Next.js 是一个用于构建全栈 Web 应用程序的 React 框架。您可以使用 React 组件构建用户界面，并使用 Next.js 来实现其他功能和优化。';

export default function HeaderBanner() {
  const el = useRef<HTMLParagraphElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [' 无论您是独立开发者还是大型团队的一员，Next.js 都能帮助您构建交互式、动态且快速的 React 应用程序。'],
      typeSpeed: 50,
      backSpeed: 0,
      fadeOut: true,
      showCursor: false,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  useGSAP(
    () => {
      gsap.fromTo(
        '.split-char',
        {
          opacity: 0,
          yPercent: 110,
          rotateX: -80,
          filter: 'blur(8px)',
        },
        {
          opacity: 1,
          yPercent: 0,
          rotateX: 0,
          filter: 'blur(0px)',
          duration: 0.9,
          ease: 'power4.out',
          stagger: 0.03,
        },
      );

      gsap.fromTo(
        ctaRef.current,
        {
          y: 120,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
        },
      );
    },
    { scope: titleRef },
  );

  return (
    <section className="relative h-170 w-full overflow-hidden bg-slate-950">
      <div className="pointer-events-none absolute inset-0 z-0 bg-[url('/banner-bg.svg')] bg-cover bg-center bg-no-repeat" />
      <div className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(90deg,rgba(2,6,23,0.88)_0%,rgba(2,6,23,0.64)_42%,rgba(2,6,23,0.34)_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-44 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />
      <div className="relative z-10 h-full w-300 mx-auto text-white">
        <div className="pt-34">
          <div
            ref={titleRef}
            className="text-4xl mb-12 leading-[1.5] w-[70%] [perspective:1000px]">
            <span>
              {Array.from(titleText).map((char, index) => (
                <span
                  key={`${char}-${index}`}
                  className="split-char inline-block will-change-transform">
                  {char === ' ' ? '\u00A0' : char}
                </span>
              ))}
            </span>
          </div>
          <p
            ref={el}
            className="w-[50%] min-h-20  text-2xl mb-12"></p>
          <div className="flex items-center gap-4">
            <Link
              ref={ctaRef}
              href="/"
              className="rounded-full bg-brand-500 px-5 py-2 text-sm font-medium text-white">
              <span>查看文档</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
