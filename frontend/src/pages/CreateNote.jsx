import { useNavigate } from "react-router-dom";
import { createNote } from "../services/NotesAPI";
import NoteForm from "../components/NoteForm";
import Layout from "../components/Layout";

const CreateNote = () => {
  const navigate = useNavigate();

  const handleCreate = async (data) => {
    await createNote(data);
    navigate("/");
  };

  return (
    <Layout>
      <h1 className="mb-6 text-3xl font-bold text-slate-800">
        Create Note
      </h1>

      <NoteForm onSubmit={handleCreate} />
    </Layout>
  );
};

export default CreateNote;