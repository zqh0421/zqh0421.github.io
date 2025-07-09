import { useEffect, useState, useCallback } from 'react';

function useMouseMove() {
  const [mouseMove, setMouseMove] = useState({
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    screenX: 0,
    screenY: 0
  });

  const updateMouseMove = useCallback((e: MouseEvent) => {
    // 使用 requestAnimationFrame 来节流
    requestAnimationFrame(() => {
      setMouseMove({
        clientX: e.clientX,
        clientY: e.clientY,
        pageX: e.pageX,
        pageY: e.pageY,
        screenX: e.screenX,
        screenY: e.screenY
      });
    });
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', updateMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', updateMouseMove);
  }, [updateMouseMove]);

  return mouseMove;
}

export default useMouseMove;