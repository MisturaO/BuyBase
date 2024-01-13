import { useState, useEffect } from 'react';

export default function useScrollHeight() {
  const [scrollHeight, setScollHeight] = useState<number>(0);

  useEffect(() => {
    const updateScrollHeight = () => {
      console.log(window.scrollY);
      setScollHeight(window.scrollY);
    };
    window.addEventListener('scroll', updateScrollHeight);
    return () => window.removeEventListener('scroll', updateScrollHeight);
  }, [scrollHeight]);

  return [scrollHeight];
}
