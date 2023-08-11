import { useEffect, useState } from 'react';

function useMouseMove() {
  const [mouseMove, setMouseMove] = useState({
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    screenX: 0,
    screenY: 0
  });

  function updateMouseMove(e: MouseEvent) {
    setMouseMove({
      clientX: e.clientX,
      clientY: e.clientY,
      pageX: e.pageX,
      pageY: e.pageY,
      screenX: e.screenX,
      screenY: e.screenY
    });
  }

  useEffect(() => {
    window.addEventListener('mousemove', (e) => updateMouseMove(e as MouseEvent));
    return () => window.removeEventListener('mousemove', updateMouseMove);
  }, []);

  return mouseMove;
}

export default useMouseMove;