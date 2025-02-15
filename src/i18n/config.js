import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  fallbackLng: 'pt',
  resources: {
    pt: {
      translation: {
        // Navegação
        home: 'Início',
        about: 'Sobre',
        products: 'Produtos',
        contact: 'Contato',
        
        // Produtos
        vonic_products: 'Produtos Vonic',
        vonic_products_desc: 'Soluções completas em sistemas de câmara quente',
        mastip_products: 'Produtos Mastip',
        mastip_products_desc: 'Tecnologia avançada em sistemas hot runner',
        
        // Categorias de Produtos Vonic
        new_releases: 'Novidades Vonic',
        new_releases_desc: 'Conheça nossos mais recentes lançamentos e inovações em sistemas de câmara quente',
        hot_nozzles: 'Bicos de Injeção',
        hot_nozzles_desc: 'Bicos com design exclusivo e controle preciso de temperatura',
        manifolds: 'Manifolds',
        manifolds_desc: 'Sistemas de manifold balanceados para distribuição otimizada',
        hot_half: 'Hot Half',
        hot_half_desc: 'Conjuntos completos de câmara quente customizados',
        controllers: 'Controladores',
        controllers_desc: 'Controladores de temperatura de alta precisão',
        filters: 'Filtros e Equipamentos',
        filters_desc: 'Soluções especializadas para produção e manutenção',

        // Séries de Produtos
        vh_series: 'Série VH',
        vh_series_desc: 'Bicos de válvula de alta performance para aplicações exigentes',
        vt_series: 'Série VT',
        vt_series_desc: 'Bicos térmicos para aplicações gerais com excelente distribuição térmica',
        vp_series: 'Série VP',
        vp_series_desc: 'Bicos especializados para peças técnicas e materiais de engenharia',

        // Botões e Ações
        view_more: 'Ver mais',
        view_specs: 'Ver especificações',
        download: 'Download',
        send_message: 'Enviar mensagem',

        // Seções da Home
        years_market: '20 anos no mercado',
        delivering: 'Entregando',
        solutions: 'soluções',
        solutions_exclamation: 'em sistemas de câmara quente!',
        hero_description: 'Tecnologia e inovação em sistemas de câmara quente para a indústria de injeção de plásticos',
        know_products: 'Conheça nossos produtos',
        learn_more: 'Saiba mais',

        // Mastip Section
        mastip_partner: 'Parceiro Oficial',
        strategic_partnership: 'Parceria Estratégica',
        partnership_description: 'Uma aliança que une experiência global e suporte local',
        who_is_mastip: 'Quem é a Mastip',
        mastip_description: 'Líder global em tecnologia hot runner com mais de 30 anos de experiência',
        product_types: 'Tipos de Produtos',
        products_description: 'Linha completa de sistemas hot runner e soluções customizadas',

        // Contato
        contact_us: 'Entre em Contato',
        ready_to_serve: 'Estamos prontos para atender suas necessidades',
        name: 'Nome',
        email: 'E-mail',
        message: 'Mensagem',
        your_name: 'Seu nome',
        your_email: 'Seu e-mail',
        your_message: 'Sua mensagem',
        address: 'Endereço',

        // Footer
        footer_description: 'Desenvolvendo soluções em sistemas de câmara quente',
        all_rights_reserved: 'Todos os direitos reservados',
        contact_info: 'Informações de Contato',

        // Parceiros
        our_partners: 'Nossos Parceiros',
        partners_subtitle: 'Empresas que confiam em nossa tecnologia',
        testimonials: {
          techcorp: 'A Vonic tem sido fundamental em nosso processo produtivo.',
          innovate: 'Inovação e qualidade são marcas registradas da Vonic.',
          globalplast: 'Parceria que agrega valor ao nosso negócio.',
          futuretech: 'Excelência em soluções técnicas.',
          ecomold: 'Comprometimento com resultados.'
        },

        // Títulos de Seções
        hot_nozzles_title: 'Bicos de Injeção',
        hot_nozzles_desc: 'Descubra nossa linha completa de bicos de injeção, projetados para máxima eficiência e precisão em suas aplicações.',
        
        // Série VH
        vh_series_title: 'Série VH',
        vh_series_desc: 'Bicos de válvula para aplicações de alta performance',
        vh_feature_1: 'Controle preciso de temperatura',
        vh_feature_2: 'Design compacto',
        vh_feature_3: 'Fácil manutenção',
        
        // Série VT
        vt_series_title: 'Série VT',
        vt_series_desc: 'Bicos térmicos para aplicações gerais',
        vt_feature_1: 'Excelente distribuição térmica',
        vt_feature_2: 'Múltiplas opções de pontas',
        vt_feature_3: 'Alta durabilidade',
        
        // Série VP
        vp_series_title: 'Série VP',
        vp_series_desc: 'Bicos para peças técnicas e engenharia',
        vp_feature_1: 'Ideal para materiais técnicos',
        vp_feature_2: 'Alta resistência ao desgaste',
        vp_feature_3: 'Perfil térmico otimizado',

        // Especificações VH
        vh_spec_diameter: 'Diâmetro do Bico',
        vh_spec_length: 'Comprimento',
        vh_spec_power: 'Potência',
        vh_spec_max_temp: 'Temperatura Máxima',
        vh_spec_body_material: 'Material do Corpo',
        vh_spec_body_material_value: 'Aço H13',
        vh_spec_tip_material: 'Material da Ponta',
        vh_spec_tip_material_value: 'Aço H13 Nitretado',
        vh_spec_max_pressure: 'Pressão Máxima de Injeção',
        vh_spec_temp_control: 'Controle de Temperatura',
        vh_spec_temp_control_value: 'Termopar tipo J',

        // Documentação VH
        vh_doc_manual_title: 'Manual Técnico',
        vh_doc_manual_desc: 'Manual completo de instalação e operação da série VH',
        vh_doc_specs_title: 'Especificações Técnicas',
        vh_doc_specs_desc: 'Documento detalhado com todas as especificações técnicas',
        vh_doc_maintenance_title: 'Guia de Manutenção',
        vh_doc_maintenance_desc: 'Vídeo tutorial de manutenção preventiva',

        // Características VH
        vh_feature_1: 'Sistema de vedação avançado que previne vazamentos e garante máxima eficiência',
        vh_feature_2: 'Perfil térmico otimizado para melhor distribuição de temperatura',
        vh_feature_3: 'Design modular para fácil manutenção e troca de componentes',
        vh_feature_4: 'Compatível com uma ampla gama de materiais e aplicações',

        // Geral
        features: 'Características',
        specifications: 'Especificações',
        documentation: 'Documentação',
        specification: 'Especificação',
        value: 'Valor',
      }
    },
    en: {
      translation: {
        // Navigation
        home: 'Home',
        about: 'About',
        products: 'Products',
        contact: 'Contact',
        
        // Products
        vonic_products: 'Vonic Products',
        vonic_products_desc: 'Complete solutions in hot runner systems',
        mastip_products: 'Mastip Products',
        mastip_products_desc: 'Advanced technology in hot runner systems',
        
        // Vonic Product Categories
        new_releases: 'New Releases',
        new_releases_desc: 'Discover our latest innovations in hot runner systems',
        hot_nozzles: 'Hot Nozzles',
        hot_nozzles_desc: 'Nozzles with exclusive design and precise temperature control',
        manifolds: 'Manifolds',
        manifolds_desc: 'Balanced manifold systems for optimized distribution',
        hot_half: 'Hot Half',
        hot_half_desc: 'Complete customized hot runner assemblies',
        controllers: 'Controllers',
        controllers_desc: 'High precision temperature controllers',
        filters: 'Filters and Equipment',
        filters_desc: 'Specialized solutions for production and maintenance',

        // Product Series
        vh_series: 'VH Series',
        vh_series_desc: 'High-performance valve gates for demanding applications',
        vt_series: 'VT Series',
        vt_series_desc: 'Thermal nozzles for general applications with excellent thermal distribution',
        vp_series: 'VP Series',
        vp_series_desc: 'Specialized nozzles for technical parts and engineering materials',

        // Buttons and Actions
        view_more: 'View more',
        view_specs: 'View specifications',
        download: 'Download',
        send_message: 'Send message',

        // Home Sections
        years_market: '20 years in the market',
        delivering: 'Delivering',
        solutions: 'solutions',
        solutions_exclamation: 'in hot runner systems!',
        hero_description: 'Technology and innovation in hot runner systems for the plastic injection industry',
        know_products: 'Know our products',
        learn_more: 'Learn more',

        // Mastip Section
        mastip_partner: 'Official Partner',
        strategic_partnership: 'Strategic Partnership',
        partnership_description: 'An alliance that combines global experience with local support',
        who_is_mastip: 'Who is Mastip',
        mastip_description: 'Global leader in hot runner technology with over 30 years of experience',
        product_types: 'Product Types',
        products_description: 'Complete line of hot runner systems and customized solutions',

        // Contact
        contact_us: 'Contact Us',
        ready_to_serve: 'We are ready to meet your needs',
        name: 'Name',
        email: 'Email',
        message: 'Message',
        your_name: 'Your name',
        your_email: 'Your email',
        your_message: 'Your message',
        address: 'Address',

        // Footer
        footer_description: 'Developing solutions in hot runner systems',
        all_rights_reserved: 'All rights reserved',
        contact_info: 'Contact Information',

        // Partners
        our_partners: 'Our Partners',
        partners_subtitle: 'Companies that trust our technology',
        testimonials: {
          techcorp: 'Vonic has been fundamental in our production process.',
          innovate: 'Innovation and quality are Vonic\'s trademarks.',
          globalplast: 'Partnership that adds value to our business.',
          futuretech: 'Excellence in technical solutions.',
          ecomold: 'Commitment to results.'
        },

        // Section Titles
        hot_nozzles_title: 'Hot Nozzles',
        hot_nozzles_desc: 'Discover our complete line of hot nozzles, designed for maximum efficiency and precision in your applications.',
        
        // VH Series
        vh_series_title: 'VH Series',
        vh_series_desc: 'Valve gate nozzles for high-performance applications',
        vh_feature_1: 'Precise temperature control',
        vh_feature_2: 'Compact design',
        vh_feature_3: 'Easy maintenance',
        
        // VT Series
        vt_series_title: 'VT Series',
        vt_series_desc: 'Thermal nozzles for general applications',
        vt_feature_1: 'Excellent thermal distribution',
        vt_feature_2: 'Multiple tip options',
        vt_feature_3: 'High durability',
        
        // VP Series
        vp_series_title: 'VP Series',
        vp_series_desc: 'Nozzles for technical parts and engineering',
        vp_feature_1: 'Ideal for technical materials',
        vp_feature_2: 'High wear resistance',
        vp_feature_3: 'Optimized thermal profile',

        // VH Specifications
        vh_spec_diameter: 'Nozzle Diameter',
        vh_spec_length: 'Length',
        vh_spec_power: 'Power',
        vh_spec_max_temp: 'Maximum Temperature',
        vh_spec_body_material: 'Body Material',
        vh_spec_body_material_value: 'H13 Steel',
        vh_spec_tip_material: 'Tip Material',
        vh_spec_tip_material_value: 'Nitrided H13 Steel',
        vh_spec_max_pressure: 'Maximum Injection Pressure',
        vh_spec_temp_control: 'Temperature Control',
        vh_spec_temp_control_value: 'J-type Thermocouple',

        // VH Documentation
        vh_doc_manual_title: 'Technical Manual',
        vh_doc_manual_desc: 'Complete installation and operation manual for VH series',
        vh_doc_specs_title: 'Technical Specifications',
        vh_doc_specs_desc: 'Detailed document with all technical specifications',
        vh_doc_maintenance_title: 'Maintenance Guide',
        vh_doc_maintenance_desc: 'Preventive maintenance video tutorial',

        // VH Features
        vh_feature_1: 'Advanced sealing system that prevents leaks and ensures maximum efficiency',
        vh_feature_2: 'Optimized thermal profile for better temperature distribution',
        vh_feature_3: 'Modular design for easy maintenance and component replacement',
        vh_feature_4: 'Compatible with a wide range of materials and applications',

        // General
        features: 'Features',
        specifications: 'Specifications',
        documentation: 'Documentation',
        download: 'Download',
        specification: 'Specification',
        value: 'Value',
      }
    }
  }
});

export default i18n; 