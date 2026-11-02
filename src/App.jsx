import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import UpcomingMatches from './pages/UpcomingMatches';

function App() {
  return (
    <Router>
      <Navigation />
      <div className="container">
        <Routes>
          <Route path="/" element={<UpcomingMatches />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;