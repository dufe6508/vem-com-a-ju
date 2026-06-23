"use client";

import { motion } from "framer-motion";
import { Announcement, AnnouncementTag, AnnouncementTitle } from "@/components/ui/announcement";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];
const WA_ARRAIAL = "https://wa.me/55?text=Ol%C3%A1%20Ju!%20Quero%20saber%20sobre%20Arraial%20do%20Cabo%202027.";
const WA_GERAL   = "https://wa.me/55?text=Ol%C3%A1!%20Tenho%20interesse%20nas%20excurs%C3%B5es%20da%20Vem%20com%20a%20Ju!";
const HERO_IMG   = "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=900&q=85";

const trust = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1B4F8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Viagem segura",
    sub: "Seguro incluso em todos os pacotes",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1B4F8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "Tudo incluso",
    sub: "Sem cobrança extra no destino",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1B4F8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Grupo pequeno",
    sub: "Atenção personalizada da Ju",
  },
];

function WaIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.558 4.112 1.532 5.836L.057 23.853a.75.75 0 0 0 .904.924l6.283-1.635A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.714 9.714 0 0 1-4.952-1.352l-.355-.212-3.671.955.98-3.565-.232-.368A9.714 9.714 0 0 1 2.25 12c0-5.376 4.374-9.75 9.75-9.75S21.75 6.624 21.75 12 17.376 21.75 12 21.75z" />
    </svg>
  );
}

export default function HeroSection() {
  return (
    <div className="w-full max-w-7xl mx-auto px-5 sm:px-8">

      {/* ─── SPLIT GRID ──────────────────────────────────────────────────── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 xl:gap-16 items-center pt-8 pb-12 md:pt-12 md:pb-16">

        {/* LEFT — TEXT */}
        <div className="flex flex-col items-start">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.05 }}
            className="mb-5"
          >
            <Announcement
              variant="outline"
              className="border-[#1B4F8A]/20 bg-[#1B4F8A]/5 text-[#1B4F8A] w-fit"
            >
              <AnnouncementTag className="bg-[#F27C2E] text-white font-semibold">
                Novo
              </AnnouncementTag>
              <AnnouncementTitle className="text-sm font-medium text-[#1C1917]">
                Arraial do Cabo 2027 — vagas abertas
              </AnnouncementTitle>
            </Announcement>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: EASE, delay: 0.16 }}
            className="text-[2.6rem] sm:text-[3.2rem] xl:text-[3.8rem] font-black text-[#1C1917] leading-[1.04] tracking-[-0.04em] mb-4"
          >
            Colecionando<br />
            histórias,{" "}
            <span className="text-[#F27C2E]">eternizando</span>{" "}
            momentos
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: EASE, delay: 0.28 }}
            className="text-[#6B6460] text-base sm:text-lg leading-relaxed mb-8 max-w-md"
          >
            Excursões organizadas com carinho para você aproveitar cada detalhe sem preocupação.
          </motion.p>

          {/* ─ PRÓXIMA SAÍDA CARD ─ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.38 }}
            className="w-full bg-white rounded-2xl border border-[#E8E4DF] shadow-[0_4px_24px_rgba(27,79,138,0.08)] p-5 mb-6"
          >
            <p className="text-[10px] tracking-[0.14em] uppercase text-[#9B948F] font-semibold mb-3">
              Próxima saída
            </p>
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <p className="text-[#1C1917] font-black text-xl tracking-tight">Arraial do Cabo</p>
                <p className="text-[#6B6460] text-sm mt-0.5">Rio de Janeiro · 4 dias · Mar 2027</p>
              </div>
              <div className="text-right">
                <p className="text-[#F27C2E] font-black text-2xl tracking-tight">R$ 1.450</p>
                <p className="text-[#9B948F] text-xs">por pessoa</p>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-[#F0EDE8] flex items-center gap-3 flex-wrap">
              <a
                href={WA_ARRAIAL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#2E7D52] text-white font-bold text-sm px-5 py-3 rounded-xl hover:bg-[#256043] transition-colors shadow-[0_4px_16px_rgba(46,125,82,0.25)]"
              >
                <WaIcon />
                Reservar agora
              </a>
              <a
                href="#arraial"
                className="text-[#1B4F8A] font-semibold text-sm hover:underline underline-offset-2"
              >
                Ver detalhes →
              </a>
            </div>
          </motion.div>

          {/* ─ STATS ─ */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.55, ease: EASE, delay: 0.52 }}
            className="flex items-center gap-6"
          >
            {[
              { value: "+200", label: "viajantes felizes" },
              { value: "5 ★", label: "no Google" },
              { value: "100%", label: "tudo incluso" },
            ].map((s, i) => (
              <div key={s.label} className="flex items-center gap-5">
                {i > 0 && <div className="w-px h-8 bg-[#E8E4DF]" />}
                <div>
                  <p className="text-[#1C1917] font-extrabold text-base leading-none tracking-tight">{s.value}</p>
                  <p className="text-[#9B948F] text-[11px] mt-0.5">{s.label}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT — PHOTO */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.85, ease: EASE, delay: 0.1 }}
          className="relative order-first md:order-last"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-[0_24px_80px_rgba(27,79,138,0.18)] aspect-[4/5] md:aspect-[5/6]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={HERO_IMG}
              alt="Arraial do Cabo — praia cristalina"
              className="w-full h-full object-cover"
              fetchPriority="high"
            />
            {/* Gradient bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            {/* Location badge */}
            <div className="absolute top-5 left-5">
              <span className="inline-flex items-center gap-1.5 bg-white/95 backdrop-blur-sm text-[#1C1917] text-xs font-semibold px-3 py-2 rounded-full shadow-sm">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#F27C2E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Arraial do Cabo, RJ
              </span>
            </div>

            {/* Photo bottom info */}
            <div className="absolute bottom-5 left-5 right-5">
              <div className="bg-white/90 backdrop-blur-md rounded-2xl px-5 py-4 flex items-center justify-between gap-3">
                <div>
                  <p className="text-[#1C1917] font-black text-base tracking-tight">Caribe Brasileiro</p>
                  <p className="text-[#6B6460] text-xs mt-0.5">Águas cristalinas e areia branca</p>
                </div>
                <div className="flex items-center gap-1 bg-[#F27C2E]/10 px-3 py-2 rounded-xl">
                  <span className="text-[#F27C2E] font-black text-sm">4.9</span>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="#F27C2E">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Floating badge */}
          <div className="absolute -top-4 -right-4 hidden md:flex bg-[#1B4F8A] text-white px-4 py-3 rounded-2xl shadow-xl flex-col items-center gap-0.5">
            <span className="font-black text-xl leading-none">03</span>
            <span className="text-white/70 text-[10px] leading-none">noites</span>
          </div>
        </motion.div>
      </div>

      {/* ─── TRUST BAR ───────────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: EASE, delay: 0.6 }}
        className="grid grid-cols-1 sm:grid-cols-3 gap-0 border border-[#E8E4DF] rounded-2xl bg-white divide-y sm:divide-y-0 sm:divide-x divide-[#E8E4DF] mb-2 shadow-[0_2px_16px_rgba(0,0,0,0.04)]"
      >
        {trust.map((t) => (
          <div key={t.title} className="flex items-center gap-4 px-6 py-4">
            <div className="w-10 h-10 rounded-xl bg-[#1B4F8A]/8 flex items-center justify-center shrink-0">
              {t.icon}
            </div>
            <div>
              <p className="text-[#1C1917] font-bold text-sm">{t.title}</p>
              <p className="text-[#9B948F] text-xs mt-0.5">{t.sub}</p>
            </div>
          </div>
        ))}
      </motion.div>

    </div>
  );
}
