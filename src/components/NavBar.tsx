import React from 'react';
import styled from 'styled-components';

const NavWrapper = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: saturate(180%) blur(10px);
  border-bottom: 1px solid rgba(15, 23, 42, 0.06);
  z-index: 10;
  min-height: 68px;
  overflow: visible;
`;

const NavInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: grid;
  grid-template-columns: 1.1fr 0.9fr; /* match Hero */
  gap: 2rem; /* match Hero */
  align-items: center;
  height: 68px;
  overflow: visible;
`;

const NavLinks = styled.nav`
  display: none;
  gap: 1.25rem;

  @media (min-width: 900px) {
    display: flex;
  }
`;

const NavLink = styled.a`
  color: #0b1220;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.95rem;
  opacity: 0.85;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 1;
  }
`;

const CTAButton = styled.a`
  display: inline-flex;
  align-items: center;
  padding: 0.6rem 1rem;
  border-radius: 8px;
  background: #1b4fd0;
  color: #ffffff;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.95rem;
  transition: transform 0.08s ease, box-shadow 0.2s ease;
  box-shadow: 0 6px 18px rgba(27, 79, 208, 0.25);

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 10px 24px rgba(27, 79, 208, 0.28);
  }
`;

const RightArea = styled.div`
  grid-column: 2;
  display: flex;
  align-items: center;
  justify-content: flex-end; /* place links right next to CTA */
  gap: 1.25rem; /* tighter space between links block and button */
`;

const CTAWrap = styled.div`
  display: flex;
  align-items: center;
`;

const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  overflow: visible; /* avoid unintended clipping */
`;

const BrandLogoWrap = styled.div`
  height: 68px; /* same as NavInner height */
  width: fit-content; /* expand to natural image width */
  max-width: none;
  padding-left: 0; /* show full width; we'll only clip vertically */
  overflow-x: visible; /* don't crop horizontally */
  overflow-y: hidden; /* only crop vertical whitespace */
  display: flex;
  align-items: center; /* center the logo vertically */
  margin-left: -35px; /* nudge logo left without affecting grid */
`;

const BrandLogoImg = styled.img`
  height: 80%; /* 20% smaller than wrapper/nav height */
  max-height: 54px; /* 68px * 0.8 */
  width: auto;
  display: block;
  transform: none;
`;

/* removed unused BrandText to satisfy linter */

const NavBar: React.FC = () => {
  return (
    <NavWrapper>
      <NavInner>
        <Brand>
          <BrandLogoWrap>
            <BrandLogoImg src="/Logo.png" alt="Logo" />
          </BrandLogoWrap>
        </Brand>

        <RightArea>
          <NavLinks>
            <NavLink href="#solutions">Solutions</NavLink>
            <NavLink href="#about">About Us</NavLink>
            <NavLink href="#careers">Careers</NavLink>
          </NavLinks>
          <CTAWrap>
            <CTAButton href="#contact">Get in touch</CTAButton>
          </CTAWrap>
        </RightArea>
      </NavInner>
    </NavWrapper>
  );
};

export default NavBar;


