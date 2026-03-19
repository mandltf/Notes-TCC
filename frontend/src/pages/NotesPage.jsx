import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getNotes, deleteNote } from "../services/NotesAPI";
import Layout from "../components/Layout";

const NotesPage = () => {
  const [notes, setNotes] = useState([]);

  const fetchNotes = async () => {
    const data = await getNotes();
    setNotes(data);
  };

  useEffect(() => {
    let isActive = true;

    getNotes().then((data) => {
      if (isActive) setNotes(data);
    });

    return () => {
      isActive = false;
    };
  }, []);

  const handleDelete = async (id) => {
    await deleteNote(id);
    fetchNotes();
  };

  return (
    <Layout>
      <h1 className="mb-6 text-3xl font-bold text-slate-800">Your Notes</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {notes.map((note) => (
          <div
            key={note.id}
            className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            {/* Title */}
            <h2 className="text-lg font-semibold text-slate-800">
              {note.judul}
            </h2>

            {/* Content */}
            <p className="mt-2 line-clamp-3 text-sm text-slate-600">
              {note.isi}
            </p>

            {/* Date */}
            <p className="mt-4 text-xs text-slate-400">
              {new Date(note.createdAt).toLocaleDateString("id-ID")}
            </p>

            {/* Actions */}
            <div className="mt-5 flex gap-2">
              <Link
                to={`/notes/${note.id}`}
                className="rounded-md bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600 hover:bg-blue-100"
              >
                View
              </Link>

              <Link
                to={`/edit/${note.id}`}
                className="rounded-md bg-yellow-50 px-3 py-1 text-xs font-medium text-yellow-600 hover:bg-yellow-100"
              >
                Edit
              </Link>

              <button
                onClick={() => handleDelete(note.id)}
                className="rounded-md bg-red-50 px-3 py-1 text-xs font-medium text-red-600 hover:bg-red-100"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default NotesPage;
