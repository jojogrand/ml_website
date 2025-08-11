import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  width: 100%;
  max-width: 920px;
  margin: 0 auto;
  padding: 1rem;
`;

const Card = styled.div`
  background: #ffffff;
  border: 1px solid rgba(15, 23, 42, 0.08);
  border-radius: 16px;
  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.06);
  padding: 1.25rem;
`;

const Svg = styled.svg`
  width: 100%;
  height: auto;
  display: block;
`;

const Label = styled.text`
  font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell,
    'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 12px;
  fill: #0b1220;
  font-weight: 700;
`;

const Sublabel = styled.text`
  font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell,
    'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 11px;
  fill: #334155;
`;

const FlowDiagram: React.FC = () => {
  return (
    <Wrap>
      <Card>
        <Svg viewBox="0 0 960 280" preserveAspectRatio="xMidYMid meet" role="img" aria-label="Data flow diagram">
          {/* Sources */}
          <rect x="30" y="40" rx="12" ry="12" width="200" height="70" fill="#eef2ff" stroke="#c7d2fe" />
          <Label x="130" y="70" textAnchor="middle">Data Sources</Label>
          <Sublabel x="130" y="90" textAnchor="middle">Sensors • Logs • Files • APIs</Sublabel>

          {/* Ingestion */}
          <rect x="270" y="40" rx="12" ry="12" width="200" height="70" fill="#ecfeff" stroke="#a5f3fc" />
          <Label x="370" y="70" textAnchor="middle">Pipelines & Ingestion</Label>
          <Sublabel x="370" y="90" textAnchor="middle">Batch • Streaming • QA</Sublabel>

          {/* Semantic Layer */}
          <rect x="510" y="40" rx="12" ry="12" width="200" height="70" fill="#f0fdf4" stroke="#bbf7d0" />
          <Label x="610" y="70" textAnchor="middle">Semantic Layer</Label>
          <Sublabel x="610" y="90" textAnchor="middle">Ontologies • Mappings</Sublabel>

          {/* Products */}
          <rect x="750" y="40" rx="12" ry="12" width="180" height="70" fill="#fff7ed" stroke="#fed7aa" />
          <Label x="840" y="70" textAnchor="middle">Products & AI</Label>
          <Sublabel x="840" y="90" textAnchor="middle">Apps • Analytics • Training</Sublabel>

          {/* Arrows */}
          <defs>
            <marker id="arrow" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
              <path d="M0,0 L0,6 L9,3 z" fill="#1b4fd0" />
            </marker>
          </defs>
          <line x1="230" y1="75" x2="270" y2="75" stroke="#1b4fd0" strokeWidth="2" markerEnd="url(#arrow)" />
          <line x1="470" y1="75" x2="510" y2="75" stroke="#1b4fd0" strokeWidth="2" markerEnd="url(#arrow)" />
          <line x1="710" y1="75" x2="750" y2="75" stroke="#1b4fd0" strokeWidth="2" markerEnd="url(#arrow)" />

          {/* Lower line: Governance */}
          <rect x="270" y="150" rx="10" ry="10" width="520" height="56" fill="#f8fafc" stroke="#e2e8f0" />
          <Label x="530" y="180" textAnchor="middle">Governance • Lineage • Security</Label>
          <Sublabel x="530" y="198" textAnchor="middle">Access control • Auditing • Catalog</Sublabel>
        </Svg>
      </Card>
    </Wrap>
  );
};

export default FlowDiagram;


