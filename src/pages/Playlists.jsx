import { playlists } from "../data/playlists"
import PlaylistCard from "../components/PlaylistCard"

export default function Playlists() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Playlisty Karczmy 🍺</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {playlists.map((pl) => (
          <PlaylistCard key={pl.id} playlist={pl} />
        ))}
      </div>
    </div>
  );
}