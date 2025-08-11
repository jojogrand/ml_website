import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 4rem 1rem;
  background: linear-gradient(180deg, #f6f8ff 0%, #ffffff 60%);
`;

const Delimiter = styled.div`
  width: 100%;
  height: 1px;
  background: linear-gradient(90deg, transparent 0%, rgba(15, 23, 42, 0.1) 20%, rgba(15, 23, 42, 0.1) 80%, transparent 100%);
  margin: 0 auto;
  max-width: 1200px;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 2rem;
  color: #0b1220;
  margin-bottom: 1rem;
  text-align: center;
`;

const Subtitle = styled.p`
  font-size: 1.125rem;
  color: #64748b;
  text-align: center;
  margin-bottom: 2.5rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Paragraph = styled.p`
  font-size: 1rem;
  color: #334155;
  line-height: 1.7;
`;

const AboutSection: React.FC = () => {
  return (
    <>
      <Delimiter />
      <Section id="about">
        <Container>
          <Title>About Us</Title>
          <Subtitle>
            We're building the data infrastructure that powers the future of AI in physical industries
          </Subtitle>
          <ContentGrid>
            <TextContent>
              <Paragraph>
                We believe that physical industries and science are the great frontier for AI, but there is effectively a cold start problem to build or use AI in this space;
                data is required, but data is fragmented, siloed and messy, across multiple modalities and sources. The internet is not a sufficiently rich source of data for
                the physical world, unlike for training large language models, so the broad applicability of AI is not yet realised.
              </Paragraph>
              <Paragraph>
                We are seeking to solve this problem, by effectively reducing the complexity of data acquisition and integration from N to 1. We are making it easy to
                have sufficient data to build and train models in physical industries, or have well structured enough data from across your organisation to be able to easily
                utilise AI, whether built internally or seamless plugging into existing AI solutions with your well structured data.
              </Paragraph>
            </TextContent>
            
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(2, 1fr)', 
              gap: '1.5rem'
            }}>
              <div style={{
                backgroundColor: '#f8fafc',
                padding: '1.5rem',
                borderRadius: '12px',
                border: '1px solid rgba(15, 23, 42, 0.04)',
                textAlign: 'center'
              }}>
                <h4 style={{ margin: '0 0 1rem 0', color: '#1b4fd0', fontSize: '1.25rem', fontWeight: '600' }}>Domain</h4>
                <p style={{ margin: 0, lineHeight: '1.6', color: '#64748b', fontSize: '0.9rem' }}>
                  Domain empathy from research in physical sciences and
                  engineering at institutions like Cambridge, Johns Hopkins and Imperial, to PhD level and beyond
                </p>
              </div>
              
              <div style={{
                backgroundColor: '#f8fafc',
                padding: '1.5rem',
                borderRadius: '12px',
                border: '1px solid rgba(15, 23, 42, 0.04)',
                textAlign: 'center'
              }}>
                <h4 style={{ margin: '0 0 1rem 0', color: '#1b4fd0', fontSize: '1.25rem', fontWeight: '600' }}>Product</h4>
                <p style={{ margin: 0, lineHeight: '1.6', color: '#64748b', fontSize: '0.9rem' }}>
                  Track record of shipping robust product at Google, Yandex and
                   YC + VC backed start-ups serving some of the worlds largest and most sensitive organisations
                </p>
              </div>
              
              <div style={{
                backgroundColor: '#f8fafc',
                padding: '1.5rem',
                borderRadius: '12px',
                border: '1px solid rgba(15, 23, 42, 0.04)',
                textAlign: 'center'
              }}>
                <h4 style={{ margin: '0 0 1rem 0', color: '#1b4fd0', fontSize: '1.25rem', fontWeight: '600' }}>AI/ML</h4>
                <p style={{ margin: 0, lineHeight: '1.6', color: '#64748b', fontSize: '0.9rem' }}>
                  Extensive applied AI and ML experience in both academia and industry
                </p>
              </div>
              
              <div style={{
                backgroundColor: '#f8fafc',
                padding: '1.5rem',
                borderRadius: '12px',
                border: '1px solid rgba(15, 23, 42, 0.04)',
                textAlign: 'center'
              }}>
                <h4 style={{ margin: '0 0 1rem 0', color: '#1b4fd0', fontSize: '1.25rem', fontWeight: '600' }}>Stakeholder</h4>
                <p style={{ margin: 0, lineHeight: '1.6', color: '#64748b', fontSize: '0.9rem' }}>
                Cross-functional skills from time in previous start-ups and at Bain & Co. working with some of the 
                  world's preeminent organisations
                </p>
              </div>
            </div>
          </ContentGrid>
        </Container>
      </Section>
    </>
  );
};

export default AboutSection;
