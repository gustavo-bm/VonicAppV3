import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaTrophy, FaIndustry, FaCubes, FaChevronRight } from 'react-icons/fa';
import { HiOutlineLightBulb } from 'react-icons/hi';
import { TbDeviceAnalytics } from 'react-icons/tb';

// Importar imagens
// Você precisará adicionar estas imagens em src/assets/vonic/projects/
import project24Img from '../../assets/vonic/projects/system24.jpg'; 
import project48Img from '../../assets/vonic/projects/system48.jpg';
import project64Img from '../../assets/vonic/projects/system64.jpg';

// Componente de Card para cada projeto
const ProjectCard = ({ image, title, description, applications, industries, materials, index }) => {
  const { t } = useTranslation();
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      whileHover={{ y: -8, boxShadow: '0 20px 40px -5px rgba(0, 0, 0, 0.2)' }}
      className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col h-full"
    >
      <div className="relative overflow-hidden h-64">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
        <motion.img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700"
          whileHover={{ scale: 1.05 }}
        />
        <div className="absolute top-4 left-4 bg-[#CE171F] text-white px-3 py-1 rounded-full text-sm font-semibold z-20">
          Vonic System
        </div>
      </div>

      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-2xl font-bold text-gray-800 mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        <div className="mt-auto space-y-3">
          <div className="flex items-start">
            <FaCubes className="text-[#CE171F] mt-1 mr-2 flex-shrink-0" />
            <p className="text-sm text-gray-700">{applications}</p>
          </div>
          <div className="flex items-start">
            <FaIndustry className="text-[#CE171F] mt-1 mr-2 flex-shrink-0" />
            <p className="text-sm text-gray-700">{industries}</p>
          </div>
          <div className="flex items-start">
            <TbDeviceAnalytics className="text-[#CE171F] mt-1 mr-2 flex-shrink-0" />
            <p className="text-sm text-gray-700">{materials}</p>
          </div>
        </div>
      </div>
      
      <div className="px-6 py-4 border-t border-gray-100">
        <motion.button
          className="text-[#CE171F] font-medium flex items-center hover:underline group"
          whileHover={{ x: 5 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          {t('sections.projects.view_details')}
          <FaChevronRight className="ml-2 text-xs transition-transform duration-300 group-hover:translate-x-1" />
        </motion.button>
      </div>
    </motion.div>
  );
};

function Projects() {
  const { t } = useTranslation();

  const projects = [
    {
      id: 1,
      image: project24Img,
      title: t('sections.projects.cases.24_channels.title'),
      description: t('sections.projects.cases.24_channels.description'),
      applications: t('sections.projects.cases.24_channels.applications'),
      industries: t('sections.projects.cases.24_channels.industries'),
      materials: t('sections.projects.cases.24_channels.materials'),
    },
    {
      id: 2,
      image: project48Img,
      title: t('sections.projects.cases.48_channels.title'),
      description: t('sections.projects.cases.48_channels.description'),
      applications: t('sections.projects.cases.48_channels.applications'),
      industries: t('sections.projects.cases.48_channels.industries'),
      materials: t('sections.projects.cases.48_channels.materials'),
    },
    {
      id: 3,
      image: project64Img,
      title: t('sections.projects.cases.64_channels.title'),
      description: t('sections.projects.cases.64_channels.description'),
      applications: t('sections.projects.cases.64_channels.applications'),
      industries: t('sections.projects.cases.64_channels.industries'),
      materials: t('sections.projects.cases.64_channels.materials'),
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden relative" id="projects">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 -right-40 w-96 h-96 bg-[#CE171F]/5 rounded-full filter blur-[80px]"></div>
        <div className="absolute bottom-40 -left-20 w-72 h-72 bg-[#CE171F]/5 rounded-full filter blur-[60px]"></div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(206, 23, 31, 0.1) 1px, transparent 1px)',
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
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-flex items-center justify-center mb-6 bg-[#CE171F]/10 px-6 py-2.5 rounded-full">
            <FaTrophy className="text-[#CE171F] text-xl mr-2" />
            <span className="text-gray-800 text-sm font-medium">{t('sections.projects.featured_cases')}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{t('sections.projects.title')}</h2>
          <div className="w-24 h-1 bg-[#CE171F] mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-700 text-xl leading-relaxed">
            {t('sections.projects.subtitle')}
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id}
              image={project.image}
              title={project.title}
              description={project.description}
              applications={project.applications}
              industries={project.industries}
              materials={project.materials}
              index={index}
            />
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="relative group"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#CE171F] to-[#A30F15] rounded-lg blur-sm opacity-75 group-hover:opacity-100 transition duration-500"></div>
            <div className="relative bg-white text-[#CE171F] border-2 border-[#CE171F] px-7 py-3 rounded-lg font-medium shadow-lg flex items-center space-x-2 overflow-hidden group-hover:text-white group-hover:bg-[#CE171F] transition-colors duration-300">
              <span>{t('sections.projects.view_gallery')}</span>
              <motion.span
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                <FaChevronRight />
              </motion.span>
            </div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects; 