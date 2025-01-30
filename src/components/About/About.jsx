import React from 'react';
import { motion } from 'framer-motion';
import { FaIndustry, FaCertificate, FaHandshake, FaBullseye } from 'react-icons/fa';

const features = [
  {
    icon: <FaIndustry className="text-4xl text-vonic-500" />,
    title: "Sede em Salto de Pirapora - SP",
    description: "Novo Fabricante e Fornecedor de Sistemas de Câmara-Quente"
  },
  {
    icon: <FaCertificate className="text-4xl text-vonic-500" />,
    title: "Produtos Certificados",
    description: "Fabricados com Materiais certificados para cada aplicação"
  },
  {
    icon: <FaHandshake className="text-4xl text-vonic-500" />,
    title: "Comprometimento",
    description: "Flexibilidade, confiança e comprometimento com cada projeto"
  },
  {
    icon: <FaBullseye className="text-4xl text-vonic-500" />,
    title: "Projetos Inteligentes",
    description: "Produtos e Projetos Inteligentes - Padronizados"
  }
];

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6 text-[#CE171F]">Nossa Proposta</h2>
            <p className="text-xl text-black mb-8 leading-relaxed">
              Oferecer produtos e serviços diferenciados com Tecnologia, Valores e Confiabilidade.
            </p>
            <div className="space-y-6 text-black">
              <p className="leading-relaxed">
                Utilizamos tecnologia lógica exclusiva que permite melhorar a eficiência da produção de plástico.
                Nossa tecnologia vem de anos de experiência, ouvindo problemas típicos de moldagem e constantemente
                surgindo com SOLUÇÕES.
              </p>
              <p className="leading-relaxed">
                Podemos ajudar sua empresa com projetos novos ou existentes a se tornar mais eficiente do que você é hoje!
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg border border-[#CE171F]/10 hover:border-[#CE171F]/30 group"
              >
                <div className="bg-gradient-to-br from-[#CE171F]/10 to-transparent p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-black group-hover:text-[#CE171F] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-black/80">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 