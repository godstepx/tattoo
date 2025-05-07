import { Metadata } from 'next';
import Hero from '@/app/components/Hero';
import About from '@/app/components/About';
import GalleryPreview from '@/app/components/GalleryPreview';
import ContactInfo from '@/app/components/ContactInfo';
import siteContent from '../app/content/texts.json';

export const metadata: Metadata = {
  title: siteContent.siteInfo.title,
  description: siteContent.siteInfo.description,
};

export default function Home() {
  return (
    <>
      <Hero 
        title={siteContent.home.hero.title}
        subtitle={siteContent.home.hero.subtitle}
        buttonText={siteContent.home.hero.buttonText}
      />
      <About 
        title={siteContent.home.about.title}
        content={siteContent.home.about.content}
      />
      <GalleryPreview 
        title={siteContent.home.gallery.title}
        subtitle={siteContent.home.gallery.subtitle}
        buttonText={siteContent.home.gallery.buttonText}
      />
      <ContactInfo 
        title={siteContent.home.contact.title}
        subtitle={siteContent.home.contact.subtitle}
        content={siteContent.home.contact.content}
        phone={siteContent.siteInfo.phone}
        email={siteContent.siteInfo.email}
        address={siteContent.siteInfo.address}
      />
    </>
  );
}