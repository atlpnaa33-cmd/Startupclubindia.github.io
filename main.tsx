import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Programs } from './components/Programs';
import { Events } from './components/Events';
import { Impact } from './components/Impact';
import { Mentors } from './components/Mentors';
import { Testimonials } from './components/Testimonials';
import { Partners } from './components/Partners';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Partners />
      <About />
      <Programs />
      <Events />
      <Impact />
      <Mentors />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
