import { Mic2, Instagram, Youtube, Send, MessageCircle, Music2 } from "lucide-react";
import { studio } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();
  const socials = [
    { icon: MessageCircle, href: studio.whatsapp, label: "WhatsApp" },
    { icon: Send, href: studio.telegram, label: "Telegram" },
    { icon: Instagram, href: studio.instagram, label: "Instagram" },
    { icon: Music2, href: studio.tiktok, label: "TikTok" },
    { icon: Youtube, href: studio.youtube, label: "YouTube" },
  ];
  return (
    <footer className="pt-10 pb-10">
      <div className="mx-auto max-w-6xl px-4">
        <div className="glass rounded-2xl px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="inline-flex w-8 h-8 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 via-pink-500 to-cyan-400">
              <Mic2 size={15} className="text-white" strokeWidth={2.5} />
            </span>
            <span className="font-[family-name:var(--font-display-g)] font-bold neon-text">Nurmat_MN</span>
            <span className="text-zinc-500 text-sm ml-2 hidden sm:inline">· {studio.tagline}</span>
          </div>
          <div className="flex items-center gap-2">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="inline-flex w-9 h-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-zinc-300 hover:text-white hover:bg-white/10 transition"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
          <div className="text-xs text-zinc-500">© {year} {studio.name}</div>
        </div>
      </div>
    </footer>
  );
}
