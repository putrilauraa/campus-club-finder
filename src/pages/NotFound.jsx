import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="p-6 text-center mx-14">
      <h2 className="text-2xl font-bold text-red-600">404 - Page Not Found</h2>
      <p className="mt-2">Oops! We couldn't find that page.</p>
      <Link to="/">
        <button className="mt-4 px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-400">
          Back to Home
        </button>
      </Link>
    </div>
  );
}

export default NotFound;