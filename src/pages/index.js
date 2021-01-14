import React from 'react';
import CarTint from '../components/car-tint';
import CarbonVSCeramic from '../components/carbon-vs-ceramic';
import Hero from '../components/hero';
import Products from '../components/products';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Pricing from '../components/pricing';
import Reviews from '../components/reviews';
import Contact from '../components/contact';
import FAQ from '../components/faq';

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />
      <Hero />
      <CarTint />
      <Products />
      <Pricing />
      <Reviews />
      <Contact />
      <FAQ />
    </Layout>
  );
}

export default IndexPage;
