import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaWhatsapp } from 'react-icons/fa';

const Contato = () => {
  // Estado para armazenar os dados do formulário
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    pet: '',
    message: ''
  });

  // Estado para controlar a mensagem de sucesso após envio
  const [submitted, setSubmitted] = useState(false);

  // Atualiza o estado conforme o usuário digita
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Simula o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    // Seção de contato com fundo branco
    <section id="contato" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Cabeçalho da seção */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full px-4 py-1 text-white font-semibold text-sm">
              Contato
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-emerald-500 to-blue-500 bg-clip-text text-transparent">Entre em Contato</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Ficou com alguma dúvida ou quer agendar um atendimento? Estamos aqui para ajudar!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Coluna da Esquerda: Informações de Contato */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-emerald-500 to-blue-500 rounded-2xl p-1 shadow-2xl">
              <div className="bg-white rounded-xl p-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-emerald-100 p-3 rounded-lg">
                    <FaMapMarkerAlt className="w-6 h-6 text-emerald-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Nosso Endereço</h3>
                    <p className="text-gray-600">
                      Rua das Flores, 123<br />
                      Jardim Paulista<br />
                      São Paulo - SP<br />
                      CEP: 01452-001
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-500 to-blue-500 rounded-2xl p-1 shadow-2xl">
              <div className="bg-white rounded-xl p-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-emerald-100 p-3 rounded-lg">
                    <FaPhone className="w-6 h-6 text-emerald-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Telefone</h3>
                    <p className="text-gray-600 mb-2">
                      <a href="tel:+551133334444" className="hover:text-emerald-500 transition-colors">
                        (11) 3333-4444
                      </a>
                    </p>
                    <p className="text-gray-600">
                      <a href="tel:+5511999999999" className="hover:text-emerald-500 transition-colors">
                        (11) 99999-9999 (WhatsApp)
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-500 to-blue-500 rounded-2xl p-1 shadow-2xl">
              <div className="bg-white rounded-xl p-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-emerald-100 p-3 rounded-lg">
                    <FaClock className="w-6 h-6 text-emerald-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Horários de Funcionamento</h3>
                    <p className="text-gray-600">
                      Segunda a Sexta: 8h às 20h<br />
                      Sábado: 9h às 18h<br />
                      Domingo: 10h às 16h<br />
                      Emergência 24h
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Botões de ação rápida (WhatsApp e Email) */}
            <div className="flex space-x-4">
              <a 
                href="https://wa.me/5511999999999" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 bg-green-500 text-white px-6 py-4 rounded-xl font-medium hover:bg-green-600 transition-colors flex items-center justify-center"
              >
                <FaWhatsapp className="mr-2" />
                WhatsApp
              </a>
              <a 
                href="mailto:contato@petcareplus.com.br"
                className="flex-1 bg-emerald-500 text-white px-6 py-4 rounded-xl font-medium hover:bg-emerald-600 transition-colors flex items-center justify-center"
              >
                <FaEnvelope className="mr-2" />
                Email
              </a>
            </div>
          </div>

          {/* Coluna da Direita: Formulário de Contato */}
          <div className="bg-gradient-to-br from-emerald-500 to-blue-500 rounded-2xl p-1 shadow-2xl">
            <div className="bg-white rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Envie sua Mensagem</h3>
              
              {/* Mensagem de feedback de sucesso */}
              {submitted && (
                <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg mb-4">
                  Mensagem enviada com sucesso! Entraremos em contato em breve.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-gray-700 mb-2">Nome Completo *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2">Telefone *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">Nome do Pet</label>
                  <input
                    type="text"
                    name="pet"
                    value={formData.pet}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">Mensagem *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-emerald-500 to-blue-500 text-white px-6 py-4 rounded-lg font-medium hover:shadow-lg hover:shadow-emerald-500/30 transition-all transform hover:-translate-y-1"
                >
                  Enviar Mensagem
                </button>
              </form>

              <p className="text-sm text-gray-500 mt-4 text-center">
                * Responderemos sua mensagem em até 24 horas úteis
              </p>
            </div>
          </div>
        </div>

        {/* Seção do Mapa (Placeholder) */}
        <div className="mt-16">
          <div className="bg-gradient-to-br from-emerald-500 to-blue-500 rounded-2xl p-1 shadow-2xl">
            <div className="bg-white rounded-xl overflow-hidden">
              <div className="h-96 bg-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="bg-gradient-to-br from-emerald-500 to-blue-500 rounded-full p-4 mb-4 inline-block">
                    <FaMapMarkerAlt className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Localização</h3>
                  <p className="text-gray-600">
                    Mapa interativo será integrado aqui
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contato;