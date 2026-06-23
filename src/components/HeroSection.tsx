"use client";

import { motion } from "framer-motion";

const WHATSAPP_GERAL =
  "https://wa.me/55?text=Ol%C3%A1%2C+tenho+interesse+nos+pacotes+da+Vem+com+a+Ju!";

const categories = ["Praia", "Serra", "Cultural", "Religioso", "Internacional"];

function WhatsAppIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="white">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.558 4.112 1.532 5.836L.057 23.853a.75.75 0 0 0 .904.924l6.283-1.635A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.714 9.714 0 0 1-4.952-1.352l-.355-.212-3.671.955.98-3.565-.232-.368A9.714 9.714 0 0 1 2.25 12c0-5.376 4.374-9.75 9.75-9.75S21.75 6.624 21.75 12 17.376 21.75 12 21.75z" />
    </svg>
  );
}

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: EASE, delay },
  }),
};

const fadeDown = {
  hidden: { opacity: 0, y: -14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE, delay: 0.05 },
  },
};

export default function HeroSection() {
  return (
    <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 pt-36 pb-36 flex flex-col items-center">
      {/* Slogan pill */}
      <motion.div
        variants={fadeDown}
        initial="hidden"
        animate="show"
        className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/25 text-white text-sm font-medium px-5 py-2 rounded-full mb-8"
      >
        <span className="w-2 h-2 rounded-full bg-[#F27C2E] shrink-0" />
        Colecionando histórias, eternizando momentos
      </motion.div>

      {/* Headline */}
      <motion.h1
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={0.2}
        className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white leading-[1.05] mb-6 tracking-tight [text-shadow:0_4px_24px_rgba(0,0,0,0.5)]"
      >
        Descubra o Brasil<br />
        <span className="text-[#F27C2E]">com quem cuida</span><br />
        de você
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={0.4}
        className="text-white/90 font-medium text-lg md:text-xl max-w-xl mb-10 leading-relaxed [text-shadow:0_2px_12px_rgba(0,0,0,0.7)]"
      >
        De praias paradisíacas a destinos históricos, cada excursão é
        planejada com conforto, segurança e aquele toque de família que
        só a Ju oferece.
      </motion.p>

      {/* CTAs */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={0.55}
        className="flex flex-col sm:flex-row gap-4 mb-12"
      >
        <a
          href="#pacotes"
          className="inline-flex items-center justify-center bg-[#F27C2E] text-white font-bold px-10 py-4 rounded-full text-lg hover:bg-[#d9691c] transition-colors shadow-lg"
        >
          Ver Pacotes
        </a>
        <a
          href={WHATSAPP_GERAL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-white/15 backdrop-blur-sm border-2 border-white/50 text-white font-bold px-10 py-4 rounded-full text-lg hover:bg-white/25 transition-colors"
        >
          <WhatsAppIcon size={20} />
          Falar com a Ju
        </a>
      </motion.div>

      {/* Category pills */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={0.7}
        className="flex flex-wrap justify-center gap-2 max-w-sm sm:max-w-none"
      >
        {categories.map((cat) => (
          <span
            key={cat}
            className="bg-white/10 backdrop-blur-sm border border-white/20 text-white/85 text-sm font-medium px-4 py-1.5 rounded-full whitespace-nowrap"
          >
            {cat}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
