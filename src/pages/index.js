import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Contact from '../components/index/Contact';
import Who from '../components/index/Who';
import Team from '../components/index/Team';
import Projects from '../components/index/Projects';

const IndexPage = () => (
  <Layout>
    <SEO title="Inicio" />
    <Projects />
    <Who />
    <Team />
    <Contact />
  </Layout>
);

export default IndexPage;
