import React from 'react';
import ProductCard from '../components/Products/ProductCard';
import { motion } from 'framer-motion';

const products = [
  {
    image: '/products/manifold.jpg',
    title: 'Manifold Balanceado',
    description: 'Sistema de câmara quente com distribuição uniforme de temperatura.',
    features: [
      'Controle preciso de temperatura',
      'Design otimizado de fluxo',
      'Baixa perda de pressão',
      'Manutenção simplificada'
    ]
  },
  {
    image: '/products/bico-injetor.jpg',
    title: 'Bico Injetor VH',
    description: 'Bico de injeção com tecnologia avançada para melhor performance.',
    features: [
      'Alta resistência ao desgaste',
      'Perfil térmico otimizado',
      'Vedação perfeita',
      'Fácil substituição'
    ]
  },
  {
    image: '/products/controlador.jpg',
    title: 'Controlador de Temperatura',
    description: 'Sistema de controle inteligente para câmaras quentes.',
    features: [
      'Interface intuitiva',
      'Múltiplas zonas de controle',
      'Diagnóstico em tempo real',
      'Alarmes configuráveis'
    ]
  },
  {
    image: '/products/resistencia.jpg',
    title: 'Resistências Elétricas',
    description: 'Resistências de alta performance para sistemas de câmara quente.',
    features: [
      'Alta durabilidade',
      'Distribuição uniforme de calor',
      'Baixo consumo energético',
      'Fácil instalação'
    ]
  }
];

const VonicProducts = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Produtos Vonic</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Soluções avançadas em sistemas de câmara quente, desenvolvidas com tecnologia de ponta para atender às mais exigentes demandas do mercado.
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

export default VonicProducts; 