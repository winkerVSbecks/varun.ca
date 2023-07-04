import { useEffect, useState } from 'react';

export const useInView = (ref, handler, options) => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (ref.current && typeof IntersectionObserver === 'function') {
      const handleIntersect = (entries) => {
        setInView(entries[0].isIntersecting);
      };

      const observer = new IntersectionObserver(handleIntersect, options);
      observer.observe(ref.current);

      return () => {
        observer.disconnect();
      };
    }
    return () => {};
  }, [handler, options, ref]);

  return inView;
};
