import React from 'react';
import { FaHeartbeat, FaBone, FaBath, FaHotel, FaMicrochip, FaPills } from 'react-icons/fa';

// Array de dados contendo as informações de cada serviço oferecido
const services = [
  {
    icon: FaHeartbeat,
    title: "Consultas Veterinárias",
    description: "Atendimento completo com veterinários especializados em diversas áreas.",
    color: "from-emerald-500 to-blue-500"
  },
  {
    icon: FaBone,
    title: "Vacinação",
    description: "Carteira de vacinação completa e atualizada para cães e gatos.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: FaBath,
    title: "Banho & Tosa",
    description: "Profissionais qualificados com produtos de alta qualidade para seu pet.",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: FaHotel,
    title: "Hotel Pet",
    description: "Hospedagem confortável e segura com monitoramento 24 horas.",
    color: "from-amber-500 to-orange-500"
  },
  {
    icon: FaMicrochip,
    title: "Exames Laboratoriais",
    description: "Exames completos com resultados rápidos e precisos.",
    color: "from-emerald-500 to-teal-500"
  },
  {
    icon: FaPills,
    title: "Farmácia Veterinária",
    description: "Medicamentos e produtos veterinários com preços especiais.",
    color: "from-indigo-500 to-violet-500"
  }
];

const Servicos = () => {
  return (
    // Seção de serviços com fundo branco e padding vertical
    <section id="servicos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Cabeçalho da seção com título e descrição centralizados */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full px-4 py-1 text-white font-semibold text-sm">
              Nossos Serviços
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Tudo para o <span className="bg-gradient-to-r from-emerald-500 to-blue-500 bg-clip-text text-transparent">Bem-Estar</span> do Seu Pet
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Oferecemos uma gama completa de serviços veterinários e de estética para garantir a saúde e felicidade do seu melhor amigo.
          </p>
        </div>

        {/* Grid responsivo para exibir os cards de serviços */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Mapeamento do array de serviços para renderizar cada card */}
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 cursor-pointer group"
            >
              {/* Ícone do serviço com fundo gradiente e efeito de escala no hover */}
              <div className={`bg-gradient-to-br ${service.color} rounded-xl p-5 w-16 h-16 mb-6 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              {/* Título do serviço */}
              <h3 className="text-2xl font-bold mb-3 group-hover:text-emerald-500 transition-colors">
                {service.title}
              </h3>
              
              {/* Descrição do serviço */}
              <p className="text-gray-600 mb-4">
                {service.description}
              </p>
              
              {/* Botão "Saiba mais" com seta animada */}
              <button className="text-emerald-500 font-medium flex items-center group-hover:gap-2 transition-all">
                Saiba mais
                <svg className="w-4 h-4 ml-2 group-hover:ml-3 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          ))}
        </div>

        {/* Botão CTA para ver todos os serviços */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-emerald-500 to-blue-500 text-white px-8 py-4 rounded-full font-medium hover:shadow-lg hover:shadow-emerald-500/30 transition-all">
            Ver Todos os Serviços
          </button>
        </div>
      </div>
    </section>
  );
};

export default Servicos;