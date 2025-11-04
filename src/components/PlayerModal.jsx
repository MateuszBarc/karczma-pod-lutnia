import { usePlayer } from "../context/PlayerContext";

export default function PlayerModal() {
    const { currentSong, closePlayer, audioRef } = usePlayer();

    if (!currentSong) return null;

    return (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50" >
            <div className="bg-slate-900 p-6 rounded-2xl shadow-xl w-80 text-center relative">
                <button
                 onClick={closePlayer}
                 className="absolute top-2 right-3 text-slate-400 hover:text-white">
                    ✕
                 </button>

                 <img 
                 src={currentSong.cover} 
                 alt={currentSong.title} 
                 className="w-full rounded-lg mb-4"
                 />
                 <h3 className="text-xl font-bold">{currentSong.title}</h3>
                 <p className="text-slate-400 mb-2">{currentSong.artist}</p>

                 <audio 
                 ref={audioRef} 
                 src={currentSong.audio} 
                 controls 
                 autoPlay 
                 className="w-full mt-4"
                 />
            </div>
        </div>
    )
}