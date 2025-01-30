import React from 'react';
import { motion } from 'framer-motion';
import { FaTools, FaCog, FaIndustry, FaCheckCircle, FaBox, FaWrench } from 'react-icons/fa';

const services = [
  {
    icon: <FaIndustry className="text-4xl mb-4 text-vonic-500" />,
    title: 'Peças Técnicas',
    description: 'Especialização em peças elétricas (PC, PBT), telecomunicações (PC/ABS) e materiais de engenharia (PA6, PA66 + GF30, PPO, PPS, PPE/PS)',
    features: [
      'Uso em materiais com alto teor de fibra',
      'Bicos eficientes e precisos',
      'Controle avançado de temperatura'
    ]
  },
  {
    icon: <FaBox className="text-4xl mb-4 text-vonic-500" />,
    title: 'Soluções para Embalagem',
    description: 'Sistemas avançados para produção de embalagens',
    features: [
      'Sistema para tampas de múltiplas cavidades',
      'Peças de paredes finas',
      'Vestígios imperceptíveis',
      'Excelente processo de troca de cor',
      'Manifold balanceados'
    ]
  },
  {
    icon: <FaCog className="text-4xl mb-4 text-vonic-500" />,
    title: 'Bicos Quentes',
    description: 'Design exclusivo com controle preciso de temperatura',
    features: [
      'Mínima perda de calor para o molde',
      'Perfil de calor uniforme',
      'Controle preciso para qualquer material plástico',
      'Temperaturas mais baixas do material',
      'Partidas mais rápidas e menos rejeições'
    ]
  },
  {
    icon: <FaWrench className="text-4xl mb-4 text-vonic-500" />,
    title: 'Serviços Especializados',
    description: 'Manutenção completa e serviços técnicos',
    features: [
      'Retrofit Completo',
      'Retifica de Placas e Manifold',
      'Troca de Bicos',
      'Montagem',
      'Acompanhamento e try-out'
    ]
  }
];

const Services = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#CE171F] via-[#8B0000] to-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-white">Nosso Expertise</h2>
          <p className="text-white/90">Soluções completas para produção eficiente</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/10 hover:border-white/30 group"
            >
              <div className="bg-gradient-to-br from-[#CE171F]/10 to-transparent p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-[#CE171F] group-hover:text-[#8B0000] transition-colors">{service.title}</h3>
              <p className="text-black/80 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-black/70">
                    <FaCheckCircle className="text-[#CE171F] mr-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 