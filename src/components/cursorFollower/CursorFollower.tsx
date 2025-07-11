'use client';
import { useEffect } from 'react';
import { gsap } from 'gsap';

const CursorFollower = () => {
  useEffect(() => {
    let posX = 0,
      posY = 0;
    let mouseX = 0,
      mouseY = 0;

    const tl = gsap.to('.cursor-example', {
      duration: 0.018,
      repeat: -1,
      onRepeat: () => {
        posX += (mouseX - posX) / 8;
        posY += (mouseY - posY) / 8;

        gsap.set('.cursor-example', {
          css: {
            left: posX - 1,
            top: posY - 2,
          },
        });
      },
    });

    const moveHandler = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    document.addEventListener('mousemove', moveHandler);

    return () => {
      document.removeEventListener('mousemove', moveHandler);
      tl.kill(); // gsap timeline tozalash
    };
  }, []);

  return <div className="hidden lg:block cursor-example z-[9999] pointer-events-none" />;
};

export default CursorFollower;
