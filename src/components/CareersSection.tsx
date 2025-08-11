import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 4rem 1rem;
  background: linear-gradient(180deg, #ffffff 0%, #f6f8ff 100%);
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
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 1.5rem;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const JobCard = styled.div`
  background: #ffffff;
  border: 1px solid rgba(15, 23, 42, 0.06);
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 8px 24px rgba(15, 23, 42, 0.04);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 32px rgba(15, 23, 42, 0.08);
  }
`;

const JobTitle = styled.h3`
  font-size: 1.25rem;
  color: #0b1220;
  margin-bottom: 0.5rem;
  font-weight: 600;
`;

const JobLocation = styled.p`
  font-size: 0.9rem;
  color: #64748b;
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const JobDescription = styled.p`
  font-size: 0.95rem;
  color: #334155;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const ApplyButton = styled.a`
  display: inline-flex;
  align-items: center;
  padding: 0.6rem 1rem;
  border-radius: 8px;
  background: #1b4fd0;
  color: #ffffff;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  transition: transform 0.08s ease, box-shadow 0.2s ease;
  box-shadow: 0 4px 12px rgba(27, 79, 208, 0.2);

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 6px 16px rgba(27, 79, 208, 0.25);
  }
`;

const CareersSection: React.FC = () => {
  return (
    <>
      <Delimiter />
      <Section id="careers">
        <Container>
          <Title>Join Our Team</Title>
          <Subtitle>
            Help us build the data infrastructure that powers the future of AI in physical industries
          </Subtitle>
          <Grid>
            <JobCard>
              <JobTitle>Founding Generalist</JobTitle>
              <JobLocation>📍 Remote / San Francisco</JobLocation>
              <JobDescription>
                Join us as a founding team member to help build and scale our data platform. You'll wear many hats - from product strategy to customer development and support to data ops and more.
              </JobDescription>
              <ApplyButton href="#apply">Apply Now</ApplyButton>
            </JobCard>
            <JobCard>
              <JobTitle>Founding Engineer</JobTitle>
              <JobLocation>📍 Remote / San Francisco</JobLocation>
              <JobDescription>
                Be a key technical architect of our data platform. You'll build core infrastructure, design data pipelines, build agents and help establish engineering best practices as we scale.
              </JobDescription>
              <ApplyButton href="#apply">Apply Now</ApplyButton>
            </JobCard>
          </Grid>
        </Container>
      </Section>
    </>
  );
};

export default CareersSection;
