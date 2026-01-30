import React from 'react';
import { FaPaw, FaDog, FaCat } from 'react-icons/fa';

const HeroSection = () => {
  return (
    // Seção principal com padding superior para compensar o header fixo e fundo gradiente suave
    <section className="pt-32 pb-20 bg-gradient-to-br from-emerald-50 to-blue-50 relative overflow-hidden">
      {/* Elementos de fundo animados (Blobs) posicionados de forma absoluta */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-64 h-64 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 right-1/3 w-60 h-60 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      {/* Container centralizado para o conteúdo principal */}
      <div className="container mx-auto px-4 relative z-10">
        {/* Grid responsivo: 1 coluna em mobile, 2 colunas em telas médias/grandes */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Coluna da Esquerda: Conteúdo Textual */}
          <div className="space-y-6">
            {/* Badge/Etiqueta superior */}
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-gradient-to-br from-emerald-500 to-blue-500 rounded-lg p-3 shadow-lg">
                <FaPaw className="w-6 h-6 text-white" />
              </div>
              <span className="text-emerald-500 font-semibold text-sm uppercase tracking-wider">Cuidado Premium</span>
            </div>
            
            {/* Título Principal (H1) */}
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Cuidado <span className="bg-gradient-to-r from-emerald-500 to-blue-500 bg-clip-text text-transparent">Premium</span> para Seu Melhor Amigo
            </h1>
            
            {/* Descrição/Subtítulo */}
            <p className="text-gray-600 text-lg leading-relaxed">
              Clínica veterinária completa e petshop com os melhores profissionais e produtos para garantir a saúde e felicidade do seu pet.
            </p>
            
            {/* Botões de Ação (CTA) */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-emerald-500 to-blue-500 text-white px-8 py-4 rounded-full font-medium hover:shadow-lg hover:shadow-emerald-500/30 transition-all transform hover:-translate-y-1">
                Agendar Consulta
              </button>
              <button className="bg-white text-emerald-500 border-2 border-emerald-500 px-8 py-4 rounded-full font-medium hover:bg-emerald-50 hover:text-emerald-600 transition-colors">
                Ver Serviços
              </button>
            </div>
            
            {/* Seção de Estatísticas (Social Proof) */}
            <div className="flex items-center space-x-6 pt-6 border-t border-gray-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-500">15+</div>
                <div className="text-sm text-gray-600">Anos de Experiência</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-500">5000+</div>
                <div className="text-sm text-gray-600">Pets Atendidos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-500">24/7</div>
                <div className="text-sm text-gray-600">Emergência</div>
              </div>
            </div>
          </div>
          
          {/* Coluna da Direita: Imagem e Elementos Flutuantes */}
          <div className="relative">
            {/* Imagem principal com borda gradiente */}
            <div className="bg-gradient-to-br from-emerald-500 to-blue-500 rounded-3xl p-1 shadow-2xl">
              <div className="bg-white rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=600&auto=format&fit=crop"
                  alt="Cachorro feliz"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            
            {/* Card Flutuante Inferior Esquerdo */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl flex items-center space-x-3">
              <div className="bg-gradient-to-br from-emerald-500 to-blue-500 rounded-full p-3">
                <FaDog className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-bold text-lg">Banho & Tosa</div>
                <div className="text-sm text-gray-600">Profissionais qualificados</div>
              </div>
            </div>
            
            {/* Card Flutuante Superior Direito */}
            <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-xl flex items-center space-x-3">
              <div className="bg-gradient-to-br from-emerald-500 to-blue-500 rounded-full p-3">
                <FaCat className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-bold text-lg">Clínica 24h</div>
                <div className="text-sm text-gray-600">Atendimento emergencial</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;