import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, TrendingUp, Users, Zap } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-orange-600 via-orange-500 to-orange-700 noise-bg">
      {/* 3D Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large floating 3D shapes */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-3xl animate-float backdrop-blur-sm border border-white/10" style={{ transform: 'rotateX(15deg) rotateY(-15deg)' }} />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full animate-float-slow backdrop-blur-sm border border-white/10" />
        <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-orange-400/20 rounded-2xl animate-float-reverse backdrop-blur-sm border border-white/10" style={{ transform: 'rotate(45deg)' }} />
        
        {/* Orbiting particles */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="animate-orbit">
            <div className="w-4 h-4 bg-white/30 rounded-full" />
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="animate-orbit2">
            <div className="w-3 h-3 bg-orange-300/40 rounded-full" />
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="animate-orbit3">
            <div className="w-2 h-2 bg-white/50 rounded-full" />
          </div>
        </div>

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }}
        />

        {/* Gradient overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/15 backdrop-blur-md rounded-full border border-white/20"
            >
              <Sparkles className="w-4 h-4 text-yellow-300" />
              <span className="text-white/90 text-sm font-medium">India's Leading Startup Ecosystem</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight text-3d"
            >
              Empowering{' '}
              <span className="relative inline-block">
                <span className="relative z-10">Startups</span>
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 1, delay: 1 }}
                  className="absolute bottom-2 left-0 h-3 bg-yellow-400/40 rounded"
                />
              </span>
              <br />
              <span className="text-orange-200">To Build The</span>
              <br />
              Future
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-white/80 max-w-lg leading-relaxed"
            >
              Join India's most vibrant startup community. Get mentorship, funding connections, 
              resources, and a network of fellow entrepreneurs who are building the next big thing.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#programs"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-orange-600 font-bold rounded-2xl shadow-2xl shadow-orange-900/30 hover:shadow-orange-900/50 transition-all duration-300 hover:-translate-y-1"
              >
                Explore Programs
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#about"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white font-bold rounded-2xl border border-white/20 backdrop-blur-md hover:bg-white/20 transition-all duration-300 hover:-translate-y-1"
              >
                Learn More
              </a>
            </motion.div>

            {/* Stats bar */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap gap-8 pt-4"
            >
              {[
                { value: '500+', label: 'Startups' },
                { value: '₹100Cr+', label: 'Funding Raised' },
                { value: '50+', label: 'Mentors' },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-2xl font-black text-white">{stat.value}</div>
                  <div className="text-sm text-white/60 font-medium">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right 3D Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="hidden lg:block perspective-container"
          >
            <div className="relative">
              {/* Main 3D Card */}
              <div className="relative animate-float" style={{ transformStyle: 'preserve-3d' }}>
                <div className="w-full aspect-square max-w-md mx-auto bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-8 shadow-2xl" style={{ transform: 'rotateX(5deg) rotateY(-10deg)' }}>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg">
                        <TrendingUp className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-white font-bold text-xl">Growth Hub</h3>
                        <p className="text-white/60 text-sm">Scale your startup</p>
                      </div>
                    </div>
                    
                    {/* Mock chart */}
                    <div className="flex items-end gap-2 h-40">
                      {[40, 60, 35, 80, 55, 90, 70, 95, 85, 100].map((h, i) => (
                        <motion.div
                          key={i}
                          initial={{ height: 0 }}
                          animate={{ height: `${h}%` }}
                          transition={{ duration: 1, delay: 1 + i * 0.1, ease: 'easeOut' }}
                          className="flex-1 bg-gradient-to-t from-orange-400 to-orange-300 rounded-t-lg opacity-80"
                        />
                      ))}
                    </div>

                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { icon: Users, label: 'Network' },
                        { icon: Zap, label: 'Funding' },
                        { icon: Sparkles, label: 'Mentors' },
                      ].map((item, i) => (
                        <div key={i} className="bg-white/10 rounded-xl p-3 text-center border border-white/10">
                          <item.icon className="w-5 h-5 text-orange-300 mx-auto mb-1" />
                          <span className="text-white/70 text-xs">{item.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating notification cards */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.5 }}
                className="absolute -right-8 top-10 bg-white rounded-2xl p-4 shadow-2xl shadow-orange-200/50 animate-float-slow"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-800">Funding Secured!</p>
                    <p className="text-xs text-gray-500">Series A - ₹5Cr</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.8 }}
                className="absolute -left-8 bottom-20 bg-white rounded-2xl p-4 shadow-2xl shadow-orange-200/50 animate-float-reverse"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center">
                    <Users className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-800">+25 Members</p>
                    <p className="text-xs text-gray-500">Joined this week</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
