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
    <section className="relative w-full h-170">
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-[-1]">
        <img
          className="w-full h-full object-cover"
          src="/banner.jpg"
          alt="header"
        />
      </div>
      <div className="h-full w-300 mx-auto text-white">
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
