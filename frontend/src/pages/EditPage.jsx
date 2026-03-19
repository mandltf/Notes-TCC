import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getNoteById, updateNote } from "../services/NotesAPI";
import NoteForm from "../components/NoteForm";
import Layout from "../components/Layout";

const EditPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [note, setNote] = useState(null);

  useEffect(() => {
    getNoteById(id).then(setNote);
  }, [id]);

  const handleUpdate = async (data) => {
    await updateNote(id, data);
    navigate("/");
  };

  if (!note) return <p>Loading...</p>;

  return (
    <Layout>
      <h1 className="mb-6 text-3xl font-bold text-slate-800">
        Edit Note
      </h1>

      <NoteForm
        initialData={note}
        onSubmit={handleUpdate}
      />
    </Layout>
  );
};

export default EditPage;