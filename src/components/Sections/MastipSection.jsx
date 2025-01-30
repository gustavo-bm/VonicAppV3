import React, { useState } from 'react';
import { motion } from 'framer-motion';
import HotRunnerScene from '../3D/HotRunner';

const MastipSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="relative bg-gradient-to-b from-black to-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#CE171F] font-semibold mb-4 block">Somos Parceiros MASTIP</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              PARCERIA ESTRATÉGICA
            </h2>
            <p className="text-gray-300 mb-8 leading-relaxed">
              A Vonic Systems tem o orgulho de anunciar sua parceria estratégica com a Mastip, 
              uma líder global em soluções de sistemas de câmara quente. Esta colaboração nos 
              permite oferecer aos nossos clientes produtos de alta qualidade e tecnologia avançada, 
              garantindo eficiência e precisão nos processos de injeção de plásticos.
            </p>

            <div className="space-y-4">
              <div 
                className="border-b border-gray-800 py-4 cursor-pointer group"
                onClick={() => setIsExpanded(!isExpanded)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold group-hover:text-[#CE171F] transition-colors">QUEM É A MASTIP?</h3>
                  <span className={`transform transition-transform ${isExpanded ? 'rotate-45' : ''} text-[#CE171F]`}>+</span>
                </div>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="mt-4 text-gray-400 leading-relaxed"
                  >
                    A Mastip é reconhecida mundialmente por seu compromisso com a inovação e a 
                    excelência em sistemas de câmara quente. Com uma vasta gama de produtos 
                    projetados para atender às necessidades específicas de diversos setores, 
                    a Mastip é sinônimo de qualidade e confiabilidade.
                  </motion.div>
                )}
              </div>

              <div className="border-b border-gray-800 py-4 cursor-pointer group">
                <h3 className="text-xl font-semibold flex justify-between items-center group-hover:text-[#CE171F] transition-colors">
                  TIPOS DE PRODUTOS
                  <span className="text-[#CE171F]">+</span>
                </h3>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#CE171F]/20 to-transparent rounded-lg" />
            <HotRunnerScene />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MastipSection; 