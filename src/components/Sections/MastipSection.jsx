import React from 'react';
import { motion } from 'framer-motion';
import HotRunner from '../3D/HotRunner';
import MastipLogo from '../../assets/mastip/logo_mastip.png';
import { useTranslation } from 'react-i18next';

const MastipSection = () => {
  const { t } = useTranslation();

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
            <div className="flex items-center space-x-4">
              <img src={MastipLogo} alt="Mastip" className="h-12" />
              <span className="text-[#CE171F] font-medium">{t('mastip_partner')}</span>
            </div>
            
            <h2 className="text-4xl font-bold text-white">{t('strategic_partnership')}</h2>
            
            <p className="text-white/90 leading-relaxed">
              {t('partnership_description')}
            </p>

            <div className="space-y-8 pt-4">
              <div className="border-b border-white/10 pb-6">
                <h3 className="text-xl font-semibold text-white mb-4">{t('who_is_mastip')}</h3>
                <p className="text-white/80 leading-relaxed">
                  {t('mastip_description')}
                </p>
              </div>

              <div className="border-b border-white/10 pb-6">
                <h3 className="text-xl font-semibold text-white mb-4">{t('product_types')}</h3>
                <p className="text-white/80 leading-relaxed">
                  {t('products_description')}
                </p>
              </div>

              <motion.a
                href="/produtos/mastip"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-gradient-vonic hover:bg-gradient-vonic-hover text-white px-8 py-3 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                {t('know_products')}
              </motion.a>
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