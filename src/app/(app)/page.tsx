'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function AppPage() {
  const featureCards = [
    {
      title: '全栈开发',
      description: 'Next.js 将路由、服务端渲染与数据获取整合在同一套工程中，帮助团队更高效地交付完整的 Web 应用。',
      points: ['支持 SSR / SSG / ISR', '前后端协作更顺滑'],
      iconSrc: '/icons/feature-fullstack.svg',
      iconAlt: '全栈开发图标',
    },
    {
      title: '性能优化',
      description: '通过按需加载、图片优化和流式渲染能力，Next.js 能显著提升首屏体验，让页面更快到达用户眼前。',
      points: ['内置 Image 优化', '更好的首屏加载速度'],
      iconSrc: '/icons/feature-performance.svg',
      iconAlt: '性能优化图标',
    },
    {
      title: '稳定上线',
      description: '从本地开发到生产部署，Next.js 提供一致的构建体验，适合快速验证产品，也能支撑企业级项目持续迭代。',
      points: ['适配多种部署方案', '易于扩展与长期维护'],
      iconSrc: '/icons/feature-deployment.svg',
      iconAlt: '稳定上线图标',
    },
  ];

  const fullstackCards = [
    {
      title: 'SSR 服务端渲染',
      description: '请求到达后即时输出完整 HTML，优化首屏体验并提升搜索引擎可见性。',
      badge: 'SSR',
      badgeClass: 'from-sky-400 to-blue-500',
    },
    {
      title: 'SSG 静态生成',
      description: '在构建阶段预生成页面内容，适合文档、官网与高性能展示场景。',
      badge: 'SSG',
      badgeClass: 'from-cyan-400 to-sky-500',
    },
    {
      title: 'ISR 增量更新',
      description: '结合静态性能与动态数据能力，让页面在保持高可用的同时持续刷新。',
      badge: 'ISR',
      badgeClass: 'from-indigo-400 to-blue-600',
    },
    {
      title: 'Server Actions',
      description: '将表单提交与服务端逻辑自然串联，减少接口层样板代码并提升协作效率。',
      badge: 'ACT',
      badgeClass: 'from-violet-400 to-indigo-500',
    },
  ];

  const performanceCards = [
    {
      eyebrow: '01 / 图片优化',
      title: '使用 next/image 自动优化图片加载',
      description: 'Next.js 内置图片压缩、响应式尺寸与懒加载能力，能根据设备分发更合适的资源，减少首屏无效下载。',
      points: ['自动输出多尺寸资源，兼顾移动端与高清屏', '默认延迟加载屏外图片，减轻初始请求压力'],
      highlight: '适合 Banner、卡片封面和内容插图场景',
      imageSrc: '/illustrations/performance-image-optimization.svg',
      imageAlt: 'Next.js 图片优化示意图',
    },
    {
      eyebrow: '02 / 按需加载',
      title: '通过动态导入降低首屏 JavaScript 体积',
      description: '借助动态导入与组件级拆分，页面能优先加载关键内容，把次要模块延后到真正需要时再请求。',
      points: ['将图表、弹窗、编辑器等重模块拆成异步资源', '减少首屏 JS 解析与执行时间，提升可交互速度'],
      highlight: '适合数据大屏、富文本和复杂交互页面',
      imageSrc: '/illustrations/performance-code-splitting.svg',
      imageAlt: 'Next.js 动态导入与代码分割示意图',
    },
    {
      eyebrow: '03 / 服务端组件',
      title: '利用 Server Components 与流式渲染减轻客户端负担',
      description: '把更多计算和数据组装放在服务端完成，只把需要交互的部分交给客户端，能明显减少浏览器下载和运行的脚本量。',
      points: ['服务端先返回可见内容，用户更早看到页面骨架', '交互组件按需下发，降低 hydration 成本'],
      highlight: '适合首页、内容页和数据聚合型页面',
      imageSrc: '/illustrations/performance-streaming.svg',
      imageAlt: 'Next.js Server Components 与流式渲染示意图',
    },
    {
      eyebrow: '04 / 预渲染缓存',
      title: '结合 SSG / ISR / 缓存策略提升稳定访问速度',
      description: '根据页面更新频率选择静态生成、增量再生成或服务端渲染，并结合缓存复用结果，让请求更快命中可复用内容。',
      points: ['高频访问页面优先走预渲染，减少实时计算开销', '内容更新时按策略刷新，兼顾时效性与吞吐能力'],
      highlight: '适合官网、营销页、文档站与资讯页',
      imageSrc: '/illustrations/performance-cache-strategy.svg',
      imageAlt: 'Next.js 预渲染与缓存策略示意图',
    },
  ];

  const deploymentCards = [
    {
      title: '多平台统一部署',
      description: '同一套 Next.js 应用可灵活接入 Vercel、Node.js、Docker 与 Serverless 环境，发布链路更统一。',
      badge: 'DEPLOY',
      badgeClass: 'from-sky-200 via-blue-200 to-indigo-200',
      iconType: 'platform',
    },
    {
      title: '灰度与回滚更轻松',
      description: '结合构建产物管理与版本化流程，团队可以更稳妥地做灰度验证、快速回滚和持续交付。',
      badge: 'SAFE',
      badgeClass: 'from-cyan-200 via-sky-200 to-blue-200',
      iconType: 'shield',
    },
    {
      title: '全球访问更稳定',
      description: '配合边缘网络、静态资源缓存与按需渲染策略，让页面在不同地区也能保持稳定且快速的访问体验。',
      badge: 'EDGE',
      badgeClass: 'from-violet-200 via-indigo-200 to-sky-200',
      iconType: 'monitor',
    },
  ];

  const footerColumns = [
    {
      title: '平台能力',
      links: [
        { label: '应用架构', href: '/docs' },
        { label: '渲染策略', href: '/docs' },
        { label: '性能优化', href: '/blog' },
        { label: '部署方案', href: '/docs' },
      ],
    },
    {
      title: '开发资源',
      links: [
        { label: '上手指南', href: '/docs' },
        { label: '案例参考', href: '/' },
        { label: '更新日志', href: '/blog' },
        { label: '最佳实践', href: '/docs' },
      ],
    },
    {
      title: '团队协作',
      links: [
        { label: '项目规范', href: '/docs' },
        { label: '组件复用', href: '/docs' },
        { label: '发布流程', href: '/blog' },
        { label: '维护建议', href: '/docs' },
      ],
    },
    {
      title: '支持帮助',
      links: [
        { label: '常见问题', href: '/docs' },
        { label: '使用文档', href: '/docs' },
        { label: '博客文章', href: '/blog' },
        { label: '联系我们', href: '/login' },
      ],
    },
  ];

  const [activePerformanceIndex, setActivePerformanceIndex] = useState(0);
  const sectionTitleClass = 'text-[clamp(2.25rem,4vw,3.5rem)] font-bold leading-[1.08] tracking-[-0.04em] text-slate-900';
  const sectionDescriptionClass = 'mx-auto max-w-[780px] text-lg leading-8 text-slate-600 md:text-[22px] md:leading-9';

  const handlePrevPerformance = () => {
    setActivePerformanceIndex((currentIndex) => (currentIndex === 0 ? performanceCards.length - 1 : currentIndex - 1));
  };

  const handleNextPerformance = () => {
    setActivePerformanceIndex((currentIndex) => (currentIndex === performanceCards.length - 1 ? 0 : currentIndex + 1));
  };

  return (
    <>
      {/* <div>54554</div> */}
      <nav
        id="site-header"
        className="absolute top-0 left-0 h-[64px] w-full text-white z-9999">
        <div className="navbar-container h-full w-[1200px] mx-auto flex justify-between">
          <div className="logo-container">
            <Link
              href="/"
              className="h-full w-full flex items-center justify-center">
              <Image
                src="/logo.svg"
                alt="logo"
                width={120}
                height={60}
              />
            </Link>
          </div>
          <div className="flex-1 flex justify-between">
            <div className="nav-container flex items-center px-4">
              <li className="px-2 hover:text-white/60">
                <Link href="/">Next案例</Link>
              </li>
              <li className="px-2 hover:text-white/60">
                <Link href="/docs">文档</Link>
              </li>
              <li className="px-2 hover:text-white/60">
                <Link href="/blog">博客</Link>
              </li>
            </div>
            <div className="user-container flex items-center">
              <div className="flex items-center rounded-full gap-4">
                <Link
                  href="/login"
                  className="flex items-center rounded-full bg-brand-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-brand-400">
                  <span>登录</span>
                </Link>
                <Link
                  href="/register"
                  className="rounded-full bg-white/10 px-5 py-2 text-sm font-medium text-white transition">
                  <span>立即注册</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <main id="main-content">
        <section
          id="homepage-banner"
          className="h-[680px] w-full relative">
          <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-[-1]">
            <img
              className="w-full h-full object-cover"
              src="/head.jpg"
              alt="header"
            />
          </div>
          <div className="h-full w-[1200px] mx-auto text-white">
            <div className="pt-34">
              <div className="text-4xl mb-12 w-[70%]">
                Next.js 是一个用于构建全栈 Web 应用程序的 React 框架。您可以使用 React 组件构建用户界面，并使用 Next.js 来实现其他功能和优化。
              </div>
              <p className="w-[50%] text-2xl mb-12">无论您是独立开发者还是大型团队的一员，Next.js 都能帮助您构建交互式、动态且快速的 React 应用程序。</p>
              <div className="flex items-center gap-4">
                <Link
                  href="/login"
                  className="flex items-center rounded-full bg-brand-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-brand-400">
                  <span>立即登录</span>
                </Link>
                <Link
                  href="/register"
                  className="rounded-full bg-white/10 px-5 py-2 text-sm font-medium text-white transition">
                  <span>查看文档</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section
          id="homepage-introduction"
          className="relative z-10 -mt-10 w-[1200px] mx-auto pb-24">
          <div className="grid grid-cols-3 gap-4">
            {featureCards.map((card) => (
              <article
                key={card.title}
                className="flex min-h-[248px] items-start gap-4 rounded-[16px] border border-slate-200/70 bg-white px-2 py-2 transition-transform duration-300 hover:-translate-y-1">
                <div className="flex shrink-0 items-center justify-center rounded-[24px] bg-slate-50">
                  <Image
                    src={card.iconSrc}
                    alt={card.iconAlt}
                    width={120}
                    height={120}
                  />
                </div>
                <div className="pt-2">
                  <h3 className="mb-4 text-[28px] font-semibold text-slate-900">{card.title}</h3>
                  <p className="mb-5 text-base leading-7 text-slate-600">{card.description}</p>
                  <p className="text-sm font-medium tracking-[0.2em] text-slate-400 uppercase">{card.points.join(' / ')}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section
          id="homepage-fullstack"
          className="bg-slate-50 py-24">
          <div className="mx-auto w-full max-w-[1200px] px-4">
            <div className="mb-16 space-y-5 text-center">
              <h2 className={sectionTitleClass}>全栈开发</h2>
              <p className={sectionDescriptionClass}>支持 SSR / SSG / ISR / Server Actions，帮助团队更高效地组织渲染策略与业务逻辑</p>
            </div>
            <div className="grid items-center gap-10 lg:grid-cols-[480px_minmax(0,1fr)]">
              <div className="space-y-5">
                {fullstackCards.map((card) => (
                  <article
                    key={card.title}
                    className="flex items-start gap-4 rounded-[20px] border border-white/70 bg-white px-6 py-5 shadow-[0_24px_60px_rgba(15,23,42,0.06)] transition-transform duration-300 hover:-translate-y-1">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-slate-50">
                      <div
                        className={`flex h-11 w-11 items-center justify-center rounded-[18px] bg-gradient-to-br ${card.badgeClass} text-sm font-bold tracking-[0.18em] text-white shadow-lg`}>
                        {card.badge}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-slate-900">{card.title}</h3>
                      <p className="mt-2 text-base leading-7 text-slate-500">{card.description}</p>
                    </div>
                  </article>
                ))}
              </div>
              <div className="relative flex min-h-[520px] items-center justify-center overflow-hidden rounded-[36px] bg-gradient-to-br from-sky-50 via-white to-indigo-50 px-6 py-8">
                <div className="absolute left-10 top-10 h-24 w-24 rounded-full bg-sky-200/40 blur-2xl" />
                <div className="absolute bottom-12 right-10 h-32 w-32 rounded-full bg-indigo-200/40 blur-3xl" />
                <div className="relative w-full max-w-[620px]">
                  <div className="absolute left-4 top-20 h-[2px] w-[118px] bg-slate-200" />
                  <div className="absolute right-5 top-24 h-[2px] w-[110px] bg-slate-200" />
                  <div className="absolute bottom-18 left-16 h-[2px] w-[120px] bg-slate-200" />
                  <div className="absolute bottom-20 right-12 h-[2px] w-[120px] bg-slate-200" />
                  <div className="mx-auto flex h-[300px] w-[360px] items-center justify-center rounded-[32px] border-[10px] border-sky-100 bg-gradient-to-br from-sky-300 via-sky-400 to-blue-500 shadow-[0_35px_80px_rgba(59,130,246,0.28)]">
                    <div className="flex h-[232px] w-[286px] items-center justify-center rounded-[22px] border border-white/35 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.12),_rgba(255,255,255,0.02))] backdrop-blur-sm">
                      <div className="relative flex h-36 w-36 items-center justify-center">
                        <div className="absolute h-36 w-36 rounded-full border-4 border-white/85 border-dashed" />
                        <div className="absolute h-22 w-22 rounded-full border-4 border-white/70" />
                        <div className="absolute h-3 w-3 rounded-full bg-white shadow-[0_0_18px_rgba(255,255,255,0.9)]" />
                        <div className="absolute top-0 h-8 w-1 rounded-full bg-white" />
                        <div className="absolute bottom-0 h-8 w-1 rounded-full bg-white" />
                        <div className="absolute left-0 h-1 w-8 rounded-full bg-white" />
                        <div className="absolute right-0 h-1 w-8 rounded-full bg-white" />
                        <div className="absolute flex h-14 w-11 items-end justify-center rounded-t-[16px] rounded-b-[10px] border-4 border-white bg-white/10 pb-2">
                          <div className="h-4 w-5 rounded-sm bg-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mx-auto h-7 w-[210px] rounded-b-[28px] bg-slate-200 shadow-[0_12px_30px_rgba(148,163,184,0.35)]" />
                  <div className="mx-auto h-14 w-[270px] rounded-[24px] bg-white shadow-[0_18px_40px_rgba(148,163,184,0.28)]" />
                  <div className="absolute left-0 top-14 flex h-20 w-28 items-center justify-center rounded-[22px] bg-white shadow-[0_18px_40px_rgba(148,163,184,0.24)]">
                    <div className="h-10 w-16 rounded-[14px] bg-gradient-to-br from-slate-100 to-slate-200" />
                  </div>
                  <div className="absolute right-0 top-18 flex h-20 w-28 items-center justify-center rounded-[22px] bg-white shadow-[0_18px_40px_rgba(148,163,184,0.24)]">
                    <div className="h-10 w-16 rounded-[14px] bg-gradient-to-br from-slate-100 to-slate-200" />
                  </div>
                  <div className="absolute bottom-6 left-12 flex h-20 w-28 items-center justify-center rounded-[22px] bg-white shadow-[0_18px_40px_rgba(148,163,184,0.24)]">
                    <div className="h-10 w-16 rounded-[14px] bg-gradient-to-br from-slate-100 to-slate-200" />
                  </div>
                  <div className="absolute bottom-8 right-10 flex h-20 w-28 items-center justify-center rounded-[22px] bg-white shadow-[0_18px_40px_rgba(148,163,184,0.24)]">
                    <div className="h-10 w-16 rounded-[14px] bg-gradient-to-br from-slate-100 to-slate-200" />
                  </div>
                  <div className="absolute left-12 top-2 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-sky-600 shadow-lg">SSR</div>
                  <div className="absolute right-12 top-8 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-blue-600 shadow-lg">SSG</div>
                  <div className="absolute bottom-26 left-20 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-indigo-600 shadow-lg">ISR</div>
                  <div className="absolute bottom-30 right-16 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-violet-600 shadow-lg">Actions</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="homepage-performance"
          className="bg-white py-24">
          <div className="mx-auto w-full max-w-[1200px] px-4">
            <div className="space-y-5 text-center">
              <h2 className={sectionTitleClass}>性能优化</h2>
              <p className={sectionDescriptionClass}>围绕图片、代码、服务端组件与缓存策略四个关键点，持续优化首屏加载、渲染效率与用户交互体验</p>
            </div>

            <div className="mt-16 grid gap-8 lg:grid-cols-[320px_minmax(0,1fr)]">
              <div className="space-y-4">
                {performanceCards.map((card, index) => {
                  const isActive = index === activePerformanceIndex;

                  return (
                    <button
                      key={card.title}
                      type="button"
                      onClick={() => setActivePerformanceIndex(index)}
                      className={`w-full rounded-[24px] border px-5 py-5 text-left transition-all duration-300 ${
                        isActive ? 'border-sky-200 bg-sky-50 shadow-[0_20px_45px_rgba(14,165,233,0.16)]' : 'border-slate-200 bg-white hover:border-sky-100 hover:bg-slate-50'
                      }`}>
                      <p className={`text-sm font-semibold tracking-[0.2em] uppercase ${isActive ? 'text-sky-600' : 'text-slate-400'}`}>{card.eyebrow}</p>
                      <h3 className="mt-3 text-xl font-semibold text-slate-900">{card.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-slate-500">{card.highlight}</p>
                    </button>
                  );
                })}
              </div>

              <div className="overflow-hidden rounded-[36px] bg-slate-950 p-4 shadow-[0_32px_80px_rgba(15,23,42,0.2)] md:p-6">
                <div
                  className="flex transition-transform duration-500 ease-out"
                  style={{ transform: `translateX(-${activePerformanceIndex * 100}%)` }}>
                  {performanceCards.map((card) => (
                    <article
                      key={card.title}
                      className="w-full shrink-0 rounded-[28px] border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_rgba(15,23,42,0.98)_54%)] p-6 text-white lg:p-8">
                      <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_420px]">
                        <div>
                          <p className="text-sm font-semibold tracking-[0.24em] text-sky-200 uppercase">{card.eyebrow}</p>
                          <h3 className="mt-4 text-3xl font-bold leading-tight lg:text-[36px]">{card.title}</h3>
                          <p className="mt-5 max-w-[520px] text-base leading-8 text-slate-300">{card.description}</p>

                          <div className="mt-8 grid gap-4 sm:grid-cols-2">
                            {card.points.map((point) => (
                              <div
                                key={point}
                                className="rounded-[20px] border border-white/10 bg-white/5 px-4 py-4 backdrop-blur-sm">
                                <div className="mb-3 h-2 w-12 rounded-full bg-sky-300" />
                                <p className="text-sm leading-7 text-slate-200">{point}</p>
                              </div>
                            ))}
                          </div>

                          <p className="mt-8 inline-flex rounded-full border border-sky-300/30 bg-sky-400/10 px-4 py-2 text-sm text-sky-100">{card.highlight}</p>
                        </div>

                        <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/10 p-4">
                          <div className="absolute left-[-20px] top-[-20px] h-40 w-40 rounded-full bg-sky-400/20 blur-3xl" />
                          <div className="absolute bottom-[-24px] right-[-8px] h-40 w-40 rounded-full bg-indigo-400/20 blur-3xl" />
                          <div className="relative rounded-[24px] bg-[linear-gradient(180deg,rgba(255,255,255,0.18),rgba(255,255,255,0.06))] p-4">
                            <Image
                              src={card.imageSrc}
                              alt={card.imageAlt}
                              width={480}
                              height={360}
                              className="h-auto w-full rounded-[20px]"
                            />
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>

                <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-2">
                    {performanceCards.map((card, index) => (
                      <button
                        key={card.title}
                        type="button"
                        onClick={() => setActivePerformanceIndex(index)}
                        aria-label={`切换到${card.title}`}
                        className={`h-2.5 rounded-full transition-all duration-300 ${index === activePerformanceIndex ? 'w-10 bg-sky-400' : 'w-2.5 bg-white/30 hover:bg-white/50'}`}
                      />
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={handlePrevPerformance}
                      className="rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-white/10">
                      向左切换
                    </button>
                    <button
                      type="button"
                      onClick={handleNextPerformance}
                      className="rounded-full bg-sky-400 px-5 py-2.5 text-sm font-medium text-slate-950 transition hover:bg-sky-300">
                      向右切换
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="homepage-deployment"
          className="bg-[#eef2f7] py-24">
          <div className="mx-auto w-full max-w-[1200px] px-4">
            <div className="space-y-5 text-center">
              <h2 className={sectionTitleClass}>稳定上线</h2>
              <p className={sectionDescriptionClass}>兼顾发布效率、交付稳定性与全球访问体验</p>
            </div>
            <div className="mt-18 grid gap-8 md:grid-cols-3">
              {deploymentCards.map((card) => (
                <article
                  key={card.title}
                  className="flex flex-col items-center text-center">
                  <div className="relative flex h-[260px] w-full items-center justify-center">
                    <div className={`absolute top-[28px] h-[176px] w-[176px] rounded-full bg-gradient-to-br ${card.badgeClass} opacity-40 blur-3xl`} />
                    <div className="absolute bottom-[42px] h-5 w-[180px] rounded-full bg-slate-300/40 blur-md" />
                    <div className="relative flex h-[132px] w-[132px] items-center justify-center rounded-full bg-white shadow-[0_22px_45px_rgba(148,163,184,0.28)]">
                      <div className="absolute bottom-[-8px] h-4 w-[96px] rounded-full bg-slate-200" />
                      <div className="absolute bottom-[-20px] h-3 w-[70px] rounded-full bg-slate-300/50 blur-sm" />
                      {card.iconType === 'platform' && (
                        <>
                          <div className="absolute left-[-18px] top-[82px] h-5 w-10 -rotate-12 rounded-[14px] bg-white/90 shadow-md" />
                          <div className="absolute right-[-12px] top-[88px] h-4 w-9 rotate-12 rounded-[14px] bg-white/80 shadow-md" />
                          <div className="relative flex h-[92px] w-[92px] items-center justify-center rounded-full bg-gradient-to-br from-slate-50 to-sky-50 shadow-inner">
                            <div className="absolute h-12 w-16 rounded-[12px] border-4 border-white bg-gradient-to-br from-sky-300 to-blue-400 shadow-lg" />
                            <div className="absolute bottom-[18px] h-3 w-10 rounded-full bg-white/80" />
                            <div className="absolute top-[24px] right-[22px] flex h-7 w-7 items-center justify-center rounded-full bg-white shadow-md">
                              <div className="h-3 w-3 rotate-45 border-r-2 border-t-2 border-sky-500" />
                            </div>
                          </div>
                        </>
                      )}
                      {card.iconType === 'shield' && (
                        <>
                          <div className="absolute left-[-10px] top-[96px] h-5 w-5 rounded-full bg-white/90 shadow-md" />
                          <div className="absolute right-[-16px] top-[92px] h-6 w-6 rounded-full bg-white/80 shadow-md" />
                          <div className="relative flex h-[96px] w-[96px] items-center justify-center rounded-full bg-gradient-to-br from-slate-50 to-cyan-50 shadow-inner">
                            <div className="relative h-[66px] w-[54px] overflow-hidden rounded-t-[22px] rounded-b-[26px] bg-gradient-to-b from-sky-400 to-blue-500 shadow-[0_16px_32px_rgba(59,130,246,0.3)]">
                              <div className="absolute left-1/2 top-[16px] h-7 w-4 -translate-x-1/2 rotate-45 border-b-[5px] border-r-[5px] border-white" />
                            </div>
                          </div>
                        </>
                      )}
                      {card.iconType === 'monitor' && (
                        <>
                          <div className="absolute left-[-14px] top-[104px] h-4 w-8 rounded-[12px] bg-white/85 shadow-md" />
                          <div className="absolute right-[-12px] top-[82px] h-4 w-10 rounded-[12px] bg-white/85 shadow-md" />
                          <div className="relative">
                            <div className="flex h-[70px] w-[102px] items-center justify-center rounded-[18px] border-[5px] border-white bg-gradient-to-br from-sky-300 to-indigo-400 shadow-[0_18px_35px_rgba(99,102,241,0.28)]">
                              <div className="relative h-8 w-8">
                                <div className="absolute inset-x-0 top-1 mx-auto h-2 w-2 rounded-full bg-white" />
                                <div className="absolute left-1/2 top-3 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-white border-t-transparent border-l-transparent" />
                                <div className="absolute left-1/2 top-5 h-6 w-6 -translate-x-1/2 rounded-full border-2 border-white border-t-transparent border-l-transparent opacity-80" />
                              </div>
                            </div>
                            <div className="mx-auto h-3 w-8 rounded-b-lg bg-slate-300" />
                            <div className="mx-auto h-2 w-14 rounded-full bg-slate-200" />
                          </div>
                        </>
                      )}
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
      </main>
      <footer className="w-full bg-[#272727]">
        <div className="mx-auto w-[1200px] px-10 py-16 text-white">
          <div className="flex items-start justify-between gap-16 border-b border-white/10 pb-12">
            <div className="max-w-[300px]">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-white/45">Next Experience</p>
              <h2 className="mt-5 text-[32px] font-semibold leading-[1.25]">为现代 Web 产品提供更稳定的构建与交付体验</h2>
              <p className="mt-5 text-sm leading-7 text-white/60">从页面渲染、工程组织到线上部署，围绕真实项目场景整理清晰能力，让团队可以更快进入开发与迭代节奏。</p>
            </div>

            <div className="grid flex-1 grid-cols-4 gap-10">
              {footerColumns.map((column) => (
                <div key={column.title}>
                  <h3 className="text-lg font-semibold text-white">{column.title}</h3>
                  <div className="mt-6 flex flex-col gap-4">
                    {column.links.map((link) => (
                      <Link
                        key={link.label}
                        href={link.href}
                        className="text-sm text-white/60 transition hover:text-white">
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between pt-6 text-sm text-white/45">
            <p>&copy; 2026 Next Starter Showcase. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <span>Built for responsive product sites</span>
              <span className="h-1 w-1 rounded-full bg-white/30" />
              <span>Background locked at #272727</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
