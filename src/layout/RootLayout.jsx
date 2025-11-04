import {Outlet, NavLink} from "react-router-dom";

export default function RootLayout() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
            <header className="border-b border-slate-800">
                <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
                    <h1 className="text-xl font-semibold">Karczma pod Lutnia</h1>
                    <nav className="flex gap-4">
                        <NavLink to="/" className="hover:underline">Strona Glowna</NavLink>
                        <NavLink to="/playlists" className="hover:underline">Playlisty</NavLink>
                        <NavLink to="/contact" className="hover:underline">Kontakt</NavLink>
                    </nav>
                </div>
            </header>

            <main className="flex-1 mx-auto max-w-6xl px-4 py-8">
                <Outlet/>
            </main>

            <footer className="border-t border-slate-800 mt-8">
                <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-slate-400">
                    © {new Date().getFullYear()} Karczma pod Lutnią
                </div>
            </footer>
        </div>
    )
}