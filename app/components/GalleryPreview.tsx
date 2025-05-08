'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Lightbox from './Lightbox';

interface GalleryPreviewProps {
  title: string;
  subtitle: string;
  buttonText: string;
}

// In einer echten App würden wir die Bilder dynamisch laden
const previewImages = [
  '/phillip_1.jpg',
  '/phillip_2.jpg',
  '/phillip_3.jpg',
  '/freddy_1.jpg',
  '/freddy_2.jpg',
  '/freddy_3.jpg',
];

export default function GalleryPreview({ title, subtitle, buttonText }: GalleryPreviewProps) {
  const [images, setImages] = useState<string[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    setImages(previewImages);
  }, []);

  const openLightbox = (image: string) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

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
        <div className="text-center mb-12">
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
              className="gallery-item cursor-pointer"
              variants={item}
              onClick={() => openLightbox(image)}
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

        {/* Lightbox */}
        <Lightbox image={selectedImage} onClose={closeLightbox} />

        <div className="text-center mt-12">
          <Link href="/kuenstler" className="btn btn-outline">
            {buttonText}
          </Link>
        </div>
      </div>
    </section>
  );
}