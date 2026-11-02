import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
      <div className="container">
        <Link className="navbar-brand" to="/">CS2 Tracker</Link>
        <div className="navbar-nav flex-row gap-3">
          <Link className="nav-link" to="/">Matches</Link>
          <Link className="nav-link" to="/search">Player Search</Link>
          <Link className="nav-link" to="/watchlist">Watchlist</Link>
        </div>
      </div>
    </nav>
  );
}