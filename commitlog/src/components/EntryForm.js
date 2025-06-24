import { useState } from 'react';

export default function EntryForm({ onAdd }) {
  const [mood, setMood] = useState('');
  const [entry, setEntry] = useState('');
  const [prompt, setPrompt] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!entry.trim()) return;

    const newEntry = {
      date: new Date().toLocaleDateString(),
      mood,
      entry,
    };

    onAdd(newEntry);
    setMood('');
    setEntry('');
    setPrompt('');
  };

  const moodOptions = [
    { label: "😄 Happy", value: "happy" },
    { label: "😢 Sad", value: "sad" },
    { label: "😵‍💫 Confused", value: "confused" },
    { label: "😠 Angry", value: "angry" },
    { label: "😌 Chill", value: "chill" },
    { label: "🥱 Tired", value: "tired" },
    { label: "😰 Anxious", value: "anxious" },
    { label: "😴 Sleepy", value: "sleep" },
    { label: "🫠 Done", value: "done" },
    { label: "💀 Dead", value: "dead" },
    { label: "🧠 No Mood", value: "" },
  ];

  const prompts = [
    "What broke you today?",
    "What did you code that you still don't understand?",
    "If your bug had a face, what would you tell it?",
    "What was the highlight of your debugging journey?",
    "Did anything actually work today? If yes, praise it.",
    "What did you Google 14 times today?",
    "What did Stack Overflow do for you today?",
    "Would you describe today's session as: success, chaos, or 🤡 clown fiesta?",
    "What's something you *pretended* to understand today?",
  ];

  const handlePrompt = () => {
    const random = prompts[Math.floor(Math.random() * prompts.length)];
    setPrompt(random);
  };

  return (
    <form onSubmit={handleSubmit}>
      <select value={mood} onChange={(e) => setMood(e.target.value)}>
        <option value="">Select mood (optional)</option>
        {moodOptions.map((m, i) => (
          <option key={i} value={m.value}>
            {m.label}
          </option>
        ))}
      </select>

      {prompt && <p className="prompt-box">💡 {prompt}</p>}
      <button className="prompt-button" onClick={handlePrompt}>Give me a prompt</button>


      <textarea
        placeholder="What did your brain suffer through today?"
        value={entry}
        onChange={(e) => setEntry(e.target.value)}
      />

      <button type="submit">Commit</button>
    </form>
  );
}
