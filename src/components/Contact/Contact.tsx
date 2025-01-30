import React from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact: React.FC = () => {
  return (
    <section id="contato" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Entre em Contato</h2>
          <p className="text-gray-400">Estamos prontos para atender sua empresa</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800 p-8 rounded-lg"
          >
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Nome</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Mensagem</label>
                <textarea
                  className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500 h-32"
                  placeholder="Sua mensagem"
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded"
              >
                Enviar Mensagem
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="flex items-start space-x-4">
              <FaPhone className="text-2xl text-blue-500 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Telefone</h3>
                <p className="text-gray-400">(11) 9999-9999</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <FaEnvelope className="text-2xl text-blue-500 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p className="text-gray-400">contato@camaraquente.com.br</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <FaMapMarkerAlt className="text-2xl text-blue-500 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Endereço</h3>
                <p className="text-gray-400">
                  Rua Exemplo, 123<br />
                  São Paulo - SP<br />
                  CEP: 00000-000
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 