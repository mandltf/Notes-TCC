import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200">
      <Navbar />

      <main className="mx-auto max-w-6xl px-6 py-10">
        {children}
      </main>
    </div>
  );
};

export default Layout;