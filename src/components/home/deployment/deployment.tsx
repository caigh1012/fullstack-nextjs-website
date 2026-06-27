'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const deploymentCards = [
  {
    title: '多平台统一部署',
    description: '同一套 Next.js 应用可灵活接入 Vercel、Node.js、Docker 与 Serverless 环境，发布链路更统一。',
    badge: 'DEPLOY',
    badgeClass: 'from-sky-200 via-blue-200 to-indigo-200',
    iconSrc: '/icons/deployment-platform.svg',
    iconAlt: '多平台统一部署图标',
  },
  {
    title: '灰度与回滚更轻松',
    description: '结合构建产物管理与版本化流程，团队可以更稳妥地做灰度验证、快速回滚和持续交付。',
    badge: 'SAFE',
    badgeClass: 'from-cyan-200 via-sky-200 to-blue-200',
    iconSrc: '/icons/deployment-shield.svg',
    iconAlt: '灰度与回滚图标',
  },
  {
    title: '全球访问更稳定',
    description: '配合边缘网络、静态资源缓存与按需渲染策略，让页面在不同地区也能保持稳定且快速的访问体验。',
    badge: 'EDGE',
    badgeClass: 'from-violet-200 via-indigo-200 to-sky-200',
    iconSrc: '/icons/deployment-monitor.svg',
    iconAlt: '全球访问稳定图标',
  },
];

export default function Deployment() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray<HTMLElement>('[data-deployment-card]');

      if (cards.length === 0) {
        return;
      }

      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      if (prefersReducedMotion) {
        gsap.set(cards, {
          opacity: 1,
          y: 0,
        });
        return;
      }

      gsap.fromTo(
        cards,
        {
          opacity: 0,
          y: 56,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power3.out',
          stagger: 0.16,
          clearProps: 'transform,opacity',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            once: true,
          },
        },
      );
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="bg-[#eef2f7] py-24">
      <div className="mx-auto w-300 px-4">
        <div className="mb-16 space-y-5 text-center">
          <h2 className="font-bold text-5xl text-slate-900">稳定上线</h2>
          <p className="mx-auto max-w-195 text-slate-600">兼顾发布效率、交付稳定性与全球访问体验</p>
        </div>
        <div className="mt-18 grid gap-8 md:grid-cols-3">
          {deploymentCards.map((card) => (
            <article
              key={card.title}
              data-deployment-card
              className="flex flex-col items-center text-center will-change-transform">
              <div className="relative flex h-[260px] w-full items-center justify-center">
                <div className={`absolute top-[28px] h-[176px] w-[176px] rounded-full bg-gradient-to-br ${card.badgeClass} opacity-40 blur-3xl`} />
                <div className="absolute bottom-[42px] h-5 w-[180px] rounded-full bg-slate-300/40 blur-md" />
                <div className="relative flex h-[132px] w-[132px] items-center justify-center rounded-full bg-white shadow-[0_22px_45px_rgba(148,163,184,0.28)]">
                  <div className="absolute bottom-[-8px] h-4 w-[96px] rounded-full bg-slate-200" />
                  <div className="absolute bottom-[-20px] h-3 w-[70px] rounded-full bg-slate-300/50 blur-sm" />
                  <Image
                    src={card.iconSrc}
                    alt={card.iconAlt}
                    width={104}
                    height={104}
                    className="h-[104px] w-[104px]"
                  />
                </div>
                <div className="absolute top-[26px] rounded-full bg-white/90 px-4 py-2 text-xs font-semibold tracking-[0.18em] text-slate-600 shadow-lg">{card.badge}</div>
              </div>
              <h3 className="text-[34px] font-bold text-slate-900">{card.title}</h3>
              <p className="mt-3 max-w-[280px] text-base leading-7 text-slate-600">{card.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
