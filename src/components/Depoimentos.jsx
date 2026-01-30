import React, { useState } from 'react';
import { FaStar, FaQuoteLeft, FaQuoteRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// Dados simulados dos depoimentos de clientes
const testimonials = [
  {
    name: "Mariana Silva",
    pet: "Rex",
    text: "Excelente atendimento! O Dr. Pedro cuidou do meu Rex com tanto carinho e profissionalismo. Recomendo demais!",
    rating: 5,
    image: "https://i.pravatar.cc/150?img=1"
  },
  {
    name: "Carlos Oliveira",
    pet: "Luna",
    text: "A melhor clínica que já levei minha Luna. Equipe super atenciosa e ambiente muito limpo e aconchegante.",
    rating: 5,
    image: "https://i.pravatar.cc/150?img=2"
  },
  {
    name: "Ana Paula",
    pet: "Thor",
    text: "Salvaram a vida do meu Thor! Atendimento emergencial impecável e veterinários muito competentes.",
    rating: 5,
    image: "https://i.pravatar.cc/150?img=3"
  }
];

const Depoimentos = () => {
  // Estado para controlar qual depoimento está em destaque
  const [currentIndex, setCurrentIndex] = useState(0);

  // Função para ir ao próximo depoimento
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  // Função para voltar ao depoimento anterior
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    // Seção de depoimentos com fundo suave
    <section id="depoimentos" className="py-20 bg-gradient-to-br from-emerald-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Cabeçalho da seção */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full px-4 py-1 text-white font-semibold text-sm">
              Depoimentos
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            O que nossos <span className="bg-gradient-to-r from-emerald-500 to-blue-500 bg-clip-text text-transparent">clientes</span> dizem
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Confira o que tutores satisfeitos têm a dizer sobre nossa clínica e serviços.
          </p>
        </div>

        {/* Carrossel de Depoimento em Destaque */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden">
            {/* Elementos decorativos de fundo */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-500 to-blue-500 opacity-10 rounded-full -mr-16 -mt-16"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-br from-emerald-500 to-blue-500 opacity-10 rounded-full -ml-16 -mb-16"></div>

            <div className="relative z-10">
              {/* Ícone de aspas de abertura */}
              <div className="flex justify-center mb-6">
                <FaQuoteLeft className="text-6xl text-emerald-500 opacity-20" />
              </div>
              
              {/* Conteúdo do depoimento */}
              <div className="text-center mb-8">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 w-6 h-6" />
                  ))}
                </div>
                
                <p className="text-gray-700 text-lg italic mb-6 max-w-2xl mx-auto leading-relaxed">
                  "{testimonials[currentIndex].text}"
                </p>
                
                {/* Informações do autor e do pet */}
                <div className="flex items-center justify-center space-x-4">
                  <img 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-emerald-500"
                  />
                  <div className="text-left">
                    <div className="font-bold text-lg">{testimonials[currentIndex].name}</div>
                    <div className="text-emerald-500 font-medium">Pet: {testimonials[currentIndex].pet}</div>
                  </div>
                </div>
              </div>
              
              {/* Ícone de aspas de fechamento */}
              <div className="flex justify-center mb-6">
                <FaQuoteRight className="text-6xl text-emerald-500 opacity-20" />
              </div>
            </div>
          </div>

          {/* Controles de navegação do carrossel */}
          <div className="flex justify-center space-x-4 mt-8">
            <button 
              onClick={prevTestimonial}
              className="bg-white text-emerald-500 border-2 border-emerald-500 rounded-full p-3 hover:bg-emerald-50 transition-colors"
            >
              <FaChevronLeft />
            </button>
            
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? 'bg-emerald-500 w-6' : 'bg-emerald-300'
                }`}
              />
            ))}
            
            <button 
              onClick={nextTestimonial}
              className="bg-white text-emerald-500 border-2 border-emerald-500 rounded-full p-3 hover:bg-emerald-50 transition-colors"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>

        {/* Grid secundário com todos os depoimentos */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2"
            >
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-bold">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">Pet: {testimonial.pet}</div>
                </div>
              </div>
              
              <div className="flex mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 w-5 h-5" />
                ))}
              </div>
              
              <p className="text-gray-700 text-sm italic">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Depoimentos;