export default function SongCard({ song, onSelect}) {
    return (
        <div
        onClick={() => onSelect(song)}
        className="cursor-pointer bg-slate-800 rounded-2xl overflow-hidden shadow hover:shadow-lg hover:scale-[1.02] transition-transform"
        >
        <img
        src={song.cover}
        alt={song.title}
        className="w-full aspect-square object-cover"
        />
        <div className="p-4">
            <h3 className="text-lg font-bold">{song.title}</h3>
            <p className="text-slate-400 text-sm">{song.artist}</p>
        </div>
   </div>
    );
}