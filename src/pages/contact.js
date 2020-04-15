import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Section from '../components/Section';

import Team from '../components/contact/Team';

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
    </Section>
    <Section id={'team-contact'} title={'Team Contact'}>
      <Team />
    </Section>
  </Layout>
);

export default ContactPage;
