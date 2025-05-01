import { useEffect, useRef } from "react";

// A sleek, professional background animation inspired by premium corporate websites
const ParticlesBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
    
    // Set up elegant grid-like network patterns - similar to premium corporate sites
    // Read the actual current theme from HTML element's class
    const htmlElement = document.documentElement;
    const isDarkMode = htmlElement.classList.contains('dark');
    
    const gridPoints: { x: number, y: number, vx: number, vy: number }[] = [];
    const pointsCount = Math.floor(width * height / 35000); // Executive, refined look with fewer points
    const connectDistance = 200; // Longer connections for a more professional corporate look
    const pointSize = 0.8; // Extremely refined, smaller points for executive aesthetic
    
    // More sophisticated professional color palette
    const backgroundColor = isDarkMode ? 'rgba(10, 15, 30, 1)' : 'rgba(248, 250, 252, 1)';
    const pointColor = isDarkMode ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.2)';
    
    // Watch for theme changes and update the animation
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          const newIsDarkMode = htmlElement.classList.contains('dark');
          if (newIsDarkMode !== isDarkMode) {
            // Restart animation with new theme
            window.location.reload();
          }
        }
      });
    });
    
    observer.observe(htmlElement, { attributes: true });
    
    // Initialize grid points
    for (let i = 0; i < pointsCount; i++) {
      gridPoints.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.08, // Very slow, elegant executive movement
        vy: (Math.random() - 0.5) * 0.08  // Creating a sense of sophistication
      });
    }
    
    // Handle window resize
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize);
    
    // Animation function
    const animate = () => {
      ctx.fillStyle = backgroundColor;
      ctx.fillRect(0, 0, width, height);
      
      // Update and draw grid points
      for (let i = 0; i < gridPoints.length; i++) {
        const point = gridPoints[i];
        
        // Elegant, subtle movement
        point.x += point.vx;
        point.y += point.vy;
        
        // Graceful edge handling
        if (point.x < 0 || point.x > width) point.vx = -point.vx;
        if (point.y < 0 || point.y > height) point.vy = -point.vy;
        
        // Draw subtle point
        ctx.beginPath();
        ctx.arc(point.x, point.y, pointSize, 0, Math.PI * 2);
        ctx.fillStyle = pointColor;
        ctx.fill();
        
        // Draw sophisticated connection lines
        for (let j = i + 1; j < gridPoints.length; j++) {
          const point2 = gridPoints[j];
          const dx = point.x - point2.x;
          const dy = point.y - point2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < connectDistance) {
            // Gradient opacity based on distance for refined look
            const opacity = 1 - (distance / connectDistance);
            
            ctx.beginPath();
            ctx.moveTo(point.x, point.y);
            ctx.lineTo(point2.x, point2.y);
            
            // Create subtle gradient effect for a premium look
            const gradient = ctx.createLinearGradient(point.x, point.y, point2.x, point2.y);
            
            if (isDarkMode) {
              // Sophisticated dark mode corporate palette
              gradient.addColorStop(0, `rgba(56, 189, 248, ${opacity * 0.12})`); // Subtle blue
              gradient.addColorStop(1, `rgba(168, 85, 247, ${opacity * 0.12})`); // Subtle purple
            } else {
              // Refined light mode corporate palette
              gradient.addColorStop(0, `rgba(2, 132, 199, ${opacity * 0.08})`); // Subtle blue
              gradient.addColorStop(1, `rgba(147, 51, 234, ${opacity * 0.08})`); // Subtle purple
            }
            
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 0.5; // Thin, elegant lines
            ctx.stroke();
          }
        }
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();
    
    // Clean up
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 -z-10 w-full h-full" 
    />
  );
};

export default ParticlesBackground;
