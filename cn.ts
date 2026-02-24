@import "tailwindcss";

@theme {
  --color-orange-50: #fff7ed;
  --color-orange-100: #ffedd5;
  --color-orange-200: #fed7aa;
  --color-orange-300: #fdba74;
  --color-orange-400: #fb923c;
  --color-orange-500: #f97316;
  --color-orange-600: #ea580c;
  --color-orange-700: #c2410c;
  --color-orange-800: #9a3412;
  --color-orange-900: #7c2d12;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  overflow-x: hidden;
}

/* 3D perspective container */
.perspective-container {
  perspective: 1200px;
}

/* Floating animation */
@keyframes float {
  0%, 100% { transform: translateY(0px) rotateX(5deg) rotateY(-5deg); }
  50% { transform: translateY(-20px) rotateX(-5deg) rotateY(5deg); }
}

@keyframes floatSlow {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-15px); }
}

@keyframes floatReverse {
  0%, 100% { transform: translateY(-15px); }
  50% { transform: translateY(0px); }
}

@keyframes spin3d {
  0% { transform: rotateX(0deg) rotateY(0deg); }
  100% { transform: rotateX(360deg) rotateY(360deg); }
}

@keyframes pulse-glow {
  0%, 100% { box-shadow: 0 0 20px rgba(249, 115, 22, 0.3); }
  50% { box-shadow: 0 0 40px rgba(249, 115, 22, 0.6); }
}

@keyframes gradient-shift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

@keyframes orbit {
  0% { transform: rotate(0deg) translateX(80px) rotate(0deg); }
  100% { transform: rotate(360deg) translateX(80px) rotate(-360deg); }
}

@keyframes orbit2 {
  0% { transform: rotate(120deg) translateX(120px) rotate(-120deg); }
  100% { transform: rotate(480deg) translateX(120px) rotate(-480deg); }
}

@keyframes orbit3 {
  0% { transform: rotate(240deg) translateX(60px) rotate(-240deg); }
  100% { transform: rotate(600deg) translateX(60px) rotate(-600deg); }
}

.animate-float { animation: float 6s ease-in-out infinite; }
.animate-float-slow { animation: floatSlow 8s ease-in-out infinite; }
.animate-float-reverse { animation: floatReverse 7s ease-in-out infinite; }
.animate-spin-3d { animation: spin3d 20s linear infinite; }
.animate-pulse-glow { animation: pulse-glow 3s ease-in-out infinite; }
.animate-gradient { 
  background-size: 200% 200%;
  animation: gradient-shift 4s ease infinite; 
}
.animate-orbit { animation: orbit 10s linear infinite; }
.animate-orbit2 { animation: orbit2 15s linear infinite; }
.animate-orbit3 { animation: orbit3 8s linear infinite; }

/* 3D Card effect */
.card-3d {
  transform-style: preserve-3d;
  transition: transform 0.5s ease;
}

.card-3d:hover {
  transform: rotateY(5deg) rotateX(5deg) translateZ(20px);
}

.card-3d-reverse:hover {
  transform: rotateY(-5deg) rotateX(-5deg) translateZ(20px);
}

/* Glass morphism */
.glass {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.glass-dark {
  background: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #fff7ed;
}

::-webkit-scrollbar-thumb {
  background: #f97316;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #ea580c;
}

/* 3D text shadow */
.text-3d {
  text-shadow: 
    1px 1px 0 rgba(249, 115, 22, 0.3),
    2px 2px 0 rgba(249, 115, 22, 0.2),
    3px 3px 0 rgba(249, 115, 22, 0.1);
}

/* Noise texture overlay */
.noise-bg {
  position: relative;
}

.noise-bg::after {
  content: '';
  position: absolute;
  inset: 0;
  opacity: 0.03;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
  pointer-events: none;
}
