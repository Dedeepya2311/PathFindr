"use client";
import { useState } from "react";

export default function StudyPage() {
  const [subject, setSubject] = useState("");
  const [level, setLevel] = useState("Beginner");
  const [content, setContent] = useState("");

  async function getContent() {
    const res = await fetch("/api/studyContent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ subject, level }),
    });
    const data = await res.json();
    setContent(data.content);
  }

  return (
    <div>
      <input onChange={(e) => setSubject(e.target.value)} />
      <select onChange={(e) => setLevel(e.target.value)}>
        <option>Beginner</option>
        <option>Intermediate</option>
        <option>Advanced</option>
      </select>
      <button onClick={getContent}>Generate</button>
      <pre>{content}</pre>
    </div>
  );
}
