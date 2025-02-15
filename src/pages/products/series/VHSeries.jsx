import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaFileAlt, FaFileVideo, FaFilePdf } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import ProductModel from '../../../components/3D/ProductModel';

const DocumentCard = ({ icon: Icon, title, description, downloadUrl }) => {
  const { t } = useTranslation();
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white/5 backdrop-blur-sm p-6 rounded-xl space-y-4 border border-white/10"
    >
      <div className="w-12 h-12 bg-[#CE171F]/10 rounded-xl flex items-center justify-center">
        <Icon className="text-2xl text-[#CE171F]" />
      </div>
      <div>
        <h3 className="text-lg font-bold text-white mb-2">{t(title)}</h3>
        <p className="text-white/80 text-sm">{t(description)}</p>
      </div>
      <a
        href={downloadUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center space-x-2 text-[#CE171F] hover:text-white transition-colors"
      >
        <FaDownload />
        <span>{t('download')}</span>
      </a>
    </motion.div>
  );
};

const SpecTable = ({ specs }) => {
  const { t } = useTranslation();
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left">
        <thead>
          <tr className="border-b border-white/10">
            <th className="py-4 px-6 text-white/80 font-medium">{t('specification')}</th>
            <th className="py-4 px-6 text-white/80 font-medium">{t('value')}</th>
          </tr>
        </thead>
        <tbody>
          {specs.map((spec, index) => (
            <tr key={index} className="border-b border-white/10">
              <td className="py-4 px-6 text-white">{t(spec.name)}</td>
              <td className="py-4 px-6 text-white/80">{spec.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const VHSeries = () => {
  const { t } = useTranslation();
  
  const specifications = [
    { name: "vh_spec_diameter", value: "18mm - 27mm" },
    { name: "vh_spec_length", value: "60mm - 380mm" },
    { name: "vh_spec_power", value: "250W - 2000W" },
    { name: "vh_spec_max_temp", value: "400°C" },
    { name: "vh_spec_body_material", value: t('vh_spec_body_material_value') },
    { name: "vh_spec_tip_material", value: t('vh_spec_tip_material_value') },
    { name: "vh_spec_max_pressure", value: "2000 bar" },
    { name: "vh_spec_temp_control", value: t('vh_spec_temp_control_value') }
  ];

  const documents = [
    {
      icon: FaFilePdf,
      title: "vh_doc_manual_title",
      description: "vh_doc_manual_desc",
      downloadUrl: "/docs/vh-series-manual.pdf"
    },
    {
      icon: FaFileAlt,
      title: "vh_doc_specs_title",
      description: "vh_doc_specs_desc",
      downloadUrl: "/docs/vh-series-specs.pdf"
    },
    {
      icon: FaFileVideo,
      title: "vh_doc_maintenance_title",
      description: "vh_doc_maintenance_desc",
      downloadUrl: "/docs/vh-series-maintenance.mp4"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-vonic-dark pt-24">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-6 text-white">{t('vh_series_title')}</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            {t('vh_series_desc')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-white">{t('features')}</h2>
            <ul className="space-y-4 text-white/80">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-[#CE171F] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <p>{t('vh_feature_1')}</p>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-[#CE171F] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <p>{t('vh_feature_2')}</p>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-[#CE171F] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <p>{t('vh_feature_3')}</p>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-[#CE171F] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <p>{t('vh_feature_4')}</p>
              </li>
            </ul>

            <div className="mt-12 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/10 shadow-2xl">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#CE171F]/20 to-transparent opacity-50 rounded-2xl"></div>
                <ProductModel type="nozzle" className="w-full h-[500px]" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8"
          >
            <h2 className="text-3xl font-bold mb-6 text-white">{t('specifications')}</h2>
            <SpecTable specs={specifications} />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-white text-center">{t('documentation')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {documents.map((doc, index) => (
              <DocumentCard key={index} {...doc} />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default VHSeries; 