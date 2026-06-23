"use client";

import { motion } from "framer-motion";
import { Announcement, AnnouncementTag, AnnouncementTitle } from "@/components/ui/announcement";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];
const WA = "https://wa.me/55?text=Ol%C3%A1%21+Quero+saber+sobre+as+excurs%C3%B5es+da+Vem+com+a+Ju.";
const HERO_IMG = "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=1400&q=85";

const departures = [
  { date: "Mar 2027", label: "Arraial do Cabo, RJ", open: true },
  { date: "Jun 2027", label: "Destino a confirmar",  open: false },
  { date: "Out 2027", label: "Destino a confirmar",  open: false },
];

const trust = [
  {
    title: "Transporte semi leito",
    sub: "Ar-condicionado e lanche incluso",
    icon: (
      <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#1B4F8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" rx="1"/>
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
        <circle cx="5.5" cy="18.5" r="2.5"/>
        <circle cx="18.5" cy="18.5" r="2.5"/>
      </svg>
    ),
  },
  {
    title: "Tudo incluso",
    sub: "Sem cobrança extra no destino",
    icon: (
      <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#1B4F8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
  {
    title: "Acompanhamento da Ju",
    sub: "Presente em cada excursão",
    icon: (
      <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#1B4F8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
        <circle cx="12" cy="7" r="4"/>
      </svg>
    ),
  },
];

function WaIcon({ size = 17 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.558 4.112 1.532 5.836L.057 23.853a.75.75 0 0 0 .904.924l6.283-1.635A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.714 9.714 0 0 1-4.952-1.352l-.355-.212-3.671.955.98-3.565-.232-.368A9.714 9.714 0 0 1 2.25 12c0-5.376 4.374-9.75 9.75-9.75S21.75 6.624 21.75 12 17.376 21.75 12 21.75z"/>
    </svg>
  );
}

export default function HeroSection() {
  return (
    <>
      {/* ══ SPLIT HERO ══════════════════════════════════════════════════════ */}
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-dvh">

        {/* ─── LEFT: CREAM + GRAIN ───────────────────────────────────────── */}
        <div className="grain bg-[#FBF9F7] relative flex flex-col justify-center
                        px-6 sm:px-10 lg:px-16
                        pt-28 pb-14 md:pt-32 md:pb-20">

          {/* Subtle radial glow anchoring the top-left */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-0 left-0 w-[500px] h-[500px] opacity-[0.07]"
            style={{ background: "radial-gradient(circle at 0% 0%, #1B4F8A 0%, transparent 70%)" }}
          />

          {/* Announcement pill */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.06 }}
            className="mb-6"
          >
            <Announcement
              variant="outline"
              className="border-[#1B4F8A]/15 bg-[#1B4F8A]/5 w-fit"
            >
              <AnnouncementTag className="bg-[#F27C2E] text-white text-[11px] font-bold">
                2027
              </AnnouncementTag>
              <AnnouncementTitle className="text-sm text-[#1C1917] font-medium">
                Saídas abertas para o ano
              </AnnouncementTitle>
            </Announcement>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.18 }}
            className="text-[2.6rem] sm:text-[3.2rem] xl:text-[3.75rem] font-black text-[#1C1917]
                       leading-[1.04] tracking-[-0.04em] mb-4"
            style={{ textWrap: "pretty" } as React.CSSProperties}
          >
            Colecionando<br />
            histórias,{" "}
            <span className="text-[#F27C2E]">eternizando</span>
            <br />momentos
          </motion.h1>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: EASE, delay: 0.3 }}
            className="text-[#6B6460] text-base leading-[1.7] mb-8 max-w-[360px]"
          >
            A Ju organiza cada detalhe pessoalmente — transporte, hospedagem e passeios.
            Você só aproveita.
          </motion.p>

          {/* ─ Departure list widget ─ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.42 }}
            className="bg-white rounded-2xl border border-[#E4E0DA]
                       shadow-[0_4px_32px_rgba(27,79,138,0.10)] p-5 mb-7"
          >
            <p className="text-[10px] tracking-[0.15em] uppercase text-[#9B948F] font-bold mb-4">
              Próximas saídas · 2027
            </p>

            <ul className="space-y-3.5 mb-5">
              {departures.map((d, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span
                    className={`w-2 h-2 rounded-full shrink-0 mt-px ${
                      d.open ? "bg-[#2E7D52]" : "bg-[#D4CFC9]"
                    }`}
                  />
                  <span className="text-[13px] font-semibold text-[#9B948F] w-[70px] shrink-0 tabular-nums">
                    {d.date}
                  </span>
                  <span
                    className={`text-[13px] flex-1 ${
                      d.open ? "text-[#1C1917] font-semibold" : "text-[#B5B0AA]"
                    }`}
                  >
                    {d.label}
                  </span>
                  {d.open && (
                    <span className="text-[10px] font-bold text-[#2E7D52] bg-[#2E7D52]/10 px-2.5 py-1 rounded-full shrink-0">
                      Aberta
                    </span>
                  )}
                </li>
              ))}
            </ul>

            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 w-full bg-[#1B4F8A] text-white
                         font-bold text-sm px-6 py-3.5 rounded-xl cursor-pointer
                         hover:bg-[#143d6b] active:scale-[0.98] transition-all
                         shadow-[0_4px_18px_rgba(27,79,138,0.28)]"
            >
              <WaIcon />
              Garantir minha vaga
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: EASE, delay: 0.58 }}
            className="flex items-center gap-5"
          >
            {[
              { v: "+200", l: "viajantes" },
              { v: "5 ★",  l: "no Google" },
              { v: "100%", l: "tudo incluso" },
            ].map((s, i) => (
              <div key={s.l} className="flex items-center gap-4">
                {i > 0 && <div className="w-px h-7 bg-[#DDD9D4]" />}
                <div>
                  <p className="text-[#1C1917] font-extrabold text-[14px] leading-none tracking-tight tabular-nums">
                    {s.v}
                  </p>
                  <p className="text-[#9B948F] text-[10.5px] mt-0.5">{s.l}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ─── RIGHT: BLUE + PHOTO ───────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, ease: EASE }}
          className="relative bg-[#1B4F8A] overflow-hidden min-h-[52dvh] md:min-h-0 order-first md:order-last"
        >
          {/* Photo at reduced opacity so blue shows through */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={HERO_IMG}
            alt="Destinos de excursão pelo Brasil"
            className="absolute inset-0 w-full h-full object-cover object-[center_28%] opacity-60"
            fetchPriority="high"
          />

          {/* Left edge blend to cream → smooth transition between columns */}
          <div
            aria-hidden="true"
            className="absolute inset-y-0 left-0 w-16 hidden md:block"
            style={{ background: "linear-gradient(to right, rgba(251,249,247,0.08), transparent)" }}
          />

          {/* Bottom gradient for text legibility */}
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{ background: "linear-gradient(to top, rgba(13,39,69,0.88) 0%, rgba(13,39,69,0.15) 45%, transparent 70%)" }}
          />

          {/* Top-right badge */}
          <div className="absolute top-6 right-6 md:top-8 md:right-8">
            <div className="flex items-center gap-1.5 bg-white/12 backdrop-blur-md border border-white/18
                            text-white text-[11px] font-semibold px-3.5 py-2 rounded-full">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              Destinos pelo Brasil
            </div>
          </div>

          {/* Bottom brand card */}
          <div className="absolute bottom-5 left-5 right-5 md:bottom-8 md:left-8 md:right-8">
            <div className="bg-white/10 backdrop-blur-xl border border-white/14 rounded-2xl px-5 py-4">
              <p className="text-white/50 text-[10px] tracking-[0.12em] uppercase font-semibold mb-1.5">
                Vem com a Ju · Excursões
              </p>
              <p className="text-white font-bold text-lg leading-snug tracking-tight">
                Grupos pequenos,{" "}
                <span className="text-[#F5A855]">experiências grandes</span>
              </p>
            </div>
          </div>
        </motion.div>

      </div>

      {/* ══ TRUST BAR ═══════════════════════════════════════════════════════ */}
      <div className="bg-white border-b border-[#EAE6E1] shadow-[0_2px_8px_rgba(0,0,0,0.03)]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[#EAE6E1]">
            {trust.map((t, i) => (
              <div key={i} className="flex items-center gap-4 py-4 sm:px-8 first:sm:pl-0 last:sm:pr-0">
                <div className="w-9 h-9 rounded-xl bg-[#1B4F8A]/8 flex items-center justify-center shrink-0">
                  {t.icon}
                </div>
                <div>
                  <p className="text-[#1C1917] font-bold text-sm">{t.title}</p>
                  <p className="text-[#9B948F] text-xs mt-0.5">{t.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
