# 🐾 PetCare+ - Landing Page para Clínica Veterinária

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

Landing page moderna e responsiva para clínica veterinária e petshop, desenvolvida com React e Tailwind CSS. Design arrojado com foco na experiência do usuário e conversão de leads.

## 🎯 Sobre o Projeto

O **PetCare+** é uma landing page completa para clínicas veterinárias e petshops que buscam uma presença online profissional e moderna. O projeto foi desenvolvido com foco em:

- ✨ **Design Moderno**: Interface limpa e atraente com gradientes suaves
- 📱 **Totalmente Responsivo**: Perfeito para mobile, tablet e desktop
- ⚡ **Performance**: Otimizado para carregamento rápido
- 🎨 **Paleta Profissional**: Cores que transmitem confiança e saúde
- 💚 **UX Focado no Usuário**: Navegação intuitiva e conversões otimizadas

## 🚀 Funcionalidades

### Seções Principais
- ✅ **Header Responsivo**: Menu com hamburger para mobile e navegação suave
- ✅ **Hero Section**: Banner impactante com call-to-action e estatísticas
- ✅ **Serviços**: Cards interativos com ícones e descrições completas
- ✅ **Sobre Nós**: História da clínica com imagens e estatísticas
- ✅ **Galeria**: Grid de fotos + carrossel principal com animações
- ✅ **Depoimentos**: Carrossel de depoimentos + grid de reviews
- ✅ **Contato**: Formulário funcional + informações de contato + mapa
- ✅ **Footer**: Links rápidos, redes sociais e informações completas

### Recursos Técnicos
- 🎭 **Animações Suaves**: Transições, hover effects e micro-interações
- 📊 **Carrosséis Interativos**: Para galeria e depoimentos
- 📝 **Formulário de Contato**: Validação e feedback visual
- 📞 **Links Clicáveis**: WhatsApp e telefone direto
- 🌐 **Scroll Suave**: Navegação entre seções animada
- 🎨 **Gradientes Personalizados**: Design moderno e vibrante

## 🎨 Paleta de Cores

| Cor | Hex | Uso |
|-----|-----|-----|
| **Verde Esmeralda** | `#10b981` | Cor primária - saúde e natureza |
| **Azul Vibrante** | `#3b82f6` | Cor secundária - confiança e profissionalismo |
| **Laranja** | `#f59e0b` | Cor de acento - energia e alegria |
| **Azul Escuro** | `#1e293b` | Cores neutras - texto e detalhes |
| **Branco Suave** | `#f8fafc` | Fundos e backgrounds |

## 🛠️ Tecnologias Utilizadas

### Frontend
- ⚛️ **React 18** - Biblioteca JavaScript para interfaces
- 🎨 **Tailwind CSS** - Framework CSS utilitário
- ⚡ **Vite** - Build tool e dev server rápido
- 📦 **React Icons** - Ícones SVG para React

### Ferramentas
- 🔧 **ESLint** - Linter para código limpo
- 🎯 **Prettier** - Formatador de código
- 🌐 **Vercel** - Deploy e hospedagem (recomendado)

## 📦 Instalação e Execução

### Pré-requisitos
- Node.js (v16 ou superior)
- npm ou yarn
- Git

### Passo a Passo

1. **Clone o repositório**
   ```bash
   git clone https://github.com/SEU_USUARIO/PetCare.git
   cd PetCare
   ```

2. **Instale as dependências**
   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Execute o projeto em desenvolvimento**
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

4. **Acesse no navegador**
   ```
   http://localhost:5173
   ```

5. **Build para produção**
   ```bash
   npm run build
   # ou
   yarn build
   ```

6. **Preview do build**
   ```bash
   npm run preview
   # ou
   yarn preview
   ```

## 📁 Estrutura do Projeto

```
PetCare/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Cabeçalho com menu responsivo
│   │   ├── HeroSection.jsx     # Seção hero com banner principal
│   │   ├── Servicos.jsx        # Cards de serviços
│   │   ├── SobreNos.jsx        # Seção sobre a clínica
│   │   ├── Galeria.jsx         # Galeria de fotos + carrossel
│   │   ├── Depoimentos.jsx     # Depoimentos de clientes
│   │   ├── Contato.jsx         # Formulário e informações
│   │   └── Footer.jsx          # Rodapé completo
│   ├── App.jsx                 # Componente principal
│   ├── main.jsx                # Ponto de entrada
│   └── index.css               # Estilos globais + animações
├── public/
│   └── vite.svg
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## 🎯 Como Customizar

### Mudar Informações de Contato

No arquivo `src/components/Contato.jsx`:
```jsx
// Altere os dados de contato
const contato = {
  telefone: '(11) 99999-9999',
  email: 'contato@petcareplus.com.br',
  endereco: 'Rua das Flores, 123, São Paulo - SP'
};
```

### Alterar Cores

No arquivo `tailwind.config.js`:
```js
theme: {
  extend: {
    colors: {
      primary: '#10b981',  // Verde esmeralda
      secondary: '#3b82f6', // Azul vibrante
      accent: '#f59e0b',    // Laranja
    }
  }
}
```

### Adicionar Novos Serviços

No arquivo `src/components/Servicos.jsx`:
```js
const services = [
  {
    icon: FaHeartbeat,
    title: "Novo Serviço",
    description: "Descrição do serviço...",
    color: "from-emerald-500 to-blue-500"
  },
  // ... outros serviços
];
```

### Configurar Links de Redes Sociais

No arquivo `src/components/Footer.jsx`:
```jsx
const redesSociais = {
  facebook: 'https://facebook.com/petcare',
  instagram: 'https://instagram.com/petcare',
  twitter: 'https://twitter.com/petcare',
  youtube: 'https://youtube.com/petcare'
};
```

## 🚀 Deploy

### Vercel (Recomendado)

1. Instale o Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Faça deploy:
   ```bash
   vercel
   ```

3. Siga as instruções no terminal

### Netlify

1. Faça build:
   ```bash
   npm run build
   ```

2. Arraste a pasta `dist` para o Netlify

### GitHub Pages

```bash
npm install -D gh-pages
```

No `package.json`:
```json
{
  "homepage": "https://SEU_USUARIO.github.io/PetCare",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

Deploy:
```bash
npm run deploy
```

## 🤝 Como Contribuir

Contribuições são bem-vindas! Siga estes passos:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Faça commit das suas alterações (`git commit -m 'feat: adiciona nova feature'`)
4. Faça push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

### Padrão de Commits

Usamos o padrão [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` - Nova funcionalidade
- `fix:` - Correção de bug
- `docs:` - Documentação
- `style:` - Formatação de código
- `refactor:` - Refatoração
- `test:` - Testes
- `chore:` - Atualizações de build/configuração

## 📋 Checklist de Melhorias Futuras

- [ ] Integração com Google Maps
- [ ] Sistema de agendamento online
- [ ] Blog com dicas para pets
- [ ] Área de login para clientes
- [ ] Chatbot para atendimento
- [ ] Integração com WhatsApp API
- [ ] SEO otimizado
- [ ] Acessibilidade (WCAG)
- [ ] Testes automatizados
- [ ] Dark mode

## 📄 Licença

Este projeto está licenciado sob a MIT License - veja o arquivo [LICENSE](LICENSE) para detalhes.

## 👨‍💻 Autor

**Edson Carvalho**
- GitHub: [@edsoncarvalho](https://github.com/Edson468)
- LinkedIn: [linkedin.com/in/edsoncarvalho](https://www.linkedin.com/in/edson-carvalho-213b051b1/)

## 🙏 Agradecimentos

- [React](https://reactjs.org/) - Biblioteca incrível
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS fantástico
- [Vite](https://vitejs.dev/) - Ferramenta de desenvolvimento rápida
- [React Icons](https://react-icons.github.io/react-icons/) - Ícones SVG
- [Unsplash](https://unsplash.com/) - Imagens de alta qualidade

## 📞 Suporte

Para dúvidas ou suporte, entre em contato:

📧 **Email**: edson4518@gmail.com 
📱 **WhatsApp**: (85) 987855611  

---

**⭐ Se gostou do projeto, deixe uma estrela! ⭐**

<div align="center">
  <img src="https://img.shields.io/github/stars/SEU_USUARIO/PetCare?style=social" alt="GitHub stars">
  <img src="https://img.shields.io/github/forks/SEU_USUARIO/PetCare?style=social" alt="GitHub forks">
  <img src="https://img.shields.io/github/watchers/SEU_USUARIO/PetCare?style=social" alt="GitHub watchers">
</div>

---


