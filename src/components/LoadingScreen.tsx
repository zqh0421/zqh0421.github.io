import useLockBody from '../hooks/useBodyLock';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Image from './Image'
import gear from '../assets/gear.svg'

function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [showRefresh, setShowRefresh] = useState(false);

  useLockBody(isLoading);
  
  useEffect(() => {
    const showRefreshTimer = setTimeout(() => {
      setShowRefresh(true);
    }, 5000);

    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
      document.body.classList.remove('fixed');
    }, 1000);

    return () => {
      clearTimeout(showRefreshTimer);
      clearTimeout(loadingTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          animate={{ y: '0%' }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="w-screen fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-900 h-screen text-4xl"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="mb-4"
          >
            <Image
              metadata={gear}
              alt="Loading Gear"
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className='text-sm'
          >
            {showRefresh ? "Please refresh if loading for too long." : "Loading..."}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default LoadingScreen;