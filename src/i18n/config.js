import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  pt: {
    translation: {
      // Navegação
      home: 'Início',
      about: 'Sobre',
      products: 'Produtos',
      contact: 'Contato',
      vonic_products: 'Produtos Vonic',
      
      // Hero
      years_market: '10+ Anos no Mercado',
      delivering: 'Desenvolvendo',
      solutions: 'soluções',
      solutions_exclamation: 'em sistemas de câmara quente!',
      hero_description: 'Tecnologia e inovação em sistemas de câmara quente para a indústria de injeção de plásticos.',
      know_products: 'Conheça nossos produtos',
      learn_more: 'Saiba mais',

      // Produtos
      vonic_products_desc: 'Descubra nossa linha completa de produtos para sistemas de câmara quente',
      new_products: 'Novos Produtos',
      hot_nozzles: 'Bicos de Injeção',
      manifolds: 'Manifolds',
      hot_half: 'Hot Half',
      controllers: 'Controladores',
      filters: 'Filtros',

      // Filtros
      filter_title: 'Filtros',
      filter_description: 'Soluções especializadas para filtragem em sistemas de injeção',
      mesh_filters: 'Filtros de Malha',
      mesh_filters_desc: 'Filtros de malha para diferentes aplicações e materiais',
      filter_features: {
        multiple_sizes: 'Disponível em múltiplos tamanhos',
        high_pressure: 'Resistente a altas pressões',
        easy_maintenance: 'Fácil manutenção',
        material_compatibility: 'Compatível com diversos materiais',
        efficient_filtration: 'Filtragem eficiente',
        temperature_resistant: 'Resistente a altas temperaturas'
      },

      // Mastip
      mastip_partner: 'Parceiro Oficial',
      strategic_partnership: 'Parceria Estratégica',
      partnership_description: 'Uma aliança que une experiência global e tecnologia de ponta',
      who_is_mastip: 'Quem é a Mastip',
      mastip_description: 'Líder global em tecnologia de câmara quente',
      product_types: 'Tipos de Produtos',
      products_description: 'Linha completa de soluções para injeção',

      // Footer
      footer_description: 'Desenvolvendo soluções em sistemas de câmara quente',
      all_rights_reserved: 'Todos os direitos reservados',

      // Parceiros
      our_partners: 'Nossos Parceiros',
      partners_subtitle: 'Empresas que confiam em nossa tecnologia',
      testimonials: {
        techcorp: 'A Vonic tem sido fundamental em nosso processo de produção.',
        innovate: 'Inovação e qualidade são marcas registradas da Vonic.',
        globalplast: 'Parceria que agrega valor ao nosso negócio.',
        futuretech: 'Excelência em soluções técnicas.',
        ecomold: 'Comprometimento com resultados.'
      },

      // Séries
      vh_series: 'Série VH',
      vh_series_desc: 'Bicos de válvula de alta performance para aplicações exigentes',
      vt_series: 'Série VT',
      vt_series_desc: 'Bicos térmicos para aplicações gerais com excelente distribuição térmica',
      vp_series: 'Série VP',
      vp_series_desc: 'Bicos especializados para peças técnicas e materiais de engenharia',

      // Características
      characteristics: 'Características',
      specifications: 'Especificações',
      documentation: 'Documentação',
      
      // Documentos
      technical_manual: 'Manual Técnico',
      technical_manual_desc: 'Manual completo de instalação e operação',
      technical_specs: 'Especificações Técnicas',
      technical_specs_desc: 'Documento detalhado com todas as especificações técnicas',
      maintenance_guide: 'Guia de Manutenção',
      maintenance_guide_desc: 'Vídeo tutorial de manutenção preventiva',
      download: 'Download',

      // Especificações
      nozzle_diameter: 'Diâmetro do Bico',
      length: 'Comprimento',
      power: 'Potência',
      max_temp: 'Temperatura Máxima',
      body_material: 'Material do Corpo',
      tip_material: 'Material da Ponta',
      max_pressure: 'Pressão Máxima de Injeção',
      temp_control: 'Controle de Temperatura',

      // Características VH
      vh_feature_1: 'Sistema de vedação avançado que previne vazamentos e garante máxima eficiência',
      vh_feature_2: 'Perfil térmico otimizado para melhor distribuição de temperatura',
      vh_feature_3: 'Design modular para fácil manutenção e troca de componentes',
      vh_feature_4: 'Compatível com uma ampla gama de materiais e aplicações',

      // Características VT
      vt_feature_1: 'Perfil térmico otimizado para melhor distribuição de temperatura',
      vt_feature_2: 'Múltiplas opções de pontas para diferentes aplicações',
      vt_feature_3: 'Design robusto para maior durabilidade',
      vt_feature_4: 'Ideal para processamento de materiais comuns',

      // Características VP
      vp_feature_1: 'Ideal para processamento de materiais técnicos e de engenharia',
      vp_feature_2: 'Alta resistência ao desgaste e à corrosão',
      vp_feature_3: 'Perfil térmico otimizado para materiais de alta temperatura',
      vp_feature_4: 'Compatível com materiais reforçados com fibra de vidro'
    }
  },
  en: {
    translation: {
      // Navigation
      home: 'Home',
      about: 'About',
      products: 'Products',
      contact: 'Contact',
      vonic_products: 'Vonic Products',
      
      // Hero
      years_market: '10+ Years in the Market',
      delivering: 'Delivering',
      solutions: 'solutions',
      solutions_exclamation: 'in hot runner systems!',
      hero_description: 'Technology and innovation in hot runner systems for the plastic injection industry.',
      know_products: 'Discover our products',
      learn_more: 'Learn more',

      // Products
      vonic_products_desc: 'Discover our complete line of hot runner system products',
      new_products: 'New Products',
      hot_nozzles: 'Hot Nozzles',
      manifolds: 'Manifolds',
      hot_half: 'Hot Half',
      controllers: 'Controllers',
      filters: 'Filters',

      // Filters
      filter_title: 'Filters',
      filter_description: 'Specialized solutions for injection system filtration',
      mesh_filters: 'Mesh Filters',
      mesh_filters_desc: 'Mesh filters for different applications and materials',
      filter_features: {
        multiple_sizes: 'Available in multiple sizes',
        high_pressure: 'High pressure resistant',
        easy_maintenance: 'Easy maintenance',
        material_compatibility: 'Compatible with various materials',
        efficient_filtration: 'Efficient filtration',
        temperature_resistant: 'High temperature resistant'
      },

      // Mastip
      mastip_partner: 'Official Partner',
      strategic_partnership: 'Strategic Partnership',
      partnership_description: 'An alliance that combines global experience and cutting-edge technology',
      who_is_mastip: 'Who is Mastip',
      mastip_description: 'Global leader in hot runner technology',
      product_types: 'Product Types',
      products_description: 'Complete line of injection solutions',

      // Footer
      footer_description: 'Developing solutions in hot runner systems',
      all_rights_reserved: 'All rights reserved',

      // Parceiros
      our_partners: 'Our Partners',
      partners_subtitle: 'Companies that trust our technology',
      testimonials: {
        techcorp: 'Vonic has been fundamental in our production process.',
        innovate: 'Innovation and quality are Vonic\'s trademarks.',
        globalplast: 'Partnership that adds value to our business.',
        futuretech: 'Excellence in technical solutions.',
        ecomold: 'Commitment to results.'
      },

      // Series
      vh_series: 'VH Series',
      vh_series_desc: 'High-performance valve gates for demanding applications',
      vt_series: 'VT Series',
      vt_series_desc: 'Thermal nozzles for general applications with excellent thermal distribution',
      vp_series: 'VP Series',
      vp_series_desc: 'Specialized nozzles for technical parts and engineering materials',

      // Characteristics
      characteristics: 'Characteristics',
      specifications: 'Specifications',
      documentation: 'Documentation',
      
      // Documents
      technical_manual: 'Technical Manual',
      technical_manual_desc: 'Complete installation and operation manual',
      technical_specs: 'Technical Specifications',
      technical_specs_desc: 'Detailed document with all technical specifications',
      maintenance_guide: 'Maintenance Guide',
      maintenance_guide_desc: 'Preventive maintenance video tutorial',
      download: 'Download',

      // Specifications
      nozzle_diameter: 'Nozzle Diameter',
      length: 'Length',
      power: 'Power',
      max_temp: 'Maximum Temperature',
      body_material: 'Body Material',
      tip_material: 'Tip Material',
      max_pressure: 'Maximum Injection Pressure',
      temp_control: 'Temperature Control',

      // VH Features
      vh_feature_1: 'Advanced sealing system that prevents leaks and ensures maximum efficiency',
      vh_feature_2: 'Optimized thermal profile for better temperature distribution',
      vh_feature_3: 'Modular design for easy maintenance and component replacement',
      vh_feature_4: 'Compatible with a wide range of materials and applications',

      // VT Features
      vt_feature_1: 'Optimized thermal profile for better temperature distribution',
      vt_feature_2: 'Multiple tip options for different applications',
      vt_feature_3: 'Robust design for greater durability',
      vt_feature_4: 'Ideal for processing common materials',

      // VP Features
      vp_feature_1: 'Ideal for processing technical and engineering materials',
      vp_feature_2: 'High wear and corrosion resistance',
      vp_feature_3: 'Optimized thermal profile for high-temperature materials',
      vp_feature_4: 'Compatible with glass fiber reinforced materials'
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'pt',
    fallbackLng: 'pt',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n; 