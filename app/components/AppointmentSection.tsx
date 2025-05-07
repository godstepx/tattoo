import Link from 'next/link';

interface AppointmentSectionProps {
  title: string;
  content: string;
  email: string;
  buttonText: string;
}

const AppointmentSection = ({ title, content, email, buttonText }: AppointmentSectionProps) => {
  return (
    <section className="bg-primary text-light py-16">
      <div className="container mx-auto text-center max-w-3xl px-4">
        <h2 className="text-2xl uppercase tracking-widest mb-8">{title}</h2>
        <p className="mb-4">
          Um einen Termin für dein Tattoo zu vereinbaren schicke uns am besten direkt eine E-Mail an <a href={`mailto:${email}`} className="underline hover:text-secondary transition-colors">{email}</a> mit deinen konkreten Ideen für das Motiv, gerne auch mit Fotoanhängen.
        </p>
        <p className="mb-8">
          Wir beraten Dich im Anschluss ausführlich. Der Preis hängt von der Größe und dem Aufwand ab, die wir im Beratungsgespräch einschätzen können.
        </p>
        
        <Link href="/anfahrt">
          <button className="border border-light px-8 py-3 text-sm uppercase tracking-widest hover:bg-light hover:text-primary transition-colors">
            {buttonText}
          </button>
        </Link>
      </div>
    </section>
  );
};

export default AppointmentSection;
