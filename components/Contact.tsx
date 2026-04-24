"use client";
import { motion } from "framer-motion";
import { Phone, MessageCircle, Send, Instagram, Youtube, MapPin, Clock, ExternalLink, Music2 } from "lucide-react";
import { studio } from "@/lib/data";

const items = [
  { icon: Phone, label: "Телефон", value: studio.phoneDisplay, href: `tel:${studio.phoneRaw}` },
  { icon: MessageCircle, label: "WhatsApp", value: studio.phoneDisplay, href: studio.whatsapp, accent: "from-emerald-500 to-teal-400" },
  { icon: Send, label: "Telegram", value: studio.telegramHandle, href: studio.telegram, accent: "from-sky-500 to-cyan-400" },
  { icon: Instagram, label: "Instagram", value: studio.instagramHandle, href: studio.instagram, accent: "from-fuchsia-500 to-pink-500" },
  { icon: Music2, label: "TikTok", value: studio.tiktokHandle, href: studio.tiktok, accent: "from-zinc-300 to-zinc-500" },
  { icon: Youtube, label: "YouTube", value: studio.youtubeHandle, href: studio.youtube, accent: "from-red-500 to-orange-500" },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.2em] text-violet-300/80 mb-3">Байланыш</p>
          <h2 className="font-[family-name:var(--font-display-g)] text-3xl sm:text-5xl font-bold tracking-tight">
            Келиңиз, <span className="neon-text">студияга</span>
          </h2>
        </div>

        <div className="mt-10 grid lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass rounded-2xl p-5 sm:p-6 flex gap-4"
            >
              <span className="inline-flex w-11 h-11 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-pink-500 shrink-0">
                <MapPin size={20} className="text-white" />
              </span>
              <div>
                <div className="text-xs uppercase tracking-wider text-zinc-400">Дарек</div>
                <div className="mt-1 text-white font-medium">{studio.address}</div>
                <div className="mt-1 text-sm text-zinc-400">{studio.landmark}</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="glass rounded-2xl p-5 sm:p-6 flex gap-4"
            >
              <span className="inline-flex w-11 h-11 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-violet-500 shrink-0">
                <Clock size={20} className="text-white" />
              </span>
              <div>
                <div className="text-xs uppercase tracking-wider text-zinc-400">Иш убактысы</div>
                <div className="mt-1 text-white font-medium">{studio.hours}</div>
              </div>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-3">
              {items.map((it, i) => {
                const Icon = it.icon;
                return (
                  <motion.a
                    key={it.label}
                    href={it.href}
                    target={it.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.05 + i * 0.04 }}
                    className="glass hover-glow rounded-2xl p-4 flex items-center gap-3 group"
                  >
                    <span className={`inline-flex w-10 h-10 items-center justify-center rounded-xl bg-gradient-to-br ${it.accent ?? "from-violet-500 to-pink-500"}`}>
                      <Icon size={18} className="text-white" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="text-[11px] uppercase tracking-wider text-zinc-400">{it.label}</div>
                      <div className="truncate text-white text-sm font-medium">{it.value}</div>
                    </div>
                    <ExternalLink size={14} className="text-zinc-500 group-hover:text-white transition" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-3xl p-3 relative overflow-hidden min-h-[380px] lg:min-h-full"
          >
            <iframe
              src={studio.mapGoogleEmbed}
              title="Карта — Nurmat_MN студия"
              className="w-full h-full min-h-[360px] rounded-2xl border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <a
              href={studio.map2gis}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-5 left-5 right-5 sm:left-auto sm:right-5 inline-flex items-center justify-center gap-2 rounded-xl bg-black/70 backdrop-blur px-4 py-2.5 text-sm font-medium text-white border border-white/10 hover:bg-black/85 transition"
            >
              2GIS'те ачуу <ExternalLink size={14} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
