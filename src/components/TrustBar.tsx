import React from 'react';
import styled from 'styled-components';

const Bar = styled.section`
  padding: 2rem 1rem;
  border-top: 1px solid rgba(15, 23, 42, 0.06);
  border-bottom: 1px solid rgba(15, 23, 42, 0.06);
  background: #ffffff;
`;

const Inner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  align-items: center;
  text-align: center;
`;

const Caption = styled.div`
  font-size: 0.9rem;
  color: #64748b;
  margin-bottom: 0.75rem;
`;

const Logos = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 1rem;
  align-items: center;

  @media (max-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 520px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const LogoBox = styled.div`
  height: 36px;
  background: #f8fafc;
  border: 1px dashed rgba(15, 23, 42, 0.06);
  border-radius: 8px;
`;

const TrustBar: React.FC = () => {
  return (
    <Bar>
      <Inner>
        <Caption>Trusted by leading organizations</Caption>
        <Logos>
          {Array.from({ length: 6 }).map((_, i) => (
            <LogoBox key={i} />
          ))}
        </Logos>
      </Inner>
    </Bar>
  );
};

export default TrustBar;


