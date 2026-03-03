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
  // March 6, 13, 20, 27 2026 – all Fridays at East tower, Burnaby
  const sessions = [
    {
      date: new Date(2026, 2, 6), // Friday, March 6, 2026
      location: 'East tower, Burnaby',
      link: 'https://luma.com/cqnppunl'
    },
    {
      date: new Date(2026, 2, 13), // Friday, March 13, 2026
      location: 'East tower, Burnaby',
      link: 'https://luma.com/pl8m1x2q'
    },
    {
      date: new Date(2026, 2, 20), // Friday, March 20, 2026
      location: 'East tower, Burnaby',
      link: 'https://luma.com/20w4c7s4'
    },
    {
      date: new Date(2026, 2, 27), // Friday, March 27, 2026
      location: 'East tower, Burnaby',
      link: 'https://luma.com/h8sn08u9'
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

