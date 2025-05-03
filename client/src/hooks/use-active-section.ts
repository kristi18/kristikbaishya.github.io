import { useState, useEffect } from 'react';

// Hook to detect which section is currently active in the viewport
export function useActiveSection() {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    
    const checkActiveSection = () => {
      // Get current scroll position
      const scrollY = window.scrollY;
      
      // Find the section that's currently in view
      sections.forEach((section) => {
        const sectionElement = section as HTMLElement;
        const sectionHeight = sectionElement.offsetHeight;
        const sectionTop = sectionElement.offsetTop - 100; // Offset to trigger slightly before
        const sectionId = sectionElement.getAttribute('id') || '';
        
        if (scrollY > sectionTop && scrollY < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };
    
    // Check which section is active when page loads
    checkActiveSection();
    
    // Check which section is active when user scrolls
    window.addEventListener('scroll', checkActiveSection);
    
    return () => {
      window.removeEventListener('scroll', checkActiveSection);
    };
  }, []);
  
  return activeSection;
}