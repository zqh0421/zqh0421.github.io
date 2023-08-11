import useLockBody from '../hooks/useBodyLock';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

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
          className="w-screen fixed inset-0 z-50 flex items-center justify-center bg-neutrals-900"
        >
          <div className='bg-red-100 w-screen h-screen flex items-center justify-center text-4xl'>WELCOME!</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default LoadingScreen;