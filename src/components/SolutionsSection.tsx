import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 4rem 1rem;
  background: linear-gradient(180deg, #ffffff 0%, #f6f8ff 100%);
  border-top: 1px solid rgba(15, 23, 42, 0.1);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 2rem;
  color: #0b1220;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background: #ffffff;
  border: 1px solid rgba(15, 23, 42, 0.06);
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 12px 32px rgba(15, 23, 42, 0.06);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 16px 40px rgba(15, 23, 42, 0.1);
  }
`;

const CardImage = styled.div<{ $type: 'tools' | 'ontology' | 'datasets' }>`
  width: 100%;
  height: 120px;
  background: linear-gradient(135deg, #f6f8ff 0%, #e0f2f7 100%);
  border-radius: 12px;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  color: #1b4fd0;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80px;
    height: 80px;
    background: ${props => {
      if (props.$type === 'tools') {
        return `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' fill='none'%3E%3Cdefs%3E%3Cfilter id='glow' x='-50%25' y='-50%25' width='200%25' height='200%25'%3E%3CfeGaussianBlur stdDeviation='2' result='coloredBlur'/%3E%3CfeMerge%3E%3CfeMergeNode in='coloredBlur'/%3E%3CfeMergeNode in='SourceGraphic'/%3E%3C/feMerge%3E%3C/filter%3E%3C/defs%3E%3Cg filter='url(%23glow)'%3E%3Crect x='20' y='40' width='60' height='40' fill='%231b4fd0' rx='2'/%3E%3Crect x='25' y='35' width='50' height='5' fill='%233b82f6' rx='1'/%3E%3Crect x='30' y='45' width='8' height='8' fill='%23ffffff' rx='1'/%3E%3Crect x='45' y='45' width='8' height='8' fill='%23ffffff' rx='1'/%3E%3Crect x='60' y='45' width='8' height='8' fill='%23ffffff' rx='1'/%3E%3Crect x='30' y='58' width='8' height='8' fill='%23ffffff' rx='1'/%3E%3Crect x='45' y='58' width='8' height='8' fill='%23ffffff' rx='1'/%3E%3Crect x='60' y='58' width='8' height='8' fill='%23ffffff' rx='1'/%3E%3Cline x1='15' y1='80' x2='85' y2='80' stroke='%2364748b' stroke-width='1'/%3E%3C/g%3E%3C/svg%3E") center/contain no-repeat`;
      } else if (props.$type === 'ontology') {
        return `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' fill='none'%3E%3Cdefs%3E%3Cfilter id='glow' x='-50%25' y='-50%25' width='200%25' height='200%25'%3E%3CfeGaussianBlur stdDeviation='2' result='coloredBlur'/%3E%3CfeMerge%3E%3CfeMergeNode in='coloredBlur'/%3E%3CfeMergeNode in='SourceGraphic'/%3E%3C/feMerge%3E%3C/filter%3E%3C/defs%3E%3Cg filter='url(%23glow)'%3E%3Ccircle cx='20' cy='20' r='4' fill='%231b4fd0'/%3E%3Ccircle cx='80' cy='20' r='4' fill='%231b4fd0'/%3E%3Ccircle cx='50' cy='50' r='4' fill='%231b4fd0'/%3E%3Ccircle cx='20' cy='80' r='4' fill='%231b4fd0'/%3E%3Ccircle cx='80' cy='80' r='4' fill='%231b4fd0'/%3E%3Ccircle cx='35' cy='35' r='3' fill='%233b82f6'/%3E%3Ccircle cx='65' cy='35' r='3' fill='%233b82f6'/%3E%3Ccircle cx='35' cy='65' r='3' fill='%233b82f6'/%3E%3Ccircle cx='65' cy='65' r='3' fill='%233b82f6'/%3E%3Cline x1='20' y1='20' x2='50' y2='50' stroke='%231b4fd0' stroke-width='1.5'/%3E%3Cline x1='80' y1='20' x2='50' y2='50' stroke='%231b4fd0' stroke-width='1.5'/%3E%3Cline x1='20' y1='80' x2='50' y2='50' stroke='%231b4fd0' stroke-width='1.5'/%3E%3Cline x1='80' y1='80' x2='50' y2='50' stroke='%231b4fd0' stroke-width='1.5'/%3E%3Cline x1='35' y1='35' x2='65' y2='35' stroke='%233b82f6' stroke-width='1'/%3E%3Cline x1='35' y1='35' x2='35' y2='65' stroke='%233b82f6' stroke-width='1'/%3E%3Cline x1='65' y1='35' x2='65' y2='65' stroke='%233b82f6' stroke-width='1'/%3E%3Cline x1='35' y1='65' x2='65' y2='65' stroke='%233b82f6' stroke-width='1'/%3E%3C/g%3E%3C/svg%3E") center/contain no-repeat`;
      } else {
        return `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' fill='none'%3E%3Cdefs%3E%3Cfilter id='glow' x='-50%25' y='-50%25' width='200%25' height='200%25'%3E%3CfeGaussianBlur stdDeviation='2' result='coloredBlur'/%3E%3CfeMerge%3E%3CfeMergeNode in='coloredBlur'/%3E%3CfeMergeNode in='SourceGraphic'/%3E%3C/feMerge%3E%3C/filter%3E%3C/defs%3E%3Cg filter='url(%23glow)'%3E%3Crect x='15' y='70' width='8' height='25' fill='%231b4fd0' rx='2'/%3E%3Crect x='30' y='50' width='8' height='45' fill='%233b82f6' rx='2'/%3E%3Crect x='45' y='35' width='8' height='60' fill='%231b4fd0' rx='2'/%3E%3Crect x='60' y='60' width='8' height='35' fill='%233b82f6' rx='2'/%3E%3Crect x='75' y='45' width='8' height='50' fill='%231b4fd0' rx='2'/%3E%3C/g%3E%3C/svg%3E") center/contain no-repeat`;
      }
    }};
  }
`;

const CardTitle = styled.h3`
  font-size: 1.25rem;
  color: #0b1220;
  margin-bottom: 0.75rem;
  font-weight: 600;
`;

const CardText = styled.p`
  font-size: 0.95rem;
  color: #334155;
  line-height: 1.6;
`;

const CTAButton = styled.button`
  background: linear-gradient(135deg, #1b4fd0 0%, #3b82f6 100%);
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-top: 2rem;
  box-shadow: 0 8px 24px rgba(27, 79, 208, 0.2);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 32px rgba(27, 79, 208, 0.3);
  }
`;

const SolutionsSection: React.FC = () => {
  return (
    <Section id="solutions">
      <Container>
        <Title>Our Solutions</Title>
        <Grid>
          <Card>
            <CardImage $type="ontology"></CardImage>
            <CardTitle>Data Integration & Ontologies for AI</CardTitle>
            <CardText>
              <p>Define ontologies, connect and unify siloed and fragmented data sources across documents, databases, LIMS, SCADA, equipment,
                spreadsheets and more.
              </p>
              <br />
              <p>We are the middleware that gives a holistic view of the data allowing for insights via AI, analytics 
                or otherwise that would previously been underivable, and the generation of novel revenue streams.</p>
            </CardText>
          </Card>
          <Card>
            <CardImage $type="datasets"></CardImage>
            <CardTitle>AI-Ready Datasets and Benchmarks</CardTitle>
            <CardText>
              <p>We harmonise open-source, experts, partner organisations and data we generate to create best in-class datasets across modalities 
              for AI model training and industry bencmarking.</p>
              <br />
              <p>Whether it's domain-specific reasoning, large scale experimental and simulated science, annotated robotics and image processing,
                 industrial, engineering CAD models and much more, we've got you covered.
              </p>
            </CardText>
          </Card>
          <Card>
            <CardImage $type="tools"></CardImage>
            <CardTitle>Data Infrastructure and Tooling</CardTitle>
            <CardText>
            <p>To service our partners, we build data infrastructure and tooling to help them get the most from their data. Much of this we will
               be offering completely self-service.</p>
              <br />
              <p> From domain-specific research and alignment agents, MCPs, evaluation tools, pre-trained models for labelling and annotation and more, we
                are decompsosing our business into standalone products.
              </p>            
            </CardText>
          </Card>
        </Grid>
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <CTAButton onClick={() => window.location.href = '#contact'}>
            Reach out to discuss your data needs
          </CTAButton>
        </div>
      </Container>
    </Section>
  );
};

export default SolutionsSection;


