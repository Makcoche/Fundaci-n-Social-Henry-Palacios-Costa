import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { FOUNDATION_INFO } from '../data/foundationData';
import { Menu, X, HeartHandshake, MessageCircle, Send } from 'lucide-react';

interface NavbarProps {
  currentPage: string;
  onNavigate: (pageId: string) => void;
  onOpenProposalModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenProposalModal
}) => {
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
    { label: 'Inicio', id: 'inicio' },
    { label: 'Quiénes Somos', id: 'quienes-somos' },
    { label: 'Programas', id: 'programas' },
    { label: 'Contacto', id: 'contacto' }
  ];

  const handleLinkClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigate(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Main Navigation Bar */}
      <nav
        className={`transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-2.5 border-b border-neutral-200'
            : 'bg-[rgb(220,20,35)] text-white py-3.5 shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <button
            onClick={() => handleLinkClick('inicio')}
            className="cursor-pointer text-left bg-transparent border-0 p-0"
            aria-label="Ir a Inicio"
          >
            <Logo
              variant={scrolled ? 'red' : 'white'}
              size="md"
            />
          </button>

          {/* Desktop Navigation Links (Max 4 items) */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`px-3.5 py-2 text-sm font-bold rounded-xl transition-all cursor-pointer ${
                    isActive
                      ? scrolled
                        ? 'bg-[rgb(220,20,35)] text-white shadow-sm'
                        : 'bg-white text-[rgb(220,20,35)] shadow-sm'
                      : scrolled
                      ? 'text-neutral-700 hover:text-[rgb(220,20,35)] hover:bg-red-50'
                      : 'text-white/90 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          {/* Desktop Right Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenProposalModal}
              id="nav-propose-btn"
              className={`flex items-center gap-2 px-4 py-2 text-sm font-bold rounded-xl transition-all shadow-sm active:scale-95 cursor-pointer ${
                scrolled
                  ? 'bg-[rgb(220,20,35)] text-white hover:bg-[rgb(180,15,25)]'
                  : 'bg-white text-[rgb(220,20,35)] hover:bg-neutral-100'
              }`}
            >
              <Send className="w-4 h-4" />
              <span>Proponer Idea</span>
            </button>
            <button
              onClick={() => handleLinkClick('contacto')}
              className={`p-2 rounded-xl border transition-colors cursor-pointer ${
                scrolled
                  ? 'border-neutral-200 text-neutral-700 hover:border-[rgb(220,20,35)] hover:text-[rgb(220,20,35)]'
                  : 'border-white/30 text-white hover:bg-white/10'
              }`}
              title="Voluntariado y Participación"
              aria-label="Voluntariado"
            >
              <HeartHandshake className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenProposalModal}
              className={`p-2 rounded-lg text-xs font-bold flex items-center gap-1 ${
                scrolled ? 'bg-[rgb(220,20,35)] text-white' : 'bg-white text-[rgb(220,20,35)]'
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
              {navLinks.map((link) => {
                const isActive = currentPage === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleLinkClick(link.id)}
                    className={`px-3 py-2.5 text-base font-bold rounded-lg transition-colors text-left flex items-center justify-between ${
                      isActive
                        ? 'bg-red-50 text-[rgb(220,20,35)]'
                        : 'text-neutral-800 hover:bg-neutral-100'
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && <span className="w-2 h-2 rounded-full bg-[rgb(220,20,35)]"></span>}
                  </button>
                );
              })}
            </div>

            <div className="mt-4 pt-4 border-t border-neutral-100 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenProposalModal();
                }}
                className="w-full flex items-center justify-center gap-2 bg-[rgb(220,20,35)] hover:bg-[rgb(180,15,25)] text-white font-bold py-3 px-4 rounded-xl shadow-sm text-sm cursor-pointer"
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
