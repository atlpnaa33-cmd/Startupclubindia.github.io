import { motion } from 'framer-motion';
import { useInView } from './useInView';
import { Linkedin, Twitter } from 'lucide-react';

const mentors = [
  { name: 'Arun Mehta', role: 'Ex-CEO, TechCorp India', expertise: 'Strategy & Scaling', emoji: '👨‍💼' },
  { name: 'Dr. Kavita Rao', role: 'Partner, VC Fund Alpha', expertise: 'Fundraising & Finance', emoji: '👩‍💼' },
  { name: 'Sanjay Gupta', role: 'Founder, 3 Exits', expertise: 'Product & Growth', emoji: '👨‍🚀' },
  { name: 'Meera Iyer', role: 'CMO, Global SaaS Co.', expertise: 'Marketing & Branding', emoji: '👩‍🎨' },
  { name: 'Rahul Verma', role: 'CTO, Unicorn Startup', expertise: 'Technology & AI', emoji: '👨‍💻' },
  { name: 'Nisha Patel', role: 'Angel Investor', expertise: 'D2C & E-commerce', emoji: '👩‍🏫' },
  { name: 'Deepak Singh', role: 'Serial Entrepreneur', expertise: 'B2B Sales', emoji: '🧑‍💼' },
  { name: 'Sneha Reddy', role: 'Head of Innovation, MNC', expertise: 'Corporate Innovation', emoji: '👩‍🔬' },
];

export function Mentors() {
  const { ref, inView } = useInView();

  return (
    <section className="py-24 bg-white relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-300 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-orange-100 text-orange-600 text-sm font-semibold rounded-full mb-4">
            Our Mentors
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 leading-tight">
            Learn From The
            <span className="text-orange-500"> Best In Industry</span>
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            Our mentors are seasoned entrepreneurs, investors, and industry leaders who have walked the path.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {mentors.map((mentor, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.08 * i, duration: 0.6 }}
              className="perspective-container"
            >
              <div className="card-3d group bg-white rounded-3xl p-6 border border-orange-100 hover:border-orange-200 shadow-sm hover:shadow-xl hover:shadow-orange-100 transition-all duration-500 text-center">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl flex items-center justify-center text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                  {mentor.emoji}
                </div>
                <h3 className="font-bold text-gray-900 group-hover:text-orange-600 transition-colors">{mentor.name}</h3>
                <p className="text-xs text-gray-500 mt-1">{mentor.role}</p>
                <span className="inline-block mt-3 px-3 py-1 bg-orange-50 text-orange-600 text-xs font-medium rounded-lg">
                  {mentor.expertise}
                </span>
                <div className="flex justify-center gap-2 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="w-8 h-8 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center hover:bg-orange-200 transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </button>
                  <button className="w-8 h-8 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center hover:bg-orange-200 transition-colors">
                    <Twitter className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
