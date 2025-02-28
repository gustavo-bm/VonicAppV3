import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import MastipLogo from '../../assets/mastip/logo_mastip.png';
import partnership from '../../assets/business-partners-handshake-international-business-concept.jpg';
import { useTranslation } from 'react-i18next';
import { FaHandshake, FaCheckCircle, FaIndustry, FaArrowRight } from 'react-icons/fa';
import { HiOutlineLightBulb } from 'react-icons/hi';

const MastipSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-32 bg-gradient-to-b from-black to-gray-900 relative" id="parceiros">
      {/* Decorative Elements */}
      <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-black to-transparent z-10" />
      <div className="absolute top-1/3 left-0 w-64 h-64 rounded-full bg-[#CE171F]/10 filter blur-[100px] opacity-60" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-[#CE171F]/5 filter blur-[80px] opacity-50" />
      
      {/* Section Header */}
      <div className="container mx-auto px-6 mb-28 relative z-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center justify-center mb-6 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
            <FaHandshake className="text-[#CE171F] text-lg mr-2" />
            <span className="text-white/80 text-sm font-medium">{t('sections.partners.title')}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">{t('sections.mastip.strategic_partnership')}</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#CE171F] to-transparent mx-auto rounded-full mb-8"></div>
          {/* <p className="text-white/70 text-lg leading-relaxed">
            {t('sections.mastip.partnership_description')}
          </p> */}
        </motion.div>
      </div>

      <div className="container mx-auto px-6 mt-12" style={{ marginTop: '3rem' }}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
          
          {/* Left Side - Enhanced Image - 5 columns */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative lg:col-span-5 h-[600px] rounded-2xl overflow-hidden"
          >
            {/* Glowing border effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#CE171F] via-transparent to-[#CE171F] opacity-20 blur-xl"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 rounded-2xl" />
            
            {/* Featured Logo Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              viewport={{ once: true }}
              className="absolute top-10 left-10 z-10 bg-black/40 backdrop-blur-sm p-4 rounded-lg border border-white/10 flex items-center space-x-4"
            >
              <img src={MastipLogo} alt="Mastip" className="h-10" />
              <div className="border-l border-white/20 pl-4">
                <span className="text-white font-medium text-lg">
                  {t('sections.mastip.partner')}
                </span>
              </div>
            </motion.div>
            
            <img src={partnership} alt="Partnership" className="w-full h-full object-cover rounded-2xl shadow-lg" />
            
            {/* Bottom gradient overlay */}
            <div className="absolute bottom-0 inset-x-0 h-1/3 bg-gradient-to-t from-black to-transparent rounded-b-2xl"></div>
          </motion.div>

          {/* Right Side - Text with Enhanced Partnership Emphasis - 7 columns */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-12 relative"
          >
            {/* Highlighted Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border-l-4 border-[#CE171F] h-full flex flex-col justify-between"
              >
                <div className="flex items-center space-x-3 mb-5">
                  <div className="p-2 rounded-full bg-[#CE171F]/10">
                    <FaIndustry className="text-[#CE171F] text-xl" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{t('sections.mastip.who_is_mastip')}</h3>
                </div>
                <p className="text-white/80 leading-relaxed mb-5">
                  {t('sections.mastip.mastip_description')}
                </p>
                <div className="w-1/4 h-1 bg-gradient-to-r from-[#CE171F]/30 to-transparent rounded-full"></div>
              </motion.div>
              
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border-l-4 border-[#CE171F] h-full flex flex-col justify-between"
              >
                <div className="flex items-center space-x-3 mb-5">
                  <div className="p-2 rounded-full bg-[#CE171F]/10">
                    <FaIndustry className="text-[#CE171F] text-xl" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{t('sections.mastip.product_types')}</h3>
                </div>
                <p className="text-white/80 leading-relaxed mb-5">
                  {t('sections.mastip.products_description')}
                </p>
                <div className="w-1/4 h-1 bg-gradient-to-r from-[#CE171F]/30 to-transparent rounded-full"></div>
              </motion.div>
            </div>

            {/* Key Benefits */}
            <div className="bg-gradient-to-r from-[#CE171F]/10 to-transparent p-1 rounded-xl">
              <div className="bg-black/40 backdrop-blur-sm rounded-lg p-6 border border-white/5">
                <h3 className="text-white text-xl font-semibold mb-8 flex items-center">
                  <HiOutlineLightBulb className="text-[#CE171F] text-2xl mr-3" />
                  <span>{t('sections.mastip.benefits.title')}</span>
                </h3>
                
                <div className="space-y-5">
                  <motion.div 
                    whileHover={{ x: 5 }} 
                    className="flex items-start space-x-4 bg-white/5 p-4 rounded-lg transition-all duration-300"
                  >
                    <div className="bg-[#CE171F]/20 p-2 rounded-full flex-shrink-0">
                      <FaCheckCircle className="text-[#CE171F] text-lg" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium text-lg">{t('sections.mastip.benefits.1.title')}</h4>
                      <p className="text-white/70 mt-1 text-sm">{t('sections.mastip.benefits.1.description')}</p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    whileHover={{ x: 5 }} 
                    className="flex items-start space-x-4 bg-white/5 p-4 rounded-lg transition-all duration-300"
                  >
                    <div className="bg-[#CE171F]/20 p-2 rounded-full flex-shrink-0">
                      <FaCheckCircle className="text-[#CE171F] text-lg" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium text-lg">{t('sections.mastip.benefits.2.title')}</h4>
                      <p className="text-white/70 mt-1 text-sm">{t('sections.mastip.benefits.2.description')}</p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    whileHover={{ x: 5 }} 
                    className="flex items-start space-x-4 bg-white/5 p-4 rounded-lg transition-all duration-300"
                  >
                    <div className="bg-[#CE171F]/20 p-2 rounded-full flex-shrink-0">
                      <FaCheckCircle className="text-[#CE171F] text-lg" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium text-lg">{t('sections.mastip.benefits.3.title')}</h4>
                      <p className="text-white/70 mt-1 text-sm">{t('sections.mastip.benefits.2.description')}</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex justify-start pt-6">
              <Link to="/produtos/mastip" onClick={() => window.scrollTo(0, 0)}>
                <motion.div
                  whileHover={{ scale: 1.02, boxShadow: "0 10px 25px -5px rgba(206, 23, 31, 0.3)" }}
                  whileTap={{ scale: 0.98 }}
                  className="group inline-flex items-center bg-gradient-to-r from-[#CE171F] to-[#A30F15] hover:from-[#A30F15] hover:to-[#CE171F] text-white px-8 py-3.5 rounded-lg font-medium transition-all duration-300 shadow-lg"
                >
                  <span>{t('buttons.know_products_mastip')}</span>
                  <motion.span 
                    initial={{ x: 0, opacity: 0.8 }}
                    whileHover={{ x: 5, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="ml-2"
                  >
                    <FaArrowRight />
                  </motion.span>
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
