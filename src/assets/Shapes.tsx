import React from 'react';

export const SetSquare: React.FC<{ color: string }> = ({ color }) => (
  <svg width="100" height="100" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Main triangle */}
    <path d="M10 35L30 10L30 35L10 35Z" stroke={color} strokeWidth="2" opacity="0.8" />
    {/* Inner triangle hole */}
    <path d="M17 28L23 17L23 28L17 28Z" stroke={color} strokeWidth="2" opacity="0.8" />
    {/* Degree marks */}
    <path d="M30 10L30 13M30 10L27 10" stroke={color} strokeWidth="2" opacity="0.8" />
  </svg>
);

export const Ruler: React.FC<{ color: string }> = ({ color }) => (
  <svg width="100" height="100" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Main ruler body */}
    <rect x="5" y="18" width="30" height="4" stroke={color} strokeWidth="2" opacity="0.8" />
    {/* Measurement marks */}
    <path d="M10 18V22M15 18V22M20 18V22M25 18V22M30 18V22" stroke={color} strokeWidth="2" opacity="0.8" />
  </svg>
);

export const Protractor: React.FC<{ color: string }> = ({ color }) => (
  <svg width="100" height="100" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Main protractor body (semicircle) */}
    <path d="M5 35A15 15 0 0 1 35 35" stroke={color} strokeWidth="2" opacity="0.8" />
    {/* Base line */}
    <path d="M5 35L35 35" stroke={color} strokeWidth="2" opacity="0.8" />
    {/* Centreline */}
    <path d="M20 20V35" stroke={color} strokeWidth="2" opacity="0.8" />
    {/* Degree marks on the semicircle */}
    <path d="M5 35L5 33M10 34L10 32M15 33L15 31M25 33L25 31M30 34L30 32M35 35L35 33" stroke={color} strokeWidth="2" opacity="0.8" />
    {/* Center hole */}
    <circle cx="20" cy="35" r="1.5" fill={color} opacity="0.8" />
  </svg>
); 