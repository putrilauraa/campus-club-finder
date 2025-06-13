import { useState } from "react";
import { clubs } from "../data/clubs";
import { Link } from "react-router-dom";

function Clubs() {
  const [sortOrder, setSortOrder] = useState("asc");
  const [view, setView] = useState("grid");

  const sortedClubs = [...clubs].sort((a, b) =>
    sortOrder === "asc"
      ? a.name.localeCompare(b.name)
      : b.name.localeCompare(a.name)
  );

  return (
    <div className="relative isolate p-6 sm:px-8 md:px-14">
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

      {/* Sorting and View Toggle */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        {/* Sorting Buttons */}
        <div className="flex gap-2">
          <button
            onClick={() => setSortOrder("asc")}
            className={`py-1.5 px-4 rounded-md text-sm ${
              sortOrder === "asc"
                ? "bg-indigo-500 text-white"
                : "bg-gray-100 text-gray-500 hover:bg-gray-200"
            }`}
          >
            A-Z
          </button>
          <button
            onClick={() => setSortOrder("desc")}
            className={`py-1.5 px-4 rounded-md text-sm ${
              sortOrder === "desc"
                ? "bg-indigo-500 text-white"
                : "bg-gray-100 text-gray-500 hover:bg-gray-200"
            }`}
          >
            Z-A
          </button>
        </div>

        {/* Toggle View */}
        <button
          onClick={() => setView(view === "grid" ? "list" : "grid")}
          className="py-1.5 px-4 rounded-md text-sm text-gray-500 bg-gray-100 hover:bg-gray-200"
        >
          {view === "grid" ? "Switch to List View" : "Switch to Grid View"}
        </button>
      </div>

      {/* Club Cards */}
      <div
        className={
          view === "grid"
            ? "grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            : "flex flex-col gap-6"
        }
      >
        {sortedClubs.map((club) => (
          <div
            key={club.id}
            className="p-4 bg-white rounded-xl shadow hover:shadow-md transition duration-200 flex flex-col"
          >
            <img
              src={club.image}
              alt={club.name}
              className={`${
                view === "grid" ? "h-40" : "h-60"
              } w-full object-cover rounded mb-3`}
            />
            <h3 className="text-lg font-bold mb-1">{club.name}</h3>
            <p className="text-sm text-gray-600 flex-grow">
              {club.shortDescription}
            </p>
            <div className="mt-3">
              <Link
                to={`/clubs/${club.id}`}
                className="inline-block text-sm text-white bg-indigo-500 hover:bg-indigo-400 px-4 py-2 rounded-md"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
      
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

export default Clubs;
