import { useMemo } from "react";

// Using a custom-built particle background instead of tsparticles to avoid compatibility issues
const ParticlesBackground = () => {
  // Pre-compute particles to avoid re-renders
  const particles = useMemo(() => {
    return Array.from({ length: 50 }).map((_, i) => {
      const size = Math.random() * 15 + 3;
      const colors = ['#3B82F6', '#8B5CF6', '#10B981', '#6366F1', '#EC4899'];
      
      return {
        id: i,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        size: `${size}px`,
        animationDuration: `${Math.random() * 20 + 10}s`,
        animationDelay: `${Math.random() * 5}s`,
        backgroundColor: colors[Math.floor(Math.random() * colors.length)],
        opacity: Math.random() * 0.5 + 0.1
      };
    });
  }, []);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div 
        className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-950"
        style={{ opacity: 0.8 }}
      ></div>
      <div className="particles-fallback">
        {particles.map((particle) => (
          <div 
            key={particle.id} 
            className="particle"
            style={{
              top: particle.top,
              left: particle.left,
              width: particle.size,
              height: particle.size,
              opacity: particle.opacity,
              animationDuration: particle.animationDuration,
              animationDelay: particle.animationDelay,
              backgroundColor: particle.backgroundColor
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ParticlesBackground;
