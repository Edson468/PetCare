import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// Lista de URLs das imagens da galeria
const galleryImages = [
  "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fGdhdG9zfGVufDB8fDB8fHww",
  "https://plus.unsplash.com/premium_photo-1663029003313-41c48a3520f2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2xpbmljYSUyMHZldGVyaW5hcmlhJTIwZ2F0b3xlbnwwfHwwfHx8MA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1708724043676-a4c032303a3d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Z29sZGVuJTIwcmV0cmlldmVyfGVufDB8fDB8fHww",
  "https://plus.unsplash.com/premium_photo-1683140900667-15d8b750bda3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2xpbmljYSUyMHZldGVyaW5hcmlhJTIwbGFicmFkb3J8ZW58MHx8MHx8fDA%3D",
  "https://plus.unsplash.com/premium_photo-1661962708264-d7f9e2026e2b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGNsaW5pY2ElMjB2ZXRlcmluYXJpYSUyMGdhdG98ZW58MHx8MHx8fDA%3D"
];

const Galeria = () => {
  // Estado para controlar o índice da imagem atual no carrossel
  const [currentIndex, setCurrentIndex] = useState(0);

  // Função para avançar para a próxima imagem
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
  };

  // Função para voltar para a imagem anterior
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    // Seção da galeria com fundo branco
    <section id="galeria" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Cabeçalho da seção */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full px-4 py-1 text-white font-semibold text-sm">
              Nossa Galeria
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Momentos de <span className="bg-gradient-to-r from-emerald-500 to-blue-500 bg-clip-text text-transparent">Felicidade</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Confira alguns dos momentos especiais que compartilhamos com nossos pacientes e seus tutores.
          </p>
        </div>

        {/* Grid de Fotos (Miniaturas) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="group relative rounded-2xl overflow-hidden shadow-lg cursor-pointer hover:shadow-2xl transition-all transform hover:-translate-y-2"
            >
              <img 
                src={image} 
                alt={`Pet ${index + 1}`} 
                className="w-full h-64 object-cover transition-transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-bold text-lg">Pet Feliz</p>
                  <p className="text-sm opacity-90">Cuidado com amor</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carrossel Principal de Destaque */}
        <div className="relative max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-emerald-500 to-blue-500 rounded-3xl p-2 shadow-2xl">
            <div className="bg-white rounded-2xl overflow-hidden">
              <div className="relative h-96">
                {/* Renderização das imagens do carrossel com transição de opacidade */}
                {galleryImages.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                      index === currentIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <img 
                      src={image} 
                      alt={`Slide ${index + 1}`} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
                
                {/* Overlay com texto informativo sobre a imagem */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                  <div className="text-white">
                    <h3 className="text-3xl font-bold mb-2">Cuidado com Excelência</h3>
                    <p className="text-lg opacity-90 max-w-2xl">
                      Cada pet merece atenção especial e cuidado personalizado. 
                      Nosso compromisso é garantir o bem-estar completo do seu melhor amigo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Botão Anterior */}
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 rounded-full p-3 shadow-lg hover:bg-emerald-500 hover:text-white transition-all"
          >
            <FaChevronLeft size={24} />
          </button>
          
          {/* Botão Próximo */}
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 rounded-full p-3 shadow-lg hover:bg-emerald-500 hover:text-white transition-all"
          >
            <FaChevronRight size={24} />
          </button>

          {/* Indicadores de navegação (bolinhas) */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {galleryImages.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? 'bg-white w-6' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Galeria;