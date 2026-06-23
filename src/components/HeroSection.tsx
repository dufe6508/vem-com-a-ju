"use client";

import { motion } from "framer-motion";

const WHATSAPP_GERAL =
  "https://wa.me/55?text=Ol%C3%A1%2C+tenho+interesse+nos+pacotes+da+Vem+com+a+Ju!";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const categories = ["Praia", "Serra", "Cultural", "Religioso", "Internacional"];

function WhatsAppIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.558 4.112 1.532 5.836L.057 23.853a.75.75 0 0 0 .904.924l6.283-1.635A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.714 9.714 0 0 1-4.952-1.352l-.355-.212-3.671.955.98-3.565-.232-.368A9.714 9.714 0 0 1 2.25 12c0-5.376 4.374-9.75 9.75-9.75S21.75 6.624 21.75 12 17.376 21.75 12 21.75z" />
    </svg>
  );
}

export default function HeroSection() {
  return (
    <>
      {/* ── MOBILE ──────────────────────────────────────────────────────── */}
      {/* Foto visível no topo, texto ancorado embaixo */}
      <div className="md:hidden relative z-10 flex flex-col justify-end w-full min-h-screen px-6 pb-14 pt-32">

        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE, delay: 0.05 }}
          className="inline-flex w-fit items-center gap-2 border border-white/30 bg-white/10 backdrop-blur-sm text-white/90 text-xs font-medium px-3 py-1.5 rounded-full mb-5"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#F27C2E] shrink-0" />
          Colecionando histórias, eternizando momentos
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: EASE, delay: 0.2 }}
          className="text-[2.55rem] font-extrabold text-white leading-[1.1] mb-8 [text-shadow:0_2px_20px_rgba(0,0,0,0.7)]"
        >
          Descubra o Brasil<br />
          <span className="text-[#F27C2E]">com quem cuida<br />de você</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: EASE, delay: 0.38 }}
          className="flex flex-col gap-3"
        >
          <a
            href="#pacotes"
            className="flex items-center justify-center bg-[#F27C2E] text-white font-bold px-6 py-4 rounded-2xl text-lg shadow-xl"
          >
            Ver Pacotes
          </a>
          <a
            href={WHATSAPP_GERAL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 text-white/85 font-semibold text-base py-2"
          >
            <WhatsAppIcon size={18} />
            Falar com a Ju no WhatsApp
          </a>
        </motion.div>
      </div>

      {/* ── DESKTOP ─────────────────────────────────────────────────────── */}
      {/* Editorial: texto à esquerda, foto aparece à direita */}
      <div className="hidden md:flex relative z-10 min-h-screen w-full">
        <div className="max-w-6xl mx-auto px-8 flex items-center w-full">
          <div className="max-w-[520px] pt-28 pb-20">

            <motion.span
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: EASE, delay: 0.05 }}
              className="inline-flex items-center gap-2 border border-white/25 bg-white/10 backdrop-blur-sm text-white/90 text-sm font-medium px-5 py-2 rounded-full mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-[#F27C2E] shrink-0" />
              Colecionando histórias, eternizando momentos
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.2 }}
              className="text-6xl lg:text-7xl xl:text-[5.25rem] font-extrabold text-white leading-[1.05] mb-7 [text-shadow:0_4px_28px_rgba(0,0,0,0.45)]"
            >
              Descubra<br />o Brasil<br />
              <span className="text-[#F27C2E]">com quem<br />cuida de você</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.38 }}
              className="text-white/85 text-lg leading-relaxed mb-10 [text-shadow:0_1px_10px_rgba(0,0,0,0.5)]"
            >
              De praias paradisíacas a destinos históricos, cada excursão é
              planejada com conforto, segurança e aquele toque de família que
              só a Ju oferece.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: EASE, delay: 0.52 }}
              className="flex gap-4 mb-10"
            >
              <a
                href="#pacotes"
                className="inline-flex items-center justify-center bg-[#F27C2E] text-white font-bold px-9 py-4 rounded-full text-lg hover:bg-[#d9691c] transition-colors shadow-lg"
              >
                Ver Pacotes
              </a>
              <a
                href={WHATSAPP_GERAL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white/15 backdrop-blur-sm border-2 border-white/40 text-white font-bold px-8 py-4 rounded-full text-lg hover:bg-white/25 transition-colors"
              >
                <WhatsAppIcon size={20} />
                Falar com a Ju
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: EASE, delay: 0.65 }}
              className="flex flex-wrap gap-2"
            >
              {categories.map((cat) => (
                <span
                  key={cat}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 text-white/75 text-sm font-medium px-4 py-1.5 rounded-full"
                >
                  {cat}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
