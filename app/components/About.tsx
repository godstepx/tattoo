'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface Artist {
  name: string;
  style: string;
  bio: string;
}

interface AboutProps {
  id?: string;
  title: string;
  content: string;
  artists: Artist[]; 
}

export default function About({ id, title, content, artists }: AboutProps) {
  return (
    <section id={id} className="py-24 bg-light">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="w-full aspect-square overflow-hidden rounded-lg">
              <img
                src="/placeholder-studio.jpg"
                alt="Tattoo Studio Interior"
                className="w-full h-full object-cover"
              />
            </div>
           
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">{title}</h2>
            <div className="prose prose-lg mb-8">
              {content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-10">
              <h3 className="text-3xl font-semibold mb-6 text-gray-800">Unsere Künstler</h3>
              {artists.map((artist) => (
                <div key={artist.name} className="mb-6 p-4 border border-gray-200 rounded-lg shadow-sm bg-white">
                  <h4 className="text-2xl font-bold text-primary mb-2">{artist.name}</h4>
                  <p className="text-md text-gray-600 mb-1 italic">{artist.style}</p>
                  <p className="text-gray-700 mb-3 text-sm">
                    {artist.bio.substring(0, 150)}{artist.bio.length > 150 ? '...' : ''}
                  </p>
                  <Link 
                    href={`/kuenstler?artist=${encodeURIComponent(artist.name)}`} 
                    className="inline-block text-primary hover:text-accent font-medium transition-colors"
                  >
                    {artist.name}'s Arbeit &rarr;
                  </Link>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}