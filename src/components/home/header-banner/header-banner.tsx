'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

export default function HeaderBanner() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Next.js 是一个用于构建全栈 Web 应用程序的 React 框架。您可以使用 React 组件构建用户界面，并使用 Next.js 来实现其他功能和优化。'],
      typeSpeed: 0,
      backSpeed: 0,
      fadeOut: true,
      showCursor: false,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="relative h-170 w-full overflow-hidden bg-slate-950">
      <div className="pointer-events-none absolute inset-0 z-0 bg-[url('/banner-bg.svg')] bg-cover bg-center bg-no-repeat" />
      <div className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(90deg,rgba(2,6,23,0.88)_0%,rgba(2,6,23,0.64)_42%,rgba(2,6,23,0.34)_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-44 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />
      <div className="relative z-10 h-full w-300 mx-auto text-white">
        <div className="pt-34">
          <div
            ref={el}
            className="text-4xl h-30 mb-12 w-[70%]"></div>
          <p className="w-[50%] text-2xl mb-12">无论您是独立开发者还是大型团队的一员，Next.js 都能帮助您构建交互式、动态且快速的 React 应用程序。</p>
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="rounded-full bg-white/10 px-5 py-2 text-sm font-medium text-white slide-in-bottom">
              <span>查看文档</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
