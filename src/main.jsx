import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import RootLayout from "./layout/RootLayout.jsx";
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";
import Playlists from "./pages/Playlists.jsx";
import { PlayerProvider } from "./context/PlayerContext.jsx";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/playlists", element: <Playlists /> },
      { path: "/contact", element: <Contact /> },   
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PlayerProvider>
    <RouterProvider router={router} />
    </PlayerProvider>
  </React.StrictMode>
);

