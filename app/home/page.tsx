"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageContext";

export default function Home() {
  const { t } = useLanguage();
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  const modules = [
    {
      id: 1,
      title: t.modules.austrian.title,
      subtitle: t.modules.austrian.subtitle,
      icon: "💰",
      topics: t.modules.austrian.topics,
      gradient: "from-orange-500/20 to-yellow-500/20",
      href: "/modules/austrian-economics"
    },
    {
      id: 2,
      title: t.modules.monetary.title,
      subtitle: t.modules.monetary.subtitle,
      icon: "📜",
      topics: t.modules.monetary.topics,
      gradient: "from-red-500/20 to-orange-500/20",
      href: "/modules/monetary-history"
    },
    {
      id: 3,
      title: t.modules.halving.title,
      subtitle: t.modules.halving.subtitle,
      icon: "📊",
      topics: t.modules.halving.topics,
      gradient: "from-purple-500/20 to-pink-500/20",
      href: "/modules/halving-cycles"
    },
    {
      id: 4,
      title: t.modules.s2f.title,
      subtitle: t.modules.s2f.subtitle,
      icon: "⚡",
      topics: t.modules.s2f.topics,
      gradient: "from-blue-500/20 to-cyan-500/20",
      href: "/modules/stock-to-flow"
    },
    {
      id: 5,
      title: t.modules.custody.title,
      subtitle: t.modules.custody.subtitle,
      icon: "🔐",
      topics: t.modules.custody.topics,
      gradient: "from-green-500/20 to-emerald-500/20",
      href: "/modules/self-custody"
    }
  ];

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black overflow-hidden">
      {/* Animated background gradient orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/4 -left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        />
        <div
          className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl"
          style={{
            transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        />
      </div>

      {/* Hero Section with Parallax */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center px-6"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
          opacity: 1 - scrollY / 500
        }}
      >
        <div className="max-w-6xl mx-auto text-center">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 mb-8 px-6 py-3 rounded-full backdrop-blur-xl bg-orange-500/5 border border-orange-500/20 hover:bg-orange-500/10 transition-all duration-300"
            style={{
              transform: `translateY(${scrollY * 0.2}px)`
            }}
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
            </span>
            <span className="text-orange-400 text-sm font-mono tracking-wider">
              ₿ {t.home.tagline}
            </span>
          </div>

          {/* Main Title */}
          <h1
            className="text-7xl md:text-9xl font-black mb-8 tracking-tight"
            style={{
              transform: `translateY(${scrollY * 0.3}px)`
            }}
          >
            <span className="bg-gradient-to-r from-orange-300 via-orange-400 to-orange-500 bg-clip-text text-transparent animate-gradient">
              {t.home.title}
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className="text-2xl md:text-3xl text-slate-300 mb-6 font-light"
            style={{
              transform: `translateY(${scrollY * 0.4}px)`
            }}
          >
            {t.home.subtitle}
          </p>

          {/* Description */}
          <p
            className="text-lg text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed"
            style={{
              transform: `translateY(${scrollY * 0.45}px)`
            }}
          >
            {t.home.description} <br />
            <span className="text-orange-400 font-semibold">{t.home.descriptionHighlight1}</span> dan{" "}
            <span className="text-orange-400 font-semibold">{t.home.descriptionHighlight2}</span>.
          </p>

          {/* Genesis Quote */}
          <div
            className="relative max-w-2xl mx-auto p-8 rounded-2xl backdrop-blur-xl bg-slate-900/30 border border-slate-800/50 group hover:border-orange-500/30 transition-all duration-500"
            style={{
              transform: `translateY(${scrollY * 0.5}px)`
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/5 to-orange-500/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <p className="relative text-slate-300 italic text-lg mb-4 leading-relaxed">
              "{t.home.genesisQuote}"
            </p>
            <p className="relative text-slate-500 text-sm">
              — {t.home.genesisAuthor}
            </p>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
            <svg className="w-6 h-6 text-orange-500/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
            {[
              { label: t.home.stats.supply, value: "21M", icon: "₿" },
              { label: t.home.stats.years, value: "15+", icon: "📅" },
              { label: t.home.stats.authority, value: "0", icon: "🚫" }
            ].map((stat, i) => (
              <div
                key={i}
                className="group relative p-8 rounded-3xl backdrop-blur-xl bg-slate-900/30 border border-slate-800/50 hover:border-orange-500/30 transition-all duration-500 hover:-translate-y-2"
                style={{
                  transform: `perspective(1000px) rotateX(${scrollY > 300 ? 0 : 20}deg)`,
                  opacity: scrollY > 300 ? 1 : 0,
                  transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                  transitionDelay: `${i * 0.1}s`
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-orange-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="text-5xl mb-4">{stat.icon}</div>
                  <div className="text-5xl font-black text-orange-400 mb-2">{stat.value}</div>
                  <div className="text-slate-400 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules Grid */}
      <section className="relative py-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-4 bg-gradient-to-r from-slate-200 to-slate-400 bg-clip-text text-transparent">
              {t.home.learningPath}
            </h2>
            <p className="text-slate-400 text-xl">5 {t.modules.module}s • Zero to Hero</p>
          </div>

          {/* Module Cards with 3D Effect */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modules.map((module, i) => (
              <Link
                key={module.id}
                href={module.href}
                className="group relative block"
                style={{
                  transform: `perspective(1000px) rotateX(${scrollY > 800 ? 0 : 20}deg)`,
                  opacity: scrollY > 800 ? 1 : 0,
                  transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                  transitionDelay: `${i * 0.1}s`
                }}
              >
                {/* Card */}
                <div className="relative h-full p-8 rounded-3xl backdrop-blur-xl bg-slate-900/50 border border-slate-800/50 hover:border-orange-500/50 transition-all duration-500 group-hover:-translate-y-4 group-hover:shadow-2xl group-hover:shadow-orange-500/20">
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${module.gradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                  {/* Content */}
                  <div className="relative">
                    {/* Icon & Number */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="text-6xl transform group-hover:scale-110 transition-transform duration-500">
                        {module.icon}
                      </div>
                      <div className="text-slate-700 font-mono text-sm">
                        Module {module.id}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-slate-200 mb-3 group-hover:text-orange-400 transition-colors duration-300">
                      {module.title}
                    </h3>

                    {/* Subtitle */}
                    <p className="text-slate-400 mb-6 leading-relaxed">
                      {module.subtitle}
                    </p>

                    {/* Topics */}
                    <div className="space-y-2 mb-6">
                      {module.topics.map((topic, j) => (
                        <div key={j} className="flex items-center gap-2 text-sm text-slate-500 group-hover:text-slate-400 transition-colors duration-300">
                          <svg className="w-4 h-4 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                          {topic}
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="flex items-center gap-2 text-orange-400 font-medium group-hover:gap-4 transition-all duration-300">
                      <span>Start Learning</span>
                      <svg className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Wrong Approach */}
            <div className="relative p-8 rounded-3xl backdrop-blur-xl bg-red-500/5 border border-red-500/20 hover:border-red-500/40 transition-all duration-500 group">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/0 to-red-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="text-4xl mb-4">❌</div>
                <h3 className="text-2xl font-bold text-red-400 mb-6">{t.home.wrongApproach}</h3>
                <ul className="space-y-3">
                  {t.home.wrongList.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-400">
                      <span className="text-red-500 mt-1">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Approach */}
            <div className="relative p-8 rounded-3xl backdrop-blur-xl bg-green-500/5 border border-green-500/20 hover:border-green-500/40 transition-all duration-500 group">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/0 to-green-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="text-4xl mb-4">✅</div>
                <h3 className="text-2xl font-bold text-green-400 mb-6">{t.home.rightApproach}</h3>
                <ul className="space-y-3">
                  {t.home.rightList.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-400">
                      <span className="text-green-500 mt-1">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Developers */}
      <section className="relative py-32 px-6 mb-32">
        <div className="max-w-3xl mx-auto">
          <div className="relative p-12 rounded-3xl backdrop-blur-xl bg-slate-900/50 border border-slate-800/50 hover:border-orange-500/30 transition-all duration-500 group">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 via-orange-500/5 to-orange-500/0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative text-center">
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20">
                <span className="text-orange-400 font-mono text-sm">👨‍💻 {t.home.forDevelopers}</span>
              </div>
              <p className="text-xl text-slate-300 leading-relaxed">
                {t.home.forDevsDesc} <span className="text-orange-400 font-semibold">{t.home.codeLevel}</span>{t.home.forDevsDesc2}
              </p>
              <p className="text-slate-400 mt-4">
                {t.home.forDevsDesc3}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
}
