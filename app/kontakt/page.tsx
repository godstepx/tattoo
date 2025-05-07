import { Metadata } from 'next';
import siteContent from '../content/texts.json';
import { motion } from 'framer-motion';

export const metadata: Metadata = {
  title: siteContent.contact.title,
  description: siteContent.contact.description,
};

export default function ContactPage() {
  return (
    <section className="pt-36 py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{siteContent.contact.title}</h1>
          <p className="text-xl text-secondary max-w-3xl mx-auto">{siteContent.contact.subtitle}</p>
          <div className="mt-6 max-w-3xl mx-auto">
            <p>{siteContent.contact.description}</p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mt-12 bg-white p-6 md:p-10 rounded-lg shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Kontaktinformationen</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold mb-2">{siteContent.contact.phoneLabel}</h4>
                  <p className="text-xl text-accent font-medium">{siteContent.siteInfo.phone}</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold mb-2">{siteContent.contact.emailLabel}</h4>
                  <p>{siteContent.siteInfo.email}</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold mb-2">{siteContent.contact.addressLabel}</h4>
                  <address className="not-italic">
                    {siteContent.siteInfo.address.street}<br />
                    {siteContent.siteInfo.address.city}<br />
                    {siteContent.siteInfo.address.country}
                  </address>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold mb-2">Öffnungszeiten</h4>
                  <ul className="space-y-1">
                    {siteContent.siteInfo.openingHours.map((item, index) => (
                      <li key={index} className="flex justify-between">
                        <span>{item.day}</span>
                        <span className="font-medium">{item.hours}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6">Du hast eine Idee für ein Tattoo?</h3>
              <p className="mb-6">
                Ruf uns an oder schreib uns eine E-Mail und erzähle uns von deiner Idee. 
                Wir freuen uns darauf, mit dir zusammenzuarbeiten und deine Vision auf die Haut zu bringen.
              </p>
              <div className="mt-8">
                <a 
                  href={`tel:${siteContent.siteInfo.phone}`} 
                  className="btn btn-primary w-full text-center"
                >
                  Jetzt anrufen
                </a>
              </div>
              <div className="mt-4">
                <a 
                  href={`mailto:${siteContent.siteInfo.email}`} 
                  className="btn btn-outline w-full text-center"
                >
                  E-Mail schreiben
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}