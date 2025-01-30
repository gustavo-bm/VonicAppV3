import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      // Navigation
      home: 'HOME',
      about: 'ABOUT US',
      products: 'PRODUCTS',
      partners: 'PARTNERS',
      contact: 'CONTACT',

      // Hero
      years_market: 'Over 30 years in the market',
      delivering: 'DELIVERING',
      solutions: 'ADVANCED',
      solutions_exclamation: 'SOLUTIONS!',
      hero_description: 'Technology and innovation in hot runner systems, developed to maximize your production efficiency.',
      know_products: 'Know Our Products',
      learn_more: 'Learn More',

      // About
      our_proposal: 'Our Proposal',
      about_description: 'Offering differentiated products and services with Technology, Values and Reliability.',
      about_tech: 'We use exclusive logical technology that improves plastic production efficiency. Our technology comes from years of experience, listening to typical molding problems and constantly coming up with SOLUTIONS.',
      about_help: 'We can help your company with new or existing projects to become more efficient than you are today!',

      // Features
      headquarters: 'Headquarters in Salto de Pirapora - SP',
      new_manufacturer: 'New Hot Runner Systems Manufacturer and Supplier',
      certified_products: 'Certified Products',
      materials_certified: 'Manufactured with certified materials for each application',
      commitment: 'Commitment',
      flexibility: 'Flexibility, trust and commitment with each project',
      smart_projects: 'Smart Projects',
      standardized_projects: 'Smart and Standardized Products and Projects',

      // Mastip Section
      mastip_partner: 'We are MASTIP Partners',
      strategic_partnership: 'STRATEGIC PARTNERSHIP',
      partnership_description: 'Vonic Systems is proud to announce its strategic partnership with Mastip, a global leader in hot runner system solutions. This collaboration allows us to offer our customers high quality products and advanced technology, ensuring efficiency and precision in plastic injection processes.',
      who_is_mastip: 'WHO IS MASTIP?',
      mastip_description: 'Mastip is globally recognized for its innovation and excellence in hot runner systems. With decades of experience, the company stands out for developing advanced technological solutions that revolutionize the plastic injection industry.',
      product_types: 'PRODUCT TYPES',
      products_description: 'We offer a complete line of Mastip products, including hot runner systems, injection nozzles, temperature controllers and more. Each product is designed to maximize production efficiency and quality.',

      // Contact
      contact_us: 'Contact Us',
      ready_to_serve: 'We are ready to serve your company',
      name: 'Name',
      your_name: 'Your name',
      email: 'Email',
      your_email: 'your@email.com',
      message: 'Message',
      your_message: 'Your message',
      send_message: 'Send Message',
      phone: 'Phone',
      address: 'Address',

      // Footer
      social_media: 'Social Media',
      rights_reserved: 'All rights reserved',

      // Vonic Products
      vonic_products: 'Vonic Products',
      vonic_products_desc: 'Advanced hot runner system solutions, combining technology, efficiency and reliability for your production.',
      
      // Hot Runner Systems
      hot_runner_systems: 'Hot Runner Systems',
      hot_runner_systems_desc: 'Complete hot runner systems for various applications',
      hot_runner_16: '16-way VONIC Hot Runner System',
      hot_runner_8: '8-way Hot Runner System with Cold Runner',
      
      // Technical Parts
      technical_parts: 'Technical Parts',
      technical_parts_desc: 'Specialized solutions for various engineering applications',
      electrical_parts: 'Electrical parts: PC, PBT',
      telecom_parts: 'Telecommunication parts: PC / ABS',
      engineering_parts: 'Engineering parts: PA6, PA66 + GF30, PPO, PPS, PPE / PS',
      fiber_materials: 'Use with high fiber content materials',
      
      // Hot Nozzles
      hot_nozzles: 'Hot Nozzles',
      hot_nozzles_desc: 'Advanced nozzle technology for precise temperature control',
      efficient_nozzles: 'Efficient nozzles with exclusive design, precise temperature control and minimal heat loss to the mold',
      
      // Manifold Systems
      manifold_systems: 'Balanced Manifold Systems',
      manifold_systems_desc: 'High-performance manifold systems for optimal flow',
      balanced_manifold: 'Manifold with excellent flow balancing, with direct injection into the part and over the channel',
      
      // Hot Half
      hot_half: 'Hot Half Assembly',
      hot_half_desc: 'Complete system assembly solutions',
      complete_systems: 'Assembly of complete systems',
      machined_plates: 'Supply of machined plates',
      
      // Filters and Equipment
      filters_equipment: 'Filters and Equipment',
      filters_equipment_desc: 'Specialized equipment for production and machining',
      specific_equipment: 'Specific equipment for production and machining',
    }
  },
  pt: {
    translation: {
      // Navegação
      home: 'HOME',
      about: 'SOBRE NÓS',
      products: 'PRODUTOS',
      partners: 'PARCEIROS',
      contact: 'CONTATO',

      // Hero
      years_market: 'Há mais de 30 anos no mercado',
      delivering: 'ENTREGANDO',
      solutions: 'SOLUÇÕES',
      solutions_exclamation: 'AVANÇADAS!',
      hero_description: 'Tecnologia e inovação em sistemas de câmara quente, desenvolvidos para maximizar sua eficiência produtiva.',
      know_products: 'Conheça Nossos Produtos',
      learn_more: 'Saiba Mais',

      // Sobre
      our_proposal: 'Nossa Proposta',
      about_description: 'Oferecer produtos e serviços diferenciados com Tecnologia, Valores e Confiabilidade.',
      about_tech: 'Utilizamos tecnologia lógica exclusiva que permite melhorar a eficiência da produção de plástico. Nossa tecnologia vem de anos de experiência, ouvindo problemas típicos de moldagem e constantemente surgindo com SOLUÇÕES.',
      about_help: 'Podemos ajudar sua empresa com projetos novos ou existentes a se tornar mais eficiente do que você é hoje!',

      // Características
      headquarters: 'Sede em Salto de Pirapora - SP',
      new_manufacturer: 'Novo Fabricante e Fornecedor de Sistemas de Câmara-Quente',
      certified_products: 'Produtos Certificados',
      materials_certified: 'Fabricados com Materiais certificados para cada aplicação',
      commitment: 'Comprometimento',
      flexibility: 'Flexibilidade, confiança e comprometimento com cada projeto',
      smart_projects: 'Projetos Inteligentes',
      standardized_projects: 'Produtos e Projetos Inteligentes - Padronizados',

      // Seção Mastip
      mastip_partner: 'Somos Parceiros MASTIP',
      strategic_partnership: 'PARCERIA ESTRATÉGICA',
      partnership_description: 'A Vonic Systems tem o orgulho de anunciar sua parceria estratégica com a Mastip, uma líder global em soluções de sistemas de câmara quente. Esta colaboração nos permite oferecer aos nossos clientes produtos de alta qualidade e tecnologia avançada, garantindo eficiência e precisão nos processos de injeção de plásticos.',
      who_is_mastip: 'QUEM É A MASTIP?',
      mastip_description: 'A Mastip é reconhecida globalmente por sua inovação e excelência em sistemas de câmara quente. Com décadas de experiência, a empresa se destaca pelo desenvolvimento de soluções tecnológicas avançadas que revolucionam a indústria de injeção de plásticos.',
      product_types: 'TIPOS DE PRODUTOS',
      products_description: 'Oferecemos uma linha completa de produtos Mastip, incluindo sistemas de câmara quente, bicos de injeção, controladores de temperatura e muito mais. Cada produto é projetado para maximizar a eficiência e qualidade da produção.',

      // Contato
      contact_us: 'Entre em Contato',
      ready_to_serve: 'Estamos prontos para atender sua empresa',
      name: 'Nome',
      your_name: 'Seu nome',
      email: 'Email',
      your_email: 'seu@email.com',
      message: 'Mensagem',
      your_message: 'Sua mensagem',
      send_message: 'Enviar Mensagem',
      phone: 'Telefone',
      address: 'Endereço',

      // Rodapé
      social_media: 'Redes Sociais',
      rights_reserved: 'Todos os direitos reservados',

      // Produtos Vonic
      vonic_products: 'Produtos Vonic',
      vonic_products_desc: 'Soluções avançadas em sistemas de câmara quente, combinando tecnologia, eficiência e confiabilidade para sua produção.',
      
      // Sistemas de Câmara-Quente
      hot_runner_systems: 'Sistemas de Câmara-Quente',
      hot_runner_systems_desc: 'Sistemas completos de câmara quente para diversas aplicações',
      hot_runner_16: 'Sistema Câmara Quente VONIC 16 vias',
      hot_runner_8: 'Sistema Câmara Quente com 8 vias e Canal Frio',
      
      // Peças Técnicas
      technical_parts: 'Peças Técnicas',
      technical_parts_desc: 'Soluções especializadas para diversas aplicações de engenharia',
      electrical_parts: 'Peças elétricas: PC, PBT',
      telecom_parts: 'Peças de telecomunicações: PC / ABS',
      engineering_parts: 'Peças de engenharia: PA6, PA66 + GF30, PPO, PPS, PPE / PS',
      fiber_materials: 'Uso em materiais com alto teor de fibra',
      
      // Bicos Quentes
      hot_nozzles: 'Bicos Quentes',
      hot_nozzles_desc: 'Tecnologia avançada de bicos para controle preciso de temperatura',
      efficient_nozzles: 'Bicos eficientes com design exclusivo, controle preciso de temperatura e mínima perda de calor para o molde',
      
      // Sistemas de Manifold
      manifold_systems: 'Sistemas de Manifold Balanceados',
      manifold_systems_desc: 'Sistemas de manifold de alto desempenho para fluxo ideal',
      balanced_manifold: 'Manifold com excelente balanceamento de fluxo, com injeção direta na peça e sobre o canal',
      
      // Hot Half
      hot_half: 'Conjunto Hot Half',
      hot_half_desc: 'Soluções completas de montagem de sistemas',
      complete_systems: 'Montagem de sistemas completos',
      machined_plates: 'Fornecimento de placas usinadas',
      
      // Filtros e Equipamentos
      filters_equipment: 'Filtros e Equipamentos',
      filters_equipment_desc: 'Equipamentos especializados para produção e usinagem',
      specific_equipment: 'Equipamentos específicos para a produção e a usinagem',
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