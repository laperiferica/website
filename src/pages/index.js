import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Contact from '../components/home/Contact';
import Who from '../components/home/Who';
import Team from '../components/index/Team';
import Projects from '../components/index/Projects';
import Section from '../components/Section';

const IndexPage = () => (
  <Layout>
    <SEO title="Inicio" />
    <Section id={'proyectos'} title={'Proyectos'}>
      <Projects />
    </Section>
    <Section id={'quienes-somos'} title={'Quienes somos'}>
      <Who />
    </Section>
    <Section id={'equipo'} title={'Equipo'}>
      <Team />
    </Section>
    <Section id={'contacta'} title={'Contacta'}>
      <Contact />
    </Section>
  </Layout>
);

export default IndexPage;
