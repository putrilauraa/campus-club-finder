import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="text-center mt-10">
      <h1 className="text-4xl font-bold">Welcome to Campus Club Finder</h1>
      <p className="mt-4 text-gray-600">Discover and join amazing student clubs!</p>
      <Link to="/clubs">
        <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-500">
          Explore Clubs
        </button>
      </Link>
    </div>
  );
}

export default Home;