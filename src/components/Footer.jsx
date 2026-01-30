import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    // Rodapé principal com fundo escuro e gradiente
    <footer className="bg-gradient-to-br from-gray-900 to-emerald-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Grid de 4 colunas para organização do conteúdo */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Coluna 1: Sobre a empresa e Redes Sociais */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-gradient-to-br from-emerald-500 to-blue-500 rounded-full p-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold">PetCare+</h3>
            </div>
            
            <p className="text-gray-400 mb-6 leading-relaxed">
              Cuidado premium para seu melhor amigo. 
              Clínica veterinária completa e petshop com os melhores profissionais.
            </p>
            
            {/* Ícones de redes sociais */}
            <div className="flex space-x-4">
              <a href="#" className="bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors">
                <FaYoutube size={20} />
              </a>
            </div>
          </div>

          {/* Coluna 2: Links Rápidos de navegação */}
          <div>
            <h4 className="font-bold text-lg mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <a href="#servicos" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <span className="mr-2">→</span>
                  Nossos Serviços
                </a>
              </li>
              <li>
                <a href="#sobre" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <span className="mr-2">→</span>
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#galeria" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <span className="mr-2">→</span>
                  Galeria
                </a>
              </li>
              <li>
                <a href="#depoimentos" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <span className="mr-2">→</span>
                  Depoimentos
                </a>
              </li>
              <li>
                <a href="#contato" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <span className="mr-2">→</span>
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Lista de Serviços oferecidos */}
          <div>
            <h4 className="font-bold text-lg mb-6">Nossos Serviços</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <span className="mr-2">→</span>
                  Consultas Veterinárias
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <span className="mr-2">→</span>
                  Banho & Tosa
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <span className="mr-2">→</span>
                  Vacinação
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <span className="mr-2">→</span>
                  Hotel Pet
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <span className="mr-2">→</span>
                  Emergência 24h
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 4: Informações de Contato e Botão de Agendamento */}
          <div>
            <h4 className="font-bold text-lg mb-6">Contato</h4>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-start space-x-3">
                <FaPhone className="text-emerald-400 mt-1" />
                <div>
                  <p className="text-sm text-gray-400">Telefone</p>
                  <a href="tel:+551133334444" className="hover:text-white transition-colors block">
                    (11) 3333-4444
                  </a>
                  <a href="tel:+5511999999999" className="hover:text-white transition-colors block">
                    (11) 99999-9999
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <FaEnvelope className="text-emerald-400 mt-1" />
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <a href="mailto:contato@petcareplus.com.br" className="hover:text-white transition-colors block">
                    contato@petcareplus.com.br
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-emerald-400 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p className="text-sm text-gray-400">Endereço</p>
                  <p className="hover:text-white transition-colors block">
                    Rua das Flores, 123<br />
                    São Paulo - SP
                  </p>
                </div>
              </div>
            </div>

            <button className="w-full bg-gradient-to-r from-emerald-500 to-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg hover:shadow-emerald-500/30 transition-all">
              Agendar Agora
            </button>
          </div>
        </div>

        {/* Barra inferior com Copyright e Links Legais */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} PetCare+. Todos os direitos reservados.
            </p>
            
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">
                Termos de Uso
              </a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;