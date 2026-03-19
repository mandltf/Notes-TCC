import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getNoteById } from "../services/NotesAPI";
import Layout from "../components/Layout";

const NoteDetail = () => {
  const { id } = useParams();
  const [note, setNote] = useState(null);

  useEffect(() => {
    getNoteById(id).then(setNote);
  }, [id]);

  if (!note) return <p>Loading...</p>;

  return (
    <Layout>
      <div className="rounded-xl bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-bold text-slate-800">
          {note.judul}
        </h1>

        <p className="mt-2 text-sm text-slate-400">
          {new Date(note.createdAt).toLocaleString("id-ID")}
        </p>

        <p className="mt-6 whitespace-pre-wrap text-slate-700">
          {note.isi}
        </p>

        <Link
          to="/"
          className="mt-6 inline-block rounded-lg bg-slate-200 px-4 py-2 text-sm hover:bg-slate-300"
        >
          ← Back
        </Link>
      </div>
    </Layout>
  );
};

export default NoteDetail;