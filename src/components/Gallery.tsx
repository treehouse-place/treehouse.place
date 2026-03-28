import { useNavigate } from 'react-router-dom';
import './Gallery.css';

// Dynamically import all images from the public directory
const imageModules = import.meta.glob('/public/gallery/summer-2025/*.{jpg,JPG,jpeg,png,webp}');
// Convert the module paths (e.g. '/public/gallery/...') to public URLs (e.g. '/gallery/...')
const photos = Object.keys(imageModules).map(path => path.replace('/public', ''));

export default function Gallery() {
  const navigate = useNavigate();

  return (
    <div className="gallery-page">
      <header className="gallery-header">
        <button className="back-button" onClick={() => navigate(-1)}>
          &larr; Back
        </button>
        <h1 className="gallery-title">Summer 2025 Photos</h1>
      </header>
      
      <main className="gallery-main">
        <div className="masonry-grid">
          {photos.map((photoUrl, i) => (
            <div key={i} className="masonry-item">
              <img 
                src={photoUrl} 
                alt={`Summer 2025 memory ${i + 1}`} 
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
