'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

interface ContactInfoProps {
  title: string;
  subtitle: string;
  content: string;
  phone: string;
  email: string;
  address: {
    street: string;
    city: string;
    country: string;
  };
}

export default function ContactInfo({ title, subtitle, content, phone, email, address }: ContactInfoProps) {
  return (
    <section className="py-24 bg-light">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">{title}</h2>
            <p className="text-xl text-secondary mb-6">{subtitle}</p>
            <p className="mb-8">{content}</p>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <div className="mr-4 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <span className="block text-lg font-medium">Telefon</span>
                  <a href={`tel:${phone}`} className="text-accent hover:underline">{phone}</a>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="mr-4 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <span className="block text-lg font-medium">E-Mail</span>
                  <a href={`mailto:${email}`} className="text-accent hover:underline">{email}</a>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="mr-4 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <span className="block text-lg font-medium">Adresse</span>
                  <address className="not-italic">
                    {address.street}<br />
                    {address.city}<br />
                    {address.country}
                  </address>
                </div>
              </li>
            </ul>
            
            <div className="mt-8">
              <Link href="/kontakt" className="btn btn-primary">
                Kontaktseite
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full h-full"
          >
            <div className="w-full h-full min-h-[400px] rounded-lg overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2498.3396715622052!2d6.80694377690723!3d51.23123893083979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b8ca12d413de5d%3A0x658f76a667975336!2sRoar%20Ink%20Tattoo!5e0!3m2!1sde!2sde!4v1746701925364!5m2!1sde!2sde" 
                width="100%" 
                height="100%" 
                style={{ border: 0, minHeight: '400px' }} 
                allowFullScreen={true} 
                loading="lazy" 
                aria-hidden="false" 
                title="Standort auf Google Maps"
              />
            </div>
          </motion.div>
        </div>

        <div className="mt-12 bg-gray-100 p-6 rounded-lg shadow-md">
          <p>
            Um einen <strong>Termin für dein Tattoo</strong> zu vereinbaren, schicke uns am besten direkt eine E-Mail an{' '}
            <a href="mailto:booking.roarink@gmail.com" className="text-accent hover:underline">
              booking.roarink@gmail.com
            </a>{' '}
            mit deinen konkreten Ideen für das Motiv, gerne auch mit Fotoanhängen. Wir beraten Dich im Anschluss mit einem{' '}
            <strong>Beratungstermin</strong> ausführlich. Der Preis hängt von der Größe und dem Aufwand ab, die wir im Beratungsgespräch
            einschätzen können.
          </p>
          <p className="mt-4">
            Bei Terminvereinbarung benötigen wir eine Anzahlung in Höhe von <strong>50,00 €</strong>.
          </p>
        </div>
      </div>
    </section>
  );
}