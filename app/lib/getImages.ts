import fs from 'fs';
import path from 'path';

export async function getGalleryImages() {
  try {
    const imagesDirectory = path.join(process.cwd(), 'public/images');
    
    if (!fs.existsSync(imagesDirectory)) {
      console.warn('Das Verzeichnis public/images existiert nicht!');
      return [
        '/images/tattoo1.jpg',
        '/images/tattoo2.jpg',
        '/images/tattoo3.jpg',
        '/images/tattoo4.jpg',
        '/images/tattoo5.jpg',
        '/images/tattoo6.jpg',
        '/images/tattoo7.jpg',
        '/images/tattoo8.jpg',
        '/images/tattoo9.jpg',
      ];
    }
    
    const fileNames = fs.readdirSync(imagesDirectory);
    
    const imageFiles = fileNames.filter(file => {
      const extension = file.split('.').pop()?.toLowerCase();
      return ['jpg', 'jpeg', 'png', 'webp'].includes(extension || '');
    });
    
    const imagePaths = imageFiles.map(fileName => `/images/${fileName}`);
    
    return imagePaths;
  } catch (error) {
    console.error('Fehler beim Laden der Bilder:', error);
    return [
      '/images/tattoo1.jpg',
      '/images/tattoo2.jpg',
      '/images/tattoo3.jpg',
      '/images/tattoo4.jpg',
      '/images/tattoo5.jpg',
      '/images/tattoo6.jpg',
      '/images/tattoo7.jpg',
      '/images/tattoo8.jpg',
      '/images/tattoo9.jpg',
    ];
  }
}

export interface ArtistGallery {
  name: string;
  images: string[];
}

export async function getArtistGalleryImages(): Promise<ArtistGallery[]> {
  return [
    {
      name: "Fahrettin",
      images: [
        "/images/gallery/anna/tattoo1.jpg",
        "/images/gallery/anna/tattoo2.jpg",
        "/images/gallery/anna/tattoo3.jpg",
      ]
    },
    {
      name: "Serkan",
      images: [
        "/images/gallery/michael/tattoo1.jpg",
        "/images/gallery/michael/tattoo2.jpg",
        "/images/gallery/michael/tattoo3.jpg",
      ]
    },
    {
      name: "Viktor",
      images: [
        "/images/gallery/sarah/tattoo1.jpg",
        "/images/gallery/sarah/tattoo2.jpg",
        "/images/gallery/sarah/tattoo3.jpg",
      ]
    }
  ];
}