import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Section from '../components/Section';

import Who from '../components/home/Who';
import Team from '../components/contact/Team';

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

