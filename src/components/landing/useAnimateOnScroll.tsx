import { useEffect, useRef, useState } from 'react';

const useAnimateOnScroll = (initialClasses: string, animateClasses: string) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );

    // Store ref.current in a local variable to ensure it's stable
    const currentRef = ref.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      // Clean up by unobserving the element stored in the local variable
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  const classNames = isVisible ? animateClasses : initialClasses;

  return { ref, classNames };
};

export default useAnimateOnScroll;
