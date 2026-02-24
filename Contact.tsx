import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from './useInView';
import { TrendingUp, Users, Building2, MapPin, Award, Banknote } from 'lucide-react';

function AnimatedCounter({ end, duration = 2000, suffix = '' }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = counterRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.unobserve(el);
  }, []);

  useEffect(() => {
    if (!started) return;
    let start = 0;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [started, end, duration]);

  return <div ref={counterRef}>{count}{suffix}</div>;
}

const stats = [
  { icon: Building2, value: 500, suffix: '+', label: 'Startups Supported', color: 'from-orange-500 to-red-500' },
  { icon: Banknote, value: 100, suffix: 'Cr+', label: 'Funding Facilitated', color: 'from-orange-400 to-orange-600' },
  { icon: Users, value: 10000, suffix: '+', label: 'Community Members', color: 'from-amber-500 to-orange-500' },
  { icon: MapPin, value: 20, suffix: '+', label: 'Cities Covered', color: 'from-orange-600 to-red-600' },
  { icon: Award, value: 50, suffix: '+', label: 'Expert Mentors', color: 'from-orange-500 to-amber-500' },
  { icon: TrendingUp, value: 100, suffix: '+', label: 'Events Per Year', color: 'from-red-500 to-orange-500' },
];

export function Impact() {
  const { ref, inView } = useInView();

  return (
    <section id="impact" className="py-24 bg-white relative overflow-hidden" ref={ref}>
      {/* 3D background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-20 h-20 border border-orange-200 rounded-xl animate-spin-3d opacity-20" />
        <div className="absolute bottom-10 right-10 w-32 h-32 border border-orange-200 rounded-full animate-float opacity-20" />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-orange-100 rounded-lg animate-float-reverse opacity-30" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-orange-100 text-orange-600 text-sm font-semibold rounded-full mb-4">
            Our Impact
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 leading-tight">
            Numbers That
            <span className="text-orange-500"> Speak For Us</span>
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            Every number represents a dream being realized, a founder being supported, and innovation being fostered.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: 0.1 * i, duration: 0.6 }}
              className="perspective-container"
            >
              <div className="card-3d group bg-white rounded-3xl p-8 border border-orange-100 hover:border-orange-200 shadow-lg shadow-orange-50 hover:shadow-xl hover:shadow-orange-100 transition-all duration-500 text-center">
                <div className={`w-16 h-16 mx-auto bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl sm:text-5xl font-black text-gray-900 mb-2">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-gray-500 font-medium">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
