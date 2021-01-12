import React from 'react';
import CarTint from '../components/car-tint';
import CarbonVSCeramic from '../components/carbon-vs-ceramic';
import Hero from '../components/hero';

import Layout from '../components/layout';
import SEO from '../components/seo';

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />
      <Hero />
      <CarTint />
    </Layout>
  );
}

export default IndexPage;
