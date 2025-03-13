import React from 'react';
import styled from 'styled-components';

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
  width: 100%;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`;

const CalipersLogo = styled.svg`
  width: 100%;
  height: auto;
  max-width: 370px;
  min-width: 250px;
  @media (max-width: 768px) {
    max-width: 300px;
    min-width: 200px;
  }
  @media (max-width: 480px) {
    max-width: 250px;
    min-width: 150px;
  }
`;

const Logo: React.FC = () => {
  return (
    <LogoContainer>
      <CalipersLogo viewBox="0 0 370 100" preserveAspectRatio="xMidYMid meet" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Main ruler body (2D) */}
        <rect x="20" y="40" width="330" height="20" stroke="#2c3e50" strokeWidth="2" />
        
        {/* Fixed caliper piece */}
        <path d="M20 20V60M20 20H40M20 60H40" stroke="#2c3e50" strokeWidth="2" />
        
        {/* Moving caliper piece */}
        <path d="M142.5 20V60M142.5 20H122.5M142.5 60H122.5" stroke="#2c3e50" strokeWidth="2" />
        
        {/* Digital display on top of ruler */}
        <rect x="290" y="30" width="50" height="40" rx="2" fill="white" stroke="#2c3e50" strokeWidth="2" />
        <rect x="295" y="35" width="40" height="30" rx="1" stroke="#2c3e50" strokeWidth="1" />
        <text x="315" y="55" fontSize="8" fill="#2c3e50" fontFamily="monospace" textAnchor="middle">LABS</text>
        
        {/* Measurement text along the ruler */}
        <text x="30" y="55" fontSize="5" fill="#2c3e50" fontFamily="monospace">M</text>
        <text x="55" y="55" fontSize="5" fill="#2c3e50" fontFamily="monospace">E</text>
        <text x="80" y="55" fontSize="5" fill="#2c3e50" fontFamily="monospace">A</text>
        <text x="105" y="55" fontSize="5" fill="#2c3e50" fontFamily="monospace">S</text>
        <text x="130" y="55" fontSize="5" fill="#2c3e50" fontFamily="monospace">U</text>
        <text x="155" y="55" fontSize="5" fill="#2c3e50" fontFamily="monospace">R</text>
        <text x="180" y="55" fontSize="5" fill="#2c3e50" fontFamily="monospace">E</text>
        <text x="205" y="55" fontSize="5" fill="#2c3e50" fontFamily="monospace">M</text>
        <text x="230" y="55" fontSize="5" fill="#2c3e50" fontFamily="monospace">E</text>
        <text x="255" y="55" fontSize="5" fill="#2c3e50" fontFamily="monospace">N</text>
        <text x="280" y="55" fontSize="5" fill="#2c3e50" fontFamily="monospace">T</text>
        
        {/* Ruler marks (20% of ruler height) */}
        <path d="M30 40V44M55 40V44M80 40V44M105 40V44M130 40V44M155 40V44M180 40V44M205 40V44M230 40V44M255 40V44M280 40V44" stroke="#2c3e50" strokeWidth="1" />
      </CalipersLogo>
    </LogoContainer>
  );
};

export default Logo; 