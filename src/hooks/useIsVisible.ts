import { RefObject, useEffect, useState } from 'react';

export function useIsVisible(ref: RefObject<HTMLElement>): boolean {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // 참조하고 있는 DOM 요소가 없으면 종료
    if (!ref.current) {
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    });

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref, isVisible]);

  return isVisible;
}
