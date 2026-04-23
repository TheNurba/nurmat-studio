"use client";
import { motion } from "framer-motion";
import { Mic, Cable, MonitorSpeaker, Headphones, Music, Waves } from "lucide-react";
import { equipment } from "@/lib/data";

const groupIcons: Record<string, any> = {
  "Микрофондор": Mic,
  "Аудио интерфейс": Cable,
  "DAW": Music,
  "Мониторлор": MonitorSpeaker,
  "Наушниктер": Headphones,
  "Акустика": Waves,
};

export default function TechBase() {
  return (
    <section id="equipment" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.2em] text-pink-300/80 mb-3">Техникалык база</p>
          <h2 className="font-[family-name:var(--font-display-g)] text-3xl sm:text-5xl font-bold tracking-tight">
            Профессионалдык <span className="neon-text">жабдуулар</span>
          </h2>
          <p className="mt-4 text-zinc-400">
            Студия заманбап аудио-техника менен толугу менен жабдылган —
            жазуудан баштап мастерингге чейин бардыгы бир жерде.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {equipment.map((g, i) => {
            const Icon = groupIcons[g.group] ?? Mic;
            return (
              <motion.div
                key={g.group}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
                className="glass hover-glow rounded-2xl p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex w-10 h-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/20 to-cyan-400/20 border border-white/10">
                    <Icon size={18} className="text-cyan-300" />
                  </span>
                  <h3 className="font-[family-name:var(--font-display-g)] text-lg font-semibold">
                    {g.group}
                  </h3>
                </div>
                <ul className="space-y-1.5">
                  {g.items.map((it) => (
                    <li key={it} className="text-sm text-zinc-400 flex items-start gap-2">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-violet-400 shrink-0" />
                      {it}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
