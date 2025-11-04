import { songs } from "../data/songs";

export default function Home() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Kafelkowe piosenki 🎶</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {songs.map((song) => (
          <div
            key={song.id}
            className="bg-slate-800 rounded-2xl overflow-hidden shadow hover:shadow-lg hover:scale-[1.02] transition-transform"
          >
            <img src={song.cover} alt={song.title} className="w-full aspect-square object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-bold">{song.title}</h3>
              <p className="text-slate-400 text-sm">{song.artist}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}