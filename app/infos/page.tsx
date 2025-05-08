import { Metadata } from 'next';
import Link from 'next/link';
import siteContent from '../content/texts.json'; // For social media links

export const metadata: Metadata = {
  title: 'Pflegehinweise - ROAR INK',
  description: 'Wichtige Pflegehinweise für dein neues Tattoo von ROAR INK.',
};

export default function InfosPage() {
  return (
    <section className="pt-36 pb-16 bg-white text-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-10 text-center text-primary">Pflegehinweise für dein Tattoo</h1>

          {/* Kurz und knapp Section */}
          <div className="mb-12 p-6 bg-gray-50 rounded-lg shadow">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-900">Kurz und knapp: Pflegehinweis für den gestressten „Nichtleser“</h2>
            
            <h3 className="text-xl font-medium mb-3 text-gray-700">Nach dem Stechen (in der Reihenfolge)</h3>
            <ul className="list-disc list-inside space-y-2 mb-6 pl-4 text-gray-700">
              <li>Nach 2 Stunden Folie runter</li>
              <li>Kurz abwaschen</li>
              <li>1-2 Stunden trocknen lassen</li>
              <li>Dezent eincremen</li>
              <li>Bei Nässen nochmal Folie drauf ansonsten so lassen</li>
              <li>Viel Bewegung nach entfernen der Folie vermeiden</li>
            </ul>

            <h3 className="text-xl font-medium mb-3 text-gray-700">Restliche Zeit</h3>
            <ul className="list-disc list-inside space-y-2 mb-6 pl-4 text-gray-700">
              <li>2x täglich eincremen (morgens & abends) 6 Tage</li>
              <li>Danach Hautstelle langsam entwöhnen – vom vielen Eincremen langsam weniger</li>
            </ul>
          </div>

          <div className="mb-12 space-y-6">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-900 border-t pt-8 mt-8 border-gray-200">Ausführlich: Pflegehinweise für deine Tätowierung</h2>

            <h3 className="text-xl font-medium mb-3 text-gray-700">Direkt nach der Tätowierung</h3>
            <p>Sobald der Tätowiervorgang abgeschlossen wurde, wird eine vor Staub und direktem Kontakt mit Kleidung schützende Folie auf der entsprechenden Hautstelle angebracht. Diese Folie sollte nach <strong>2 Stunden</strong> entfernt werden.</p>
            <p>Direkt danach wird das frische Tattoo vorsichtig mit wenig Wasserdruck bei lauwarmer Temperatur kurz (1-2 Minuten) abgewaschen. Dabei sollte man mit der Hand vorsichtig tupfen und keine weiteren Hilfsmittel wie Seife oder Lotion verwenden.</p>
            <p>Sobald das Tattoo gewaschen wurde kann es entweder kurz an der Luft getrocknet oder mit einem sauberen Handtuch vorsichtig abgetupft werden.</p>
            <p>Wir empfehlen das Tattoo nach dem Waschen <strong>1-2 Stunden</strong> ohne Folie und Salbe an der Luft „trocknen“ zu lassen, dabei sollte es natürlich nicht mit Stoff oder ähnlichem bedeckt sein.</p>
            <p>Wenn die „Trockenzeit“ abgelaufen ist, wird das Tattoo dünn mit Salbe eingecremt. Die Creme/Salbe sollte dabei nicht mehr auf dem Tattoo zu sehen sein und höchstens einen leichten Glanz verursachen. Folgende Cremes/Salben werden von uns empfohlen:</p>
            <ul className="list-disc list-inside space-y-1 my-3 pl-6 text-gray-700">
              <li>Bepanthen Wund- und Heilsalbe</li>
              <li>Lichtenstein Wundsalbe</li>
              <li>Pegasus Tattoo Aftercare</li>
              <li>Bübchen Wundschutzcreme mit Panthenol</li>
            </ul>
            <p>Wichtig ist, dass die gewählte Creme/Salbe Panthenol enthält, was heilungsfördernd wirkt.</p>
            <p>Es können Stunden nach dem Tätowiervorgang gelegentlich Grippeähnliche Symptome wie Kopfschmerzen, erhöhte Temperatur, oder ein Kältegefühl auftreten. Dies ist jedoch nichts Ungewöhnliches und ist von der Größe der gestochenen Fläche abhängig. Daher ist es ungemein wichtig, dass der zu Tätowierende nicht angeschlagen oder krank zum Termin erscheint.</p>
            <p>Sofern das Tattoo noch nässen sollte (Wundflüssigkeit), wird empfohlen die erste Nacht nochmals Folie aufzulegen da man sonst Gefahr laufen könnte, dass die Wundflüssigkeit über Nacht trocknet und buchstäblich am Bettzeug kleben bleibt. (Daher ist die Trockenphase wie oben genannt sehr wichtig.)</p>
            <p>Bei geringem oder keinem Nässen kann vorsichtig die Kleidung angezogen werden. Optimaler Weise sollte danach nicht viel Reibung auf das Tattoo einwirken.</p>

            <h3 className="text-xl font-medium mb-3 mt-6 text-gray-700">Nächster Tag</h3>
            <p>Die Nacht wurde gut überstanden und das neue Tattoo bedarf wieder ein wenig Pflege. Hierzu wird es, wie am Vortag, kurz und knackig gewaschen. (Duschen ist auch kein Problem, hierzu nur bitte darauf achten, dass der Kontakt mit parfümierten Duschgelen oder Lotions vermieden wird.)</p>
            <p>Danach wird es kurz abgetrocknet und dezent eingecremt. Abends wieder eincremen aber nicht waschen. In den folgenden Tagen sollte das Tattoo morgens und abends eingecremt werden, 1 Woche (6 Tage) lang.</p>
            <p>Dabei ist es für die entsprechende Stelle immer schön ein wenig Luft zum Atmen zu bekommen.</p>
            <p>Im Sommer sollte Sonneneinstrahlung 4-6 Wochen vermieden werden, danach nur mit Sunblocker bzw. einem hohen Sonnenschutz, das ist dem Träger überlassen und je nach Hauttyp variierend.</p>
            <p>Nach der Woche intensiver Pflege hat sich die Hautstelle wunderbar an diesen luxuriösen Zustand gewöhnt, daher ist ein „auf einmal nicht mehr eincremen“ nicht empfehlenswert, eine stetige Abgewöhnung ist besser.</p>
          </div>

          <div className="mb-12 p-6 bg-red-50 border border-red-200 rounded-lg">
            <h3 className="text-xl font-medium mb-3 text-red-700">Außerdem gilt 4-6 Wochen KEIN:</h3>
            <ul className="list-disc list-inside space-y-2 pl-4 text-red-600">
              <li>Sonnenstudio</li>
              <li>Sonnenbaden</li>
              <li>Chlorwasser</li>
              <li>Baden/Süßwassersee 3 Wochen nicht</li>
              <li>Meer</li>
              <li>Bungee Jumping</li>
            </ul>
          </div>
          
          <p className="text-center font-semibold text-lg mb-10 text-gray-900">
            Bitte nach dem Stechen innerhalb von 4 Wochen zur Kontrolle ins Atelier kommen.
          </p>

          <div className="text-center mb-4">
            <h3 className="text-xl font-medium mb-3 text-gray-700">Download</h3>
            <a 
              href="/pflegehinweise-tattoo-roar-ink.pdf" // Placeholder PDF link
              download
              className="text-primary hover:text-primary-dark underline font-medium"
            >
              Pflegehinweise für eine Tätowierung (PDF)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
