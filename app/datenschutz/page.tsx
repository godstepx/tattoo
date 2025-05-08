import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Datenschutz',
  description: 'Informationen zum Datenschutz',
};

export default function DatenschutzPage() {
  return (
    <section className="pt-36 py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Datenschutz</h1>
        </div>
        <div className="max-w-3xl mx-auto space-y-6 text-lg">
          <p>Wir freuen uns über Ihr Interesse an unserer Webseite. Der Schutz Ihrer Privatsphäre ist für uns sehr wichtig.</p>
          <h2 className="text-2xl font-semibold">1. Erhebung und Speicherung personenbezogener Daten</h2>
          <p>Beim Besuch der Website werden automatisch Informationen in Server‐Log‐Files gespeichert, die Ihr Browser übermittelt.</p>
          <h2 className="text-2xl font-semibold">2. Nutzung und Weitergabe personenbezogener Daten</h2>
          <p>Ihre Daten verwenden wir nur zur Beantwortung Ihrer Anfragen oder zur Abwicklung Ihrer Aufträge.</p>
          <h2 className="text-2xl font-semibold">3. Cookies</h2>
          <p>Unsere Website verwendet Cookies, um nutzerfreundlicher zu sein.</p>
          <h2 className="text-2xl font-semibold">4. Ihre Rechte</h2>
          <p>Sie haben das Recht auf Auskunft, Berichtigung oder Löschung Ihrer gespeicherten Daten.</p>
          <p>Bei Fragen wenden Sie sich bitte an <a href="mailto:privacy@your-domain.com" className="text-accent hover:underline">privacy@your-domain.com</a>.</p>
        </div>
      </div>
    </section>
  );
}
