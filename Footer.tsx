import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from './useInView';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Founder & CEO, TechNova',
    text: 'Startup Club India was instrumental in our journey from a two-person team to a 50-member company. The mentorship and investor connections they provided were invaluable. We raised our Series A within 6 months of joining.',
    rating: 5,
    emoji: '👩‍💼',
  },
  {
    name: 'Rajesh Kumar',
    role: 'Co-founder, GreenFarms AI',
    text: 'The Accelerator Program transformed our approach to business. The structured mentorship, pitch practice sessions, and direct VC introductions helped us raise ₹8 crores. Highly recommend to every early-stage founder!',
    rating: 5,
    emoji: '👨‍💻',
  },
  {
    name: 'Anita Desai',
    role: 'CEO, EduLearn Platform',
    text: 'Being part of the Founder Circle has been a game-changer. The peer support, honest feedback, and collaborative spirit is unlike anything else. I found my co-founder and two key hires through this community.',
    rating: 5,
    emoji: '👩‍🏫',
  },
  {
    name: 'Vikram Patel',
    role: 'Founder, HealthStack',
    text: 'From day one, Startup Club India treated us like family. The workshops on product-market fit and go-to-market strategy saved us months of trial and error. Now we serve 100K+ users across India.',
    rating: 5,
    emoji: '👨‍⚕️',
  },
];

export function Testimonials() {
  const { ref, inView } = useInView();
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((p) => (p + 1) % testimonials.length);
  const prev = () => setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 bg-gradient-to-b from-orange-50 to-white relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600" />
      
      {/* Background */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-orange-100/50 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-56 h-56 bg-orange-100/50 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-orange-100 text-orange-600 text-sm font-semibold rounded-full mb-4">
            Testimonials
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 leading-tight">
            Loved By
            <span className="text-orange-500"> Founders</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 50, rotateY: 10 }}
                animate={{ opacity: 1, x: 0, rotateY: 0 }}
                exit={{ opacity: 0, x: -50, rotateY: -10 }}
                transition={{ duration: 0.5 }}
                className="perspective-container"
              >
                <div className="card-3d bg-white rounded-3xl p-8 sm:p-12 shadow-2xl shadow-orange-100 border border-orange-100">
                  <Quote className="w-12 h-12 text-orange-200 mb-6" />
                  
                  <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-8 italic">
                    "{testimonials[current].text}"
                  </p>

                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl flex items-center justify-center text-2xl">
                        {testimonials[current].emoji}
                      </div>
                      <div>
                        <p className="font-bold text-gray-900">{testimonials[current].name}</p>
                        <p className="text-sm text-gray-500">{testimonials[current].role}</p>
                      </div>
                    </div>
                    <div className="flex gap-1">
                      {Array.from({ length: testimonials[current].rating }).map((_, j) => (
                        <Star key={j} className="w-5 h-5 text-orange-400 fill-orange-400" />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prev}
                className="w-12 h-12 bg-white rounded-xl border border-orange-200 flex items-center justify-center text-orange-500 hover:bg-orange-50 hover:border-orange-300 transition-all shadow-sm"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      i === current ? 'bg-orange-500 w-8' : 'bg-orange-200 hover:bg-orange-300'
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                className="w-12 h-12 bg-white rounded-xl border border-orange-200 flex items-center justify-center text-orange-500 hover:bg-orange-50 hover:border-orange-300 transition-all shadow-sm"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
