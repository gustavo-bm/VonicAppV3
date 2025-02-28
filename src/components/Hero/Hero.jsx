import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import heroSystem from '../../assets/vonic/hero-system.png';
import { FaIndustry, FaChevronDown } from 'react-icons/fa';
import { HiOutlineLightBulb } from 'react-icons/hi';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className="relative min-h-screen bg-gradient-vonic-dark overflow-hidden flex items-center" id="home">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-transparent z-10" />
        <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-black to-transparent z-10" />
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black to-transparent z-10" />
        
        {/* Decorative Elements */}
        <div className="absolute top-[20%] left-[10%] w-64 h-64 bg-[#CE171F]/20 rounded-full filter blur-3xl opacity-30" />
        <div className="absolute bottom-[20%] right-[10%] w-80 h-80 bg-[#CE171F]/10 rounded-full filter blur-3xl opacity-20" />
      </div>

      {/* Content Container */}
      <div className="relative z-20 container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          {/* Left Side - Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white space-y-10 pt-28 lg:pt-10"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center"
            >
              <span className="bg-white/5 backdrop-blur-sm px-6 py-2 rounded-full border border-white/10 flex items-center space-x-3">
                <FaIndustry className="w-5 h-5 text-[#CE171F]" />
                <span className="text-base font-medium text-white/90">{t('hero.years_market')}</span>
              </span>
            </motion.div>

            {/* Main Heading - Enhanced Typography */}
            <div className="space-y-5">
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-5xl lg:text-7xl font-bold leading-tight tracking-tight"
              >
                <span className="text-white">{t('hero.delivering')}</span> <br />
                <div className="flex items-center">
                  <span className="text-[#CE171F] drop-shadow-glow relative">
                    {t('hero.solutions')}
                    <span className="text-[#CE171F] absolute -right-8 top-0">{t('hero.solutions_exclamation')}</span>
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ delay: 1, duration: 0.8 }}
                      className="absolute -bottom-2 left-0 h-1 bg-[#CE171F]/70 rounded-full"
                    />
                  </span>
                </div>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-lg text-white/80 max-w-xl leading-relaxed"
              >
                {t('hero.hero_description')}
              </motion.p>
            </div>

            {/* CTA Buttons - Enhanced */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-5 pt-4"
            >
              <Link to="/produtos/vonic" onClick={() => window.scrollTo(0, 0)}>
                <motion.div
                  whileHover={{ scale: 1.02, boxShadow: "0 10px 25px -5px rgba(206, 23, 31, 0.3)" }}
                  className="relative bg-gradient-to-r from-[#CE171F] to-[#A30F15] text-white px-8 py-3.5 rounded-lg font-semibold shadow-lg overflow-hidden group flex items-center"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-[#A30F15] to-[#CE171F] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="relative mr-2">{t('buttons.know_products')}</span>
                  <motion.span 
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    className="relative"
                  >
                    →
                  </motion.span>
                </motion.div>
              </Link>
              
              <motion.a
                href="#sobre"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('sobre').scrollIntoView({ behavior: 'smooth' });
                }}
                whileHover={{ scale: 1.02 }}
                className="relative border border-white/30 text-white px-8 py-3.5 rounded-lg font-semibold backdrop-blur-sm overflow-hidden group flex items-center"
              >
                <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative mr-2">{t('buttons.learn_more')}</span>
                <motion.span
                  animate={{ y: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
                  className="relative"
                >
                  <FaChevronDown className="text-white/80" />
                </motion.span>
              </motion.a>
            </motion.div>
            
            {/* Innovation Indicator */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="inline-flex items-center mt-8 bg-white/5 backdrop-blur-sm p-3 rounded-xl border border-white/10"
            >
              <HiOutlineLightBulb className="text-[#CE171F] text-xl mr-3" />
              <span className="text-sm text-white/80 font-medium">
                Inovação e tecnologia em sistemas de câmara quente
              </span>
            </motion.div>
          </motion.div>

          {/* Right Side - Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative w-full h-[600px] flex items-center justify-center pt-24 lg:pt-10"
          >
            {/* Background and Effects */}
            <div className="absolute inset-0 bg-gradient-radial from-[#CE171F]/10 via-transparent to-transparent rounded-full filter blur-3xl" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            
            {/* Circle Highlight Background */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="absolute inset-0 m-auto w-[70%] h-[70%] rounded-full bg-gradient-to-br from-black/40 to-[#CE171F]/5 backdrop-blur-md z-0"
            />
            
            {/* Product Image with Advanced Styling */}
            <motion.div
              initial={{ y: 20 }}
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, repeatType: "mirror" }}
              className="relative z-10 w-full max-w-[80%] h-auto flex justify-center items-center"
            >
              <div className="relative w-full">
                {/* Glow Effect */}
                <div className="absolute -bottom-10 left-0 right-0 mx-auto w-2/3 h-20 bg-[#CE171F]/20 filter blur-3xl rounded-full" />
                
                <img
                  src={heroSystem}
                  alt="Vonic Systems - Hot Runner Solutions"
                  className="w-full h-auto object-contain relative z-10 drop-shadow-2xl"
                  style={{
                    maskImage: "radial-gradient(circle, rgba(0, 0, 0, 1) 70%, rgba(0, 0, 0, 0) 100%)",
                    WebkitMaskImage: "radial-gradient(circle, rgba(0, 0, 0, 1) 70%, rgba(0, 0, 0, 0) 100%)"
                  }}
                />
              </div>
            </motion.div>
            
            {/* Technical Specs Label */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="absolute bottom-10 right-10 bg-black/50 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10 z-20"
            >
              <span className="text-sm text-white/90 font-medium">Câmara Quente de Alta Performance</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
