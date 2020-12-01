import { useEffect } from 'react';

export const useIntersection = (ref, selector, handler, options) => {
  useEffect(() => {
    const observers = [];

    if (ref.current && typeof IntersectionObserver === 'function') {
      const handleIntersect = idx => entries => {
        handler(entries[0], idx);
      };

      ref.current.querySelectorAll(selector).forEach((node, idx) => {
        const observer = new IntersectionObserver(
          handleIntersect(idx),
          options
        );
        observer.observe(node);
        observers.push(observer);
      });

      return () => {
        observers.forEach(observer => {
          observer.disconnect();
        });
      };
    }
    return () => {};
  }, [ref.current, options.threshold, options.rootMargin]);
};
