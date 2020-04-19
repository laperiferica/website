import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'gatsby-plugin-intl';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Section from '../components/Section';

import Who from '../components/home/Who';
import Team from '../components/contact/Team';

const WhoPage = ({ intl }) => (
  <Layout>
    <SEO title={intl.formatMessage({ id: 'Who we are' })} />
    <Section id={'info'} title={intl.formatMessage({ id: 'Who we are' })}>
      <Who />
    </Section>
    <Section id={'members'} title={intl.formatMessage({ id: 'Team' })}>
      <Team />
    </Section>
  </Layout>
);

WhoPage.propTypes = {
  intl: PropTypes.shape({
    formatMessage: PropTypes.func,
  }),
};

export default injectIntl(WhoPage);
