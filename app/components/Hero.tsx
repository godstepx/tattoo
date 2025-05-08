'use client';

import Link from 'next/link';
import React from 'react';

interface HeroProps {
  title: string;
  subtitle?: string;
  buttonText: string;
  buttonLink: string;
}

const Hero = ({ title, subtitle, buttonText, buttonLink }: HeroProps) => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (buttonLink.startsWith('#')) {
      e.preventDefault();
      const targetId = buttonLink.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="relative min-h-[100vh] flex flex-col items-center justify-center text-center bg-light overflow-hidden">
      <video 
        className="absolute inset-0 w-full h-full object-cover opacity-100 " 
        src="/hero-video.mp4" 
        autoPlay 
        loop 
        muted 
        playsInline
      ></video>
      
      <div className="relative z-10 max-w-2xl px-4">
        <p className="text-sm uppercase tracking-widest text-secondary mb-3">
          {subtitle}
        </p>
        <h1 className="text-7xl sm:text-8xl md:text-9xl font-light tracking-wide mb-16">
          {title}
        </h1>
        <Link href={buttonLink} onClick={handleScroll}>
          <button className="border border-primary px-8 py-3 text-sm uppercase tracking-widest hover:bg-primary hover:text-light transition-colors">
            {buttonText}
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;