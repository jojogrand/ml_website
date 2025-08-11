import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  position: relative;
  padding: 6rem 1rem 3rem;
  background: linear-gradient(180deg, #f6f8ff 0%, #ffffff 60%);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1.25rem;
`;

const ContentStack = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: #0b1220;
  margin: 0;

  @media (max-width: 640px) {
    font-size: 2.25rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.125rem;
  line-height: 1.7;
  color: #334155;
  margin: 0;
`;

const CTAGroup = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const PrimaryCTA = styled.a`
  background: #1b4fd0;
  color: #ffffff;
  text-decoration: none;
  padding: 0.9rem 1.2rem;
  border-radius: 10px;
  font-weight: 700;
  box-shadow: 0 10px 24px rgba(27, 79, 208, 0.28);
`;

const DataEcosystemContainer = styled.div`
  background: #ffffff;
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 20px 40px rgba(15, 23, 42, 0.1);
  border: 1px solid rgba(15, 23, 42, 0.05);
  max-width: 675px;
  width: 100%;
  margin: 1rem 0;
`;

const DataEcosystemImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 12px;
`;

const Hero: React.FC = () => {
  return (
    <Section>
      <Container>
        <ContentStack>
          <Title>
            The Data Layer Enabling AI in Physical Industries
          </Title>
          <Subtitle>
            We build data infrastructure and products to unlock value from messy, fragmented, and siloed physical data. From ontologies for internal use to preparing and evaluating datasets for AI, we serve as the middleware that helps partners get the most from their data in the age of AI.
          </Subtitle>
          <DataEcosystemContainer>
            <DataEcosystemImage 
              src="/data-ecosystem-diagram.png" 
              alt="Data Processing Ecosystem showing data inputs, central processing unit, and data outputs"
            />
          </DataEcosystemContainer>
          <CTAGroup>
            <PrimaryCTA href="#contact">Get in touch</PrimaryCTA>
          </CTAGroup>
        </ContentStack>
      </Container>
    </Section>
  );
};

export default Hero;


