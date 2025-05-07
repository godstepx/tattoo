'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import siteContent from '../content/texts.json';

export default function ArtistShowcase() {
  const { artists } = siteContent;
  const [selectedArtist, setSelectedArtist] = useState(artists[0]);

  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Unsere Künstler</h2>
          <p className="text-xl text-secondary max-w-3xl mx-auto">
            Lerne das kreative Team hinter TattooZone kennen
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {artists.map((artist) => (
            <button
              key={artist.name}
              onClick={() => setSelectedArtist(artist)}
              className={`px-6 py-3 rounded-full transition-all ${
                selectedArtist.name === artist.name
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              {artist.name}
            </button>
          ))}
        </div>

        <motion.div
          key={selectedArtist.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <div className="bg-light rounded-lg p-8 shadow-md">
            <h3 className="text-3xl font-bold mb-3">{selectedArtist.name}</h3>
            <p className="text-accent font-medium mb-6">{selectedArtist.style}</p>
            <p className="mb-4">{selectedArtist.bio}</p>
            <p className="text-secondary"><span className="font-medium">Erfahrung:</span> {selectedArtist.experience}</p>
          </div>
          
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
              <p className="text-2xl font-medium text-center p-6">
                Künstlerportrait<br/>
                <span className="text-lg font-normal text-secondary mt-2 block">
                  Bild von {selectedArtist.name}
                </span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
