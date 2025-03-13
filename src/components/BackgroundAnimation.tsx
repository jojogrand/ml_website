import React, { useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { SetSquare, Ruler, Protractor } from '../assets/Shapes';

const BackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  overflow: hidden;
  background: linear-gradient(135deg, #f0f2f5 0%, #ffffff 100%);
`;

const AnimatedShape = styled(motion.div)`
  position: absolute;
  opacity: 0.8;
  pointer-events: none;
  will-change: transform;
  transform-origin: center;
  width: 100px;
  height: 100px;
`;

const shapes = [
  { Component: SetSquare, color: '#4a90e2' },
  { Component: Ruler, color: '#50e3c2' },
  { Component: Protractor, color: '#f5a623' },
];

const BackgroundAnimation: React.FC = () => {
  useEffect(() => {
    console.log('Window dimensions:', window.innerWidth, window.innerHeight);
  }, []);

  const maxX = window.innerWidth;
  const maxY = window.innerHeight;

  return (
    <BackgroundContainer>
      {[...Array(13)].map((_, index) => {
        const { Component, color } = shapes[index % shapes.length];
        
        // Create a path that uses the entire viewport
        const startX = Math.random() * maxX;
        const startY = Math.random() * maxY;
        
        // Create multiple points for more varied movement
        const points = [
          { x: startX, y: startY },
          { x: Math.random() * maxX, y: Math.random() * maxY },
          { x: Math.random() * maxX, y: Math.random() * maxY },
          { x: startX, y: startY }
        ];
        
        return (
          <AnimatedShape
            key={index}
            initial={{
              x: points[0].x,
              y: points[0].y,
              rotate: 0,
              scale: 1,
            }}
            animate={{
              x: points.map(p => p.x),
              y: points.map(p => p.y),
              rotate: [0, 180, 360, 540],
              scale: [1, 1.2, 1, 1],
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <Component color={color} />
          </AnimatedShape>
        );
      })}
    </BackgroundContainer>
  );
};

export default BackgroundAnimation; 