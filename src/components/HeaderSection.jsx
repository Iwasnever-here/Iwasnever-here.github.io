import React, { useRef, useEffect } from 'react'
import DecryptedText from './DecryptedText';

const HeaderSection = ({ id }) => {
  const canvasRef = useRef(null);
  const animationFrameId = useRef(null);
  const mousePos = useRef({ x: null, y: null });
  const dots = useRef([]);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const container = canvas.parentElement;
    let width = container.clientWidth;
    let height = container.clientHeight;
    // Initialize canvas size and static dots
    const init = () => {
      width = container.clientWidth;
      height = container.clientHeight;
      canvas.width = width;
      canvas.height = height;
      dots.current = [];
      for (let i = 0; i < 150; i++) {
        dots.current.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: 2.5,
          baseAlpha: 0.2,  // base opacity for dots
        });
      }
    };
    init();
    // Draw function
    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      if (mousePos.current.x === null || mousePos.current.y === null) {
        // No mouse - draw dots with base alpha and no lines
        dots.current.forEach(dot => {
          ctx.fillStyle = `rgba(128, 128, 128, ${dot.baseAlpha})`;
          ctx.beginPath();
          ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
          ctx.fill();
        });
        return;
      }
      dots.current.forEach(dot => {
        const dx = dot.x - mousePos.current.x;
        const dy = dot.y - mousePos.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const maxDist = 200;
        // Increase dot opacity based on proximity (closer = more opaque)
        const alpha = dist < maxDist
          ? Math.min(1, dot.baseAlpha + (1 - dist / maxDist))
          : dot.baseAlpha;
        // Draw dot with dynamic alpha
        ctx.fillStyle = `rgba(128, 128, 128, ${alpha})`;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
        ctx.fill();
        // Draw connection line if close enough
        if (dist < maxDist) {
          // Create gradient line with glow effect
          const gradient = ctx.createLinearGradient(dot.x, dot.y, mousePos.current.x, mousePos.current.y);
          gradient.addColorStop(0, `rgba(180,180,180,${alpha})`);
          gradient.addColorStop(1, `rgba(255, 215, 0,${alpha})`); // golden glow near mouse
          ctx.strokeStyle = gradient;
          ctx.lineWidth = 1.5;
          ctx.shadowColor = 'rgba(255, 215, 0, 0.7)';
          ctx.shadowBlur = 8;
          ctx.beginPath();
          ctx.moveTo(dot.x, dot.y);
          ctx.lineTo(mousePos.current.x, mousePos.current.y);
          ctx.stroke();
          ctx.shadowBlur = 0; // reset shadow
        }
      });
    };

    const animate = () => {
      draw();
      animationFrameId.current = requestAnimationFrame(animate);
    };
    animate();


    // mouse movement
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mousePos.current.x = e.clientX - rect.left;
      mousePos.current.y = e.clientY - rect.top;
    };
    const handleMouseOut = () => {
      mousePos.current.x = null;
      mousePos.current.y = null;
    };
    const handleResize = () => {
      init();
    };
    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseout', handleMouseOut);
    return () => {
      cancelAnimationFrame(animationFrameId.current);
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseout', handleMouseOut);
      window.removeEventListener('resize', handleResize);
    }
  }
)
    
  return (
    <div className=' pb-45 relative' id = {id}>
         <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
      <div className='relative, z-1'>
      <h1 className='pt-50 text-brightyellow'>HELLO I'M, <br /> <DecryptedText text="LUCY" /></h1>
      <p className='text-brightyellow mt-7'>A second year student at the University of Edinbrugh <br/> Studying computer Sceince Bsc</p>
      <a href = '#about' ><button className='button  mr-5 bg-brightyellow'>KNOW MORE</button></a>
      <button className='button text-brightyellow bg-neutral-900'>DOWNLOAD CV</button>
      </div>
    </div>
  )
}

export default HeaderSection
