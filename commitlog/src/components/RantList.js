import React from 'react';

export default function RantList({ rants, onDelete }) {
  if (rants.length === 0) {
    return <p className="empty-state">No rants yet. Are you okay, love???</p>;
  }

  return (
    <div>
      <h2 style={{ marginTop: '2rem' }}>Rant Archive</h2>

      {rants.map((rant, index) => (
        <div key={index} className="entry" style={{ borderLeftColor: '#ffcc70' }}>
          <p><strong>{rant.date}</strong></p>
          <p>{rant.text}</p>
          <button onClick={() => onDelete(index)}>🗑️ Delete</button>
        </div>
      ))}
    </div>
  );
}
