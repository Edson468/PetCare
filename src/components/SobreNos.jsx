import React from 'react';
import { FaAward, FaUsers, FaHeart } from 'react-icons/fa';

const SobreNos = () => {
  // Dados estatísticos para exibição na seção
  const stats = [
    { icon: FaAward, number: "15+", label: "Anos de Experiência" },
    { icon: FaUsers, number: "30+", label: "Profissionais Qualificados" },
    { icon: FaHeart, number: "5000+", label: "Pets Atendidos" }
  ];

  return (
    // Seção Sobre Nós com fundo gradiente suave
    <section id="sobre" className="py-20 bg-gradient-to-br from-emerald-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Grid de 2 colunas: Texto à esquerda, Imagens à direita */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {/* Badge/Etiqueta superior */}
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-gradient-to-br from-emerald-500 to-blue-500 rounded-lg p-3 shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <span className="text-emerald-500 font-semibold text-sm uppercase tracking-wider">Sobre Nós</span>
            </div>
            
            {/* Título principal */}
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="bg-gradient-to-r from-emerald-500 to-blue-500 bg-clip-text text-transparent">25 Anos</span> Cuidando com Amor
            </h2>
            
            {/* Parágrafos de descrição */}
            <p className="text-gray-600 text-lg leading-relaxed">
              Fundada em 2001, a PetCare+ é referência em atendimento veterinário e serviços pet na região. 
              Nossa missão é proporcionar o melhor cuidado para seu pet com amor, dedicação e profissionalismo.
            </p>
            
            <p className="text-gray-600 text-lg leading-relaxed">
              Contamos com uma equipe de veterinários especializados, equipamentos de última geração e 
              um ambiente acolhedor projetado especialmente para o conforto dos nossos pacientes.
            </p>
            
            {/* Grid de estatísticas (Experiência, Profissionais, Pets) */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-200">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-emerald-500 to-blue-500 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
            
            <button className="mt-6 bg-gradient-to-r from-emerald-500 to-blue-500 text-white px-8 py-4 rounded-full font-medium hover:shadow-lg hover:shadow-emerald-500/30 transition-all">
              Conheça Nossa Equipe
            </button>
          </div>
          
          {/* Coluna da Direita: Mosaico de imagens */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-emerald-500 to-blue-500 rounded-2xl p-1 shadow-2xl">
                <div className="bg-white rounded-xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&auto=format&fit=crop"
                    alt="Veterinário com cachorro"
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl p-1 shadow-2xl mt-8">
                <div className="bg-white rounded-xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fGdhdG9zfGVufDB8fDB8fHww"
                    alt="Clínica veterinária"
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl p-1 shadow-2xl">
                <div className="bg-white rounded-xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1517849845537-4d257902454a?w=400&auto=format&fit=crop"
                    alt="Gato sendo examinado"
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>
            </div>
            
            {/* Card flutuante de certificação */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl border-4 border-emerald-500">
              <div className="flex items-center">
                <div className="bg-gradient-to-br from-emerald-500 to-blue-500 rounded-full p-4 mr-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-xl">Qualidade Certificada</div>
                  <div className="text-sm text-gray-600">Padrões internacionais</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobreNos;