import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className="relative min-h-screen bg-gradient-vonic-dark overflow-hidden flex items-center">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent z-10" />
      </div>

      <div className="relative z-20 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white space-y-8 pt-20 lg:pt-0"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl font-light bg-white/5 backdrop-blur-sm inline-block px-6 py-2 rounded-full"
            >
              {t('years_market')}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-5xl lg:text-7xl font-bold leading-tight"
            >
              {t('delivering')} <br />
              <span className="text-[#CE171F] drop-shadow-glow">{t('solutions')}</span><br />
              <span className="text-[#CE171F]">{t('solutions_exclamation')}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-lg text-white/80 max-w-xl"
            >
              {t('hero_description')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <motion.a
                href="/produtos/vonic"
                whileHover={{ scale: 1.02 }}
                className="relative bg-gradient-vonic text-white px-8 py-3 rounded-full font-medium shadow-lg overflow-hidden group"
              >
                <span className="absolute inset-0 bg-gradient-vonic-hover opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative">{t('know_products')}</span>
              </motion.a>
              <motion.a
                href="#sobre"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('sobre').scrollIntoView({ behavior: 'smooth' });
                }}
                whileHover={{ scale: 1.02 }}
                className="relative bg-white/10 text-white px-8 py-3 rounded-full font-medium backdrop-blur-sm overflow-hidden group"
              >
                <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative">{t('learn_more')}</span>
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative lg:h-[700px] flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-gradient-radial from-[#CE171F]/20 via-transparent to-transparent rounded-full filter blur-3xl" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/80" />
            
            {/* Abstract 3D Shape */}
            <motion.div
              initial={{ rotateY: 0 }}
              animate={{ rotateY: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="relative w-full h-full max-w-2xl mx-auto"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 bg-gradient-to-br from-[#CE171F] to-[#8B0000] rounded-3xl transform rotate-45 animate-float" />
                <div className="absolute w-64 h-64 bg-gradient-to-br from-[#CE171F]/50 to-[#8B0000]/50 rounded-3xl transform rotate-[30deg] animate-float-delayed" />
                <div className="absolute w-64 h-64 bg-gradient-to-br from-[#CE171F]/30 to-[#8B0000]/30 rounded-3xl transform -rotate-[15deg] animate-float-delayed-2" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-10" />
    </div>
  );
};

export default Hero; 