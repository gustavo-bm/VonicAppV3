import React from 'react';
import { motion } from 'framer-motion';
import { FaTools, FaCog, FaChartLine, FaCheckCircle } from 'react-icons/fa';

const services = [
  {
    icon: <FaTools className="text-4xl mb-4 text-blue-500" />,
    title: 'Manutenção Especializada',
    description: 'Serviços de manutenção preventiva e corretiva para sistemas de câmara quente'
  },
  {
    icon: <FaCog className="text-4xl mb-4 text-blue-500" />,
    title: 'Fabricação sob Medida',
    description: 'Desenvolvimento e fabricação de sistemas personalizados para sua necessidade'
  },
  {
    icon: <FaChartLine className="text-4xl mb-4 text-blue-500" />,
    title: 'Otimização de Processos',
    description: 'Análise e melhoria de eficiência em sistemas existentes'
  },
  {
    icon: <FaCheckCircle className="text-4xl mb-4 text-blue-500" />,
    title: 'Consultoria Técnica',
    description: 'Suporte especializado para implementação e operação de sistemas'
  }
];

const Services: React.FC = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Nossos Serviços</h2>
          <p className="text-gray-600">Soluções completas para sua indústria</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              {service.icon}
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 