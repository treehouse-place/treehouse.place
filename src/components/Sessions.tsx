import { Link } from 'react-router-dom';
import './Sessions.css';

export default function Sessions() {
  // Calculate the next 6 Thursdays
  const getNextThursdays = () => {
    const thursdays = [];
    const today = new Date();
    
    // Find the next Thursday
    const daysUntilThursday = (4 - today.getDay() + 7) % 7 || 7;
    let nextThursday = new Date(today);
    nextThursday.setDate(today.getDate() + daysUntilThursday);
    
    // If today is Thursday and it's before 5pm, use today; otherwise use next Thursday
    if (today.getDay() === 4 && today.getHours() < 17) {
      nextThursday = new Date(today);
    }
    
    // Generate 6 Thursdays
    for (let i = 0; i < 6; i++) {
      const thursday = new Date(nextThursday);
      thursday.setDate(nextThursday.getDate() + (i * 7));
      thursdays.push(thursday);
    }
    
    return thursdays;
  };

  const formatDate = (date: Date) => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 
                    'July', 'August', 'September', 'October', 'November', 'December'];
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    return `${month} ${day}, ${year}`;
  };

  const sessions = getNextThursdays();
  
  // Alternate between Burnaby and Surrey
  const getLocation = (index: number) => {
    return index % 2 === 0 ? 'Burnaby' : 'Surrey';
  };

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
              href="https://luma.com/treehouse.place"
              target="_blank"
              rel="noopener noreferrer"
              className="session-link"
            >
              <div className="session-item">
                <div className="session-content">
                  <span className="session-location">{getLocation(index)}</span>
                  <div className="session-details">
                    <span className="session-date">{formatDate(session)}</span>
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

