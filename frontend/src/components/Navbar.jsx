import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <Link
          to="/"
          className="text-xl font-bold text-slate-800"
        >
          📝 Notes App
        </Link>

        {/* Button */}
        <Link
          to="/create"
          className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
        >
          + New Note
        </Link>

      </div>
    </header>
  );
};

export default Navbar;