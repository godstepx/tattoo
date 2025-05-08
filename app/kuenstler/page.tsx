'use client'; // Make this a client component to use hooks

import { Metadata } from 'next';
import ArtistShowcase from '../components/ArtistShowcase';
import { useSearchParams } from 'next/navigation'; // Import useSearchParams
import { Suspense } from 'react'; // Import Suspense

function ArtistPageContent() {
  const searchParams = useSearchParams();
  const artistName = searchParams.get('artist');

  return (
    <section className="pt-36 pb-16 bg-white">
      <ArtistShowcase initialArtistName={artistName} />
    </section>
  );
}

export default function ArtistsPage() {
  return (
    <Suspense fallback={<div>Loading artist...</div>}>
      <ArtistPageContent />
    </Suspense>
  );
}
