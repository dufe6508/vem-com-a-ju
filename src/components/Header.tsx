"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const WHATSAPP_URL =
  "https://wa.me/55?text=Ol%C3%A1%2C+tenho+interesse+nos+pacotes+da+Vem+com+a+Ju!";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Pacotes", href: "#pacotes" },
  { label: "Destinos", href: "#incluso" },
  { label: "Contato", href: "#contato" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        solid ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 h-18 flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="#inicio" className="flex items-center gap-2 shrink-0">
          <Image
            src="/logo.png"
            alt="Vem com a Ju"
            width={160}
            height={54}
            className={`h-14 w-auto object-contain transition-all duration-300 ${
              solid
                ? "brightness-100"
                : "brightness-0 invert drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]"
            }`}
            priority
          />
        </Link>

        {/* Nav desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`font-medium text-base transition-colors ${
                solid
                  ? "text-gray-700 hover:text-[#1B4F8A]"
                  : "text-white/90 hover:text-white"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA desktop */}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={`hidden md:inline-flex items-center gap-2 font-semibold px-5 py-2.5 rounded-full text-base transition-all duration-300 ${
            solid
              ? "bg-[#2E7D52] text-white hover:bg-[#256043]"
              : "bg-white/15 backdrop-blur-sm text-white border border-white/30 hover:bg-white/25"
          }`}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.558 4.112 1.532 5.836L.057 23.853a.75.75 0 0 0 .904.924l6.283-1.635A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.714 9.714 0 0 1-4.952-1.352l-.355-.212-3.671.955.98-3.565-.232-.368A9.714 9.714 0 0 1 2.25 12c0-5.376 4.374-9.75 9.75-9.75S21.75 6.624 21.75 12 17.376 21.75 12 21.75z" />
          </svg>
          Falar com a Ju
        </a>

        {/* Hamburger mobile */}
        <button
          className={`md:hidden p-2 rounded-lg transition-colors ${
            solid ? "text-gray-700" : "text-white"
          }`}
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-5 pb-5 flex flex-col gap-1">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-3 text-gray-700 font-medium text-base border-b border-gray-50 last:border-0"
            >
              {l.label}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 flex items-center justify-center gap-2 bg-[#2E7D52] text-white font-semibold px-5 py-3 rounded-full text-base"
          >
            Falar com a Ju no WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}
