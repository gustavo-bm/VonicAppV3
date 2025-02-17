import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Importando as traduções diretamente
const pt = {
  navigation: {
    home: 'Início',
    products: 'Produtos',
    about: 'Sobre',
    contact: 'Contato',
    vonic_products: 'Produtos Vonic',
    mastip_products: 'Produtos Mastip'
  },

  buttons: {
    view_more: 'Ver mais',
    view_details: 'Ver detalhes',
    view_specs: 'Ver especificações',
    learn_more: 'Saiba mais',
    contact_us: 'Entre em contato',
    know_products: 'Conheça nossos produtos'
  },

  hero: {
    years_market: '25 anos no mercado',
    delivering: 'Entregando',
    solutions: 'soluções',
    solutions_exclamation: 'em injeção plástica!',
    hero_description: 'Somos especialistas em sistemas de câmara quente e soluções para injeção plástica, oferecendo produtos de alta qualidade e suporte técnico especializado.'
  },

  mastip: {
    hot_halves: {
      title: 'Sistemas Hot Half',
      description: 'Sistemas completos de câmara quente para todas as aplicações',
      systems: {
        standard: {
          title: 'Sistemas Hot Half Padrão',
          description: 'Sistemas completos de câmara quente projetados para eficiência e confiabilidade',
          features: [
            'Design robusto e confiável',
            'Manutenção simplificada',
            'Excelente custo-benefício',
            'Configurações flexíveis',
            'Controle preciso de temperatura',
            'Suporte técnico especializado'
          ]
        },
        specialty: {
          title: 'Sistemas Hot Half Especiais',
          description: 'Soluções personalizadas para aplicações específicas e desafiadoras',
          features: [
            'Projetos customizados',
            'Alta performance',
            'Soluções inovadoras',
            'Suporte técnico especializado',
            'Materiais de alta qualidade',
            'Tecnologia avançada'
          ]
        }
      }
    }
  },

  features: 'Características',
  specifications: 'Especificações'
};

i18n
  .use(initReactI18next)
  .init({
    resources: {
      pt: { translation: pt }
    },
    lng: 'pt',
    fallbackLng: 'pt',
    interpolation: {
      escapeValue: false
    },
    debug: true // Ativa logs de debug para identificar problemas
  });

export default i18n; 