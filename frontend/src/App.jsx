import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotesPage from "./pages/NotesPage";
import CreateNote from "./pages/CreateNote";
import EditPage from "./pages/EditPage";
import NoteDetail from "./pages/NoteDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NotesPage />} />
        <Route path="/create" element={<CreateNote />} />
        <Route path="/edit/:id" element={<EditPage />} />
        <Route path="/notes/:id" element={<NoteDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;