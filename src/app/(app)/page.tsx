import Image from 'next/image';
import Link from 'next/link';

export default function AppPage() {
  return (
    <>
      {/* <div>54554</div> */}
      <nav
        id="site-header"
        className="absolute top-0 left-0 h-[64px] w-full text-[#fff] z-9999">
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
              <li className="px-2 hover:text-[#fff]/60">
                <Link href="/">Next案例</Link>
              </li>
              <li className="px-2 hover:text-[#fff]/60">
                <Link href="/docs">文档</Link>
              </li>
              <li className="px-2 hover:text-[#fff]/60">
                <Link href="/blog">博客</Link>
              </li>
            </div>
            <div className="user-container flex items-center">
              <div className="flex items-center rounded-full gap-4">
                <Link
                  href="/login"
                  className="flex items-center bg-[#0070d5] hover:bg-[#3A8BFF] rounded-full px-4 py-2 text-sm font-medium text-white transition hover:bg-white/5">
                  <span>登录</span>
                </Link>
                <Link
                  href="/register"
                  className="rounded-full bg-[#fff]/10 px-5 py-2 text-sm font-medium text-white transition ">
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
          <div className="h-full w-[1200px] mx-auto text-[#fff]">
            <div className="pt-34">
              <div className="text-4xl mb-12 w-[70%]">
                Next.js 是一个用于构建全栈 Web 应用程序的 React 框架。您可以使用 React 组件构建用户界面，并使用 Next.js 来实现其他功能和优化。
              </div>
              <p className="w-[50%] text-2xl mb-12">无论您是独立开发者还是大型团队的一员，Next.js 都能帮助您构建交互式、动态且快速的 React 应用程序。</p>
              <div className="flex items-center gap-4">
                <Link
                  href="/login"
                  className="flex items-center bg-[#0070d5] hover:bg-[#3A8BFF] rounded-full px-4 py-2 text-sm font-medium text-white transition hover:bg-white/5">
                  <span>立即登录</span>
                </Link>
                <Link
                  href="/register"
                  className="rounded-full bg-[#fff]/10 px-5 py-2 text-sm font-medium text-white transition ">
                  <span>查看文档</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section
          id="homepage-introduction"
          className="h-[680px]">
          45645
        </section>
        <section
          id="homepage-introduction"
          className="h-[680px]">
          45645
        </section>
      </main>
      {/* <footer className="bg-[#0070d5] h-[64px]">
        <div className="w-[1200px] mx-auto flex justify-between items-center">
          <div className="text-[#fff]">&copy; 2023 Next.js 项目. All rights reserved.</div>
        </div>
      </footer> */}
    </>
  );
}
