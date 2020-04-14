import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Team from '../components/contact/Team';
import Section from '../components/Section';
import Who from '../components/home/Who';

const WhoPage = () => (
  <Layout>
    <SEO title="Contact" />
    <Section id={'info'} title={'Quienes somos'}>
      <Who />
    </Section>
    <Section id={'members'} title={'equipo'}>
      <Team />
    </Section>
  </Layout>
);

export default WhoPage;

