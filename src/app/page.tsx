import Header from "@/components/Header";
import WhatsAppButton from "@/components/WhatsAppButton";
import HeroSection from "@/components/HeroSection";
import ScrollFade from "@/components/ScrollFade";

const WHATSAPP_ARRAIAL =
  "https://wa.me/55?text=Ol%C3%A1%21+Tenho+interesse+no+pacote+Arraial+do+Cabo+2027.+Pode+me+passar+mais+informa%C3%A7%C3%B5es%3F";

const HERO_IMG =
  "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=1920&q=85";
const PACOTE_IMG =
  "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=900&q=80";
const CTA_IMG =
  "https://images.unsplash.com/photo-1439405326854-014607f694d7?w=1920&q=80";

const inclusos = [
  "Transporte Semi Leito",
  "Sorteio de Brindes a bordo",
  "Lanche e Água na viagem",
  "Hospedagem",
  "Café da Manhã",
  "Almoço e Sobremesa",
  "Sábado Noite Surpresa",
];

const diferenciais = [
  {
    title: "Transporte Confortável",
    desc: "Ônibus semi leito com toda comodidade. Você descansa enquanto a gente cuida de tudo.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" rx="2" />
        <path d="M16 8h4l3 4v4h-7V8z" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
  },
  {
    title: "Tudo Incluído",
    desc: "Hotel, café da manhã, almoço, sobremesa e surpresas especiais. Você só precisa curtir.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
        <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
        <line x1="6" y1="1" x2="6" y2="4" />
        <line x1="10" y1="1" x2="10" y2="4" />
        <line x1="14" y1="1" x2="14" y2="4" />
      </svg>
    ),
  },
  {
    title: "Cuidado da Ju",
    desc: "Atendimento direto e pessoal. A Ju cuida de você antes, durante e depois de cada viagem.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
];

function CheckIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#2E7D52"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0 mt-0.5"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function WhatsAppIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="white">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.558 4.112 1.532 5.836L.057 23.853a.75.75 0 0 0 .904.924l6.283-1.635A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.714 9.714 0 0 1-4.952-1.352l-.355-.212-3.671.955.98-3.565-.232-.368A9.714 9.714 0 0 1 2.25 12c0-5.376 4.374-9.75 9.75-9.75S21.75 6.624 21.75 12 17.376 21.75 12 21.75z" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <Header />

      <main className="font-sans">

        {/* ── HERO ─────────────────────────────────────────── */}
        <section
          id="inicio"
          className="relative bg-cover bg-center overflow-hidden"
          style={{ backgroundImage: `url('${HERO_IMG}')` }}
        >
          {/* Mobile: escuro embaixo (texto), transparente em cima (foto aparece) */}
          <div
            className="absolute inset-0 md:hidden"
            style={{ background: "linear-gradient(to top, rgba(0,0,0,0.90) 0%, rgba(0,0,0,0.52) 48%, rgba(0,0,0,0.06) 100%)" }}
          />
          {/* Desktop: escuro à esquerda (texto), transparente à direita (foto aparece) */}
          <div
            className="absolute inset-0 hidden md:block"
            style={{ background: "linear-gradient(105deg, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.60) 38%, rgba(0,0,0,0.18) 70%, rgba(0,0,0,0.04) 100%)" }}
          />

          <HeroSection />

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/40 select-none">
            <span className="text-xs uppercase tracking-widest">Explorar</span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="animate-float-down"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </div>
        </section>

        {/* ── DIFERENCIAIS ─────────────────────────────────── */}
        <section className="py-20 bg-white" id="incluso">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <ScrollFade className="text-center mb-14">
              <p className="text-[#F27C2E] font-semibold text-sm uppercase tracking-widest mb-2">
                Por que viajar com a Ju?
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                Você em boas mãos
              </h2>
            </ScrollFade>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {diferenciais.map((d, i) => (
                <ScrollFade key={d.title} delay={i * 0.12}>
                  <div className="flex flex-col items-start gap-4 p-8 rounded-2xl bg-[#F5F5F5] h-full">
                    <div className="w-14 h-14 rounded-xl bg-[#1B4F8A] flex items-center justify-center">
                      {d.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{d.title}</h3>
                    <p className="text-gray-600 text-base leading-relaxed">{d.desc}</p>
                  </div>
                </ScrollFade>
              ))}
            </div>
          </div>
        </section>

        {/* ── PACOTE ───────────────────────────────────────── */}
        <section id="pacotes" className="py-20 bg-[#F5F5F5]">
          <div className="max-w-6xl mx-auto px-5 sm:px-8">
            <ScrollFade className="text-center mb-12">
              <p className="text-[#F27C2E] font-semibold text-sm uppercase tracking-widest mb-2">
                Próxima Excursão
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                Pacote em Destaque
              </h2>
            </ScrollFade>

            <ScrollFade delay={0.1}>
              <div className="bg-white rounded-3xl overflow-hidden shadow-sm">
                <div className="grid grid-cols-1 lg:grid-cols-2">

                  {/* Foto */}
                  <div className="relative min-h-72 lg:min-h-[560px]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={PACOTE_IMG}
                      alt="Arraial do Cabo — Caribe Brasileiro"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="absolute top-5 left-5">
                      <span className="bg-[#F27C2E] text-white font-bold text-sm px-4 py-1.5 rounded-full uppercase tracking-wide">
                        Próxima viagem
                      </span>
                    </div>
                    <div className="absolute bottom-5 left-5 right-5">
                      <p className="text-white font-extrabold text-3xl leading-tight drop-shadow-lg">
                        Arraial do Cabo
                      </p>
                      <p className="text-white/85 font-medium text-lg drop-shadow">
                        Caribe Brasileiro
                      </p>
                    </div>
                  </div>

                  {/* Detalhes */}
                  <div className="p-8 lg:p-10 flex flex-col gap-6">

                    {/* Datas */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="flex-1 bg-[#F5F5F5] rounded-xl px-5 py-4">
                        <p className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-1">
                          Saída
                        </p>
                        <p className="text-gray-900 font-bold text-base">
                          24/03/2027 às 19h30
                        </p>
                      </div>
                      <div className="flex-1 bg-[#F5F5F5] rounded-xl px-5 py-4">
                        <p className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-1">
                          Retorno
                        </p>
                        <p className="text-gray-900 font-bold text-base">
                          28/03/2027 às 16h00
                        </p>
                      </div>
                    </div>

                    {/* Incluso */}
                    <div>
                      <p className="text-gray-900 font-bold text-base mb-3">
                        O que está incluído:
                      </p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {inclusos.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2 text-gray-700 text-base"
                          >
                            <CheckIcon />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Preços */}
                    <div className="border-t border-gray-100 pt-5 grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-1">
                          Adulto
                        </p>
                        <p className="text-[#F27C2E] font-extrabold text-2xl">
                          R$ 1.450
                        </p>
                        <p className="text-gray-500 text-sm mt-0.5">
                          7x de R$ 207,15
                        </p>
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-1">
                          Criança (6–11 anos)
                        </p>
                        <p className="text-[#F27C2E] font-extrabold text-2xl">
                          R$ 990
                        </p>
                        <p className="text-gray-500 text-sm mt-0.5">
                          7x de R$ 141,50
                        </p>
                      </div>
                    </div>

                    <p className="text-sm text-gray-500">
                      Cartão de crédito: até{" "}
                      <strong className="text-gray-700">10x sem juros</strong>.
                      Reservas mediante pagamento de entrada.
                    </p>

                    {/* Botão */}
                    <a
                      href={WHATSAPP_ARRAIAL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-3 bg-[#2E7D52] text-white font-bold text-lg px-8 py-4 rounded-full hover:bg-[#256043] transition-colors"
                    >
                      <WhatsAppIcon size={22} />
                      Reservar pelo WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </ScrollFade>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────── */}
        <section
          id="contato"
          className="relative py-28 bg-cover bg-center"
          style={{ backgroundImage: `url('${CTA_IMG}')` }}
        >
          <div className="absolute inset-0 bg-[#1B4F8A]/75" />
          <ScrollFade className="relative z-10 max-w-3xl mx-auto px-5 sm:px-8 text-center">
            <p className="text-white/70 font-semibold text-sm uppercase tracking-widest mb-4">
              Vagas Limitadas
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
              Pronto para viver<br />essa experiência?
            </h2>
            <p className="text-white/80 text-lg mb-10 leading-relaxed">
              Fale diretamente com a Ju, tire todas as suas dúvidas e garanta
              sua vaga no Caribe Brasileiro.
            </p>
            <a
              href={WHATSAPP_ARRAIAL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] text-white font-bold text-xl px-10 py-5 rounded-full hover:bg-[#1ebe5d] transition-colors shadow-lg"
            >
              <WhatsAppIcon size={26} />
              Falar com a Ju agora
            </a>
          </ScrollFade>
        </section>
      </main>

      {/* ── FOOTER ───────────────────────────────────────── */}
      <footer className="bg-[#1B4F8A] text-white py-12">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
            <div className="text-center md:text-left">
              <p className="font-extrabold text-2xl tracking-tight mb-1">
                VEM COM A JU
              </p>
              <p className="text-white/60 text-base">
                Colecionando histórias, eternizando momentos.
              </p>
            </div>
            <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3">
              {[
                { label: "Início", href: "#inicio" },
                { label: "Pacotes", href: "#pacotes" },
                { label: "Diferenciais", href: "#incluso" },
                { label: "Contato", href: "#contato" },
              ].map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-white/70 hover:text-white text-base transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </nav>
          </div>
          <div className="border-t border-white/15 mt-10 pt-8 text-center text-white/50 text-sm">
            © {new Date().getFullYear()} Vem com a Ju. Todos os direitos reservados.
          </div>
        </div>
      </footer>

      <WhatsAppButton />
    </>
  );
}
