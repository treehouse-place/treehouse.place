import './OrigamiStation.css'
import crane from '../assets/origami/crane.png'
import frog from '../assets/origami/frog.png'
import chameleon from '../assets/origami/chameleon.png'
import star from '../assets/origami/star.png'

export default function OrigamiStation() {
  const origamiItems = [
    { title: 'Crane', image: crane, pdf: '/origami/crane.pdf' },
    { title: 'Chameleon', image: chameleon, pdf: '/origami/chameleon.pdf' },
    { title: 'Frog', image: frog, pdf: '/origami/frog.pdf' },
    { title: 'Star', image: star, pdf: '/origami/star.pdf' },
  ];

  return (
    <div className="origami-page">
      <h1>origami station</h1>
      <div className="origami-grid">
        {origamiItems.map((item, i) => (
          <a
            key={i}
            href={item.pdf}
            target="_blank"
            rel="noopener noreferrer"
            className={`origami-tile tile-${item.title.toLowerCase()}`}
          >
            <img src={item.image} alt={item.title} />
          </a>
        ))}
      </div>
    </div>
  );
}

