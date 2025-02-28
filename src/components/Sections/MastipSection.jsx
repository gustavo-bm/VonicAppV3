import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import MastipLogo from '../../assets/mastip/logo_mastip.png';
import partnership from '../../assets/business-partners-handshake-international-business-concept.jpg';
import { useTranslation } from 'react-i18next';

const MastipSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-black relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Enhanced Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative w-full h-[600px] rounded-2xl overflow-hidden"
          >
            {/* Glowing border effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#CE171F] via-transparent to-[#CE171F] opacity-30 blur-xl"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 rounded-2xl" />
            <img src={partnership} alt="Partnership" className="w-full h-full object-cover rounded-2xl shadow-lg" />
          </motion.div>

          {/* Right Side - Text with Enhanced Partnership Emphasis */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 relative"
          >
            {/* Decorative Gradient Background Behind Text */}
            <div className="absolute -top-10 -left-10 w-36 h-36 bg-gradient-to-br from-[#CE171F] to-transparent opacity-20 blur-3xl" />

            {/* Empresa Parceira */}
            <div className="flex items-center space-x-4">
              <img src={MastipLogo} alt="Mastip" className="h-12" />
              <span className="text-white font-medium">
                {t('sections.mastip.partner')}
              </span>
            </div>

            {/* Título */}
            <h2 className="text-4xl font-bold text-white">{t('sections.mastip.strategic_partnership')}</h2>

            {/* Descrição principal */}
            <p className="text-white/90 leading-relaxed">
              {t('sections.mastip.partnership_description')}
            </p>

            {/* Lista com Bullets */}
            <ul className="list-disc list-inside text-white/90 space-y-2">
              <li>{t('sections.mastip.bullets.point_1')}</li>
              <li>{t('sections.mastip.bullets.point_2')}</li>
              <li>{t('sections.mastip.bullets.point_3')}</li>
            </ul>

            {/* Decorative Divider */}
            <div className="w-16 h-1 bg-[#CE171F] rounded-full"></div>

            <div className="space-y-8 pt-4">
              <div className="border-b border-white/10 pb-6">
                <h3 className="text-xl font-semibold text-white mb-4">{t('sections.mastip.who_is_mastip')}</h3>
                <p className="text-white/80 leading-relaxed">
                  {t('sections.mastip.mastip_description')}
                </p>
              </div>

              <div className="border-b border-white/10 pb-6">
                <h3 className="text-xl font-semibold text-white mb-4">{t('sections.mastip.product_types')}</h3>
                <p className="text-white/80 leading-relaxed">
                  {t('sections.mastip.products_description')}
                </p>
              </div>

              <Link to="/produtos/mastip">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block bg-gradient-to-r from-[#CE171F] to-red-600 hover:from-red-700 hover:to-[#CE171F] text-white px-8 py-3 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  {t('buttons.know_products_mastip')}
                </motion.div>
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default MastipSection;
