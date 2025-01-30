import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import HeroImage from '../../assets/hero-system.png';

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
              {t('solutions_exclamation')}
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
              <a
                href="/produtos/vonic"
                className="bg-gradient-vonic hover:bg-gradient-vonic-hover text-white px-8 py-3 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                {t('know_products')}
              </a>
              <a
                href="#sobre"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('sobre').scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-full font-medium backdrop-blur-sm transition-all duration-300"
              >
                {t('learn_more')}
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative lg:h-[700px] flex items-center justify-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative w-full h-full"
            >
              <div className="absolute inset-0 bg-gradient-radial from-[#CE171F]/20 via-transparent to-transparent rounded-full filter blur-3xl" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/80" />
              <img
                src={HeroImage}
                alt="Vonic Hot Runner System"
                className="relative z-10 w-full h-full object-contain rounded-lg mix-blend-luminosity hover:mix-blend-normal transition-all duration-500"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-10" />
    </div>
  );
};

export default Hero; 