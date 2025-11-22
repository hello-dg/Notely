export type Note = {
  id: string;
  title: string;
  content: string;
  createdAt: number;
};

const STORAGE_KEY = "notes";

export function getNotes(): Note[] {
  if (typeof window === "undefined") return [];
  const storedNotes = localStorage.getItem(STORAGE_KEY);
  return storedNotes ? JSON.parse(storedNotes) : [];
}

export function saveNotes(notes: Note[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
}

export function addNote(note: Note) {
  const notes = getNotes();
  saveNotes([note, ...notes]);
}

export function updateNote(updated: Note) {
  const notes = getNotes().map((n) => (n.id === updated.id ? updated : n));
  saveNotes(notes);
}

export function deleteNote(id: string) {
  const notes = getNotes().filter((n) => n.id !== id);
  saveNotes(notes);
}

export function getNoteById(id: string) {
  return getNotes().find((n) => n.id === id);
}
