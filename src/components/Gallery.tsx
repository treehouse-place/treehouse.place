import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Gallery.css';

// Dynamically import all images from term folders inside the public gallery directory
const imageModules = import.meta.glob('/public/gallery/*/*.{jpg,JPG,jpeg,png,webp}');

// Process paths into a record mapping term -> photo public urls
const galleryData = Object.keys(imageModules).reduce((acc, path) => {
  const match = path.match(/\/public\/gallery\/([^/]+)\//);
  if (match) {
    const term = match[1]; // e.g. "2025-summer", "2025-fall"
    if (!acc[term]) acc[term] = [];
    acc[term].push(path.replace('/public', ''));
  }
  return acc;
}, {} as Record<string, string[]>);

// Define season order for chronological sorting
const seasonOrder: Record<string, number> = { spring: 1, summer: 2, fall: 3, winter: 4 };

// Sort terms in chronological order (latest on right)
const terms = Object.keys(galleryData).sort((a, b) => {
  const [yearA, seasonA] = a.split('-');
  const [yearB, seasonB] = b.split('-');

  if (yearA !== yearB) {
    return Number(yearA) - Number(yearB);
  }

  const sA = seasonA ? seasonOrder[seasonA.toLowerCase()] || 0 : 0;
  const sB = seasonB ? seasonOrder[seasonB.toLowerCase()] || 0 : 0;
  return sA - sB;
});

// Fallback in case there are no photos yet
if (terms.length === 0) {
  terms.push('2025-summer');
  galleryData['2025-summer'] = [];
}

const formatTerm = (term: string) => {
  const [year, season] = term.split('-');
  if (!season) return term;
  return `${season.charAt(0).toUpperCase() + season.slice(1)} ${year}`;
};

export default function Gallery() {
  const navigate = useNavigate();
  // By default, select the latest term, which is the last in the chronological array
  const [selectedTerm, setSelectedTerm] = useState(terms[terms.length - 1]);
  const scrollContainerRef = useRef<HTMLUListElement>(null);
  const termRefs = useRef<Record<string, HTMLLIElement | null>>({});

  const currentPhotos = galleryData[selectedTerm] || [];

  // When selected term changes, scroll it into view
  useEffect(() => {
    const el = termRefs.current[selectedTerm];
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  }, [selectedTerm]);

  // Initial scroll to the rightmost side
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft = scrollContainerRef.current.scrollWidth;
    }
  }, []);

  return (
    <div className="gallery-page">
      <nav className="gallery-top-nav">
        <button className="back-button" onClick={() => navigate(-1)}>
          &larr; Back
        </button>

        <div className="term-carousel-container">
          <ul className="term-list horizontal" ref={scrollContainerRef}>
            {terms.map(term => (
              <li
                key={term}
                ref={(el) => { if (el) termRefs.current[term] = el; }}
              >
                <button
                  className={`term-button ${selectedTerm === term ? 'active' : ''}`}
                  onClick={() => setSelectedTerm(term)}
                >
                  {formatTerm(term)}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <main className="gallery-main-content">
        <div className="masonry-grid">
          {currentPhotos.map((photoUrl, i) => (
            <div key={i} className="masonry-item">
              <img
                src={photoUrl}
                alt={`${formatTerm(selectedTerm)} memory ${i + 1}`}
                loading="lazy"
                className="gallery-image"
              />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
