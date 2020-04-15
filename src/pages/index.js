import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Section from '../components/Section';

import Featured from '../components/home/Featured';
import LatestProjects from '../components/home/LatestProjects';
import Who from '../components/home/Who';
import Team from '../components/home/Team';

const IndexPage = () => (
  <Layout>
    <SEO title="Inicio" />
    <Section id={'featured'} title={'Destacamos...'}>
      <Featured />
    </Section>
    <Section id={'latest-projects'} title={'Últimos Proyectos'}>
      <LatestProjects />
    </Section>
    <Section id={'quienes-somos'} title={'Quienes somos'}>
      <Who />
      <Link to={'/who'}>Conócenos mejor...</Link>
    </Section>
    <Section id={'equipo'} title={'Equipo'}>
      <Team />
    </Section>
  </Layout>
);

export default IndexPage;
