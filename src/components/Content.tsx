import React from 'react';
import styled from 'styled-components';

const ContentContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1rem;
  text-align: center;
`;

const Heading = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  color: #34495e;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const ContactButton = styled.a`
  display: inline-block;
  padding: 1rem 2rem;
  background-color: #3498db;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-size: 1.1rem;
  font-weight: 600;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #2980b9;
  }
  
  @media (max-width: 768px) {
    padding: 0.8rem 1.6rem;
    font-size: 1rem;
  }
`;

const Content: React.FC = () => {
  return (
    <ContentContainer>
      <Heading>Welcome to Measurement Labs</Heading>
      <Paragraph>
        Building the gatway to engineering and physical world data
      </Paragraph>
      <ContactButton href="mailto:contact@measurementlabs.com">
        Get in Touch
      </ContactButton>
    </ContentContainer>
  );
};

export default Content; 