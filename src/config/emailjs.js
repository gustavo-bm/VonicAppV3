// Configuração do EmailJS

// Usando variáveis de ambiente do Vite (prefixo VITE_)
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_YOUR_SERVICE_ID || 'service_8em68y7',
  templateId: import.meta.env.VITE_YOUR_TEMPLATE_ID || 'template_fp663fd',
  publicKey: import.meta.env.VITE_YOUR_PUBLIC_KEY || 'KmLUr09Egak2lMbPX'
}; 