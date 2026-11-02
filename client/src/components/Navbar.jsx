import { Link, useNavigate, useLocation } from "react-router";
import Search from "./Search";

export default function Navbar({ query, onQueryChange }) {
  const navigate = useNavigate();
  const location = useLocation();

  function handleQueryChange(nextQuery) {
    onQueryChange(nextQuery);
    navigate("/");
  }
  return (
    <header className="border-t-8 border-[#DA291C] bg-white">
      <nav className="mx-auto flex max-w-6xl items-center gap-6 px-4 py-4">
        <Link to="/" className="shrink-0 font-black italic text-[#DA291C]">
          WinCo Foods
        </Link>

        {location.pathname === "/" && (
          <div className="min-w-0 flex-1">
            <Search value={query} onQueryChange={handleQueryChange} />
          </div>
        )}
      </nav>
    </header>
  );
}
