import { Metadata } from 'next';
import siteContent from '../content/texts.json';

export const metadata: Metadata = {
  title: 'Impressum',
  description: `Impressum von ${siteContent.siteInfo.title}`,
};

export default function ImpressumPage() {
  return (
    <section className="pt-36 py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Impressum</h1>
        </div>
        <div className="max-w-3xl mx-auto space-y-4 text-lg">
          <p><strong>{siteContent.siteInfo.title}</strong></p>
          <address className="not-italic">
            {siteContent.siteInfo.address.street}<br/>
            {siteContent.siteInfo.address.city}<br/>
            {siteContent.siteInfo.address.country}
          </address>
          <p>Telefon: <a href={`tel:${siteContent.siteInfo.phone}`} className="text-accent hover:underline">{siteContent.siteInfo.phone}</a></p>
          <p>E-Mail: <a href={`mailto:${siteContent.siteInfo.email}`} className="text-accent hover:underline">{siteContent.siteInfo.email}</a></p>
          <p>Umsatzsteuer‐ID: DE123456789</p>
          <p>Verantwortlich gemäß § 55 RStV: {siteContent.siteInfo.title}, {siteContent.siteInfo.address.city}</p>
        </div>
      </div>
    </section>
  );
}
