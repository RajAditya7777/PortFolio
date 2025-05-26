import React, { useEffect, useRef } from 'react';
import './StarryBackground.css';

const StarryBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let time = 0;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createGradient = () => {
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, '#0f172a');  // Dark blue
      gradient.addColorStop(0.5, '#1e1b4b'); // Deep purple
      gradient.addColorStop(1, '#0f172a');  // Dark blue
      return gradient;
    };

    const drawMesh = () => {
      const width = canvas.width;
      const height = canvas.height;
      const spacing = 50;
      const amplitude = 20;
      const frequency = 0.001;

      ctx.fillStyle = createGradient();
      ctx.fillRect(0, 0, width, height);

      // Create mesh points
      for (let x = 0; x < width; x += spacing) {
        for (let y = 0; y < height; y += spacing) {
          const distance = Math.sqrt(
            Math.pow(x - width / 2, 2) + Math.pow(y - height / 2, 2)
          );
          const wave = Math.sin(distance * frequency + time) * amplitude;
          
          ctx.beginPath();
          ctx.arc(x, y + wave, 1, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
          ctx.fill();

          // Draw connecting lines
          if (x > 0 && y > 0) {
            ctx.beginPath();
            ctx.moveTo(x, y + wave);
            ctx.lineTo(x - spacing, y + wave);
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
            ctx.stroke();
          }
        }
      }

      time += 0.02;
    };

    const animate = () => {
      drawMesh();
      animationFrameId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    animate();

    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="background-canvas"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
      }}
    />
  );
};

export default StarryBackground; 