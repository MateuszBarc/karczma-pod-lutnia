import { usePlayer } from "../context/PlayerContext";

export default function PlaylistCard({ playlist }) {
    const { playSong } = usePlayer();

    return (
        <div className="bg-slate-800 rounded-2xl p-6 shadow hover:shadow-lg transition-all">
            <h2 className="text-xl font-bold mb-2">{playlist.name}</h2>
            <p className="text-slate-400 text-sm mb-4">{playlist.description}</p>

            <ul className="space-y-3">
                {playlist.songs.map((song) => (
                    <li 
                    key={song.id} 
                    onClick={() => playSong(song)}
                    className="flex items-center gap-3 cursor-pointer hover:bg-slate-700/60 p2 rounded-lg transition"
                    >
                    <img
                        src={song.cover}
                        alt={song.title}
                        className="w-12 h-12 rounded-lg object-cover"
                        />
                        <div>
                            <p className="font-medium">{song.title}</p>
                            <p className="text-sm text-slate-400">{song.artist}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}