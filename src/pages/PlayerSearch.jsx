import { useState } from 'react';

export default function PlayerSearch() {
  const [query, setQuery] = useState('');
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setSearched(true);
    setErrorMsg('');

    try {
      const apiKey = import.meta.env.VITE_PANDASCORE_KEY;
      const response = await fetch(
        `https://api.pandascore.co/csgo/players?search[name]=${encodeURIComponent(query)}`,
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error(`API response status: ${response.status}`);
      }

      const data = await response.json();

      if (Array.isArray(data)) {
        setPlayers(data);
      } else {
        setPlayers([]);
        setErrorMsg('Invalid data format received from the API.');
      }
    } catch (error) {
      console.error('Error fetching players:', error);
      setPlayers([]);
      setErrorMsg('Failed to fetch player data. Please check your API key or network connection.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2 className="text-center my-4">CS2 Player Search</h2>
      
      <form onSubmit={handleSearch} className="d-flex justify-content-center mb-4">
        <div className="input-group" style={{ maxWidth: '500px' }}>
          <input
            type="text"
            className="form-control"
            placeholder="Search pro players (e.g. s1mple, NiKo, donk)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="btn btn-primary" type="submit">
            Search
          </button>
        </div>
      </form>

      {loading && <div className="text-center my-4">Searching players...</div>}

      {errorMsg && (
        <div className="alert alert-danger text-center my-4" role="alert">
          {errorMsg}
        </div>
      )}

      {!loading && !errorMsg && searched && players.length === 0 && (
        <div className="text-center text-muted my-4">No players found matching "{query}".</div>
      )}

      <div className="row">
        {Array.isArray(players) && players.map((player) => (
          <div key={player.id} className="col-md-4 mb-4">
            <div className="card bg-dark text-white h-100 border-secondary">
              {player.image_url ? (
                <img
                  src={player.image_url}
                  className="card-img-top p-3"
                  alt={player.name}
                  style={{ height: '220px', objectFit: 'contain' }}
                />
              ) : (
                <div
                  className="card-img-top bg-secondary d-flex align-items-center justify-content-center"
                  style={{ height: '220px' }}
                >
                  <span>No Image Available</span>
                </div>
              )}
              <div className="card-body text-light">
                <h5 className="card-title fw-bold">{player.name}</h5>
                <p className="card-text text-light mb-1">
                  Full Name: {player.first_name || ''} {player.last_name || 'N/A'}
                </p>
                <p className="card-text text-light mb-1">
                  Nationality: {player.nationality || 'Unknown'}
                </p>
                <p className="card-text text-light">
                  Current Team: {player.current_team ? player.current_team.name : 'Free Agent / None'}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}