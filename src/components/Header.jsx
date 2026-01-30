import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaPhone, FaWhatsapp } from 'react-icons/fa';

const Header = () => {
  // Estados para controle do menu mobile e detecção de scroll
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Efeito para adicionar sombra ao header quando a página é rolada
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Alterna a visibilidade do menu mobile e bloqueia o scroll do body
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    document.body.style.overflow = menuOpen ? 'auto' : 'hidden';
  };

  // Fecha o menu mobile
  const closeMenu = () => {
    setMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  // Função para rolagem suave até a seção alvo
  const scrollToSection = (section) => {
    closeMenu();
    const element = document.getElementById(section);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    // Header fixo com transição de estilo baseada no scroll
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo e Nome da Marca */}
        <div className="flex items-center space-x-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="bg-gradient-to-br from-emerald-500 to-blue-500 rounded-full p-2 shadow-lg">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </div>
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-500 to-blue-500 bg-clip-text text-transparent">
              PetCare+
            </h1>
            <p className="text-xs text-gray-600">Clínica & Petshop</p>
          </div>
        </div>

        {/* Navegação Desktop (visível apenas em telas maiores) */}
        <nav className="hidden md:flex items-center space-x-8">
          <button onClick={() => scrollToSection('servicos')} className="text-gray-700 hover:text-emerald-500 font-medium transition-colors">Serviços</button>
          <button onClick={() => scrollToSection('sobre')} className="text-gray-700 hover:text-emerald-500 font-medium transition-colors">Sobre</button>
          <button onClick={() => scrollToSection('galeria')} className="text-gray-700 hover:text-emerald-500 font-medium transition-colors">Galeria</button>
          <button onClick={() => scrollToSection('depoimentos')} className="text-gray-700 hover:text-emerald-500 font-medium transition-colors">Depoimentos</button>
          <button onClick={() => scrollToSection('contato')} className="text-gray-700 hover:text-emerald-500 font-medium transition-colors">Contato</button>
          
          {/* Botões de contato rápido no header */}
          <div className="flex items-center space-x-4 ml-8">
            <a href="tel:+5511999999999" className="flex items-center text-gray-700 hover:text-emerald-500 transition-colors">
              <FaPhone className="mr-2" />
              <span className="font-medium">(11) 99999-9999</span>
            </a>
            <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" 
               className="flex items-center bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition-colors shadow-lg">
              <FaWhatsapp className="mr-2" />
              <span className="font-medium">WhatsApp</span>
            </a>
          </div>
        </nav>

        {/* Botão Hamburger para Menu Mobile */}
        <button onClick={toggleMenu} className="md:hidden text-gray-700">
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Overlay e Container do Menu Mobile */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden" onClick={closeMenu}>
          {/* Painel lateral do menu */}
          <div className="bg-white w-4/5 max-w-sm h-full p-6 overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            {/* Cabeçalho do menu mobile */}
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-500 to-blue-500 bg-clip-text text-transparent">
                PetCare+
              </h1>
              <button onClick={closeMenu} className="text-gray-700">
                <FaTimes size={24} />
              </button>
            </div>
            
            {/* Links de navegação mobile */}
            <nav className="space-y-6">
              <button onClick={() => scrollToSection('servicos')} className="block w-full text-left text-gray-700 hover:text-emerald-500 font-medium py-2 border-b border-gray-200">Serviços</button>
              <button onClick={() => scrollToSection('sobre')} className="block w-full text-left text-gray-700 hover:text-emerald-500 font-medium py-2 border-b border-gray-200">Sobre</button>
              <button onClick={() => scrollToSection('galeria')} className="block w-full text-left text-gray-700 hover:text-emerald-500 font-medium py-2 border-b border-gray-200">Galeria</button>
              <button onClick={() => scrollToSection('depoimentos')} className="block w-full text-left text-gray-700 hover:text-emerald-500 font-medium py-2 border-b border-gray-200">Depoimentos</button>
              <button onClick={() => scrollToSection('contato')} className="block w-full text-left text-gray-700 hover:text-emerald-500 font-medium py-2 border-b border-gray-200">Contato</button>
              
              {/* Contatos no menu mobile */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <a href="tel:+5511999999999" className="flex items-center text-gray-700 hover:text-emerald-500 mb-4">
                  <FaPhone className="mr-3 text-emerald-500" size={20} />
                  <span className="font-medium">(11) 99999-9999</span>
                </a>
                <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" 
                   className="flex items-center justify-center bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition-colors w-full">
                  <FaWhatsapp className="mr-2" />
                  <span className="font-medium">WhatsApp</span>
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;