import { useState } from "react";
import { Link } from "react-router-dom";

const NoteForm = ({ onSubmit, initialData }) => {
  const [judul, setJudul] = useState(initialData?.judul ?? "");
  const [isi, setIsi] = useState(initialData?.isi ?? "");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ judul, isi });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
    >
      <div className="space-y-1">
        <label className="text-sm font-medium text-slate-700">Judul</label>
        <input
          className="w-full rounded-xl border border-slate-300 px-3 py-2 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          placeholder="Judul note"
          value={judul}
          onChange={(e) => setJudul(e.target.value)}
        />
      </div>

      <div className="space-y-1">
        <label className="text-sm font-medium text-slate-700">Isi</label>
        <textarea
          className="min-h-36 w-full rounded-xl border border-slate-300 px-3 py-2 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          placeholder="Isi note"
          value={isi}
          onChange={(e) => setIsi(e.target.value)}
        />
      </div>

      <div className="flex gap-3">
        <button
          type="submit"
          className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          Save
        </button>

        <Link
          to="/"
          className="rounded-lg bg-slate-200 px-4 py-2 text-slate-700 hover:bg-slate-300"
        >
          Cancel
        </Link>
      </div>
    </form>
  );
};

export default NoteForm;
