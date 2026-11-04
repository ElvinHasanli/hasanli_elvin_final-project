import { useState, useEffect } from 'react';

export default function Watchlist() {
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('cs2_watchlist')) || [];
    setWatchlist(saved);
  }, []);

  const removePlayer = (id) => {
    const updated = watchlist.filter((player) => player.id !== id);
    setWatchlist(updated);
    localStorage.setItem('cs2_watchlist', JSON.stringify(updated));
  };

  return (
    <div>
      <h2 className="text-center my-4">My Watchlist</h2>
      
      {watchlist.length === 0 ? (
        <div className="text-center text-muted mt-5">
          <h5>Your watchlist is empty.</h5>
          <p>Go to the Player Search page to add your favorite pros!</p>
        </div>
      ) : (
        <div className="row">
          {watchlist.map((player) => (
            <div key={player.id} className="col-md-4 mb-4">
              <div className="card bg-dark text-white h-100 border-secondary">
                {player.image_url && (
                  <img
                    src={player.image_url}
                    className="card-img-top p-3"
                    alt={player.name}
                    style={{ height: '220px', objectFit: 'contain' }}
                  />
                )}
                <div className="card-body text-center">
                  <h5 className="card-title fw-bold">{player.name}</h5>
                  <p className="card-text text-light mb-3">
                    Team: {player.current_team ? player.current_team.name : 'Free Agent'}
                  </p>
                  <button
                    className="btn btn-danger w-100"
                    onClick={() => removePlayer(player.id)}
                  >
                    Remove from Watchlist
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}