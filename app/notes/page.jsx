"use client";
import { useState } from "react";

export default function NotesPage() {
  const [topic, setTopic] = useState("");
  const [notes, setNotes] = useState("");

  async function generateNotes() {
    const res = await fetch("/api/notes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ topic }),
    });
    const data = await res.json();
    setNotes(data.notes);
  }

  return (
    <div>
      <h1>Notes Generator</h1>
      <input onChange={(e) => setTopic(e.target.value)} />
      <button onClick={generateNotes}>Generate</button>
      <pre>{notes}</pre>
    </div>
  );
}
