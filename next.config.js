module.exports = {
  // This tells Netlify to skip Next.js processing
  target: 'serverless',
  // Disable Next.js features
  reactStrictMode: false,
  swcMinify: false,
  // Force static export
  output: 'export',
  // Disable image optimization
  images: {
    unoptimized: true
  }
} 