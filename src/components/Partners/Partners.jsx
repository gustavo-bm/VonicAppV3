import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay, Pagination } from 'swiper/modules';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaRocket, FaLeaf, FaStar } from 'react-icons/fa';
import { HiOutlineLightBulb } from 'react-icons/hi';
import tresM from '../../assets/vonic/partners/3M_logo.webp';
import injex from '../../assets/vonic/partners/injex_logo.png';
import jeruel from '../../assets/vonic/partners/jeruel_logo.png';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

function Partners() {
  const { t } = useTranslation();

  const partners = [
    {
      id: 1,
      name: '3M',
      logo: tresM,
      isImage: true,
      testimonial: t('testimonials.3m.text'),
      author: 'John Smith',
      position: 'CEO'
    },
    {
      id: 2,
      name: 'Injex',
      logo: injex,
      isImage: true,
      testimonial: t('testimonials.injex.text'),
      author: 'Maria Garcia',
      position: 'Operations Director'
    },
    {
      id: 3,
      name: 'Jeruel',
      logo: jeruel,
      isImage: true,
      testimonial: t('testimonials.jeruel.text'),
      author: 'Robert Chen',
      position: 'Production Manager'
    }
  ];

  return (
    <section className="relative py-32 bg-gradient-vonic-premium overflow-hidden" id="partners">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-premium opacity-20"></div>
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-36 bg-gradient-to-b from-white/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-36 bg-gradient-to-t from-white/40 to-transparent"></div>

        {/* Decorative Elements */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-vonics-500/20 rounded-full filter blur-[120px] opacity-60 animate-float-slow"></div>
        <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-vonics-600/20 rounded-full filter blur-[100px] opacity-50 animate-float"></div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.2) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-24"
        >
          <div className="inline-flex items-center justify-center mb-6 bg-white/10 backdrop-blur-md px-6 py-2.5 rounded-full border border-white/20 shadow-glow-sm">
            <HiOutlineLightBulb className="text-vonics-500 text-xl mr-2" />
            <span className="text-gray-800 text-sm font-medium">{t('sections.partners.companies_trusted')}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{t('sections.partners.title')}</h2>
          <div className="w-24 h-1 bg-[#CE171F] mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-700 text-xl leading-relaxed">
            {t('sections.partners.subtitle')}
          </p>
        </motion.div>

        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          initialSlide={1} // Define o segundo item (id: 2) como foco inicial
          coverflowEffect={{
            rotate: 2,
            stretch: 0,
            depth: 120,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination]} // Removido Autoplay
          className="testimonials-swiper mt-10"
        >
          {partners.map((partner) => (
            <SwiperSlide key={partner.id}>
              <motion.div
                whileHover={{
                  y: -8,
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)'
                }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-white/90 backdrop-blur-lg rounded-2xl p-10 shadow-xl border border-gray-100/80 relative overflow-hidden h-full max-w-xl mx-auto"
              >
                {/* Glass Card Effect */}
                <div className="absolute -right-16 -top-16 w-40 h-40 bg-gradient-to-br from-vonics-500/10 to-vonics-600/5 rounded-full"></div>
                <div className="absolute -left-16 -bottom-16 w-40 h-40 bg-gradient-to-tr from-vonics-600/10 to-vonics-500/5 rounded-full"></div>

                {/* Rating Stars */}
                <div className="absolute top-8 right-8 flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-vonics-500/80 text-sm" />
                  ))}
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="mb-8">
                    <div className="text-vonics-600/20 mb-4">
                      <FaQuoteLeft className="text-5xl" />
                    </div>

                    <blockquote className="text-gray-700 text-lg leading-relaxed mb-8 relative">
                      "{partner.testimonial}"
                    </blockquote>
                  </div>

                  <div className="border-t border-gray-100 pt-6 flex items-center">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200/80 shadow-inner flex items-center justify-center mr-4">
                      {partner.isImage ? (
                        <img
                          src={partner.logo}
                          alt={partner.name}
                          className="max-w-[70%] max-h-[70%] object-contain"
                        />
                      ) : (
                        partner.logo
                      )}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">{partner.name}</h3>
                      <div className="flex items-center">
                        <p className="text-gray-700 font-medium">{partner.author}</p>
                        <span className="mx-2 text-gray-300">•</span>
                        <p className="text-gray-500 text-sm">{partner.position}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Logo Reel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-32"
        >
          <h3 className="text-center text-gray-700 font-medium mb-12">Parceiros e clientes</h3>

          <div className="relative py-10 px-4 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white z-10 pointer-events-none"></div>

            <div className="flex justify-center items-center flex-wrap gap-10 md:gap-16">
              {partners.map((partner) => (
                <motion.div
                  key={partner.id}
                  whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-28 h-28 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-gray-100/80 flex items-center justify-center transition-all duration-300"
                >
                  {partner.isImage ? (
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-w-[70%] max-h-[70%] object-contain"
                    />
                  ) : (
                    React.cloneElement(partner.logo, {
                      className: "text-4xl text-gray-800"
                    })
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Partners;