import React from 'react';

export default function EntryList({ entries, onDelete }) {
  const moodToEmoji = (mood) => {
    const moodMap = {
      happy: "😄",
      sad: "😢",
      tired: "🥱",
      confused: "😵‍💫",
      angry: "😠",
      chill: "😌",
      anxious: "😰",
      sleep: "😴",
      dead: "💀",
      done: "🫠",
    };

    const lowerMood = mood?.toLowerCase();
    return moodMap[lowerMood] || "🧠";
  };

  if (!entries.length) {
    return (
      <p className="empty-state">
        No brain dumps yet. Suspiciously quiet in there.
      </p>
    );
  }

  return (
    <div>
      {entries.map((entry, index) => (
        <div key={index} className="entry">
          <p>
            <strong>{entry.date}</strong> | Mood:{" "}
            {entry.mood ? `${entry.mood} ${moodToEmoji(entry.mood)}` : "??? 🧠"}
          </p>
          <p>{entry.entry}</p>
          <button onClick={() => onDelete(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
