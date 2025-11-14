import { useState, useEffect, useCallback, useRef } from 'react';

function debounce<T extends (...args: any[]) => void>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout> | null = null;

  return (...args: Parameters<T>) => {
    if (timeout !== null) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => func(...args), wait);
  };
}

export function useScrollTracking() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const sectionsRef = useRef(['home', 'projects', 'contact']);

  const handleScroll = useCallback(() => {
    if (typeof window === 'undefined' || typeof document === 'undefined') return;

    setScrolled(window.scrollY > 50);

    const current = sectionsRef.current.find((section) => {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      }
      return false;
    });

    if (current) setActiveSection(current);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const debouncedScroll = debounce(handleScroll, 100);

    window.addEventListener('scroll', debouncedScroll, { passive: true } as AddEventListenerOptions);

    // Initial check after mount
    debouncedScroll();

    return () => {
      window.removeEventListener('scroll', debouncedScroll as EventListener);
    };
  }, [handleScroll]);

  return { scrolled, activeSection };
}
