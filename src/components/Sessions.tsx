import { Link } from 'react-router-dom';
import './Sessions.css';

export default function Sessions() {
  const formatDate = (date: Date) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 
                    'July', 'August', 'September', 'October', 'November', 'December'];
    const dayName = days[date.getDay()];
    const day = date.getDate();
    const month = months[date.getMonth()];
    return `${dayName}, ${month} ${day}`;
  };

  // Sessions with specific dates, links and locations
  // January 12, 2026 is a Monday
  // January 23, 2026 is a Friday  
  // January 26, 2026 is a Monday
  const sessions = [
    {
      date: new Date(2026, 0, 12), // Monday, January 12, 2026
      location: 'Surrey',
      link: 'https://luma.com/uftomvcm'
    },
    {
      date: new Date(2026, 0, 23), // Friday, January 23, 2026
      location: 'Burnaby',
      link: 'https://luma.com/698lcj7g'
    },
    {
      date: new Date(2026, 0, 26), // Monday, January 26, 2026
      location: 'Surrey',
      link: 'https://luma.com/x5zcki5j'
    }
  ];

  return (
    <div className="sessions-page">
      <div className="hero-image-container">
        <img src="/treehouse-hero.webp" alt="Treehouse Hero" className="treehouse-hero-image" />
      </div>
      <div className="sessions-container">
        <Link to="/" className="back-link">← back</Link>
        <h1 className="sessions-title">upcoming sessions</h1>
        <div className="sessions-list">
          {sessions.map((session, index) => (
            <a
              key={index}
              href={session.link}
              target="_blank"
              rel="noopener noreferrer"
              className="session-link"
            >
              <div className="session-item">
                <div className="session-content">
                  <span className="session-location">{session.location}</span>
                  <div className="session-details">
                    <span className="session-date">{formatDate(session.date)}</span>
                    <span className="session-separator">|</span>
                    <span className="session-time">5pm - 8pm</span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

