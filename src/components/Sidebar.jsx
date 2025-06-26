import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-1/6 bg-gray-800 text-white flex flex-col items-center py-6">
      <div className="mb-12 text-xl font-bold">
        LOGO
      </div>
      <nav className="space-y-6 text-lg">
        <Link to="/postagens" className="hover:text-gray-300">Postagens</Link>
        <Link to="/documentos" className="hover:text-gray-300">Documentos</Link>
        <Link to="/chat" className="hover:text-gray-300">Chat</Link>
      </nav>
    </div>
  );
}
