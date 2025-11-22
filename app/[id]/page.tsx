"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import NoteCard from "@/components/NoteCard";
import { getNotes, type Note } from "@/lib/notes";

export default function Home() {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    setNotes(getNotes());
  }, []);

  return (
    <main className="min-h-screen bg-stone-50">
      <div className="max-w-3xl mx-auto p-6">
        <header className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-stone-900">My Notes</h1>
          <Link
            href="/new"
            className="rounded-lg bg-stone-900 text-white px-4 py-2 text-sm font-medium hover:bg-stone-800"
          >
            + New Note
          </Link>
        </header>

        {notes.length === 0 ? (
          <p className="text-stone-500 text-center mt-24">
            No notes yet. Click “New Note” to create one.
          </p>
        ) : (
          <div className="grid gap-4">
            {notes.map((note) => (
              <NoteCard key={note.id} note={note} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
