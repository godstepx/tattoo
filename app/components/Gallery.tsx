'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface ArtistGallery {
  name: string;
  images: string[];
}

interface GalleryProps {
  artists: ArtistGallery[];
}

export default function Gallery({ artists }: GalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeArtist, setActiveArtist] = useState<string | null>(artists.length > 0 ? artists[0].name : null);

  const openLightbox = (image: string) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const changeArtist = (artistName: string) => {
    setActiveArtist(artistName);
  };

  // Find the current artist's images
  const currentArtistImages = artists.find(artist => artist.name === activeArtist)?.images || [];

  return (
    <>
      <div className="artist-selector mb-8 flex justify-center space-x-4">
        {artists.map((artist) => (
          <button
            key={artist.name}
            className={`px-4 py-2 rounded-lg transition-colors ${
              activeArtist === artist.name 
                ? 'bg-primary text-white' 
                : 'bg-gray-200 hover:bg-gray-300'
            }`}
            onClick={() => changeArtist(artist.name)}
          >
            {artist.name}
          </button>
        ))}
      </div>

      <motion.div 
        className="gallery-grid"
        key={activeArtist}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, staggerChildren: 0.1 }}
      >
        {currentArtistImages.map((image, index) => (
          <motion.div
            key={index}
            className="gallery-item"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            onClick={() => openLightbox(image)}
          >
            <img 
              src={image}
              alt={`Tätowierung von ${activeArtist} ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="gallery-overlay">
              <span className="text-white text-2xl">Details anzeigen</span>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <motion.div
              className="relative max-w-4xl max-h-screen"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedImage}
                alt={`Vergrößertes Tattoo von ${activeArtist}`}
                className="max-w-full max-h-[90vh] rounded-lg object-contain"
              />
              <button
                className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70 transition-all"
                onClick={closeLightbox}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}