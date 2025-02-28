import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import heroSystem from '../../assets/vonic/hero-system.png';
import { FaStar } from 'react-icons/fa';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className="relative min-h-screen bg-gradient-vonic-dark overflow-hidden flex items-center">
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent z-10" />
      </div>

      {/* Content Container */}
      <div className="relative z-20 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text */}
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
              className="text-xl font-light bg-white/5 backdrop-blur-sm inline-flex items-center px-6 py-2 rounded-full space-x-2"
            >
              <FaStar className="w-5 h-5 text-yellow-400" /> {/* Ícone à esquerda */}
              <span>{t('hero.years_market')}</span>
            </motion.p>

            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-5xl lg:text-7xl font-bold leading-tight"
            >
              {t('hero.delivering')} <br />
              <span className="text-[#CE171F] drop-shadow-glow">{t('hero.solutions')}</span>
              <span className="text-[#CE171F]">{t('hero.solutions_exclamation')}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-lg text-white/80 max-w-xl"
            >
              {t('hero.hero_description')}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <Link to="/produtos/vonic">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative bg-gradient-vonic text-white px-8 py-3 rounded-full font-medium shadow-lg overflow-hidden group"
                >
                  <span className="absolute inset-0 bg-gradient-vonic-hover opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="relative">{t('buttons.know_products')}</span>
                </motion.div>
              </Link>
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
                <span className="relative">{t('buttons.learn_more')}</span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Side - Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative flex items-center justify-end pr-12 lg:pr-20 w-full"
          >
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-radial from-[#CE171F]/20 via-transparent to-transparent rounded-full filter blur-3xl" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/80" />

            {/* Hero System Image */}
            <div className="relative w-full max-w-[50vw] lg:max-w-[4vw] xl:max-w-[35vw]">
              <img
                src={heroSystem}
                alt="Hero System"
                className="w-full h-auto object-contain"
                style={{
                  maskImage: "radial-gradient(circle, rgba(0, 0, 0, 1) 70%, rgba(0, 0, 0, 0) 100%)",
                  WebkitMaskImage: "radial-gradient(circle, rgba(0, 0, 0, 1) 70%, rgba(0, 0, 0, 0) 100%)"
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-10" />
    </div>
  );
};

export default Hero;
