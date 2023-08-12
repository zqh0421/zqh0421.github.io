import useLockBody from '../../hooks/useBodyLock';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Image from './Image'

function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  useLockBody(isLoading);

  useEffect(() => {
    setIsLoading(false);
    document.body.classList.remove('fixed');
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          animate={{ y: '0%' }}
          exit={{ y: '-100%' }}
          transition={{ duration: 1, delay: 0.50 }}
          className="w-screen fixed inset-0 z-50 flex items-center justify-center bg-slate-900 h-screen text-4xl"
        >
          <p>WELCOME</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default LoadingScreen;