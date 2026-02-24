import { motion } from 'framer-motion';
import { useInView } from './useInView';
import { GraduationCap, Rocket, DollarSign, Users, ArrowUpRight, Briefcase, Award } from 'lucide-react';

const programs = [
  {
    icon: GraduationCap,
    title: 'Incubation Program',
    desc: 'A 6-month intensive program for early-stage startups. Get mentorship, workspace, and seed funding support to validate and scale your idea.',
    features: ['Mentor Access', 'Co-working Space', 'Seed Funding'],
    color: 'from-orange-500 to-red-500',
    shadow: 'shadow-orange-200',
  },
  {
    icon: Rocket,
    title: 'Accelerator Program',
    desc: 'Fast-track your growth with our 3-month accelerator. Connect with VCs, refine your pitch, and prepare for fundraising.',
    features: ['VC Network', 'Pitch Training', 'Market Access'],
    color: 'from-orange-400 to-orange-600',
    shadow: 'shadow-orange-200',
  },
  {
    icon: DollarSign,
    title: 'Funding Connect',
    desc: 'Direct access to angel investors, VCs, and government grants. We help you find the right funding partner for your stage.',
    features: ['Angel Investors', 'VC Meetings', 'Govt Grants'],
    color: 'from-orange-600 to-orange-800',
    shadow: 'shadow-orange-300',
  },
  {
    icon: Users,
    title: 'Founder Circle',
    desc: 'Exclusive peer-to-peer network of 200+ founders. Share experiences, collaborate, and learn from those who have been there.',
    features: ['Peer Network', 'Masterclasses', 'Retreats'],
    color: 'from-orange-500 to-amber-500',
    shadow: 'shadow-amber-200',
  },
  {
    icon: Briefcase,
    title: 'Corporate Connect',
    desc: 'Bridge the gap between startups and corporates. Pilot programs, enterprise sales support, and strategic partnerships.',
    features: ['Pilot Programs', 'Enterprise Sales', 'Partnerships'],
    color: 'from-orange-600 to-red-600',
    shadow: 'shadow-red-200',
  },
  {
    icon: Award,
    title: 'Startup Awards',
    desc: 'Annual recognition of outstanding startups across categories. Winners get funding, media coverage, and investor connects.',
    features: ['Recognition', 'Prize Money', 'Media Coverage'],
    color: 'from-amber-500 to-orange-600',
    shadow: 'shadow-amber-200',
  },
];

export function Programs() {
  const { ref, inView } = useInView();

  return (
    <section id="programs" className="py-24 bg-gradient-to-b from-white via-orange-50/30 to-white relative overflow-hidden" ref={ref}>
      {/* Background 3D decoration */}
      <div className="absolute top-20 right-20 w-40 h-40 border-2 border-orange-100 rounded-3xl animate-spin-3d opacity-30" />
      <div className="absolute bottom-20 left-20 w-32 h-32 border-2 border-orange-200 rounded-full animate-float opacity-20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-orange-100 text-orange-600 text-sm font-semibold rounded-full mb-4">
            Our Programs
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 leading-tight">
            Programs That
            <span className="text-orange-500"> Accelerate Growth</span>
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            From ideation to IPO, we have programs designed for every stage of your startup journey.
          </p>
        </motion.div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * i, duration: 0.6 }}
              className="perspective-container"
            >
              <div className={`card-3d group bg-white rounded-3xl p-7 border border-orange-100 hover:border-orange-200 shadow-lg ${program.shadow} hover:shadow-xl transition-all duration-500 h-full`}>
                <div className={`w-14 h-14 bg-gradient-to-br ${program.color} rounded-2xl flex items-center justify-center mb-5 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                  <program.icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                  {program.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{program.desc}</p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {program.features.map((f, j) => (
                    <span
                      key={j}
                      className="px-3 py-1 bg-orange-50 text-orange-600 text-xs font-medium rounded-lg border border-orange-100"
                    >
                      {f}
                    </span>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-orange-500 hover:text-orange-600 group-hover:gap-2 transition-all"
                >
                  Learn More
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
