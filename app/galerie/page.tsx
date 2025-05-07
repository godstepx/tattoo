import { Metadata } from 'next';
import Gallery from '../components/Gallery';
import siteContent from '../content/texts.json';
import { getArtistGalleryImages } from '../lib/getImages';

export const metadata: Metadata = {
  title: siteContent.gallery.title,
  description: siteContent.gallery.description,
};

export default async function GalleryPage() {
  const artists = await getArtistGalleryImages();
  
  return (
    <section className="pt-36 py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{siteContent.gallery.title}</h1>
          <p className="text-xl text-secondary max-w-3xl mx-auto">{siteContent.gallery.subtitle}</p>
          <div className="mt-6 max-w-3xl mx-auto">
            <p>{siteContent.gallery.description}</p>
          </div>
        </div>
        
        <Gallery artists={artists} />
      </div>
    </section>
  );
}