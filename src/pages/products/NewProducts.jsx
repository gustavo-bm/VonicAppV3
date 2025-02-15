import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const NewProductCard = ({ image, title, description, link, releaseDate }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
  >
    <div className="relative h-48 overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      <div className="absolute top-4 left-4 bg-[#CE171F] text-white px-4 py-1 rounded-full text-sm font-bold">
        Novo
      </div>
    </div>
    <div className="p-6">
      <div className="text-sm text-gray-500 mb-2">{releaseDate}</div>
      <h3 className="text-2xl font-bold mb-3 text-[#CE171F]">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <Link
        to={link}
        className="inline-flex items-center space-x-2 bg-gradient-vonic hover:bg-gradient-vonic-hover text-white font-bold py-3 px-6 rounded-full transition-all duration-300 group"
      >
        <span>Ver detalhes</span>
        <FaArrowRight className="transform group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  </motion.div>
);

const NewProducts = () => {
  const newProducts = [
    {
      title: "Nova Série VH Plus",
      description: "Bicos de válvula com tecnologia avançada de vedação e controle térmico aprimorado",
      image: "/products/vh-plus.jpg",
      releaseDate: "Março 2024",
      link: "/produtos/vonic/bicos/vh-plus"
    },
    {
      title: "Controlador Smart V2",
      description: "Nova geração de controladores com interface touch e conectividade IoT",
      image: "/products/smart-controller.jpg",
      releaseDate: "Fevereiro 2024",
      link: "/produtos/vonic/controladores/smart-v2"
    },
    {
      title: "Sistema Manifold Balanceado VMB",
      description: "Manifold com tecnologia de balanceamento automático e monitoramento em tempo real",
      image: "/products/vmb-system.jpg",
      releaseDate: "Janeiro 2024",
      link: "/produtos/vonic/manifolds/vmb"
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
          <h1 className="text-5xl font-bold mb-6 text-white">Novidades Vonic</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Conheça nossos mais recentes lançamentos e inovações em sistemas de câmara quente
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newProducts.map((product, index) => (
            <NewProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewProducts; 