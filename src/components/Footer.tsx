import React from 'react';
import styled from 'styled-components';

const Wrap = styled.footer`
  padding: 2.5rem 1rem;
  background: #0b1220;
  color: #cbd5e1;
`;

const Inner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  text-align: center;
`;

const Legal = styled.div`
  font-size: 0.85rem;
  opacity: 0.8;
`;

const Footer: React.FC = () => {
  return (
    <Wrap>
      <Inner>
        <div>Measurement Labs</div>
        <Legal>© {new Date().getFullYear()} Measurement Labs. All rights reserved.</Legal>
      </Inner>
    </Wrap>
  );
};

export default Footer;


