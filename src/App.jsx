import React from 'react';
import './index.css';
// Importação dos componentes que compõem as seções da página
import Header from './components/Header';
import Hero from './components/HeroSection';
import Servicos from './components/Servicos';
import Sobre from './components/SobreNos';
import Galeria from './components/Galeria';
import Depoimentos from './components/Depoimentos';
import Contato from './components/Contato';
import Footer from './components/Footer';

function App() {
  return (
    // Container principal definindo a fonte global e cores base
    <div className="font-sans bg-white text-gray-800">
      {/* Renderização sequencial de todas as seções da Landing Page */}
      <Header />
      <Hero />
      <Servicos />
      <Sobre />
      <Galeria />
      <Depoimentos />
      <Contato />
      <Footer />
    </div>
  );
}

export default App;