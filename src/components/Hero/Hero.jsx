import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import heroSystem from '../../assets/vonic/hero-system.webp';
import { FaIndustry, FaChevronDown } from 'react-icons/fa';
import { HiOutlineLightBulb } from 'react-icons/hi';
import ParticlesBackground from '../Services/ParticlesBackground';

const Hero = () => {
  const { t } = useTranslation();

  // Variantes para animações mais suaves e escalonadas
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        when: "beforeChildren",
        staggerChildren: 0.12,
        ease: "easeOut"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.21, 0.45, 0.12, 0.97] // Custom easing for better motion feel
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.92 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut",
        delay: 0.3
      }
    },
    floating: {
      y: [0, -12, 0],
      transition: {
        duration: 8,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
        delay: 0.8
      }
    }
  };

  const highlightVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        delay: 1.1,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0f0f0f] to-black min-h-screen flex flex-col justify-center">
      {/* Background de partículas com configurações equivalentes às de Services */}
      <ParticlesBackground particleCount={140} interactionStrength={1.3} color="red" />
      
      {/* Overlay gradient ajustado para mesma opacidade de Services */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-gray-900/75 to-black/85 z-10"></div>
      
      {/* Removendo padrão de textura que pode interferir na visibilidade */}
      
      {/* Conteúdo do Hero */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 relative z-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center"
        >
          {/* Left Side - Text Content - Now takes 6/12 columns */}
          <div className="text-white space-y-8 lg:col-span-6">
            {/* Badge - Enhanced with better positioning */}
            <motion.div variants={itemVariants} className="inline-flex items-center">
              <span className="bg-black/60 px-5 py-2 rounded-full border border-white/10 flex items-center space-x-3 shadow-lg">
                <FaIndustry className="w-5 h-5 text-[#CE171F]" />
                <span className="text-base font-medium text-white/90">{t('hero.years_market')}</span>
              </span>
            </motion.div>

            {/* Main Heading - More sophisticated typography and effects */}
            <div className="space-y-6">
              <motion.h1
                variants={itemVariants}
                className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight"
              >
                <span className="text-white">{t('hero.delivering')}</span> <br />
                <div className="relative inline-flex items-center mt-2">
                  <span className="text-[#CE171F] drop-shadow-glow relative">
                    {t('hero.solutions')}
                    <span className="text-[#CE171F] absolute -right-9 top-0">{t('hero.solutions_exclamation')}</span>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ delay: 1.2, duration: 1 }}
                      className="absolute -bottom-2 left-0 h-1.5 bg-gradient-to-r from-[#CE171F] to-[#CE171F]/40 rounded-full"
                    />
                  </span>
                </div>
              </motion.h1>

              {/* Description - Better styling and composition */}
              <motion.p
                variants={itemVariants}
                className="text-base md:text-lg text-white/80 max-w-xl leading-relaxed border-l-4 border-[#CE171F]/30 pl-4"
              >
                {t('hero.description')}
              </motion.p>
            </div>

            {/* CTA Buttons - More polished with advanced hover effects */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-5">
              <Link to="/produtos/vonic" onClick={() => window.scrollTo(0, 0)}>
                <motion.div
                  whileHover={{ scale: 1.03, y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="relative group"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-[#CE171F] to-[#6c0000] rounded-lg blur-sm opacity-75 group-hover:opacity-100 transition duration-500"></div>
                  <div className="relative bg-gradient-to-r from-[#CE171F] to-[#A30F15] text-white px-7 py-3 rounded-lg font-medium shadow-lg flex items-center space-x-2 overflow-hidden">
                    <span className="z-10">{t('buttons.know_products')}</span>
                    <motion.span
                      initial={{ x: 0 }}
                      whileHover={{ x: 5 }}
                      className="z-10"
                    >
                      →
                    </motion.span>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#A30F15] to-[#CE171F] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </motion.div>
              </Link>

              <motion.a
                href="#sobre"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('sobre').scrollIntoView({ behavior: 'smooth' });
                }}
                whileHover={{ scale: 1.03, y: -3 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="relative bg-black/40 border border-white/20 text-white px-7 py-3 rounded-lg font-medium shadow-md flex items-center space-x-2 hover:bg-black/60 hover:border-white/30 transition-all duration-300"
              >
                <span>{t('buttons.learn_more')}</span>
                <motion.span
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: "loop", delay: 1 }}
                >
                  <FaChevronDown className="text-white/80" />
                </motion.span>
              </motion.a>
            </motion.div>

            {/* Innovation Indicator - Redesigned with better style */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center mt-8 px-4 py-3 bg-gradient-to-r from-black/80 to-black/60 rounded-lg border-l-4 border-[#CE171F] shadow-lg"
            >
              <HiOutlineLightBulb className="text-[#CE171F] text-xl mr-3 flex-shrink-0" />
              <span className="text-sm text-white/90 font-medium">
                {t('hero.innovation_indicator')}
              </span>
            </motion.div>
          </div>

          {/* Right Side - Hero Image - Now takes 6/12 columns with better presentation */}
          <div className="relative w-full h-[480px] lg:h-[600px] lg:col-span-6 flex items-center justify-center overflow-visible">
            {/* Enhanced background effects for the image */}
            <div className="absolute inset-0 m-auto w-[90%] h-[90%] rounded-full bg-gradient-to-br from-[#CE171F]/5 via-[#CE171F]/2 to-transparent blur-2xl" />

            {/* Circle background with improved styling */}
            <motion.div
              variants={itemVariants}
              className="absolute inset-0 m-auto w-[75%] h-[75%] rounded-full bg-gray-900/80 border border-white/5 z-10"
            />

            {/* Orbital ring effect */}
            <motion.div
              initial={{ opacity: 0, rotate: 0 }}
              animate={{ opacity: 1, rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear", delay: 1 }}
              className="absolute inset-0 m-auto w-[82%] h-[82%] rounded-full border border-white/10 z-0"
              style={{ borderRadius: '50%' }}
            />

            {/* Product Image with Advanced Styling and Hover Effect */}
            <motion.div
              variants={imageVariants}
              animate="floating"
              className="relative z-20 w-[85%] h-auto flex justify-center items-center"
            >
              {/* Shadow beneath image */}
              <div className="absolute -bottom-8 inset-x-0 mx-auto w-2/3 h-12 bg-[#CE171F]/30 filter blur-2xl rounded-full opacity-30" />

              {/* Image with enhanced shadow and glow effects */}
              <div className="relative w-full mx-auto flex justify-center items-center">
                <div className="absolute inset-0 bg-gradient-radial from-[#CE171F]/10 to-transparent rounded-full blur-2xl opacity-60 z-0" />

                <img
                  src={heroSystem}
                  alt="Vonic Systems - Hot Runner Solutions"
                  className="w-[90%] h-auto object-contain relative z-10 drop-shadow-2xl"
                  style={{
                    filter: "drop-shadow(0 10px 15px rgba(0, 0, 0, 0.5))",
                    maskImage: "radial-gradient(circle, rgba(0, 0, 0, 1) 65%, rgba(0, 0, 0, 0) 100%)",
                    WebkitMaskImage: "radial-gradient(circle, rgba(0, 0, 0, 1) 65%, rgba(0, 0, 0, 0) 100%)"
                  }}
                />
              </div>
            </motion.div>

            {/* Technical Specs Label - Redesigned for better visibility */}
            <motion.div
              variants={highlightVariants}
              className="absolute bottom-10 right-0 bg-black/80 px-4 py-3 rounded-lg border-l-2 border-[#CE171F] shadow-xl z-30"
            >
              <span className="text-sm text-white font-medium">{t('hero.system_shown')}</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
