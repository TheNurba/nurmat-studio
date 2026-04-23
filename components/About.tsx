"use client";
import { motion } from "framer-motion";
import { stats, studio } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-10 md:gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm uppercase tracking-[0.2em] text-cyan-300/80 mb-3">Студия жөнүндө</p>
          <h2 className="font-[family-name:var(--font-display-g)] text-3xl sm:text-5xl font-bold tracking-tight leading-[1.1]">
            <span className="neon-text">{studio.owner}</span><br />
            — үн устасы
          </h2>
          <p className="mt-6 text-zinc-300 leading-relaxed">
            Нурмат Мирзатов үн жаздыруу, сведение жана музыка олтургузуу
            иштерин <b className="text-white">5 жылдан бери</b> иштеп келет.
            Таанымал ырчылар менен иштешип, алардын трегин студиялык
            деңгээлге алып чыккан.
          </p>
          <p className="mt-4 text-zinc-400 leading-relaxed">
            Ар бир долбоорго жеке мамиле, детальга көңүл буруу жана
            заманбап продакшн — бул студиянын негизги баалуулугу.
          </p>
        </motion.div>

        <div className="grid grid-cols-3 gap-3 sm:gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass hover-glow rounded-2xl p-4 sm:p-6 text-center"
            >
              <div className="font-[family-name:var(--font-display-g)] text-2xl sm:text-4xl font-bold neon-text">
                {s.value}
              </div>
              <div className="mt-2 text-[11px] sm:text-xs text-zinc-400 leading-snug">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
