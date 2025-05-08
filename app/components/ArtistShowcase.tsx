'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import siteContent from '../content/texts.json';
import Lightbox from './Lightbox';

interface Artist {
  name: string;
  style: string;
  bio: string;
  experience: string;
  images: string[];
}

interface ArtistShowcaseProps {
  id?: string;
  initialArtistName?: string | null;
}

export default function ArtistShowcase({ id, initialArtistName }: ArtistShowcaseProps) {
  const { artists }: { artists: Artist[] } = siteContent;
  const [selectedArtist, setSelectedArtist] = useState<Artist>(artists[0]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    if (initialArtistName) {
      const artistToSelect = artists.find((artist) => artist.name === initialArtistName);
      if (artistToSelect) {
        setSelectedArtist(artistToSelect);
      }
    }
  }, [initialArtistName, artists]);

  const openLightbox = (image: string) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const heroImageUrl = selectedArtist.images[0];

  return (
    <section id={id} className="bg-white text-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 py-8">
          {artists.map((artist) => (
            <button
              key={artist.name}
              onClick={() => setSelectedArtist(artist)}
              className={`px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base font-medium rounded-md transition-all duration-300 ease-in-out focus:outline-none
                ${
                  selectedArtist.name === artist.name
                    ? 'bg-primary text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 shadow-sm'
                }`}
            >
              {artist.name}
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={selectedArtist.name}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
        >
          {heroImageUrl && (
            <div className="relative w-full h-[300px] sm:h-[400px] md:h-[450px] max-h-[450px] mb-12">
              <Image
                src={heroImageUrl}
                alt={`Hero image for ${selectedArtist.name}`}
                layout="fill"
                objectFit="cover"
                priority
              />
              <div className="absolute inset-0 bg-black/50"></div>
              
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 z-10">
                <motion.h2
                  className="text-4xl sm:text-5xl md:text-7xl font-bold text-white uppercase tracking-wider"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  {selectedArtist.name}
                </motion.h2>
                <motion.div
                  className="w-20 sm:w-28 h-1 bg-white mt-3 sm:mt-4"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                ></motion.div>
              </div>
            </div>
          )}

          <div className="container mx-auto px-4">
            <div className="mb-12 px-4 text-center max-w-3xl mx-auto">
              <h3 className="text-2xl font-semibold text-primary mb-2">{selectedArtist.style}</h3>
              <p className="text-gray-600 mb-1"><span className="font-medium text-gray-800">Erfahrung:</span> {selectedArtist.experience}</p>
              <p className="text-gray-700 leading-relaxed">{selectedArtist.bio}</p>
            </div>
            
            <motion.div
              className="gallery-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-4 pb-16"
              key={`${selectedArtist.name}-gallery`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, staggerChildren: 0.05 }}
            >
              {selectedArtist.images && selectedArtist.images.length > 0 ? (
                selectedArtist.images.slice(0).map((image, index) => (
                  <motion.div
                    key={`${selectedArtist.name}-img-${index}`}
                    className="gallery-item relative aspect-[3/4] sm:aspect-square cursor-pointer overflow-hidden rounded-lg shadow-lg group border-2 border-gray-200 hover:border-primary transition-all"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    onClick={() => openLightbox(image)}
                  >
                    <Image
                      src={image}
                      alt={`Tattoo von ${selectedArtist.name} ${index + 1}`}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="gallery-overlay absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all flex items-center justify-center">
                      <span className="text-white text-lg opacity-0 group-hover:opacity-100 transition-opacity font-semibold">Anschauen</span>
                    </div>
                  </motion.div>
                ))
              ) : (
                <p className="text-gray-500 col-span-full text-center py-10">Keine Bilder für {selectedArtist.name} verfügbar.</p>
              )}
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      <AnimatePresence>
        <Lightbox image={selectedImage} onClose={closeLightbox} />
      </AnimatePresence>
    </section>
  );
}
