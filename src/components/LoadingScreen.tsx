import useLockBody from '../hooks/useBodyLock';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Image from './Image'
import gear from '../assets/gear.svg'

function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [showRefresh, setShowRefresh] = useState(false);

  useLockBody(isLoading);
  const showRefreshTimer = setTimeout(() => {
    setShowRefresh(true); // 超过五秒后显示刷新按钮
  }, 500); // 设置延时为5000毫秒（5秒


  useEffect(() => {
    clearTimeout(showRefreshTimer);
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
          className="w-screen fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-900 h-screen text-4xl"
        >
          <Image
            client:load
            metadata={gear}
            alt="Loading Gear"
          />
          <div className='text-sm'>Please refresh if loading for too long.</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default LoadingScreen;