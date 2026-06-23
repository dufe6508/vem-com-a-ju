import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollFade from "@/components/ScrollFade";

// ─── Constants ────────────────────────────────────────────────────────────────
const HERO_IMG = "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=1920&q=85";
const WA_BASE  = "https://wa.me/55?text=";
const WA_GERAL = WA_BASE + encodeURIComponent("Olá! Tenho interesse nas excursões da Vem com a Ju!");
const WA_ARRAIAL = WA_BASE + encodeURIComponent("Oi Ju! Quero saber mais sobre Arraial do Cabo 2027.");

// ─── Destination data ─────────────────────────────────────────────────────────
const destinos = [
  {
    id: 1,
    name: "Arraial do Cabo",
    region: "Rio de Janeiro",
    tag: "Caribe Brasileiro",
    date: "Mar 2027",
    nights: "4 dias",
    price: "R$ 1.450",
    available: true,
    img: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=700&q=80",
    href: WA_ARRAIAL,
  },
  {
    id: 2,
    name: "Em breve",
    region: "Próximo destino",
    tag: null,
    date: "2027",
    nights: null,
    price: null,
    available: false,
    img: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=700&q=80",
    href: WA_GERAL,
  },
  {
    id: 3,
    name: "Em breve",
    region: "Próximo destino",
    tag: null,
    date: "2027",
    nights: null,
    price: null,
    available: false,
    img: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=700&q=80",
    href: WA_GERAL,
  },
];

// ─── Incluso list ─────────────────────────────────────────────────────────────
const inclusos = [
  "Transporte Semi Leito",
  "Sorteio de Brindes a bordo",
  "Lanche e Água na viagem",
  "Hospedagem",
  "Café da Manhã",
  "Almoço e Sobremesa",
  "Sábado Noite Surpresa",
];

// ─── Diferenciais ─────────────────────────────────────────────────────────────
const diferenciais = [
  {
    num: "01",
    title: "Transporte confortável",
    desc: "Ônibus semi leito com ar-condicionado, poltronas reclináveis e paradas estratégicas. Você descansa enquanto a Ju cuida de tudo.",
  },
  {
    num: "02",
    title: "Tudo incluído, sem surpresas",
    desc: "Hospedagem, passeios, guia local e seguro viagem no valor anunciado. Sem letra miúda, sem cobranças inesperadas.",
  },
  {
    num: "03",
    title: "O cuidado da Ju",
    desc: "A Juliana acompanha cada excursão pessoalmente. Do embarque ao retorno, você nunca fica sem amparo.",
  },
];

// ─── Inline icons ─────────────────────────────────────────────────────────────
function Check() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#2E7D52"
      strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function ArrowRight({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.2">
      <path d="M4 10h12M10 4l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function WaIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="white">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.558 4.112 1.532 5.836L.057 23.853a.75.75 0 0 0 .904.924l6.283-1.635A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.714 9.714 0 0 1-4.952-1.352l-.355-.212-3.671.955.98-3.565-.232-.368A9.714 9.714 0 0 1 2.25 12c0-5.376 4.374-9.75 9.75-9.75S21.75 6.624 21.75 12 17.376 21.75 12 21.75z" />
    </svg>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <>
      <Header />

      <main className="font-sans">

        {/* ══ HERO ═══════════════════════════════════════════════════════════ */}
        <section id="inicio" className="relative overflow-hidden bg-[#0e0a06]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={HERO_IMG}
            alt="Rio de Janeiro ao entardecer"
            className="absolute inset-0 w-full h-full object-cover object-[center_30%] select-none"
            fetchPriority="high"
          />
          {/* Mobile gradient: escuro embaixo */}
          <div
            className="absolute inset-0 md:hidden"
            style={{ background: "linear-gradient(to top, rgba(10,8,4,0.96) 0%, rgba(10,8,4,0.68) 42%, rgba(10,8,4,0.18) 68%, rgba(10,8,4,0.04) 100%)" }}
          />
          {/* Desktop gradient: diagonal esquerda */}
          <div
            className="absolute inset-0 hidden md:block"
            style={{ background: "linear-gradient(108deg, rgba(10,8,4,0.96) 0%, rgba(10,8,4,0.80) 30%, rgba(10,8,4,0.34) 56%, rgba(10,8,4,0.06) 82%)" }}
          />
          <HeroSection />
        </section>

        {/* ══ DESTINOS (Triplio-style cards) ═════════════════════════════════ */}
        <section id="pacotes" className="bg-[#FBF9F7] py-20 md:py-28">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">

            {/* Header da seção */}
            <ScrollFade className="flex items-end justify-between mb-10 gap-4 flex-wrap">
              <div>
                <p className="text-[#F27C2E] font-semibold text-sm tracking-[0.12em] uppercase mb-2">
                  Próximas excursões
                </p>
                <h2 className="text-[2rem] md:text-[2.6rem] font-black text-[#1C1917] leading-[1.08] tracking-[-0.03em]">
                  Onde vamos desta vez?
                </h2>
              </div>
              <a
                href={WA_GERAL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#1B4F8A] font-semibold text-sm border border-[#1B4F8A]/30 px-5 py-2.5 rounded-full hover:bg-[#1B4F8A]/5 transition-colors shrink-0"
              >
                Ver todos <ArrowRight size={16} />
              </a>
            </ScrollFade>

            {/* Cards grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {destinos.map((d, i) => (
                <ScrollFade key={d.id} delay={i * 0.08}>
                  <a
                    href={d.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block relative overflow-hidden rounded-2xl bg-[#1C1917] aspect-[4/5] shadow-[0_4px_24px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.22)] transition-all duration-300"
                  >
                    {/* Foto */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={d.img}
                      alt={d.name}
                      className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${!d.available ? "opacity-60 grayscale-[40%]" : ""}`}
                    />

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                    {/* Tag de categoria */}
                    {d.tag && (
                      <div className="absolute top-4 left-4">
                        <span className="bg-[#F27C2E] text-white text-[11px] font-bold px-3 py-1.5 rounded-lg uppercase tracking-[0.07em]">
                          {d.tag}
                        </span>
                      </div>
                    )}

                    {/* "Em breve" overlay */}
                    {!d.available && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-semibold px-4 py-2 rounded-full tracking-[0.08em] uppercase">
                          Em breve
                        </span>
                      </div>
                    )}

                    {/* Arrow button */}
                    {d.available && (
                      <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/15 backdrop-blur-sm border border-white/25 flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300">
                        <svg width="14" height="14" viewBox="0 0 20 20" fill="none" stroke="white" strokeWidth="2.2">
                          <path d="M4 16L16 4M16 4H6M16 4v10" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    )}

                    {/* Info bottom */}
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <p className="text-white/55 text-xs font-medium tracking-wide mb-1">{d.region}</p>
                      <h3 className="text-white font-black text-xl leading-tight tracking-tight mb-3">{d.name}</h3>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-white/60 text-xs">{d.date}</span>
                          {d.nights && (
                            <>
                              <span className="text-white/25 text-xs">·</span>
                              <span className="text-white/60 text-xs">{d.nights}</span>
                            </>
                          )}
                        </div>
                        {d.price && (
                          <span className="text-[#F27C2E] font-extrabold text-base tracking-tight">
                            {d.price}
                          </span>
                        )}
                      </div>
                    </div>
                  </a>
                </ScrollFade>
              ))}
            </div>
          </div>
        </section>

        {/* ══ DIFERENCIAIS ════════════════════════════════════════════════════ */}
        <section id="diferenciais" className="bg-[#1C1917] py-20 md:py-28">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">

            <ScrollFade className="mb-14">
              <p className="text-[#F27C2E] font-semibold text-sm tracking-[0.12em] uppercase mb-3">
                Por que viajar com a Ju
              </p>
              <h2 className="text-[2rem] md:text-[2.8rem] font-black text-white leading-[1.08] tracking-[-0.03em] max-w-lg">
                Cada detalhe pensado para você curtir de verdade
              </h2>
            </ScrollFade>

            <div className="divide-y divide-white/8">
              {diferenciais.map((d, i) => (
                <ScrollFade key={d.num} delay={i * 0.1}>
                  <div className="grid grid-cols-[56px_1fr] md:grid-cols-[80px_1fr] gap-6 md:gap-10 py-9 md:py-11">
                    <span className="text-[11px] font-bold tracking-[0.12em] text-[#F27C2E] pt-1">
                      {d.num}
                    </span>
                    <div>
                      <h3 className="text-white font-bold text-lg md:text-xl tracking-tight mb-2.5">
                        {d.title}
                      </h3>
                      <p className="text-white/45 text-base leading-relaxed max-w-xl">
                        {d.desc}
                      </p>
                    </div>
                  </div>
                </ScrollFade>
              ))}
            </div>
          </div>
        </section>

        {/* ══ PACOTE DESTAQUE ══════════════════════════════════════════════════ */}
        <section id="arraial" className="bg-[#F5F2EE] py-20 md:py-28">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">

            <ScrollFade className="mb-10">
              <p className="text-[#F27C2E] font-semibold text-sm tracking-[0.12em] uppercase mb-3">
                Pacote em destaque
              </p>
              <h2 className="text-[2rem] md:text-[2.8rem] font-black text-[#1C1917] leading-[1.08] tracking-[-0.03em]">
                Arraial do Cabo 2027
              </h2>
            </ScrollFade>

            <ScrollFade delay={0.08}>
              <div className="bg-[#FBF9F7] rounded-3xl overflow-hidden shadow-[0_6px_40px_rgba(27,79,138,0.10)]">
                <div className="grid grid-cols-1 lg:grid-cols-2">

                  {/* Foto */}
                  <div className="relative min-h-64 lg:min-h-[560px]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="https://images.unsplash.com/photo-1519046904884-53103b34b206?w=900&q=80"
                      alt="Arraial do Cabo — praia cristalina"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                    <div className="absolute top-5 left-5">
                      <span className="bg-[#2E7D52] text-white text-[11px] font-bold px-3 py-1.5 rounded-lg uppercase tracking-[0.07em]">
                        Vagas disponíveis
                      </span>
                    </div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <p className="text-white font-black text-2xl leading-tight tracking-tight drop-shadow-md">
                        Caribe Brasileiro
                      </p>
                      <p className="text-white/70 text-sm mt-1">Rio de Janeiro · 4 dias</p>
                    </div>
                  </div>

                  {/* Detalhes */}
                  <div className="p-7 md:p-10 flex flex-col gap-7">

                    {/* Datas */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-[#F5F2EE] rounded-2xl px-5 py-4">
                        <p className="text-[10px] tracking-[0.12em] uppercase text-[#9B948F] font-semibold mb-1">Saída</p>
                        <p className="text-[#1C1917] font-bold text-sm">24/03/2027 · 19h30</p>
                      </div>
                      <div className="bg-[#F5F2EE] rounded-2xl px-5 py-4">
                        <p className="text-[10px] tracking-[0.12em] uppercase text-[#9B948F] font-semibold mb-1">Retorno</p>
                        <p className="text-[#1C1917] font-bold text-sm">28/03/2027 · 16h00</p>
                      </div>
                    </div>

                    {/* O que inclui */}
                    <div>
                      <p className="text-[10px] tracking-[0.12em] uppercase text-[#9B948F] font-semibold mb-4">
                        Incluído no pacote
                      </p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {inclusos.map((item) => (
                          <li key={item} className="flex items-start gap-2.5 text-[#4A4440] text-[15px]">
                            <Check />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Preços */}
                    <div className="border-t border-[#E8E4DF] pt-6 grid grid-cols-2 gap-5">
                      <div>
                        <p className="text-[10px] tracking-[0.12em] uppercase text-[#9B948F] font-semibold mb-1">Adulto</p>
                        <p className="text-[#F27C2E] font-black text-2xl tracking-tight">R$ 1.450</p>
                        <p className="text-[#9B948F] text-xs mt-1">7× de R$ 207,15</p>
                      </div>
                      <div>
                        <p className="text-[10px] tracking-[0.12em] uppercase text-[#9B948F] font-semibold mb-1">Criança (6–11)</p>
                        <p className="text-[#1B4F8A] font-black text-2xl tracking-tight">R$ 990</p>
                        <p className="text-[#9B948F] text-xs mt-1">7× de R$ 141,50</p>
                      </div>
                    </div>

                    <p className="text-xs text-[#9B948F] -mt-2">
                      Cartão de crédito: até <strong className="text-[#4A4440]">10× sem juros</strong>. Reservas mediante entrada.
                    </p>

                    <a
                      href={WA_ARRAIAL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-3 bg-[#2E7D52] text-white font-bold text-base px-8 py-4 rounded-2xl hover:bg-[#256043] active:scale-[0.98] transition-all shadow-[0_8px_24px_rgba(46,125,82,0.28)]"
                    >
                      <WaIcon size={20} />
                      Reservar pelo WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </ScrollFade>
          </div>
        </section>

        {/* ══ CTA FINAL ═══════════════════════════════════════════════════════ */}
        <section id="contato" className="bg-[#1B4F8A] py-20 md:py-28">
          <ScrollFade className="max-w-2xl mx-auto px-5 sm:px-8 text-center">
            <p className="text-white/45 font-semibold text-sm tracking-[0.12em] uppercase mb-4">
              Vagas limitadas
            </p>
            <h2 className="text-[2rem] md:text-[3rem] font-black text-white leading-[1.08] tracking-[-0.03em] mb-4">
              Pronto para viver essa experiência?
            </h2>
            <p className="text-white/60 text-base md:text-lg leading-relaxed mb-10 max-w-md mx-auto">
              Fale diretamente com a Ju, tire suas dúvidas e garanta sua vaga no Caribe Brasileiro.
            </p>
            <a
              href={WA_ARRAIAL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#2E7D52] text-white font-bold text-lg px-10 py-5 rounded-2xl hover:bg-[#256043] transition-colors shadow-[0_12px_32px_rgba(0,0,0,0.2)]"
            >
              <WaIcon size={24} />
              Falar com a Ju agora
            </a>
          </ScrollFade>
        </section>

      </main>

      {/* ══ FOOTER ══════════════════════════════════════════════════════════ */}
      <footer className="bg-[#141210] py-14">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="flex flex-col md:flex-row items-start justify-between gap-10 mb-12">
            <div>
              <p className="font-black text-white text-xl tracking-tight mb-2">Vem com a Ju</p>
              <p className="text-white/35 text-sm leading-relaxed max-w-[220px]">
                Colecionando histórias,<br />eternizando momentos.
              </p>
            </div>
            <nav className="flex flex-wrap gap-x-8 gap-y-3">
              {[
                { label: "Início", href: "#inicio" },
                { label: "Excursões", href: "#pacotes" },
                { label: "Por que a Ju", href: "#diferenciais" },
                { label: "Contato", href: "#contato" },
              ].map((l) => (
                <a key={l.href} href={l.href} className="text-white/40 hover:text-white text-sm transition-colors">
                  {l.label}
                </a>
              ))}
            </nav>
          </div>
          <div className="border-t border-white/8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-3 text-white/25 text-xs">
            <span>© {new Date().getFullYear()} Vem com a Ju. Todos os direitos reservados.</span>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white/60 transition-colors">Política de privacidade</a>
              <a href="#" className="hover:text-white/60 transition-colors">Termos de uso</a>
            </div>
          </div>
        </div>
      </footer>

      <WhatsAppButton />
    </>
  );
}
