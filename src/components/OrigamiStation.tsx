import './OrigamiStation.css'
import crane from '../assets/origami/crane.png'
import frog from '../assets/origami/frog.png'
import chameleon from '../assets/origami/chameleon.png'
import star from '../assets/origami/star.png'

const origamiItems = [
  { title: 'Crane', image: crane, link: '#' },
  { title: 'Chameleon', image: chameleon, link: '#' },
  { title: 'Frog', image: frog, link: '#' },
  { title: 'Star', image: star, link: '#' },
]


export default function OrigamiStation() {
  return (
    <div className="origami-page">
      <h1>origami station</h1>
      <div className="origami-grid">
        {origamiItems.map((item, index) => (
          <a
            href={item.link}
            className={`origami-tile tile-${item.title.toLowerCase()}`}
            key={index}
            >
            <img src={item.image} alt={item.title} />
         </a>
        ))}
      </div>
    </div>
  )
}
