import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();
  const linkClass = (path) =>
    location.pathname === path ? 'text-blue-600 font-bold' : 'text-gray-700';

  return (
    <nav className="bg-white shadow p-4 flex justify-around">
      <Link className={linkClass('/')} to="/">Home</Link>
      <Link className={linkClass('/clubs')} to="/clubs">Clubs</Link>
      <Link className={linkClass('/about')} to="/about">About</Link>
    </nav>
  );
}

export default Navbar;
