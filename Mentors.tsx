import { motion } from 'framer-motion';
import { useInView } from './useInView';
import { Calendar, MapPin, Clock, Users, ArrowRight } from 'lucide-react';

const events = [
  {
    title: 'Startup Summit 2025',
    date: 'March 15-16, 2025',
    time: '9:00 AM - 6:00 PM',
    location: 'Bangalore, India',
    attendees: '2000+',
    type: 'Summit',
    description: 'India\'s biggest startup gathering with keynotes from unicorn founders, investor panels, and networking.',
    image: '🏔️',
  },
  {
    title: 'Pitch Night - Delhi',
    date: 'February 28, 2025',
    time: '5:00 PM - 9:00 PM',
    location: 'New Delhi, India',
    attendees: '300+',
    type: 'Pitch Event',
    description: 'Present your startup to a panel of top angel investors and VCs. Win funding on the spot!',
    image: '🎤',
  },
  {
    title: 'AI & Startup Workshop',
    date: 'April 5, 2025',
    time: '10:00 AM - 4:00 PM',
    location: 'Mumbai, India',
    attendees: '500+',
    type: 'Workshop',
    description: 'Hands-on workshop on leveraging AI for your startup. Learn from industry leaders and practitioners.',
    image: '🤖',
  },
  {
    title: 'Founder Networking Mixer',
    date: 'Every Last Friday',
    time: '6:00 PM - 9:00 PM',
    location: 'Pan-India (20 cities)',
    attendees: '100+',
    type: 'Networking',
    description: 'Casual monthly mixer to connect with fellow founders. Share stories, challenges, and celebrate wins.',
    image: '🤝',
  },
];

export function Events() {
  const { ref, inView } = useInView();

  return (
    <section id="events" className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden" ref={ref}>
      {/* Background elements */}
      <div className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(249,115,22,0.3) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}
      />
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-orange-600/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-orange-500/20 text-orange-400 text-sm font-semibold rounded-full mb-4 border border-orange-500/30">
            Upcoming Events
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
            Where Ideas
            <span className="text-orange-400"> Come Alive</span>
          </h2>
          <p className="mt-4 text-gray-400 text-lg">
            Join our events to learn, connect, pitch, and grow. Something exciting happening every week!
          </p>
        </motion.div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {events.map((event, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40, rotateX: 10 }}
              animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ delay: 0.15 * i, duration: 0.7 }}
              className="perspective-container"
            >
              <div className="card-3d group bg-white/5 backdrop-blur-lg rounded-3xl p-6 border border-white/10 hover:border-orange-500/30 hover:bg-white/10 transition-all duration-500">
                <div className="flex gap-5">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-2xl flex items-center justify-center text-3xl border border-orange-500/20 group-hover:scale-110 transition-transform duration-300">
                      {event.image}
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2.5 py-0.5 bg-orange-500/20 text-orange-400 text-xs font-semibold rounded-md">
                        {event.type}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-orange-400 transition-colors mb-2">
                      {event.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">{event.description}</p>

                    <div className="grid grid-cols-2 gap-2 text-xs text-gray-400">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-orange-500" />
                        {event.date}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-orange-500" />
                        {event.time}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-orange-500" />
                        {event.location}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5 text-orange-500" />
                        {event.attendees} Expected
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-white/5">
                  <a href="#contact" className="inline-flex items-center gap-2 text-sm font-semibold text-orange-400 hover:text-orange-300 group-hover:gap-3 transition-all">
                    Register Now <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
