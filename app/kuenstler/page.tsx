import { Metadata } from 'next';
import ArtistShowcase from '../components/ArtistShowcase';

export const metadata: Metadata = {
  title: 'Unsere Künstler - TattooZone Studio',
  description: 'Lerne unser kreatives Team von Tattoo-Künstlern kennen. Jeder mit einem einzigartigen Stil und Expertise.',
};

export default function ArtistsPage() {
  return (
    <section className="pt-36 py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Unsere Künstler</h1>
          <p className="text-xl text-secondary max-w-3xl mx-auto">
            Entdecke das talentierte Team hinter TattooZone Studio in Aachen
          </p>
          <div className="mt-6 max-w-3xl mx-auto">
            <p>
              Jeder unserer Künstler bringt einen einzigartigen Stil und Hintergrund mit. 
              Finde den perfekten Match für dein nächstes Tattoo-Projekt.
            </p>
          </div>
        </div>
        
        <ArtistShowcase />
      </div>
    </section>
  );
}
