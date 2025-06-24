import React, { useState, useEffect } from 'react';
import EntryForm from './components/EntryForm';
import EntryList from './components/EntryList';
import RantModal from './components/RantModal';
import RantList from './components/RantList';
import './App.css';

function App() {
  const [entries, setEntries] = useState(() => {
    const saved = localStorage.getItem('commitlog');
    return saved ? JSON.parse(saved) : [];
  });

  const [rants, setRants] = useState(() => {
    const saved = localStorage.getItem('commitlog-rants');
    return saved ? JSON.parse(saved) : [];
  });

  const [showRantModal, setShowRantModal] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('commitlog-theme') !== 'light'; 
  });

  useEffect(() => {
    localStorage.setItem('commitlog', JSON.stringify(entries));
  }, [entries]);

  useEffect(() => {
    localStorage.setItem('commitlog-rants', JSON.stringify(rants));
  }, [rants]);

  useEffect(() => {
    document.body.className = isDarkMode ? 'dark-mode' : 'light-mode';
    localStorage.setItem('commitlog-theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const addEntry = (entry) => setEntries([entry, ...entries]);

  const deleteEntry = (index) => {
    const updated = [...entries];
    updated.splice(index, 1);
    setEntries(updated);
  };

  const addRant = (rantText) => {
    const rant = {
      date: new Date().toLocaleString(),
      text: rantText,
    };
    setRants([rant, ...rants]);
  };

  const deleteRant = (index) => {
    const updated = [...rants];
    updated.splice(index, 1);
    setRants(updated);
  };

  return (
    <div className="App">
      { }
      <div className="theme-toggle-container">
  <button
    className="theme-toggle"
    onClick={() => setIsDarkMode((prev) => !prev)}
  >
    {isDarkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
  </button>
</div>


      <h1>CommitLog</h1>
      <p className="subtitle">
        Version control for your emotional damage. <br />
        LocalStorage-powered brain dumps, now with extra sarcasm.
      </p>

      <button onClick={() => setShowRantModal(true)} style={{ marginBottom: '1rem' }}>
        Wanna enter Rant Mode?
      </button>

      <EntryForm onAdd={addEntry} />
      <EntryList entries={entries} onDelete={deleteEntry} />
      <RantList rants={rants} onDelete={deleteRant} />

      <RantModal
        isOpen={showRantModal}
        onClose={() => setShowRantModal(false)}
        onSave={addRant}
      />
    </div>
  );
}

export default App;
