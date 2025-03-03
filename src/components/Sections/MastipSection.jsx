import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import MastipLogo from '../../assets/mastip/logo_mastip.png';
import partnership from '../../assets/business-partners-handshake-international-business-concept.jpg';
import { useTranslation } from 'react-i18next';
import { FaHandshake, FaCheckCircle, FaIndustry, FaArrowRight, FaCubes } from 'react-icons/fa';
import { HiOutlineLightBulb } from 'react-icons/hi';
import HexagonBackground from '../Services/ParticlesBackground';
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import ParticlesBackground from '../Services/ParticlesBackground';

const MastipSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-gradient-to-b from-black to-gray-900 relative ">
      {/* Background de Particulas com configurações equivalentes às de Services */}
      <ParticlesBackground particleCount={160} interactionStrength={1.3} color="blue" />

      {/* Overlay gradient ajustado para mesma opacidade de Services */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-gray-900/75 to-[#0F0F0F]/85 z-10"></div>
      
      {/* Section Header - Modernized and compact */}
      <div className="container mx-auto px-6 mb-16 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center justify-center mb-5 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 shadow-lg">
            <FaHandshake className="text-[#CE171F] text-lg mr-2" />
            <span className="text-white/90 text-sm font-medium">{t('sections.mastip.partner')}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{t('sections.mastip.strategic_partnership')}</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#CE171F] to-transparent mx-auto rounded-full mb-6"></div>
        </motion.div>
      </div>

      <div className="container mx-auto px-6">
        {/* Main Content - Modern layout with better image integration */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Right Side - Modern card layout - 7 columns */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-7 relative z-20 flex flex-col space-y-8"
          >
            {/* Top Cards Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Card 1 - Who is Mastip */}
              <motion.div
                whileHover={{ y: -4, boxShadow: "0 12px 30px -10px rgba(0, 0, 0, 0.2)" }}
                transition={{ duration: 0.3 }}
                className="bg-gradient-to-br from-black/80 to-gray-900/90 backdrop-blur-sm p-6 rounded-xl border border-white/10 shadow-xl h-full flex flex-col"
              >
                <div className="flex items-center mb-4">
                  <div className="p-2.5 rounded-full bg-[#CE171F]/10 border border-[#CE171F]/20">
                    <FaIndustry className="text-[#CE171F] text-xl" />
                  </div>
                  <h3 className="text-xl font-semibold text-white ml-3">{t('sections.mastip.who_is_mastip')}</h3>
                </div>
                <p className="text-white/80 leading-relaxed text-sm flex-grow">
                  {t('sections.mastip.mastip_description')}
                </p>
                <div className="w-1/3 h-1 bg-gradient-to-r from-[#CE171F]/40 to-transparent rounded-full mt-4"></div>
              </motion.div>

              {/* Card 2 - Product Types */}
              <motion.div
                whileHover={{ y: -4, boxShadow: "0 12px 30px -10px rgba(0, 0, 0, 0.2)" }}
                transition={{ duration: 0.3 }}
                className="bg-gradient-to-br from-black/80 to-gray-900/90 backdrop-blur-sm p-6 rounded-xl border border-white/10 shadow-xl h-full flex flex-col"
              >
                <div className="flex items-center mb-4">
                  <div className="p-2.5 rounded-full bg-[#CE171F]/10 border border-[#CE171F]/20">
                    <FaCubes className="text-[#CE171F] text-xl" />
                  </div>
                  <h3 className="text-xl font-semibold text-white ml-3">{t('sections.mastip.product_types')}</h3>
                </div>
                <p className="text-white/80 leading-relaxed text-sm flex-grow">
                  {t('sections.mastip.products_description')}
                </p>
                <div className="w-1/3 h-1 bg-gradient-to-r from-[#CE171F]/40 to-transparent rounded-full mt-4"></div>
              </motion.div>
            </div>

            {/* Benefits Card - Improved layout */}
            <motion.div
              whileHover={{ y: -4, boxShadow: "0 15px 30px -5px rgba(206, 23, 31, 0.15)" }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-br from-black/90 to-gray-900/80 backdrop-blur-sm p-6 rounded-xl border border-white/10 shadow-xl relative overflow-hidden"
            >
              {/* Corner gradient accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#CE171F]/10 via-[#CE171F]/5 to-transparent -mr-10 -mt-10 rounded-full"></div>

              <h3 className="text-white text-xl font-semibold mb-6 flex items-center relative z-10">
                <div className="p-2.5 rounded-full bg-[#CE171F]/10 border border-[#CE171F]/20 mr-3">
                  <HiOutlineLightBulb className="text-[#CE171F] text-xl" />
                </div>
                <span>{t('sections.mastip.benefits.title')}</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative z-10">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col bg-white/5 p-4 rounded-lg border border-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <div className="flex items-center mb-3">
                    <FaCheckCircle className="text-[#CE171F] text-sm mr-2" />
                    <h4 className="text-white font-medium text-base">{t('sections.mastip.benefits.1.title')}</h4>
                  </div>
                  <p className="text-white/60 text-xs">{t('sections.mastip.benefits.1.description')}</p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col bg-white/5 p-4 rounded-lg border border-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <div className="flex items-center mb-3">
                    <FaCheckCircle className="text-[#CE171F] text-sm mr-2" />
                    <h4 className="text-white font-medium text-base">{t('sections.mastip.benefits.2.title')}</h4>
                  </div>
                  <p className="text-white/60 text-xs">{t('sections.mastip.benefits.2.description')}</p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col bg-white/5 p-4 rounded-lg border border-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <div className="flex items-center mb-3">
                    <FaCheckCircle className="text-[#CE171F] text-sm mr-2" />
                    <h4 className="text-white font-medium text-base">{t('sections.mastip.benefits.3.title')}</h4>
                  </div>
                  <p className="text-white/60 text-xs">{t('sections.mastip.benefits.3.description')}</p>
                </motion.div>
              </div>
            </motion.div>

            {/* CTA Button - Positioned better */}
            <div className="flex mt-2">
              <Link to="/produtos/mastip" onClick={() => window.scrollTo(0, 0)}>
                <motion.div
                  whileHover={{ scale: 1.03, y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="relative group"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-[#CE171F] to-[#6c0000] rounded-lg blur-sm opacity-75 group-hover:opacity-100 transition duration-500"></div>
                  <div className="relative bg-gradient-to-r from-[#CE171F] to-[#A30F15] text-white px-7 py-3.5 rounded-lg font-medium shadow-lg flex items-center space-x-2 overflow-hidden">
                    <span className="z-10">{t('buttons.know_products_mastip')}</span>
                    <motion.span
                      initial={{ x: 0 }}
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.3 }}
                      className="z-10 ml-2"
                    >
                      <FaArrowRight />
                    </motion.span>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#A30F15] to-[#CE171F] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </motion.div>
              </Link>
            </div>
          </motion.div>
          {/* Left Side - Image with professional treatment - 5 columns */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative h-[500px] min-h-full"
          >
            {/* Image Container with advanced styling */}
            <div className="absolute inset-0 overflow-hidden rounded-2xl">
              {/* Image with overlay treatments */}
              <div className="relative w-full h-full">
                {/* Professional multi-layer treatment */}
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-transparent to-black/20 mix-blend-multiply" />
                <div className="absolute inset-0 z-20 bg-gradient-to-r from-black via-transparent to-transparent opacity-70" />
                <div className="absolute inset-0 z-30 mix-blend-soft-light opacity-30 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]" />

                {/* Main image */}
                <img
                  src={partnership}
                  alt="Mastip Strategic Partnership"
                  className="w-full h-full object-cover object-center z-0"
                />
              </div>
            </div>

            {/* Glass-morphic elements */}
            <div className="absolute bottom-6 left-6 right-6 z-40 bg-black/60 backdrop-blur-md p-5 rounded-xl border border-white/10 shadow-2xl">
              <div className="flex items-center justify-between">
                <img src={MastipLogo} alt="Mastip" className="h-10" />
                <div className="px-3 py-1.5 bg-[#CE171F]/20 rounded-full border border-[#CE171F]/30">
                  <span className="text-white text-sm font-medium">{t('sections.mastip.partner')}</span>
                </div>
              </div>
            </div>

            {/* Decorative corner accent */}
            <div className="absolute top-0 right-0 w-32 h-32 rounded-tl-3xl border-l border-b border-white/10 z-40"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default MastipSection;
