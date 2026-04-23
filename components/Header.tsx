"use client";
import { Mic2, MessageCircle } from "lucide-react";
import { studio } from "@/lib/data";

export default function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-6xl px-4 pt-4">
        <div className="glass-strong rounded-2xl px-4 sm:px-6 py-3 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2 group">
            <span className="relative inline-flex w-9 h-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 via-pink-500 to-cyan-400 shadow-lg shadow-violet-500/30">
              <Mic2 size={18} className="text-white" strokeWidth={2.5} />
            </span>
            <span className="font-[family-name:var(--font-display-g)] text-lg sm:text-xl font-bold tracking-tight neon-text">
              Nurmat_MN
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-7 text-sm text-zinc-300">
            <a href="#services" className="hover:text-white transition">Кызматтар</a>
            <a href="#about" className="hover:text-white transition">Студия</a>
            <a href="#equipment" className="hover:text-white transition">ТБ</a>
            <a href="#contact" className="hover:text-white transition">Байланыш</a>
          </nav>
          <a
            href={studio.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl px-3.5 sm:px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-violet-600 to-pink-500 hover:from-violet-500 hover:to-pink-400 transition shadow-lg shadow-violet-500/30"
          >
            <MessageCircle size={16} />
            <span className="hidden sm:inline">Жазылуу</span>
          </a>
        </div>
      </div>
    </header>
  );
}
