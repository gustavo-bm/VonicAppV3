import React from 'react';
import { motion } from 'framer-motion';
import HotRunner from '../3D/HotRunner';

const MastipSection = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <span className="text-[#CE171F] font-medium">Somos Parceiros MASTIP</span>
            
            <h2 className="text-4xl font-bold text-white">PARCERIA ESTRATÉGICA</h2>
            
            <p className="text-white/90 leading-relaxed">
              A Vonic Systems tem o orgulho de anunciar sua parceria estratégica com a
              Mastip, uma líder global em soluções de sistemas de câmara quente. Esta
              colaboração nos permite oferecer aos nossos clientes produtos de alta
              qualidade e tecnologia avançada, garantindo eficiência e precisão nos
              processos de injeção de plásticos.
            </p>

            <div className="space-y-4">
              <div className="border-b border-white/10 pb-4">
                <button className="flex items-center justify-between w-full text-left">
                  <h3 className="text-xl font-semibold text-white">QUEM É A MASTIP?</h3>
                  <span className="text-[#CE171F] text-2xl">+</span>
                </button>
                <div className="mt-4">
                  <p className="text-white/80 leading-relaxed">
                    A Mastip é reconhecida globalmente por sua inovação e excelência em sistemas
                    de câmara quente. Com décadas de experiência, a empresa se destaca pelo
                    desenvolvimento de soluções tecnológicas avançadas que revolucionam a
                    indústria de injeção de plásticos.
                  </p>
                </div>
              </div>

              <div className="border-b border-white/10 pb-4">
                <button className="flex items-center justify-between w-full text-left">
                  <h3 className="text-xl font-semibold text-white">TIPOS DE PRODUTOS</h3>
                  <span className="text-[#CE171F] text-2xl">+</span>
                </button>
                <div className="mt-4">
                  <p className="text-white/80 leading-relaxed">
                    Oferecemos uma linha completa de produtos Mastip, incluindo sistemas de
                    câmara quente, bicos de injeção, controladores de temperatura e muito mais.
                    Cada produto é projetado para maximizar a eficiência e qualidade da
                    produção.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative w-full h-[600px]"
          >
            <div className="absolute inset-0 bg-gradient-vonic opacity-10 rounded-2xl" />
            <div className="relative w-full h-full">
              <HotRunner />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MastipSection; 