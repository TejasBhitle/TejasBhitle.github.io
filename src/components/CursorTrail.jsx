"use client";

import React, { useEffect, useRef } from 'react';

const CursorTrail = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Trail dots
    const dots = [];
    const maxDots = 20;

    // Mouse position
    let mouseX = 0;
    let mouseY = 0;

    // Track mouse movement
    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Dot class
    class Dot {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 4 + 2;
        this.opacity = 1;
        this.fadeSpeed = Math.random() * 0.02 + 0.01;
      }

      update() {
        this.opacity -= this.fadeSpeed;
        return this.opacity > 0;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(59, 130, 246, ${this.opacity})`;
        ctx.fill();
      }
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Add new dot at mouse position
      if (dots.length < maxDots) {
        dots.push(new Dot(mouseX, mouseY));
      }

      // Update and draw dots
      for (let i = dots.length - 1; i >= 0; i--) {
        const dot = dots[i];
        if (dot.update()) {
          dot.draw();
        } else {
          dots.splice(i, 1);
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10"
      style={{ background: 'transparent' }}
    />
  );
};

export default CursorTrail; 