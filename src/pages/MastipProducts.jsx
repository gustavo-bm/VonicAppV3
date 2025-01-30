import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import HotValves from '../assets/mastip/hot_valves.png';
import Manifold from '../assets/mastip/manifold.png';
import ValveGate from '../assets/mastip/valve_gate.png';
import Nozzles from '../assets/mastip/nozzles.png';
import Controllers from '../assets/mastip/controllers.png';
import Sequential from '../assets/mastip/sequential_controllers.png';
import CAE from '../assets/mastip/cae.png';

const MastipProducts = () => {
  const { t } = useTranslation();
  
  const products = [
    {
      title: "NEW Releases at Mastip",
      description: "Stay Up-to-Date with the Latest Solutions Released at Mastip",
      image: HotValves,
      link: "VIEW"
    },
    {
      title: "Hot Halves",
      description: "Complete Turnkey Hot Runner",
      image: HotValves,
      link: "VIEW"
    },
    {
      title: "Manifold & Special Systems",
      description: "Standard Manifold & Special Systems, High Cavity Manifold Systems & Custom Layout Manifold Systems",
      image: Manifold,
      link: "VIEW"
    },
    {
      title: "Valve Gate Technology",
      description: "Single & Multi Valve Gate Technology",
      image: ValveGate,
      link: "VIEW"
    },
    {
      title: "Nozzles",
      description: "MX, BX, SX and FlowLoc Nozzle Ranges",
      image: Nozzles,
      link: "VIEW"
    },
    {
      title: "Temperature Controllers",
      description: "Meticom series of high quality and reliable temperature controllers",
      image: Controllers,
      link: "VIEW"
    },
    {
      title: "Sequential Controllers",
      description: "Valve Gate Timing Devices",
      image: Sequential,
      link: "VIEW"
    },
    {
      title: "Computer Aided Engineering",
      description: "Mastip can provide valuable insight for your molding process to achieve optimal performance outcomes",
      image: CAE,
      link: "VIEW"
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
          <h1 className="text-5xl font-bold mb-6 text-white">Mastip Products</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Advanced hot runner solutions from a global leader in injection molding technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative">
                {index === 0 && (
                  <div className="absolute top-4 left-4 bg-pink-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                    New
                  </div>
                )}
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-[#CE171F]">{product.title}</h3>
                <p className="text-black/80 mb-4">{product.description}</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-vonic hover:bg-gradient-vonic-hover text-white font-bold py-2 px-6 rounded-full transition-all duration-300 text-sm"
                >
                  {product.link}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MastipProducts; 