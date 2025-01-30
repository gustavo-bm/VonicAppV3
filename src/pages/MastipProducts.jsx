import React from 'react';
import ProductCard from '../components/Products/ProductCard';
import { motion } from 'framer-motion';

const products = [
  {
    image: '/products/mastip-proflow.jpg',
    title: 'ProFlow Series',
    description: 'Sistema de câmara quente de alta performance para aplicações exigentes.',
    features: [
      'Tecnologia ProFlow avançada',
      'Controle térmico superior',
      'Design compacto',
      'Alta produtividade'
    ]
  },
  {
    image: '/products/mastip-valve.jpg',
    title: 'Valve Gate Systems',
    description: 'Sistemas de válvula gate para controle preciso de injeção.',
    features: [
      'Controle de fluxo preciso',
      'Acionamento pneumático',
      'Vedação perfeita',
      'Mínima marca de injeção'
    ]
  },
  {
    image: '/products/mastip-controller.jpg',
    title: 'Controlador M-Series',
    description: 'Sistema de controle avançado para câmaras quentes Mastip.',
    features: [
      'Interface touch screen',
      'Controle multi-zona',
      'Monitoramento em tempo real',
      'Conectividade avançada'
    ]
  },
  {
    image: '/products/mastip-nozzle.jpg',
    title: 'Bicos de Injeção TS Series',
    description: 'Bicos de injeção com tecnologia térmica superior.',
    features: [
      'Perfil térmico otimizado',
      'Design robusto',
      'Manutenção simplificada',
      'Alta durabilidade'
    ]
  }
];

const MastipProducts = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Produtos Mastip</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Tecnologia neozelandesa de ponta em sistemas de câmara quente, reconhecida mundialmente pela qualidade e inovação.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <ProductCard {...product} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MastipProducts; 