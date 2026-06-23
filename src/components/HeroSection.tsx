"use client";

import { motion } from "framer-motion";
import { Announcement, AnnouncementTag, AnnouncementTitle } from "@/components/ui/announcement";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];
const WA = "https://wa.me/55?text=Ol%C3%A1%21+Tenho+interesse+nas+excurs%C3%B5es+da+Vem+com+a+Ju%21";

const stats = [
  { value: "+200", label: "viajantes" },
  { value: "5 ★", label: "no Google" },
  { value: "100%", label: "tudo incluso" },
];

export default function HeroSection() {
  return (
    <>
      {/* ─── MOBILE ─── */}
      <div className="md:hidden relative z-10 flex flex-col justify-end min-h-dvh px-6 pb-14">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: EASE, delay: 0.05 }}
          className="mb-5"
        >
          <Announcement
            variant="outline"
            className="border-white/20 bg-white/10 backdrop-blur-md text-white/90 w-fit"
          >
            <AnnouncementTag className="bg-[#F27C2E] text-white font-semibold">
              Novo
            </AnnouncementTag>
            <AnnouncementTitle className="text-xs">
              Arraial do Cabo 2027 — vagas abertas
            </AnnouncementTitle>
          </Announcement>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: EASE, delay: 0.18 }}
          className="text-[2.65rem] font-black text-white leading-[1.04] tracking-[-0.04em] mb-4"
        >
          Colecionando<br />
          histórias,<br />
          <span className="text-[#F27C2E]">eternizando</span><br />
          momentos
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.32 }}
          className="text-white/65 text-[15px] leading-relaxed mb-8 max-w-[300px]"
        >
          Excursões organizadas com carinho para você aproveitar cada detalhe.
        </motion.p>

        <motion.a
          href="#pacotes"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.44 }}
          className="flex items-center justify-center gap-2 bg-[#F27C2E] text-white font-bold text-base px-6 py-4 rounded-2xl w-full shadow-[0_8px_24px_rgba(242,124,46,0.4)] active:scale-[0.98] transition-transform"
        >
          Ver próximas viagens
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.2">
            <path d="M4 10h12M10 4l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.a>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.55, ease: EASE, delay: 0.6 }}
          className="flex items-center gap-5 mt-6 pt-5 border-t border-white/10"
        >
          {stats.map((s, i) => (
            <div key={s.label} className="flex items-center gap-4">
              {i > 0 && <div className="w-px h-7 bg-white/15" />}
              <div>
                <p className="text-white font-extrabold text-[15px] leading-none tracking-tight">{s.value}</p>
                <p className="text-white/40 text-[10px] mt-0.5 leading-none">{s.label}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ─── DESKTOP ─── */}
      <div className="hidden md:flex flex-col justify-center min-h-dvh relative z-10 pl-16 xl:pl-24 pr-[48%] py-28">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: EASE, delay: 0.08 }}
          className="mb-7"
        >
          <Announcement
            variant="outline"
            className="border-white/20 bg-white/10 backdrop-blur-md text-white/90 w-fit"
          >
            <AnnouncementTag className="bg-[#F27C2E] text-white font-semibold">
              Novo
            </AnnouncementTag>
            <AnnouncementTitle className="text-sm">
              Arraial do Cabo 2027 — vagas abertas
            </AnnouncementTitle>
          </Announcement>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: EASE, delay: 0.2 }}
          className="text-[3.8rem] xl:text-[4.8rem] font-black text-white leading-[1.02] tracking-[-0.045em] mb-5"
        >
          Colecionando<br />
          histórias,<br />
          <span className="text-[#F27C2E]">eternizando</span><br />
          momentos
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.38 }}
          className="text-white/65 text-[17px] leading-relaxed mb-10 max-w-[380px]"
        >
          Excursões organizadas com carinho para você aproveitar cada detalhe sem preocupação.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: EASE, delay: 0.52 }}
          className="flex items-center gap-3 flex-wrap"
        >
          <a
            href="#pacotes"
            className="inline-flex items-center gap-2 bg-[#F27C2E] text-white font-bold text-[15px] px-7 py-4 rounded-2xl hover:bg-[#d9691c] shadow-[0_8px_24px_rgba(242,124,46,0.4)] transition-all"
          >
            Ver próximas viagens
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path d="M4 10h12M10 4l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold text-[15px] px-6 py-4 rounded-2xl hover:bg-white/[0.18] transition-all"
          >
            Falar com a Ju
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.55, ease: EASE, delay: 0.7 }}
          className="flex items-center mt-12 pt-10 border-t border-white/10"
        >
          {stats.map((s, i) => (
            <div key={s.label} className="flex items-center">
              {i > 0 && <div className="w-px h-10 bg-white/12 mx-8" />}
              <div>
                <p className="text-white font-black text-xl leading-none tracking-tight">{s.value}</p>
                <p className="text-white/40 text-xs mt-1 leading-none">{s.label}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </>
  );
}
