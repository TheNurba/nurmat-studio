"use client";
import { motion } from "framer-motion";
import { Mic, Music4, Check } from "lucide-react";
import { services, extraServices, studio } from "@/lib/data";

const icons = [Mic, Music4];

export default function Services() {
  return (
    <section id="services" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.2em] text-violet-300/80 mb-3">Кызматтар</p>
          <h2 className="font-[family-name:var(--font-display-g)] text-3xl sm:text-5xl font-bold tracking-tight">
            Идеядан <span className="neon-text">даяр трекке</span> чейин
          </h2>
          <p className="mt-4 text-zinc-400">
            Студиябызда тажрыйбалуу продюсер менен сапаттуу жабдуулар сиздин
            долбооруңузду кесиптик деңгээлге чыгарат.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
          {services.map((s, i) => {
            const Icon = icons[i] ?? Mic;
            return (
              <motion.article
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass hover-glow rounded-3xl p-7 sm:p-8 relative overflow-hidden"
              >
                <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-gradient-to-br from-violet-500/30 to-pink-500/0 blur-3xl pointer-events-none" />
                <div className="relative">
                  <div className="inline-flex w-12 h-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500/20 to-pink-500/20 border border-white/10 mb-6">
                    <Icon size={22} className="text-violet-300" />
                  </div>
                  <h3 className="font-[family-name:var(--font-display-g)] text-2xl sm:text-3xl font-bold tracking-tight">
                    {s.title}
                  </h3>
                  <div className="mt-3 text-2xl sm:text-3xl font-bold neon-text">
                    {s.price}
                  </div>
                  <p className="mt-4 text-zinc-400 leading-relaxed">{s.desc}</p>
                </div>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-8 glass rounded-2xl p-5 sm:p-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-sm text-zinc-400 mr-2">Кошумча кызматтар:</span>
            {extraServices.map((x) => (
              <span
                key={x}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-zinc-200"
              >
                <Check size={13} className="text-cyan-300" />
                {x}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-10 text-center">
          <a
            href={studio.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-zinc-300 hover:text-white transition"
          >
            Так баа жана убакыт үчүн WhatsApp аркылуу жазыңыз →
          </a>
        </div>
      </div>
    </section>
  );
}
