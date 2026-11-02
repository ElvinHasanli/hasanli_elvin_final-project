import { useState, useEffect } from 'react';

export default function UpcomingMatches() {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const response = await fetch('https://api.pandascore.co/csgo/matches/upcoming?per_page=6', {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${import.meta.env.VITE_PANDASCORE_KEY}`
          }
        });

        if (!response.ok) {
          throw new Error('Failed to fetch matches');
        }

        const data = await response.json();
        setMatches(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMatches();
  }, []);

  if (loading) return <div className="mt-4 container"><h4>Loading live matches...</h4></div>;
  if (error) return <div className="mt-4 container text-danger"><h4>Error: {error}</h4></div>;

  return (
    <div className="mt-4 container">
      <h2 className="mb-4">Upcoming CS2 Matches</h2>
      <div className="row">
        {matches.map(match => (
          <div key={match.id} className="col-md-6 mb-3">
            <div className="card bg-dark text-white h-100 shadow">
              <div className="card-body">
                <h5 className="card-title">{match.name}</h5>
                <p className="card-text text-secondary mb-1">
                  <strong>League:</strong> {match.league.name}
                </p>
                <p className="card-text text-info">
                  {new Date(match.begin_at).toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}