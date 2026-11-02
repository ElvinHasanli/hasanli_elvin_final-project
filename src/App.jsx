import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import UpcomingMatches from './pages/UpcomingMatches';

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<UpcomingMatches />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;