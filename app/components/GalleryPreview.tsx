'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface GalleryPreviewProps {
  title: string;
  subtitle: string;
  buttonText: string;
}

// In einer echten App würden wir die Bilder dynamisch laden
const previewImages = [
  '/images/tattoo1.jpg',
  '/images/tattoo2.jpg',
  '/images/tattoo3.jpg',
  '/images/tattoo4.jpg',
  '/images/tattoo5.jpg',
  '/images/tattoo6.jpg',
];

export default function GalleryPreview({ title, subtitle, buttonText }: GalleryPreviewProps) {
  // Simuliere das Laden der Bilder
  const [images, setImages] = useState<string[]>([]);
  
  useEffect(() => {
    // In echter Implementierung würden wir hier die Bilder aus dem Verzeichnis laden
    setImages(previewImages);
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {title}
          </motion.h2>
          <motion.p 
            className="text-xl text-secondary max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {subtitle}
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {images.slice(0, 6).map((image, index) => (
            <motion.div 
              key={index} 
              className="gallery-item"
              variants={item}
            >
              <img 
                src={image} 
                alt={`Tattoo Kunstwerk ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="gallery-overlay">
                <span className="text-white text-2xl font-bold">
                  Anschauen
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <Link href="/galerie" className="btn btn-outline">
            {buttonText}
          </Link>
        </div>
      </div>
    </section>
  );
}