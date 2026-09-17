import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { FOUNDATION_INFO } from '../data/foundationData';
import { Menu, X, Phone, HeartHandshake, MessageCircle, Send } from 'lucide-react';

interface NavbarProps {
  onOpenProposalModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenProposalModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Quiénes Somos', href: '#quienes-somos' },
    { label: 'Trayectoria', href: '#trayectoria' },
    { label: '6 Compromisos', href: '#compromisos' },
    { label: 'Programas', href: '#programas' },
    { label: 'Buzón Ciudadano', href: '#buzon' },
    { label: 'Contacto', href: '#contacto' }
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top utility bar with corporate slogan */}
      <div className="bg-[#A50B1B] text-white text-xs font-medium py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 bg-white/15 px-2.5 py-0.5 rounded-full text-[11px] font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              {FOUNDATION_INFO.slogan}
            </span>
            <span className="hidden sm:inline text-white/90">
              {FOUNDATION_INFO.tagline} • Apartadó & Urabá
            </span>
          </div>

          <div className="flex items-center gap-4 text-white/90">
            <a
              href={`tel:${FOUNDATION_INFO.phone.replace(/[^0-9+]/g, '')}`}
              className="flex items-center gap-1 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span className="hidden md:inline">{FOUNDATION_INFO.phone}</span>
            </a>
            <a
              href={FOUNDATION_INFO.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-emerald-300 hover:text-white transition-colors font-semibold"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Directo</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-2.5 border-b border-neutral-200'
            : 'bg-[#CE1126] text-white py-3.5 shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#inicio"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('#inicio');
            }}
            className="cursor-pointer"
          >
            <Logo
              variant={scrolled ? 'red' : 'white'}
              size="md"
            />
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  scrolled
                    ? 'text-neutral-700 hover:text-[#CE1126] hover:bg-red-50'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop Right Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenProposalModal}
              id="nav-propose-btn"
              className={`flex items-center gap-2 px-4 py-2 text-sm font-bold rounded-xl transition-all shadow-sm active:scale-95 ${
                scrolled
                  ? 'bg-[#CE1126] text-white hover:bg-[#A50B1B]'
                  : 'bg-white text-[#CE1126] hover:bg-neutral-100'
              }`}
            >
              <Send className="w-4 h-4" />
              <span>Proponer Idea</span>
            </button>
            <a
              href="#buzon"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('#buzon');
              }}
              className={`p-2 rounded-xl border transition-colors ${
                scrolled
                  ? 'border-neutral-200 text-neutral-700 hover:border-[#CE1126] hover:text-[#CE1126]'
                  : 'border-white/30 text-white hover:bg-white/10'
              }`}
              title="Súmate al voluntariado"
            >
              <HeartHandshake className="w-5 h-5" />
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenProposalModal}
              className={`p-2 rounded-lg text-xs font-bold flex items-center gap-1 ${
                scrolled ? 'bg-[#CE1126] text-white' : 'bg-white text-[#CE1126]'
              }`}
            >
              <Send className="w-3.5 h-3.5" />
              <span className="hidden xs:inline">Proponer</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg transition-colors ${
                scrolled ? 'text-neutral-800 hover:bg-neutral-100' : 'text-white hover:bg-white/10'
              }`}
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-neutral-200 shadow-xl px-4 pt-3 pb-6 mt-2 animate-in slide-in-from-top-2">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className="px-3 py-2.5 text-base font-semibold text-neutral-800 hover:bg-red-50 hover:text-[#CE1126] rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t border-neutral-100 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenProposalModal();
                }}
                className="w-full flex items-center justify-center gap-2 bg-[#CE1126] hover:bg-[#A50B1B] text-white font-bold py-3 px-4 rounded-xl shadow-sm text-sm"
              >
                <Send className="w-4 h-4" />
                <span>Registrar Propuesta Ciudadana</span>
              </button>
              <a
                href={FOUNDATION_INFO.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2.5 px-4 rounded-xl text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Escríbenos por WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
