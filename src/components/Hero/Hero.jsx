import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-black via-vonic-500/30 to-black">
      <div className="absolute inset-0 z-0">
        <img 
          src="/hot-runner-bg.jpg" 
          alt="Hot Runner Systems" 
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-vonic-500/20 to-black/30" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 py-32 lg:py-48">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <span className="text-vonic-500 font-semibold mb-4 block">Há mais de 30 anos</span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
            ENTREGANDO<br />
            SOLUÇÕES AVANÇADAS!
          </h1>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-vonic-500 via-vonic-600 to-vonic-700 text-white font-bold py-4 px-8 text-lg mt-8 rounded-full hover:from-vonic-600 hover:via-vonic-700 hover:to-vonic-800 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            SOBRE NÓS
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 