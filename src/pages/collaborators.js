import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Section from '../components/Section';
import List from '../components/collaborators/List';

const LatestProjects = () => (
  <Layout>
    <SEO title="Colaboradores" />
    <Section id={'collaborators'} title={'Colaboradores'}>
      <List />
    </Section>
  </Layout>
);

export default LatestProjects;

