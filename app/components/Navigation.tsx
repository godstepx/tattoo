'use client';
import Link from 'next/link';
import Image from 'next/image';
import { FaInstagram, FaFacebookF } from 'react-icons/fa';
import { useState } from 'react';
import siteContent from '../content/texts.json';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 w-full py-4 bg-transparent z-20">
      <div className="container mx-auto flex items-center justify-between">
        <div className="hidden md:flex flex-1 justify-start space-x-8">
          <Link href="/" className="text-black hover:text-secondary transition-colors">
            HOME
          </Link>
          <Link href="/kuenstler" className="text-black hover:text-secondary transition-colors">
            KÜNSTLER
          </Link>
        </div>

        <div className="flex-shrink-0">
          <Link href="/">
            <div className="p-2">
              <Image 
                src="/roar-ink-logo.png" 
                alt="Roar Ink Logo" 
                width={80} 
                height={80}
                className="object-contain"
              />
            </div>
          </Link>
        </div>

        <div className="hidden md:flex flex-1 justify-end items-center space-x-8">
          <Link href="/kontakt" className="text-black hover:text-secondary transition-colors">
            KONTAKT
          </Link>
          <Link href="/infos" className="text-black hover:text-secondary transition-colors">
            INFOS
          </Link>
          <div className="flex space-x-4">
            <Link href={siteContent.siteInfo.socialMedia.instagram} className="text-black hover:text-secondary" aria-label="Instagram">
              <FaInstagram size={20} />
            </Link>
            <Link href={siteContent.siteInfo.socialMedia.facebook} className="text-black hover:text-secondary" aria-label="Facebook">
              <FaFacebookF size={20} />
            </Link>
          </div>
        </div>

        <button 
          className="md:hidden text-black focus:outline-none" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 w-full py-4">
          <div className="flex flex-col items-center space-y-4">
            <Link href="/" className="text-black hover:text-secondary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
              HOME
            </Link>
            <Link href="/kuenstler" className="text-black hover:text-secondary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
              KÜNSTLER
            </Link>
            <Link href="/kontakt" className="text-black hover:text-secondary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
              KONTAKT
            </Link>
            <Link href="/infos" className="text-black hover:text-secondary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
              INFOS
            </Link>
            <div className="flex space-x-4">
              <Link href={siteContent.siteInfo.socialMedia.instagram} className="text-black hover:text-secondary" aria-label="Instagram">
                <FaInstagram size={20} />
              </Link>
              <Link href={siteContent.siteInfo.socialMedia.facebook} className="text-black hover:text-secondary" aria-label="Facebook">
                <FaFacebookF size={20} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
