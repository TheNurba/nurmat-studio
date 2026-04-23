"use client";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { studio } from "@/lib/data";

export default function CTA() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[2rem] glass-strong p-10 sm:p-16 text-center"
        >
          <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-violet-500/20 blur-3xl" />
          <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-cyan-400/20 blur-3xl" />
          <div className="relative">
            <h3 className="font-[family-name:var(--font-display-g)] text-3xl sm:text-5xl font-bold tracking-tight">
              Трегиңди <span className="neon-text">бүгүнкү күндөн</span> баштап жаздырсаңчы?
            </h3>
            <p className="mt-5 text-zinc-400 max-w-xl mx-auto">
              Бир кыска билдирүү — жана биз сен үчүн убакыт бөлөбүз.
              WhatsApp эң ыңгайлуу.
            </p>
            <a
              href={studio.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-xl px-7 py-4 font-semibold text-white bg-gradient-to-r from-violet-600 to-pink-500 hover:from-violet-500 hover:to-pink-400 transition shadow-xl shadow-violet-500/40 neon-ring"
            >
              <MessageCircle size={18} />
              WhatsApp жазуу
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
