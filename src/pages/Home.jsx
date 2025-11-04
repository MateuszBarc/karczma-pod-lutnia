import { songs } from "../data/songs";
import { use, useState } from "react";
import SongCard from "../components/SongCard";

export default function Home() {

    const [selectSong, setSelectSong] = useState(null);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Kafelkowe piosenki 🎶</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {songs.map((song) => (
         <SongCard key={song.id} song={song} onSelect={setSelectSong}/>
        ))} 
    </div>
    
    {selectSong && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
            <div className="bg-slate-900 p-6 rounded-2xl shadow-xl w-80 text-center relative">
                <button 
                onClick={() => setSelectSong(null)}
                className="absolute top-2 right-3 text-slate-400 hover:text-white"
                >
                ✕
                </button>
                <img
                src={selectSong.cover}
                alt={selectSong.title}
                className="w-full rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold">{selectSong.title}</h3>
                <p className="text-slate-400 mb-2">{selectSong.artist}</p>
                <p className="text-sm text-slate-500">🎵</p>
        </div>
        </div>
    )}
    </div>
  );
}