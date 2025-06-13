import { useParams } from 'react-router-dom';
import { clubs } from '../data/clubs';
import { useEffect, useState } from 'react';

function ClubDetail() {
  const { clubId } = useParams();
  const club = clubs.find(c => c.id === clubId);
  const [joined, setJoined] = useState(false);

  useEffect(() => {
    const joinedClubs = JSON.parse(localStorage.getItem('joinedClubs') || '[]');
    setJoined(joinedClubs.includes(clubId));
  }, [clubId]);

  const handleJoin = () => {
    const joinedClubs = JSON.parse(localStorage.getItem('joinedClubs') || '[]');
    if (!joinedClubs.includes(clubId)) {
      const updated = [...joinedClubs, clubId];
      localStorage.setItem('joinedClubs', JSON.stringify(updated));
      setJoined(true);
    }
  };

  if (!club) return <div className="p-6">Club not found.</div>;

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-2">{club.name}</h2>
      <img src={club.image} alt={club.name} className="w-full h-60 object-cover rounded mb-4" />
      <p className="mb-4">{club.description}</p>
      <h3 className="text-xl font-semibold">Upcoming Events:</h3>
      <ul className="list-disc ml-6 mb-4">
        {club.events.map((event, index) => (
          <li key={index}>{event.name} - {event.date}</li>
        ))}
      </ul>
      <button
        onClick={handleJoin}
        disabled={joined}
        className={`px-6 py-2 rounded ${joined ? 'bg-gray-400' : 'bg-blue-600 text-white hover:bg-blue-500'}`}
      >
        {joined ? 'Joined' : 'Join Club'}
      </button>
    </div>
  );
}

export default ClubDetail;