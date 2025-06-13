import { useParams } from "react-router-dom";
import { clubs } from "../data/clubs";
import { useEffect, useState } from "react";

function ClubDetail() {
  const { clubId } = useParams();
  const club = clubs.find((c) => c.id === clubId);
  const [joined, setJoined] = useState(false);

  useEffect(() => {
    const joinedClubs = JSON.parse(localStorage.getItem("joinedClubs") || "[]");
    setJoined(joinedClubs.includes(clubId));
  }, [clubId]);

  const handleJoin = () => {
    const joinedClubs = JSON.parse(localStorage.getItem("joinedClubs") || "[]");
    if (!joinedClubs.includes(clubId)) {
      const updated = [...joinedClubs, clubId];
      localStorage.setItem("joinedClubs", JSON.stringify(updated));
      setJoined(true);
      alert("You have successfully joined this club!");
    }
  };

  if (!club) return <div className="p-6">Club not found.</div>;

  return (
    <div className="relative isolate p-6 mx-4 md:mx-14">
      {/* Top background decoration */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.0625rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        />
      </div>

      <h2 className="text-3xl font-bold mb-2">{club.name}</h2>
      <img
        src={club.image}
        alt={club.name}
        className="w-full h-60 object-cover rounded mb-4"
      />
      <p className="mb-4">{club.description}</p>

      <h3 className="text-xl font-semibold mb-2">Upcoming Events:</h3>
      <ul className="list-disc ml-6 mb-6">
        {club.events.length > 0 ? (
          club.events.map((event, index) => (
            <li key={index}>
              {event.name} – {event.date}
            </li>
          ))
        ) : (
          <li>No upcoming events.</li>
        )}
      </ul>

      {!joined ? (
        <button
          onClick={handleJoin}
          className="px-6 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-400 transition"
        >
          Join Club
        </button>
      ) : (
        <div className="px-6 py-2 bg-green-100 text-green-700 rounded inline-block font-semibold">
          You have joined this club!
        </div>
      )}

      {/* Bottom background decoration */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.0625rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
        />
      </div>
    </div>
  );
}

export default ClubDetail;
