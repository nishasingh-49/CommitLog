import React, { useState } from 'react';
import '../App.css';

export default function RantModal({ isOpen, onClose, onSave }) {
  const [rantText, setRantText] = useState('');

  const handleSave = () => {
    if (rantText.trim()) {
      onSave(rantText);
      setRantText('');
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Dev Rant Mode</h2>
        <textarea
          placeholder="no ones gonna judge you here"
          value={rantText}
          onChange={(e) => setRantText(e.target.value)}
        />
        <div className="modal-buttons">
          <button onClick={handleSave}>Save Rant</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
}
