"use client";
import { motion } from "framer-motion";
import { MessageCircle, ArrowDown, Sparkles } from "lucide-react";
import { studio } from "@/lib/data";

function Waveform() {
  const bars = Array.from({ length: 64 });
  return (
    <div className="flex items-end justify-center gap-[3px] sm:gap-1 h-24 sm:h-32">
      {bars.map((_, i) => {
        const delay = (i % 12) * 0.08;
        const height = 20 + ((i * 37) % 80);
        return (
          <span
            key={i}
            className="w-[3px] sm:w-1 rounded-full bg-gradient-to-t from-violet-500 via-pink-500 to-cyan-400 origin-bottom"
            style={{
              height: `${height}%`,
              animation: `wave 1.6s ease-in-out ${delay}s infinite`,
              opacity: 0.7,
            }}
          />
        );
      })}
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative pt-36 sm:pt-44 pb-20 sm:pb-28 grain">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs sm:text-sm text-zinc-300 mb-8"
        >
          <Sparkles size={14} className="text-cyan-300" />
          5+ жыл тажрыйба · Таанымал ырчылар менен
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-[family-name:var(--font-display-g)] text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.05]"
        >
          Үнүңдү <span className="neon-text">студиялык</span><br />
          сапатта жаздыр
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-6 max-w-2xl mx-auto text-base sm:text-lg text-zinc-400"
        >
          {studio.name} — Бишкектеги профессионалдык жазуу, аранжировка жана
          сведение студиясы. Идеяңды даяр хитке айлантабыз.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <a
            href={studio.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl px-6 py-3.5 font-semibold text-white bg-gradient-to-r from-violet-600 to-pink-500 hover:from-violet-500 hover:to-pink-400 transition shadow-xl shadow-violet-500/30 neon-ring"
          >
            <MessageCircle size={18} />
            WhatsApp аркылуу жазылуу
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2 rounded-xl px-6 py-3.5 font-medium text-white glass hover:bg-white/10 transition"
          >
            Кызматтарды көрүү
            <ArrowDown size={16} />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-16 sm:mt-20"
        >
          <Waveform />
        </motion.div>
      </div>
    </section>
  );
}
