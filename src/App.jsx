import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import UpcomingMatches from './pages/UpcomingMatches';
import PlayerSearch from './pages/PlayerSearch';
import Watchlist from './pages/Watchlist';

function App() {
  return (
    <Router basename="/hasanli_elvin_final-project">
      <Navigation />
      <div className="container">
        <Routes>
          <Route path="/" element={<UpcomingMatches />} />
          <Route path="/search" element={<PlayerSearch />} />
          <Route path="/watchlist" element={<Watchlist />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;