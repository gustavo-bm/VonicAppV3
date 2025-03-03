import React, { useRef, useEffect, useState } from 'react';

const ParticlesBackground = ({ 
  color = 'red', 
  particleCount = 160, 
  interactionStrength = 1.3
}) => {
  const canvasRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // Função para verificar se é dispositivo móvel
  useEffect(() => {
    const checkIfMobile = () => {
      const mobileWidth = 768; // Definição do breakpoint para mobile
      setIsMobile(window.innerWidth < mobileWidth);
    };
    
    // Verificar na inicialização
    checkIfMobile();
    
    // Adicionar listener para verificar mudanças de tamanho da tela
    window.addEventListener('resize', checkIfMobile);
    
    // Limpar listener ao desmontar componente
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  useEffect(() => {
    // Se for mobile, não inicializar o canvas
    if (isMobile || !canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    let particlesArray = [];
    const numParticles = particleCount;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 2 - 1;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x >= canvas.width || this.x <= 0) this.speedX *= -1;
        if (this.y >= canvas.height || this.y <= 0) this.speedY *= -1;
      }

      draw() {
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }
    }

    function initParticles() {
      particlesArray = [];
      for (let i = 0; i < numParticles; i++) {
        particlesArray.push(new Particle());
      }
    }

    function connectParticles() {
      let maxDistance = 100;
      for (let i = 0; i < particlesArray.length; i++) {
        for (let j = i + 1; j < particlesArray.length; j++) {
          let dx = particlesArray[i].x - particlesArray[j].x;
          let dy = particlesArray[i].y - particlesArray[j].y;
          let distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < maxDistance) {
            ctx.strokeStyle = color;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
            ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
            ctx.stroke();
          }
        }
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particlesArray.forEach(particle => {
        particle.update();
        particle.draw();
      });
      connectParticles();
      requestAnimationFrame(animate);
    }

    initParticles();
    animate();
  }, [color, particleCount, interactionStrength, isMobile]);

  // Se for mobile, não renderiza o canvas
  if (isMobile) {
    return null;
  }

  return (
    <canvas 
      ref={canvasRef} 
      style={{ 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%', 
        zIndex: 1,  // Valor baixo para garantir que fica abaixo de outros elementos
        pointerEvents: 'none', // Impede que o canvas intercepte eventos do mouse
        opacity: 1,
        mixBlendMode: 'screen' // Adiciona efeito de mistura para realçar as cores
      }} 
      className="particles-canvas"
    />
  );
};

export default ParticlesBackground;