import { useState } from 'react';
import { clubs } from '../data/clubs';
import { Link } from 'react-router-dom';

function Clubs() {
  const [sortOrder, setSortOrder] = useState('asc');
  const [view, setView] = useState('grid');

  const sortedClubs = [...clubs].sort((a, b) =>
    sortOrder === 'asc'
      ? a.name.localeCompare(b.name)
      : b.name.localeCompare(a.name)
  );

  return (
    <div className="p-6">
      <div className="flex justify-between mb-4">
        <div>
          <button onClick={() => setSortOrder('asc')} className="mr-2">A-Z</button>
          <button onClick={() => setSortOrder('desc')}>Z-A</button>
        </div>
        <button onClick={() => setView(view === 'grid' ? 'list' : 'grid')}>
          Toggle View
        </button>
      </div>

      <div className={view === 'grid' ? 'grid grid-cols-2 gap-4' : 'flex flex-col gap-4'}>
        {sortedClubs.map(club => (
          <Link key={club.id} to={`/clubs/${club.id}`} className="p-4 border rounded shadow hover:bg-gray-50">
            <img src={club.image} alt={club.name} className="h-40 w-full object-cover rounded mb-2" />
            <h3 className="text-xl font-semibold">{club.name}</h3>
            <p>{club.shortDescription}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Clubs;
