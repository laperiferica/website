import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'gatsby-plugin-intl';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Section from '../components/Section';

import Team from '../components/contact/Team';

import meta from '../../data/static/meta';

const ContactPage = ({ intl }) => (
  <Layout>
    <SEO title={intl.formatMessage({ id: 'Contact' })} />
    <Section id={'email'} title={'Email'}>
      <a
        href={`mailto:${meta.email}`}
        target={'_blank'}
        rel={'noopener noreferrer'}
      >
        {meta.email}
      </a>
    </Section>
    <Section
      id={'team-contact'}
      title={intl.formatMessage({ id: 'Team Contact' })}
    >
      <Team />
    </Section>
  </Layout>
);

ContactPage.propTypes = {
  intl: PropTypes.shape({
    formatMessage: PropTypes.func,
  }),
};

export default injectIntl(ContactPage);
