import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Team from '../components/contact/Team';
import Section from '../components/Section';
import Social from '../components/Social';

import meta from '../../data/static/meta';

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <Section id={'email'} title={'Email'}>
      <a
        href={`mailto:${meta.email}`}
        target={'_blank'}
        rel={'noopener noreferrer'}
      >
        {meta.email}
      </a>
      <Team />
    </Section>
    <Section id={'social'} title={'Redes sociales'}>
      <Social size={4} />
    </Section>
  </Layout>
);

export default ContactPage;
