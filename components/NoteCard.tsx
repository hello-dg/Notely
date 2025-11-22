import Link from "next/link";
import type { Note } from "@/lib/notes";

export default function NoteCard({ note }: { note: Note }) {
  return (
    <Link
      href={`/${note.id}`}
      className="block rounded-xl border border-stone-200 bg-white p-4 shadow-sm hover:shadow-md transition"
    >
      <h3 className="font-semibold text-lg text-stone-900">{note.title}</h3>
      <p className="text-stone-600 mt-1 line-clamp-2">{note.content}</p>
      <p className="text-xs text-stone-400 mt-3">
        {new Date(note.createdAt).toLocaleString()}
      </p>
    </Link>
  );
}
