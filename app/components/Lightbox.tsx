'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface LightboxProps {
  image: string | null;
  onClose: () => void;
}

export default function Lightbox({ image, onClose }: LightboxProps) {
  if (!image) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-95 z-[100] flex items-center justify-center p-2 sm:p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="relative w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl max-h-[95vh]"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          onClick={(e) => e.stopPropagation()}
        >
          <Image
            src={image}
            alt="Vergrößertes Bild"
            layout="responsive"
            width={16}
            height={9}
            objectFit="contain"
            className="rounded-lg shadow-2xl max-h-[90vh]"
          />
          <button
            className="absolute top-2 right-2 sm:top-4 sm:right-4 text-gray-300 bg-black bg-opacity-60 rounded-full p-2 sm:p-3 hover:bg-opacity-80 hover:text-white transition-all z-[101]"
            onClick={onClose}
            aria-label="Close lightbox"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
