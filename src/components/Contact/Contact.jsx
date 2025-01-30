import React from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contato" className="py-20 bg-gradient-to-b from-black via-vonic-500/5 to-black text-white">
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
            className="bg-gradient-to-br from-black to-gray-900 p-8 rounded-xl border border-vonic-500/10 shadow-lg"
          >
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Nome</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg bg-black border border-gray-800 focus:outline-none focus:border-vonic-500 transition-colors"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 rounded-lg bg-black border border-gray-800 focus:outline-none focus:border-vonic-500 transition-colors"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Mensagem</label>
                <textarea
                  className="w-full px-4 py-2 rounded-lg bg-black border border-gray-800 focus:outline-none focus:border-vonic-500 transition-colors h-32"
                  placeholder="Sua mensagem"
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-vonic-500 via-vonic-600 to-vonic-700 text-white font-bold py-3 px-8 rounded-full hover:from-vonic-600 hover:via-vonic-700 hover:to-vonic-800 transition-all duration-300 shadow-lg hover:shadow-xl"
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
              <div className="bg-gradient-to-br from-vonic-500/10 to-transparent p-3 rounded-full">
                <FaPhone className="text-2xl text-vonic-500" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Telefone</h3>
                <p className="text-gray-400">(11) 9999-9999</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-gradient-to-br from-vonic-500/10 to-transparent p-3 rounded-full">
                <FaEnvelope className="text-2xl text-vonic-500" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p className="text-gray-400">contato@vonic.com.br</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-gradient-to-br from-vonic-500/10 to-transparent p-3 rounded-full">
                <FaMapMarkerAlt className="text-2xl text-vonic-500" />
              </div>
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